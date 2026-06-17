import React from 'react';
import { Product } from '../types';
import { useI18n } from '../Store';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  key?: React.Key;
  product: Product;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const { language, t } = useI18n();

  return (
    <div 
      onClick={() => onClick(product)}
      className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all hover:bg-white/10 cursor-pointer"
    >
      <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
        {product.basePrice.M} {t('lei')}
      </div>

      <div className="mt-8 z-10">
        <h3 className="font-sans text-xl font-bold text-white mb-1">
          {product.name[language]}
        </h3>
        {product.description && (
          <p className="text-xs text-white/40 leading-relaxed font-sans line-clamp-2">
            {product.description[language]}
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-between items-end relative z-10">
        <div className="flex gap-1 opacity-50">
           <span className="w-2 h-2 rounded-full bg-pink-500"></span>
           <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        </div>
        
        <button className="bg-white text-black text-[10px] font-black uppercase px-4 py-2 rounded-xl group-hover:bg-white/90">
          Select
        </button>
      </div>
    </div>
  );
}
