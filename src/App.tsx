/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { I18nProvider, CartProvider, useI18n } from './Store';
import { Header } from './components/Header';
import { CartDrawer } from './components/CartDrawer';
import { HomeContent } from './components/HomeContent';
import { MenuContent } from './components/MenuContent';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'menu'>('home');

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
            <Header currentView={currentView} onNavigate={setCurrentView} />
            <CartDrawer />
            
            {currentView === 'home' ? (
              <HomeContent onOrderNow={() => setCurrentView('menu')} />
            ) : (
              <MenuContent />
            )}
            
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
