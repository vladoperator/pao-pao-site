import React from 'react';
import { useCart, useI18n } from '../Store';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, ShoppingBag } from 'lucide-react';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, items, removeFromCart, cartTotal } = useCart();
  const { t, language } = useI18n();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-white/5 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-8 border-b border-white/10">
              <h2 className="font-sans text-sm font-black uppercase tracking-[0.2em] flex items-center gap-2 text-white">
                <ShoppingBag className="text-pink-400 w-5 h-5" />
                {t('cart')}
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-white/50 space-y-4">
                  <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                    <ShoppingBag className="w-10 h-10 opacity-50" />
                  </div>
                  <p className="font-bold text-sm tracking-widest uppercase">{t('emptyCart')}</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    key={item.id} 
                    className="flex flex-col p-4 bg-white/5 border border-white/10 rounded-2xl relative group backdrop-blur-md"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                         <div className="text-[9px] font-bold text-pink-400 uppercase tracking-widest mb-1">Customized</div>
                         <h3 className="font-bold text-white pr-8 text-lg">{item.product.name[language]}</h3>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-4 right-4 text-white/40 hover:text-pink-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="text-xs text-white/40 space-y-1 mb-4">
                      <p className="uppercase tracking-wide font-bold">Size: <span className="text-white">{item.size}</span></p>
                      <p className="uppercase tracking-wide font-bold">Ice: <span className="text-white">{t(item.iceLevel.toLowerCase().replace(' ', '')) || item.iceLevel}</span></p>
                      <p className="uppercase tracking-wide font-bold">Sugar: <span className="text-white">{item.sugarLevel}</span></p>
                      {item.toppings.length > 0 && (
                        <p className="uppercase tracking-wide font-bold">Toppings: <span className="text-pink-400">{item.toppings.map(t => t.name[language]).join(', ')}</span></p>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/10">
                      <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Qty: {item.quantity}</span>
                      <span className="text-sm font-bold text-white">{item.totalPrice} {t('lei')}</span>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 bg-black/40 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">{t('total')} ({items.length} Items)</span>
                  <span className="text-xl font-black text-white">
                    {cartTotal} {t('lei')}
                  </span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-pink-500/20 active:scale-95 transition-transform text-white">
                  {t('checkout')}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
