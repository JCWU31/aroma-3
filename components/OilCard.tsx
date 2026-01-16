import React from 'react';
import { EssentialOil } from '../types';

interface OilCardProps {
  oil: EssentialOil;
  onSelect: (oil: EssentialOil) => void;
}

export const OilCard: React.FC<OilCardProps> = ({ oil, onSelect }) => {
  const family = oil.chemicalFamily ? oil.chemicalFamily.split(/[,，、]/)[0].trim() : '';
  
  return (
    <div onClick={() => onSelect(oil)} className="bg-white rounded-lg shadow-sm hover:shadow-xl border-l-4 border-forest-500 overflow-hidden cursor-pointer group flex flex-col h-full p-5 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-serif text-xl text-forest-900 font-bold group-hover:text-forest-600 transition-colors">{oil.name}</h3>
        {family && <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2 py-1 rounded border border-amber-100">{family}</span>}
      </div>
      <p className="text-sm text-forest-600 italic mb-3 font-serif">{oil.latinName}</p>
      <div className="mb-4 bg-gray-50 rounded p-2 border border-gray-100 group-hover:border-forest-100 transition-colors">
        {oil.molecules.slice(0, 2).map((m, i) => (
          <div key={i} className="flex justify-between text-xs mb-1 last:mb-0">
            <span className="text-gray-700 font-medium">{m.name}</span>
            <span className="text-gray-500 font-mono">{m.percentage}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">{oil.summary}</p>
      <div className="flex flex-wrap gap-1 mt-auto pt-2 border-t border-gray-100">
        {oil.hashtags.slice(0, 3).map(t => (
          <span key={t} className="text-[10px] bg-forest-50 text-forest-700 px-2 py-1 rounded-full border border-forest-100">#{t}</span>
        ))}
        {oil.hashtags.length > 3 && <span className="text-[10px] text-gray-400 px-1">+{oil.hashtags.length - 3}</span>}
      </div>
    </div>
  );
};