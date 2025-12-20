
import React from 'react';
import { CLASSES } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Classes: React.FC = () => {
  const scrollToSchedule = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="classes" className="py-32 bg-white relative overflow-hidden">
      {/* 装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
             <Sparkles className="w-5 h-5 text-breeze-400" />
             <span className="text-breeze-500 font-bold tracking-[0.2em] text-sm uppercase">Classes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mt-2">クラス紹介</h2>
          <p className="text-stone-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            金曜日の夜。一日、そして一週間の終わりに。<br/>
            自分をリセットし、心地よい眠りへと導くためのクラスをご用意しています。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {CLASSES.map((yogaClass) => (
            <div 
              key={yogaClass.id} 
              className="group relative bg-stone-50/50 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 border border-stone-100 hover:border-breeze-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-md overflow-hidden"
            >
              {/* Card Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-breeze-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:shadow-breeze-100 group-hover:scale-110 transition-all duration-500 border border-stone-100">
                  {yogaClass.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-stone-800 mb-4 group-hover:text-breeze-600 transition-colors">
                  {yogaClass.title}
                </h3>
                
                <p className="text-stone-600 text-base leading-loose mb-10 h-24 overflow-hidden">
                  {yogaClass.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-stone-200/40">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-stone-400 tracking-wider uppercase">運動量</span>
                    <div className="flex gap-1">
                      {[1, 2, 3].map((i) => (
                        <div 
                          key={i} 
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i <= yogaClass.intensity ? 'bg-breeze-400 scale-110' : 'bg-stone-200'}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-stone-500 font-bold">
                    <span className="text-sm">{yogaClass.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#schedule" 
            onClick={scrollToSchedule}
            className="inline-flex items-center gap-3 px-12 py-5 bg-stone-800 text-white font-bold rounded-full hover:bg-stone-900 transition-all shadow-xl hover:shadow-stone-200 hover:-translate-y-1 text-lg group"
          >
            スケジュールを確認する
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};
