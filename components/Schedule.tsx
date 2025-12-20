
import React from 'react';
import { WEEKLY_SCHEDULE } from '../constants';
import { Calendar, Clock, Info } from 'lucide-react';

export const Schedule: React.FC = () => {
  // クラスがある日だけを抽出（現在は金曜日のみですが、将来的に増えても対応可能）
  const activeDays = WEEKLY_SCHEDULE.filter(day => day.classes.length > 0);
  const inactiveDays = WEEKLY_SCHEDULE.filter(day => day.classes.length === 0);

  return (
    <section id="schedule" className="py-24 bg-breeze-50 relative">
      {/* 背景の装飾的なドットパターン */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-breeze-600 font-bold tracking-widest text-sm uppercase">Schedule</span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-700 mt-2">開催スケジュール</h2>
          <div className="mt-4 max-w-2xl mx-auto space-y-2">
            <p className="text-stone-600 font-medium">
               基本開催：月1〜2回 金曜日 19:00 - 20:00
            </p>
            <p className="text-sm text-stone-500 bg-white/50 inline-block px-4 py-1 rounded-full border border-breeze-100">
              ※ 詳細な日程は予約フォーム、または公式SNSでお知らせしています
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {/* クラスがある日のカード */}
            {activeDays.map((daySchedule, index) => (
              <div 
                key={index} 
                className="bg-white rounded-[2rem] shadow-xl border border-breeze-100 overflow-hidden transform transition-all hover:shadow-2xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* 曜日表示エリア */}
                  <div className="bg-breeze-500 text-white px-8 py-6 md:w-48 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold opacity-80 mb-1">Weekly</span>
                    <span className="text-3xl font-bold tracking-tighter">{daySchedule.day}</span>
                  </div>
                  
                  {/* クラス内容エリア */}
                  <div className="flex-1 p-6 md:p-8">
                    <div className="grid grid-cols-1 gap-4">
                      {daySchedule.classes.map((cls, idx) => (
                        <div 
                          key={idx} 
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-stone-50 border border-stone-100 group hover:border-breeze-200 transition-colors"
                        >
                          <div className="flex items-center gap-4">
                            <div className="bg-white p-3 rounded-xl text-breeze-500 shadow-sm">
                              <Clock className="w-5 h-5" />
                            </div>
                            <div>
                              <div className="text-sm text-stone-400 font-medium mb-0.5">{cls.time}〜</div>
                              <div className="text-lg font-bold text-stone-700 group-hover:text-breeze-600 transition-colors">
                                {cls.className}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-xs text-stone-500 bg-white px-3 py-1.5 rounded-full border border-stone-100 shadow-sm">
                              講師: {cls.instructor}
                            </div>
                            <div className="w-8 h-8 rounded-full bg-breeze-100 flex items-center justify-center text-breeze-500 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:flex">
                              <Info className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* フッター的な案内 */}
                <div className="bg-stone-50/50 px-8 py-4 text-sm text-stone-500 border-t border-stone-100 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-breeze-400" />
                  <span>事前予約制・参加費 1回 300円（当日、現地にて現金払い）です</span>
                </div>
              </div>
            ))}

            {/* その他の曜日についての補足（必要であれば） */}
            <div className="mt-8 p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-dashed border-stone-200 text-center">
              <p className="text-stone-500 text-sm">
                金曜日以外の開催や、特別なワークショップについては<br className="hidden sm:block"/>
                決まり次第、都度お知らせしております。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
