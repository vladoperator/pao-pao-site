/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { I18nProvider, CartProvider, useI18n } from './Store';
import { Header } from './components/Header';
import { CartDrawer } from './components/CartDrawer';
import { ProductCard } from './components/ProductCard';
import { ProductModal } from './components/ProductModal';
import { CATEGORIES, PRODUCTS } from './data';
import { Product } from './types';

function MenuContent() {
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

export default function App() {
  return (
    <I18nProvider>
      <CartProvider>
        <div className="min-h-screen relative selection:bg-pink-500/30 selection:text-pink-200">
          {/* Abstract Liquid Background */}
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[140px]"></div>
            <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px]"></div>
          </div>

          <div className="relative z-10">
            <Header />
            <CartDrawer />
            <MenuContent />
            
            <footer className="py-12 text-center text-white/50 font-sans text-xs uppercase tracking-widest">
              <div className="flex justify-center items-center gap-4 mb-2 font-bold opacity-60">
                <span>Chișinău, Moldova</span>
                <span>•</span>
                <span>Join the Cult</span>
              </div>
              <p className="opacity-40">&copy; {new Date().getFullYear()} Pao Pao. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </CartProvider>
    </I18nProvider>
  );
}
