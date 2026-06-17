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
      className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 flex flex-col justify-between transition-all hover:bg-white/10 cursor-pointer overflow-hidden min-h-[220px]"
    >
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-tighter z-20">
        {product.basePrice.M} {t('lei')}
      </div>

      {/* Background Graphic or Image */}
      {product.imageUrl ? (
        <>
          <div className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" style={{ backgroundImage: `url(${product.imageUrl})` }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        </>
      ) : (
        <>
          <div className={`absolute -right-10 -bottom-10 w-48 h-48 bg-gradient-to-br ${product.imageColor} rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
        </>
      )}

      <div className="mt-auto pt-16 z-10">
        <h3 className="font-sans text-xl font-bold text-white mb-1 drop-shadow-md">
          {product.name[language]}
        </h3>
        {product.description && (
          <p className="text-xs text-white/50 leading-relaxed font-sans line-clamp-2 drop-shadow-sm">
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
