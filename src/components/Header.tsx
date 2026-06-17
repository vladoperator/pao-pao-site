import React from 'react';
import { useI18n, useCart } from '../Store';
import { ShoppingBag, Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';

export function Header() {
  const { language, setLanguage, t } = useI18n();
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: 'ro', label: 'RO' },
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center md:flex-col items-start justify-center gap-0">
            <span className="font-sans font-black text-2xl tracking-tighter uppercase leading-none text-white">
              pào pào
            </span>
            <span className="hidden md:block font-sans text-[10px] font-medium tracking-[0.3em] opacity-60 uppercase text-white mt-1">
              Taiwan Bubble Tea Cult
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans text-xs font-bold uppercase tracking-widest text-white">
            <a href="#milky" className="opacity-60 hover:opacity-100 transition-opacity">Milky Series</a>
            <a href="#coffee" className="opacity-60 hover:opacity-100 transition-opacity">Coffee Series</a>
            <a href="#fruit" className="opacity-60 hover:opacity-100 transition-opacity">Fruit Tea</a>
            <a href="#matcha" className="opacity-60 hover:opacity-100 transition-opacity">Matcha Series</a>
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-6">
            
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center bg-white/10 p-1 rounded-full border border-white/5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-3 py-1 text-[10px] font-bold rounded-full uppercase transition-all duration-300 ${
                    language === lang.code 
                      ? 'bg-white/20 text-white' 
                      : 'opacity-40 text-white hover:opacity-80'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            
            {/* Mobile Lang Dropdown */}
            <div className="sm:hidden flex items-center justify-center p-2 bg-white/10 rounded-full border border-white/5 relative group">
                <Globe className="w-5 h-5 opacity-80" />
                <select 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as Language)}
                >
                    <option value="ro">RO</option>
                    <option value="ru">RU</option>
                    <option value="en">EN</option>
                </select>
                <div className="ml-1 text-[10px] font-bold text-white uppercase">
                    {language}
                </div>
            </div>

            {/* Cart Button */}
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative group transition-opacity hover:opacity-80"
            >
              <ShoppingBag className="w-6 h-6 opacity-80" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pink-500 border-2 border-[#0a051a] text-[10px] font-bold text-white shadow-xl shadow-pink-500/20">
                  {cartCount}
                </span>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
}
