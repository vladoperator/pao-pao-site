import React, { useState } from 'react';
import { useI18n, useCart } from '../Store';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { CATEGORIES, PRODUCTS } from '../data';
import { Product } from '../types';

export function MenuContent() {
  const { language } = useI18n();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
      {CATEGORIES.map((category) => {
        const categoryProducts = PRODUCTS.filter((p) => p.categoryId === category.id);
        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.id} id={category.id} className="scroll-mt-32">
            <div className="mb-8 border-b border-white/10 pb-4">
              <h2 className="font-sans text-sm font-black uppercase tracking-[0.2em] text-white">
                {category.name[language]}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onClick={handleProductClick} 
                />
              ))}
            </div>
          </section>
        );
      })}

      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </main>
  );
}
