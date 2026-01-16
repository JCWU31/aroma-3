import React from 'react';
import { EssentialOil } from '../types';
import { ArrowLeftIcon, EditIcon, BookIcon, TrashIcon } from './Icons';

interface DetailViewProps {
  oil: EssentialOil;
  onBack: () => void;
  onEdit: (oil: EssentialOil) => void;
  onDelete: (id: string) => void;
}

export const DetailView: React.FC<DetailViewProps> = ({ oil, onBack, onEdit, onDelete }) => {
  
  const handleDeleteClick = () => {
    onDelete(oil.id);
  };

  return (
    <div className="max-w-4xl mx-auto animate-fade-in pb-20">
      <div className="mb-6 flex items-center justify-between">
        <button onClick={onBack} className="flex items-center text-forest-700 font-bold hover:text-forest-900 transition-colors bg-white px-4 py-2 rounded-lg shadow-sm">
          <ArrowLeftIcon />
          <span className="ml-2">返回列表</span>
        </button>
        <div className="flex gap-3">
            <button onClick={() => onEdit(oil)} className="flex items-center bg-paper-200 hover:bg-paper-300 text-gray-800 px-4 py-2 rounded-lg text-sm font-bold transition-colors">
            <EditIcon />
            <span className="ml-2">編輯</span>
            </button>
            <button onClick={handleDeleteClick} className="flex items-center bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-red-200">
            <TrashIcon />
            <span className="ml-2">刪除</span>
            </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-forest-900 to-forest-800 text-white p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-20 -translate-y-20 blur-3xl"></div>
          <h1 className="text-4xl font-serif font-bold mb-2 relative z-10">{oil.name}</h1>
          <p className="text-forest-200 text-2xl italic font-serif relative z-10">{oil.latinName}</p>
          <div className="flex flex-wrap gap-2 mt-6 relative z-10">
            {oil.hashtags.map(t => <span key={t} className="bg-white/20 hover:bg-white/30 transition-colors px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">#{t}</span>)}
          </div>
        </div>
        
        <div className="p-8 space-y-10">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-forest-500 mb-2">精油簡介</h3>
            <p className="text-xl text-gray-800 leading-relaxed font-serif">{oil.summary}</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-serif font-bold text-forest-900 mb-6 border-b pb-2 border-forest-100">化學成分</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {oil.molecules.map((m, i) => (
                <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-forest-200 transition-colors">
                  <span className="font-bold text-gray-800">{m.name}</span>
                  <span className="text-forest-600 font-mono font-bold">{m.percentage}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-paper-50 p-6 rounded-xl border border-paper-100">
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-4 flex items-center">
                <span className="w-2 h-6 bg-amber-500 mr-3 rounded-full shadow-sm"></span>生理療效
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{oil.physiological}</p>
            </div>
            <div className="bg-paper-50 p-6 rounded-xl border border-paper-100">
              <h3 className="text-xl font-serif font-bold text-forest-900 mb-4 flex items-center">
                <span className="w-2 h-6 bg-purple-400 mr-3 rounded-full shadow-sm"></span>心理療效
              </h3>
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{oil.psychological}</p>
            </div>
          </div>

          {oil.painManagement && (
             <div className="bg-paper-50 p-6 rounded-xl border border-paper-100">
                <h3 className="text-xl font-serif font-bold text-forest-900 mb-4 flex items-center">
                  <span className="w-2 h-6 bg-red-400 mr-3 rounded-full shadow-sm"></span>疼痛管理
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{oil.painManagement}</p>
             </div>
          )}

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
            <h3 className="text-red-900 font-bold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                安全注意
            </h3>
            <p className="text-red-800 leading-relaxed">{oil.safety}</p>
          </div>
          
          {/* Literature & Recipe */}
          {(oil.literature?.conclusion || oil.recipe?.usageMethod) && (
            <div className="bg-slate-50 rounded-xl border border-slate-200 mt-8 overflow-hidden">
               <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex items-center text-slate-700">
                 <BookIcon />
                 <h3 className="ml-2 font-bold text-lg">文獻與配方</h3>
               </div>
               <div className="p-6 space-y-8">
                  {oil.literature?.conclusion && (
                    <div>
                      <h4 className="font-bold text-slate-800 mb-3 border-l-4 border-slate-400 pl-3">科學實證</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-white p-4 rounded-lg border shadow-sm">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">對象</p>
                            <p className="font-medium">{oil.literature.subjects}</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border shadow-sm">
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">等級</p>
                            <p className="font-medium text-forest-700">{oil.literature.level}</p>
                        </div>
                      </div>
                      <div className="bg-white p-5 rounded-lg border shadow-sm">
                          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">結論</p>
                          <p className="leading-relaxed text-gray-800">{oil.literature.conclusion}</p>
                      </div>
                    </div>
                  )}
                  
                  {oil.literature?.conclusion && oil.recipe?.usageMethod && <hr className="border-slate-200"/>}

                  {oil.recipe?.usageMethod && (
                     <div>
                        <h4 className="font-bold text-amber-900 mb-3 border-l-4 border-amber-500 pl-3">建議配方</h4>
                        <div className="bg-white rounded-lg border border-amber-100 shadow-sm overflow-hidden">
                           <div className="bg-amber-50/50 p-4 grid md:grid-cols-2 gap-4 border-b border-amber-100">
                               <p className="text-sm"><strong className="text-amber-800">濃度:</strong> {oil.recipe.concentration}</p>
                               <p className="text-sm"><strong className="text-amber-800">基底:</strong> {oil.recipe.carrierOil}</p>
                           </div>
                           <div className="p-5">
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">精油配方</p>
                                    <p className="text-lg font-serif font-bold text-gray-800">{oil.recipe.oilDrops}</p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">用法</p>
                                        <p className="text-gray-700">{oil.recipe.usageMethod}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">頻率</p>
                                        <p className="text-gray-700">{oil.recipe.frequency}</p>
                                    </div>
                                </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};