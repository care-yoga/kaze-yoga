
import React from 'react';
import { ArrowDown, ExternalLink, Wind } from 'lucide-react';
import { GOOGLE_FORM_URL } from '../constants';

export const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Tranquil meditation in a bright, airy space"
          className="w-full h-full object-cover scale-105"
        />
        {/* 透明感のあるオーバーレイ */}
        <div className="absolute inset-0 bg-stone-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>
        <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto w-full text-center">
        
        <div className="inline-flex items-center gap-2 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-stone-700 font-bold tracking-[0.2em] text-xs md:text-sm uppercase bg-white/80 backdrop-blur-md px-8 py-2.5 rounded-full shadow-sm border border-white/50 flex items-center gap-2">
            <Wind className="w-4 h-4 text-breeze-500 animate-sway" />
            東神楽町 ヨガサークル
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-10 tracking-tight animate-fade-in-up drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)]" style={{ animationDelay: '0.4s' }}>
          心に、<span className="text-breeze-100">風</span>を。<br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-light mt-8 block text-white/95 tracking-normal drop-shadow-md">
            呼吸と整う、おだやかな時間。
          </span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-14 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-white/40">
            <p className="text-stone-800 text-lg md:text-xl leading-loose font-medium">
               1回 300円。柔らかな静寂のなかで、そよ風のように心をほどくひととき。<br className="hidden md:block" />
               忙しい日々を少しだけお休みして、今の自分をありのままに慈しむ。<br />
               ここは、あなたという存在を一番に大切にするための、温かな場所です。
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="#classes"
            onClick={(e) => scrollToSection(e, 'classes')}
            className="px-12 py-5 bg-white text-stone-700 rounded-full hover:bg-stone-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg font-bold tracking-wider border border-white"
          >
            クラスを見る
          </a>
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-5 bg-breeze-500 text-white rounded-full hover:bg-breeze-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 text-lg font-bold tracking-wider flex items-center justify-center gap-3 group"
          >
            体験を予約する
            <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-breeze-200/20 rounded-full mix-blend-overlay filter blur-3xl animate-float pointer-events-none"></div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer p-2 rounded-full bg-white/30 backdrop-blur-md border border-white/50 text-white hover:text-breeze-200 transition-colors shadow-sm"
        onClick={(e) => {
          const concept = document.getElementById('concept');
          concept?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  );
};
