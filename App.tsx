import React, { useState, useEffect, useMemo } from 'react';
import { getOils, addOil, updateOil, deleteOil } from './services/firebaseService';
import { OilCard } from './components/OilCard';
import { DetailView } from './components/DetailView';
import { OilForm } from './components/OilForm';
import { SearchIcon, PlusIcon } from './components/Icons';
import { EssentialOil, ViewState } from './types';

const App: React.FC = () => {
  const [oils, setOils] = useState<EssentialOil[]>([]);
  const [view, setView] = useState<ViewState>(ViewState.LIST);
  const [selected, setSelected] = useState<EssentialOil | null>(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOils().then(data => { 
      setOils(data); 
      setLoading(false); 
    });
  }, []);

  const filtered = useMemo(() => {
    if (!query) return oils;
    const q = query.toLowerCase();
    return oils.filter(o => 
      o.name.includes(q) || 
      o.latinName.toLowerCase().includes(q) || 
      o.hashtags.some(t => t.includes(q)) || 
      o.molecules.some(m => m.name.includes(q))
    );
  }, [oils, query]);

  const handleSave = async (data: Omit<EssentialOil, 'id'>) => {
    if (view === ViewState.EDIT && selected) {
      await updateOil(selected.id, data);
      const updatedOil = { ...data, id: selected.id, createdAt: selected.createdAt } as EssentialOil;
      setOils(p => p.map(o => o.id === selected.id ? updatedOil : o));
      setSelected(updatedOil);
      setView(ViewState.DETAIL);
    } else {
      const newOil = await addOil(data);
      setOils(p => [...p, newOil]);
      setView(ViewState.LIST);
    }
  };

  const handleDelete = async (id: string) => {
    // A simple confirmation dialog. For a more "World Class" UI, a modal component would be better,
    // but window.confirm is robust for this specific prompt scope.
    if (window.confirm('您確定要刪除這隻精油嗎？此操作無法復原。')) {
      await deleteOil(id);
      setOils(prev => prev.filter(o => o.id !== id));
      setSelected(null);
      setView(ViewState.LIST);
    }
  };

  return (
    <div className="min-h-screen bg-paper-50 font-sans text-gray-800">
      <nav className="bg-forest-900 text-white sticky top-0 z-50 shadow-lg px-4 py-4 transition-all">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => {setView(ViewState.LIST); setSelected(null);}}>
            <div className="w-8 h-8 bg-amber-500 rounded-tr-xl rounded-bl-xl group-hover:bg-amber-400 transition-colors"></div>
            <span className="text-2xl font-serif font-bold tracking-tight">香氛精油管理</span>
          </div>
          <div className="relative flex-1 max-w-lg w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-forest-300">
              <SearchIcon />
            </div>
            <input 
              value={query} 
              onChange={e => setQuery(e.target.value)} 
              placeholder="搜尋精油名稱、學名、成分..." 
              className="w-full pl-10 pr-4 py-2 rounded-full bg-forest-800 border border-transparent text-white placeholder-forest-300 focus:bg-forest-700 focus:ring-2 focus:ring-amber-500 focus:outline-none transition-all" 
            />
          </div>
          <button 
            onClick={() => {setSelected(null); setView(ViewState.CREATE);}} 
            className="hidden md:flex items-center bg-amber-600 px-5 py-2 rounded-full font-medium shadow-md hover:bg-amber-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <PlusIcon />
            <span className="ml-1">新增精油</span>
          </button>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 pt-8 pb-12">
        {loading ? (
          <div className="text-center py-20 animate-pulse">
             <div className="inline-block w-12 h-12 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mb-4"></div>
             <p className="text-forest-800 font-medium">載入精油資料庫...</p>
          </div>
        ) : (
          <>
            {view === ViewState.LIST && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
                {filtered.map(o => (
                  <OilCard key={o.id} oil={o} onSelect={(oil) => { setSelected(oil); setView(ViewState.DETAIL); window.scrollTo(0,0); }} />
                ))}
                {filtered.length === 0 && (
                  <div className="col-span-full text-center py-20 text-gray-500">
                    <p className="text-xl mb-2">沒有找到相關精油</p>
                    <button onClick={() => setQuery('')} className="text-forest-600 font-bold hover:underline">清除搜尋</button>
                  </div>
                )}
              </div>
            )}
            
            {view === ViewState.DETAIL && selected && (
              <DetailView 
                oil={selected} 
                onBack={() => setView(ViewState.LIST)} 
                onEdit={(oil) => { setSelected(oil); setView(ViewState.EDIT); }} 
                onDelete={handleDelete}
              />
            )}
            
            {(view === ViewState.EDIT || view === ViewState.CREATE) && (
              <OilForm 
                initialData={view === ViewState.EDIT ? (selected || undefined) : undefined} 
                onSubmit={handleSave} 
                onCancel={() => view === ViewState.EDIT ? setView(ViewState.DETAIL) : setView(ViewState.LIST)} 
              />
            )}
          </>
        )}
      </main>

      {view === ViewState.LIST && (
        <button 
          onClick={() => {setSelected(null); setView(ViewState.CREATE);}} 
          className="md:hidden fixed bottom-6 right-6 w-14 h-14 bg-amber-600 text-white rounded-full shadow-xl flex items-center justify-center z-50 hover:bg-amber-700 active:scale-95 transition-all"
        >
          <PlusIcon />
        </button>
      )}
    </div>
  );
};

export default App;