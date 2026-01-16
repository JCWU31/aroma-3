import React, { useState, useEffect } from 'react';
import { EssentialOil } from '../types';

interface OilFormProps {
  initialData?: EssentialOil;
  onSubmit: (data: Omit<EssentialOil, 'id'>) => Promise<void>;
  onCancel: () => void;
}

export const OilForm: React.FC<OilFormProps> = ({ initialData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '', latinName: '', hashtags: [] as string[], summary: '', chemicalFamily: '',
    molecules: [{ name: '', percentage: '' }],
    physiological: '', psychological: '', painManagement: '', safety: '',
    literature: { level: '', subjects: '', conclusion: '' },
    recipe: { concentration: '', oilDrops: '', carrierOil: '', usageMethod: '', frequency: '' }
  });
  const [loading, setLoading] = useState(false);
  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        latinName: initialData.latinName,
        summary: initialData.summary,
        chemicalFamily: initialData.chemicalFamily,
        physiological: initialData.physiological,
        psychological: initialData.psychological,
        painManagement: initialData.painManagement,
        safety: initialData.safety,
        hashtags: initialData.hashtags || [],
        molecules: initialData.molecules?.length ? initialData.molecules : [{ name: '', percentage: '' }],
        literature: initialData.literature || { level: '', subjects: '', conclusion: '' },
        recipe: initialData.recipe || { concentration: '', oilDrops: '', carrierOil: '', usageMethod: '', frequency: '' }
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => 
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleNested = (sec: string, field: string, val: string) => {
    // NOTE: This helper was in original code but not fully utilized in template; 
    // Manual expansion used below for type safety in TS
  };

  const handleMol = (idx: number, field: 'name' | 'percentage', val: string) => {
    const m = [...formData.molecules]; 
    m[idx] = { ...m[idx], [field]: val };
    setFormData(p => ({ ...p, molecules: m }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await onSubmit({ 
        ...formData, 
        molecules: formData.molecules.filter(m => m.name.trim()) 
      });
    } catch(e) { 
      console.error(e);
      alert('Error saving data'); 
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border-t-4 border-forest-600 animate-fade-in mb-12">
      <h2 className="text-3xl font-serif text-forest-900 mb-8 font-bold text-center">{initialData ? '編輯精油' : '新增精油'}</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input required name="name" value={formData.name} onChange={handleChange} placeholder="精油名稱" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
          <input required name="latinName" value={formData.latinName} onChange={handleChange} placeholder="拉丁學名" className="w-full px-4 py-2 border rounded-md italic focus:ring-2 focus:ring-forest-500 outline-none" />
        </div>
        <textarea required name="summary" value={formData.summary} onChange={handleChange} placeholder="簡介" rows={2} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
        
        <div className="space-y-2">
          <label className="font-bold text-forest-800">Hashtags</label>
          <div className="flex flex-wrap gap-2">
            {formData.hashtags.map(t => (
              <span key={t} onClick={() => setFormData(p => ({...p, hashtags: p.hashtags.filter(x => x!==t)}))} className="bg-forest-50 px-2 py-1 rounded cursor-pointer hover:bg-red-50 hover:text-red-500 transition-colors">#{t} &times;</span>
            ))}
          </div>
          <input value={tagInput} onChange={e => setTagInput(e.target.value)} onKeyDown={e => {
            if(e.key === 'Enter' && tagInput.trim()) {
              e.preventDefault();
              if(!formData.hashtags.includes(tagInput.trim())) setFormData(p => ({...p, hashtags: [...p.hashtags, tagInput.trim()]}));
              setTagInput('');
            }
          }} placeholder="輸入 Tag 按 Enter..." className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
        </div>

        <div className="bg-gray-50 p-4 rounded border border-gray-100">
          <h3 className="font-bold mb-2 text-forest-800">化學分子</h3>
          {formData.molecules.map((m, i) => (
            <div key={i} className="flex gap-2 mb-2">
              <input value={m.name} onChange={e => handleMol(i, 'name', e.target.value)} placeholder="名稱" className="flex-1 px-2 py-1 border rounded" />
              <input value={m.percentage} onChange={e => handleMol(i, 'percentage', e.target.value)} placeholder="%" className="w-20 px-2 py-1 border rounded" />
            </div>
          ))}
          <button type="button" onClick={() => setFormData(p => ({...p, molecules: [...p.molecules, {name:'', percentage:''}]}))} className="text-sm text-forest-600 font-bold hover:text-forest-800">+ 新增分子</button>
        </div>

        <div className="space-y-4">
            <input name="chemicalFamily" value={formData.chemicalFamily} onChange={handleChange} placeholder="化學家族 (如: 酯類)" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
            <textarea name="physiological" value={formData.physiological} onChange={handleChange} placeholder="生理療效" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
            <textarea name="psychological" value={formData.psychological} onChange={handleChange} placeholder="心理療效" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
            <textarea name="painManagement" value={formData.painManagement} onChange={handleChange} placeholder="疼痛管理" className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-forest-500 outline-none" />
            <textarea name="safety" value={formData.safety} onChange={handleChange} placeholder="安全注意事項" className="w-full px-4 py-2 border border-red-200 bg-red-50 rounded-md focus:ring-2 focus:ring-red-500 outline-none" />
        </div>

        {/* Extended Fields for Literature and Recipe */}
        <div className="bg-slate-50 p-4 rounded border border-slate-200">
            <h3 className="font-bold mb-4 text-slate-800">文獻與研究</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-2">
                <input value={formData.literature.subjects} onChange={e => setFormData(p => ({...p, literature: {...p.literature, subjects: e.target.value}}))} placeholder="研究對象" className="w-full px-3 py-2 border rounded" />
                <input value={formData.literature.level} onChange={e => setFormData(p => ({...p, literature: {...p.literature, level: e.target.value}}))} placeholder="證據等級" className="w-full px-3 py-2 border rounded" />
            </div>
            <textarea value={formData.literature.conclusion} onChange={e => setFormData(p => ({...p, literature: {...p.literature, conclusion: e.target.value}}))} placeholder="研究結論" rows={2} className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="bg-amber-50 p-4 rounded border border-amber-200">
            <h3 className="font-bold mb-4 text-amber-800">建議配方</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-2">
                <input value={formData.recipe.concentration} onChange={e => setFormData(p => ({...p, recipe: {...p.recipe, concentration: e.target.value}}))} placeholder="濃度" className="w-full px-3 py-2 border rounded" />
                <input value={formData.recipe.carrierOil} onChange={e => setFormData(p => ({...p, recipe: {...p.recipe, carrierOil: e.target.value}}))} placeholder="基底油" className="w-full px-3 py-2 border rounded" />
            </div>
            <input value={formData.recipe.oilDrops} onChange={e => setFormData(p => ({...p, recipe: {...p.recipe, oilDrops: e.target.value}}))} placeholder="精油滴數配方" className="w-full px-3 py-2 border rounded mb-2" />
            <input value={formData.recipe.usageMethod} onChange={e => setFormData(p => ({...p, recipe: {...p.recipe, usageMethod: e.target.value}}))} placeholder="使用方法" className="w-full px-3 py-2 border rounded mb-2" />
            <input value={formData.recipe.frequency} onChange={e => setFormData(p => ({...p, recipe: {...p.recipe, frequency: e.target.value}}))} placeholder="頻率" className="w-full px-3 py-2 border rounded" />
        </div>

        <div className="flex gap-4 pt-4">
          <button type="submit" disabled={loading} className="flex-1 bg-forest-900 text-white py-3 rounded-lg hover:bg-forest-800 shadow-lg transition-colors font-bold tracking-wide disabled:opacity-50">{loading ? '儲存中...' : '儲存精油'}</button>
          <button type="button" onClick={onCancel} className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-700 transition-colors">取消</button>
        </div>
      </form>
    </div>
  );
};