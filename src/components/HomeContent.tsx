import React from 'react';
import { useI18n } from '../Store';
import { ArrowRight, Sparkles, Droplets } from 'lucide-react';

interface HomeContentProps {
  onOrderNow: () => void;
}

export function HomeContent({ onOrderNow }: HomeContentProps) {
  const { t, language } = useI18n();

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400 mb-4 shadow-[0_0_20px_rgba(236,72,153,0.15)]">
               <Sparkles className="w-3 h-3" />
               <span>Premium Taiwanese Tea</span>
            </div>
            
            <h1 className="font-sans text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              DRINK <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400 drop-shadow-xl">
                THE AESTHETIC.
              </span>
            </h1>
            
            <p className="text-sm sm:text-base text-white/50 font-sans max-w-xl mx-auto md:mx-0 leading-relaxed tracking-wide">
              {language === 'en' && 'Experience the true Taiwan bubble tea culture. Hand-crafted with premium leaves, fresh milk, and authentic chewy tapioca pearls. Join the cult today.'}
              {language === 'ro' && 'Experimentează adevărata cultură bubble tea din Taiwan. Preparat manual cu frunze premium, lapte proaspăt și perle autentice de tapioca. Alătură-te cultului astăzi.'}
              {language === 'ru' && 'Почувствуйте настоящую культуру бабл-ти из Тайваня. Создано вручную из премиальных листьев, свежего молока и аутентичных жемчужин тапиоки. Присоединяйтесь к культу сегодня.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
              <button 
                onClick={onOrderNow}
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span>Order Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={onOrderNow}
                className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-white/10 text-white px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] transition-colors"
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Abstract Hero Visual (Glassmorphic Cup representation) */}
          <div className="flex-1 w-full max-w-sm lg:max-w-md relative flex items-center justify-center">
            <div className="relative w-full aspect-[3/4] max-w-[320px] rounded-[3rem] bg-gradient-to-b from-white/10 to-white/0 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col items-center justify-end p-8 overflow-hidden">
               {/* Liquid inside */}
               <div className="absolute bottom-0 inset-x-0 h-3/5 bg-gradient-to-t from-[#0a051a]/80 to-transparent z-[-1]"></div>
               <div className="absolute bottom-[-10%] inset-x-[-20%] h-[70%] bg-gradient-to-br from-pink-500/40 to-purple-600/40 blur-2xl z-[-1] animate-pulse"></div>
               
               {/* Floating Boba representation */}
               <div className="absolute bottom-12 left-12 w-8 h-8 rounded-full bg-[#0a051a]/80 backdrop-blur-sm border border-white/10"></div>
               <div className="absolute bottom-20 right-16 w-10 h-10 rounded-full bg-[#0a051a]/60 backdrop-blur-sm border border-white/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]"></div>
               <div className="absolute bottom-10 right-28 w-6 h-6 rounded-full bg-[#0a051a]/90 backdrop-blur-sm border border-white/10"></div>
               
               {/* Straw */}
               <div className="absolute top-[-20px] right-20 w-4 h-[120%] bg-gradient-to-b from-pink-300/60 to-white/10 rounded-full origin-bottom -rotate-12 blur-[1px]"></div>

               {/* Center text on cup */}
               <div className="z-10 text-center mb-6">
                 <div className="w-16 h-16 mx-auto bg-white/10 backdrop-blur-xl rounded-full border border-white/20 flex items-center justify-center mb-4 shadow-lg shadow-pink-500/20">
                    <Droplets className="w-6 h-6 text-pink-400" />
                 </div>
                 <div className="font-sans font-black text-white text-xl tracking-tighter mix-blend-overlay">PÀO PÀO</div>
               </div>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute top-10 right-0 lg:-right-10 bg-white/10 backdrop-blur-lg border border-white/20 px-4 py-2 rounded-2xl animate-bounce" style={{ animationDuration: '3s' }}>
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">100% Organic Matcha</span>
            </div>
            <div className="absolute bottom-20 left-0 lg:-left-10 bg-pink-500/20 backdrop-blur-lg border border-pink-500/30 px-4 py-2 rounded-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
               <span className="text-[10px] font-bold text-pink-100 uppercase tracking-widest">Fresh Tapioca Daily</span>
            </div>

          </div>

        </div>
      </section>

      {/* Featured Marquee or simple text strip */}
      <section className="py-6 border-y border-white/10 bg-white/[0.02] flex relative overflow-hidden whitespace-nowrap">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-12 font-black text-[10px] uppercase tracking-[0.3em] text-white/30">
           <span>• NO POWDER, JUST REAL TEA</span>
           <span>• PREMIUM TAIWAN INGREDIENTS</span>
           <span>• FRESH MILK EVERY MORNING</span>
           <span>• THE CULT IS GROWING</span>
           <span>• NO POWDER, JUST REAL TEA</span>
           <span>• PREMIUM TAIWAN INGREDIENTS</span>
           <span>• FRESH MILK EVERY MORNING</span>
           <span>• THE CULT IS GROWING</span>
        </div>
      </section>

    </main>
  );
}
