import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, doc, Firestore } from 'firebase/firestore';
import { EssentialOil } from '../types';
import { INITIAL_OILS } from '../constants';

const firebaseConfig = {
  apiKey: "AIzaSyAU0V8emIBE1kAtYnQ_7V8FDIhMGpxPCDk",
  authDomain: "naha-aroma.firebaseapp.com",
  projectId: "naha-aroma",
  storageBucket: "naha-aroma.firebasestorage.app",
  messagingSenderId: "89052525408",
  appId: "1:89052525408:web:b6c8d777baa9491624e405",
  measurementId: "G-WZFHJ095R7"
};

let db: Firestore | null = null;
let isOfflineMode = true;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  try {
    const app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    isOfflineMode = false;
  } catch (error) {
    console.warn("Firebase fallback:", error);
  }
}

const LOCAL_STORAGE_KEY = 'aroma_manager_oils_v1';

const getLocalOils = (): EssentialOil[] => {
  const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!stored) {
    const seeded = INITIAL_OILS.map(oil => ({ ...oil, id: crypto.randomUUID(), createdAt: Date.now() }));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seeded));
    return seeded as EssentialOil[];
  }
  return JSON.parse(stored);
};

const saveLocalOils = (oils: EssentialOil[]) => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(oils));

export const getOils = async (): Promise<EssentialOil[]> => {
  if (isOfflineMode || !db) {
    await new Promise(r => setTimeout(r, 500));
    return getLocalOils();
  }
  try {
    const querySnapshot = await getDocs(collection(db, "oils"));
    const oils: EssentialOil[] = [];
    querySnapshot.forEach((doc) => oils.push({ id: doc.id, ...doc.data() } as EssentialOil));
    
    if (oils.length === 0) {
      // Seed if empty
      const promises = INITIAL_OILS.map(oil => addDoc(collection(db!, "oils"), { ...oil, createdAt: Date.now() }));
      await Promise.all(promises);
      // Recursively fetch again to get IDs
      return getOils();
    }
    return oils;
  } catch (error) {
    console.error("Firestore Error:", error);
    // Fallback if network fails even if initialized
    return getLocalOils();
  }
};

export const addOil = async (oil: Omit<EssentialOil, 'id'>): Promise<EssentialOil> => {
  if (isOfflineMode || !db) {
    await new Promise(r => setTimeout(r, 500));
    const newOil = { ...oil, id: crypto.randomUUID(), createdAt: Date.now() };
    saveLocalOils([...getLocalOils(), newOil]);
    return newOil;
  }
  try {
    const docRef = await addDoc(collection(db, "oils"), { ...oil, createdAt: Date.now() });
    return { id: docRef.id, ...oil } as EssentialOil;
  } catch (e) {
    console.error(e);
    // Fallback
    const newOil = { ...oil, id: crypto.randomUUID(), createdAt: Date.now() };
    saveLocalOils([...getLocalOils(), newOil]);
    return newOil;
  }
};

export const updateOil = async (id: string, updates: Partial<EssentialOil>): Promise<void> => {
  if (isOfflineMode || !db) {
    await new Promise(r => setTimeout(r, 500));
    const current = getLocalOils();
    const updated = current.map(o => o.id === id ? { ...o, ...updates } : o);
    saveLocalOils(updated);
    return;
  }
  try {
    await updateDoc(doc(db, "oils", id), updates);
  } catch (e) { 
    console.error(e); 
    // Fallback sync
    const current = getLocalOils();
    const updated = current.map(o => o.id === id ? { ...o, ...updates } : o);
    saveLocalOils(updated);
  }
};

export const deleteOil = async (id: string): Promise<void> => {
  if (isOfflineMode || !db) {
    await new Promise(r => setTimeout(r, 500));
    const current = getLocalOils();
    const updated = current.filter(o => o.id !== id);
    saveLocalOils(updated);
    return;
  }
  try {
    await deleteDoc(doc(db, "oils", id));
  } catch (e) {
    console.error("Delete Error", e);
    // Fallback sync
    const current = getLocalOils();
    const updated = current.filter(o => o.id !== id);
    saveLocalOils(updated);
  }
};