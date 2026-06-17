import React, { useState, useEffect } from 'react';
import { Product, Size, IceLevel, SugarLevel, Topping } from '../types';
import { TOPPINGS } from '../data';
import { useI18n, useCart } from '../Store';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { language, t } = useI18n();
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [selectedIce, setSelectedIce] = useState<IceLevel>('Regular Ice');
  const [selectedSugar, setSelectedSugar] = useState<SugarLevel>('100%');
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);

  // Reset state when product changes
  useEffect(() => {
    if (isOpen) {
      setSelectedSize('M');
      setSelectedIce('Regular Ice');
      setSelectedSugar('100%');
      setSelectedToppings([]);
    }
  }, [isOpen, product]);

  if (!product) return null;

  const calculateTotal = () => {
    let price = product.basePrice[selectedSize];
    selectedToppings.forEach((t) => { price += t.price; });
    return price;
  };

  const currentTotal = calculateTotal();

  const handleAddToCart = () => {
    addToCart({
      id: `${product.id}-${Date.now()}`,
      product,
      size: selectedSize,
      iceLevel: selectedIce,
      sugarLevel: selectedSugar,
      toppings: selectedToppings,
      quantity: 1,
      totalPrice: currentTotal,
    });
    onClose();
  };

  const toggleTopping = (topping: Topping) => {
    if (selectedToppings.find((t) => t.id === topping.id)) {
      setSelectedToppings(selectedToppings.filter((t) => t.id !== topping.id));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const selectButtonClass = (isActive: boolean) => 
    `flex items-center justify-center px-4 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all duration-300 border ${
      isActive 
        ? 'bg-white/20 border-pink-500 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.2)]' 
        : 'bg-white/10 border-white/10 text-white/50 hover:bg-white/15'
    }`;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 z-50 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-xl sm:rounded-3xl bg-[#0a051a]/80 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header / Graphic */}
            <div className="relative h-40 sm:h-48 overflow-hidden bg-white/5 border-b border-white/10 flex items-end p-6">
              <div className={`absolute inset-0 bg-gradient-to-br ${product.imageColor} opacity-20`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a051a] via-[#0a051a]/50 to-transparent" />
              
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur border border-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
                aria-label={t('close')}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative z-10 w-full">
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                  {product.name[language]}
                </h2>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 space-y-8 scrollbar-hide">
              
              {/* Size */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{t('size')}</h4>
                <div className="grid grid-cols-2 gap-3">
                  <button onClick={() => setSelectedSize('M')} className={selectButtonClass(selectedSize === 'M')}>
                    <span className="text-sm font-bold mr-2">M</span>
                    <span className="text-[10px] opacity-70">(500ml)</span>
                  </button>
                  <button onClick={() => setSelectedSize('L')} className={selectButtonClass(selectedSize === 'L')}>
                    <span className="text-sm font-bold mr-2">L</span>
                    <span className="text-[10px] opacity-70">(700ml)</span>
                  </button>
                </div>
              </div>

              {/* Ice Level */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{t('iceLevel')}</h4>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {(['No Ice', 'Less Ice', 'Regular Ice'] as IceLevel[]).map((level) => (
                    <button 
                      key={level} 
                      onClick={() => setSelectedIce(level)} 
                      className={selectButtonClass(selectedIce === level)}
                    >
                      <span className="text-center leading-tight">{t(level.toLowerCase().replace(' ', '')) || level}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sugar Level */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{t('sugarLevel')}</h4>
                <div className="flex flex-wrap gap-2">
                  {(['0%', '30%', '50%', '70%', '100%'] as SugarLevel[]).map((level) => (
                    <button 
                      key={level} 
                      onClick={() => setSelectedSugar(level)} 
                      className={selectButtonClass(selectedSugar === level) + " flex-1 min-w-[3rem] py-2"}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extra Toppings */}
              <div className="space-y-3 pb-8">
                <h4 className="text-[10px] font-bold text-white/50 uppercase tracking-widest flex items-center justify-between">
                  {t('extraToppings')}
                  <span className="text-[10px] normal-case opacity-50">{t('optional')}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TOPPINGS.map((topping) => {
                    const isSelected = !!selectedToppings.find((t) => t.id === topping.id);
                    return (
                      <button
                        key={topping.id}
                        onClick={() => toggleTopping(topping)}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all duration-300 text-left ${
                          isSelected 
                            ? 'bg-white/10 border-pink-500/50 text-white shadow-[0_0_15px_rgba(236,72,153,0.1)]' 
                            : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex flex-col">
                          <span className="font-bold text-xs">{topping.name[language]}</span>
                          <span className="text-[10px] text-pink-400 font-bold uppercase">+{topping.price} {t('lei')}</span>
                        </div>
                        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${isSelected ? 'bg-pink-500 border-pink-500 text-white' : 'border-white/20 text-transparent'}`}>
                           <Check className="w-3 h-3" strokeWidth={4} />
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Footer / CTA */}
            <div className="p-6 bg-black/40 border-t border-white/10 border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
              <button 
                onClick={handleAddToCart}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-pink-500/20 active:scale-95 transition-transform text-white flex justify-between px-6 items-center"
              >
                <span>{t('addToCart')}</span>
                <span className="text-sm">{currentTotal} {t('lei')}</span>
              </button>
            </div>
            
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
