import React from 'react';
import { useI18n, useCart } from '../Store';
import { ShoppingBag, Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  currentView: 'home' | 'menu';
  onNavigate: (view: 'home' | 'menu') => void;
}

export function Header({ currentView, onNavigate }: HeaderProps) {
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
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative w-14 h-14 flex flex-col items-center justify-center font-display font-black text-white text-2xl leading-[0.8] tracking-tighter lowercase group-hover:scale-105 transition-transform">
              <span className="relative z-10 w-full text-center pr-2">pào</span>
              <span className="relative z-10 w-full text-center pl-2">pào</span>
              
              {/* Abstract decorative swooshes and dots from the logo */}
              <svg className="absolute inset-x-[-20%] inset-y-[-10%] w-[140%] h-[120%] text-white pointer-events-none stroke-white fill-white" viewBox="0 0 100 100">
                {/* Horizontal dash mid-left */}
                <path d="M 20 40 L 28 40" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Top left arc/dash */}
                <path d="M 38 20 Q 42 16 46 16" strokeWidth="3.5" strokeLinecap="round" fill="none" />
                {/* Top center thick angled line */}
                <path d="M 52 22 L 56 30" strokeWidth="5" strokeLinecap="round" fill="none" />
                {/* Mid left curved dash */}
                <path d="M 18 52 Q 22 55 18 60" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Bottom left curve */}
                <path d="M 38 82 Q 42 78 48 80" strokeWidth="3" strokeLinecap="round" fill="none" />
                {/* Center right dash */}
                <path d="M 64 54 L 74 54" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Right mid dot */}
                <circle cx="84" cy="48" r="2.5" />
                {/* Bottom right curve */}
                <path d="M 75 75 Q 72 68 76 60" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                {/* Bottom mid dot */}
                <circle cx="66" cy="82" r="2.5" />
              </svg>
            </div>
            
            <div className="hidden md:flex flex-col items-start justify-center mt-1">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] leading-[1.2] text-white uppercase">
                Taiwan
              </span>
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] leading-[1.2] text-white/80 uppercase">
                Bubble Tea Cult
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans text-xs font-bold uppercase tracking-widest text-white">
            {currentView === 'home' ? (
              <button 
                onClick={() => onNavigate('menu')}
                className="opacity-60 hover:opacity-100 transition-opacity"
              >
                Full Menu
              </button>
            ) : (
              <>
                <a href="#milky" className="opacity-60 hover:opacity-100 transition-opacity">Milky Series</a>
                <a href="#coffee" className="opacity-60 hover:opacity-100 transition-opacity">Coffee Series</a>
                <a href="#fruit" className="opacity-60 hover:opacity-100 transition-opacity">Fruit Tea</a>
                <a href="#matcha" className="opacity-60 hover:opacity-100 transition-opacity">Matcha Series</a>
              </>
            )}
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
