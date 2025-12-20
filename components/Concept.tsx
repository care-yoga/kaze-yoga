
import React from 'react';
import { ArrowRight, Wind } from 'lucide-react';

export const Concept: React.FC = () => {
  const scrollToClasses = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('classes')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="concept" className="py-32 bg-sage-50/50 relative overflow-hidden">
      {/* 装飾的な背景要素 */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative group">
            {/* 画像背後の装飾的なフレーム */}
            <div className="absolute inset-0 bg-breeze-100/30 rounded-[3rem] rotate-3 scale-105 group-hover:rotate-0 transition-transform duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="A person experiencing deep peace and mindful breathing in soft light" 
              className="w-full h-[600px] object-cover rounded-[2.5rem] shadow-2xl relative z-10 group-hover:scale-[0.98] transition-transform duration-700"
            />
            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl z-20 hidden md:block animate-float border border-white/50">
               <div className="flex items-center gap-3 text-breeze-600 font-bold mb-2">
                 <Wind className="w-6 h-6 text-breeze-400" />
                 <span>こころに、優しさを</span>
               </div>
               <p className="text-stone-500 text-sm">そよ風のように軽やかに、<br/>ただ「今の呼吸」を味わうひととき。</p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 space-y-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-[2px] w-12 bg-breeze-400"></div>
                <span className="text-breeze-500 font-bold tracking-[0.2em] text-sm uppercase">Concept</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight">
                風のように、<br />呼吸を味わう。
              </h2>
            </div>
            
            <div className="space-y-8 text-stone-600 text-lg leading-relaxed font-medium">
              <p>
                「風ヨガ」が大切にしているのは、<br/>
                ポーズの完成度ではなく、心身に吹き抜ける呼吸の心地よさです。<br/>
                穏やかで優しい時間が、固まった心をやわらかく解き放ちます。
              </p>
              <p>
                深く息を吸い込み、今の自分を慈しむ。<br/>
                吐き出す息とともに、日々の忙しさを手放していく。<br/>
                その「呼吸を味わう」プロセスのなかに、<br/>
                あなただけの静かで穏やかな時間が見つかるはずです。
              </p>
              <p>
                1回300円。ふらりと立ち寄れる穏やかな空間で、<br/>
                日常を少しだけ忘れて、深く息を吐き出す。<br/>
                そんな、心にそよ風を迎え入れる場所でありたいと願っています。
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                 <div className="w-10 h-10 bg-breeze-50 rounded-full flex items-center justify-center text-breeze-500 font-bold shrink-0">01</div>
                 <div>
                   <h4 className="font-bold text-stone-800">都度払い制</h4>
                   <p className="text-xs text-stone-500 mt-1">1回300円（当日現金払い）</p>
                 </div>
               </div>
               <div className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                 <div className="w-10 h-10 bg-sage-50 rounded-full flex items-center justify-center text-sage-800 font-bold shrink-0">02</div>
                 <div>
                   <h4 className="font-bold text-stone-800">優しい時間</h4>
                   <p className="text-xs text-stone-500 mt-1">無理のない、穏やかな呼吸</p>
                 </div>
               </div>
            </div>

            <div className="pt-4">
              <a 
                href="#classes" 
                onClick={scrollToClasses}
                className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-breeze-500 text-white font-bold rounded-full hover:bg-breeze-600 transition-all shadow-xl hover:shadow-breeze-200/50 hover:-translate-y-1 w-full sm:w-auto text-lg"
              >
                クラス内容を見る
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
