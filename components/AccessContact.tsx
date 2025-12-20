
import React from 'react';
import { MapPin, Ticket, ExternalLink, CalendarDays, Instagram } from 'lucide-react';
import { GOOGLE_FORM_URL, SOCIAL_URLS } from '../constants';

export const AccessContact: React.FC = () => {
  return (
    <section id="access" className="bg-sage-50 py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
          
          {/* Info Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center">
            <span className="text-breeze-500 font-bold tracking-widest text-sm uppercase mb-2">Access & Contact</span>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-700 mb-10">アクセス・ご予約</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-breeze-50 p-4 rounded-2xl text-breeze-500 shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">場所</h4>
                  <p className="text-stone-600 leading-relaxed">
                    東神楽町ふれあい交流館<br />
                    <span className="text-sm text-stone-500">（北海道上川郡東神楽町ひじり野北１条１丁目１−３）</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                 <div className="bg-breeze-50 p-4 rounded-2xl text-breeze-500 shadow-sm">
                  <Ticket className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">参加費</h4>
                  <p className="text-stone-600">1回 300円 <span className="text-xs bg-stone-100 px-2 py-0.5 rounded-full ml-2">当日、現地にて現金払い</span></p>
                  <p className="text-sm text-stone-500 mt-1">※当日、受付にて現金でお支払いください。</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                 <div className="bg-breeze-50 p-4 rounded-2xl text-breeze-500 shadow-sm">
                  <CalendarDays className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-stone-800 mb-1">持ち物</h4>
                  <p className="text-stone-600">ヨガマット、飲み物、動きやすい服装</p>
                  <p className="text-sm text-stone-500 mt-1">※お気に入りの道具と共に、心地よい時間をお過ごしください。</p>
                </div>
              </div>
            </div>
            
            <div id="contact" className="mt-12 pt-10 border-t border-stone-100">
              <h3 className="text-xl font-bold text-stone-700 mb-6 flex items-center gap-2">
                レッスンのご予約
              </h3>
              <p className="text-stone-600 mb-8 leading-relaxed">
                以下のGoogleフォームより、お気軽にお申し込みください。<br/>
                初回体験、見学のご相談もこちらから承っております。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-breeze-500 hover:bg-breeze-600 text-white font-bold py-5 rounded-2xl transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-3 transform hover:-translate-y-1"
                >
                  <span className="text-lg">予約フォームへ</span>
                  <ExternalLink className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>

                {SOCIAL_URLS.INSTAGRAM && (
                  <a 
                    href={SOCIAL_URLS.INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 bg-white border-2 border-stone-100 hover:border-breeze-200 text-stone-600 font-bold py-5 rounded-2xl transition-all shadow-sm hover:shadow-md text-center flex items-center justify-center gap-3 transform hover:-translate-y-1"
                  >
                    <Instagram className="w-5 h-5 text-rose-400 group-hover:text-rose-500" />
                    <span className="text-lg">活動を見る</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps Side */}
          <div className="relative h-[450px] lg:h-auto bg-stone-100">
            <iframe 
              src="https://maps.google.com/maps?q=東神楽町ふれあい交流館&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="東神楽町ふれあい交流館 アクセスマップ"
              className="absolute inset-0 w-full h-full grayscale-[30%] hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
