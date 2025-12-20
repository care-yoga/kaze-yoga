
import React, { useState } from 'react';
import { Instagram, Facebook, Twitter, ShieldCheck, AlertCircle, Info, Handshake, Wind } from 'lucide-react';
import { LegalModal } from './LegalModal';
import { SOCIAL_URLS, LOGO_IMAGE_URL } from '../constants';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'law' | 'disclaimer' | null>(null);

  const renderModalContent = () => {
    switch (modalType) {
      case 'privacy':
        return (
          <div className="space-y-4">
            <p>風ヨガサークル（以下、「当サークル」）は、参加者の皆様の個人情報を適切に保護するため、以下のプライバシーポリシーを定めています。</p>
            <h4 className="font-bold text-stone-800 mt-4 border-l-4 border-breeze-400 pl-3">1. 個人情報の収集</h4>
            <p>当サークルは、レッスンの予約やお問い合わせの際に、氏名、メールアドレス、電話番号等の個人情報を収集いたします。</p>
            <h4 className="font-bold text-stone-800 mt-4 border-l-4 border-breeze-400 pl-3">2. 個人情報の利用目的</h4>
            <p>収集した個人情報は、レッスンの予約管理、緊急時の連絡、活動スケジュールの案内にのみ利用します。</p>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6">
            <p>皆様が心地よくサークルに参加いただくためのルールです。予約前に必ずご確認ください。</p>
            
            <div className="space-y-4">
              <section className="bg-breeze-50 p-4 rounded-xl border border-breeze-100">
                <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-breeze-500" /> 予約と参加費のお支払い
                </h4>
                <p className="text-sm">当サークルは完全予約制です。Googleフォームよりお申し込みください。参加費（300円）は、<b>当日現地にて現金でお支払い</b>いただきます。お釣りのないようご用意いただけると助かります。</p>
              </section>

              <section>
                <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-breeze-500" /> キャンセルについて
                </h4>
                <p className="text-sm">キャンセル料は発生しませんが、準備の都合上、欠席が判明した時点で速やかにご連絡をお願いいたします。</p>
              </section>

              <section>
                <h4 className="font-bold text-stone-800 mb-2 flex items-center gap-2">
                  <Handshake className="w-4 h-4 text-breeze-500" /> 禁止事項
                </h4>
                <ul className="text-sm list-disc list-inside space-y-1 text-stone-600">
                  <li>他の参加者への迷惑行為、プライバシーを侵害する行為</li>
                  <li>宗教、ネットワークビジネス、他団体への勧誘行為</li>
                  <li>許可なくレッスン内容を撮影・録音・配信する行為</li>
                </ul>
              </section>
            </div>
          </div>
        );
      case 'disclaimer':
        return (
          <div className="space-y-8">
            <section className="bg-amber-50 p-6 rounded-2xl border border-amber-100 shadow-sm">
              <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                <Info className="w-5 h-5" /> 運営形態について
              </h4>
              <p className="text-amber-900/80 text-sm leading-relaxed">
                本サークルは、営利を目的としない個人運営のヨガサークルです。
              </p>
            </section>

            <section>
              <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-500" /> 医療行為ではない
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                当サークルで行うヨガは、医療行為・治療・診断を目的としたものではありません。<br/>
                持病をお持ちの方、妊娠中の方、体調に不安のある方は、事前に医師へご相談のうえ、ご自身の判断でご参加ください。
              </p>
            </section>

            <section className="pt-6 border-t border-stone-100">
              <h4 className="font-bold text-stone-800 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-breeze-500" /> 安全について
              </h4>
              <p className="text-stone-600 text-sm leading-relaxed">
                レッスン中およびレッスン前後に生じたケガ・体調不良・事故等については、当サークルでは一切の責任を負いかねます。<br/>
                無理のない範囲で、ご自身の体調と相談しながらご参加ください。
              </p>
            </section>
          </div>
        );
      case 'law':
        return (
          <div className="space-y-4 text-sm">
            <p>※当サークルは非営利個人運営ですが、透明性確保のため以下を明記します。</p>
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-stone-100"><th className="py-3 pr-4 font-bold text-stone-800 w-1/3">運営団体名</th><td className="py-3 text-stone-600">風ヨガサークル</td></tr>
                <tr className="border-b border-stone-100"><th className="py-3 pr-4 font-bold text-stone-800">代表者</th><td className="py-3 text-stone-600">KAZUKI</td></tr>
                <tr className="border-b border-stone-100"><th className="py-3 pr-4 font-bold text-stone-800">所在地</th><td className="py-3 text-stone-600">北海道上川郡東神楽町（東神楽町ふれあい交流館内）</td></tr>
                <tr><th className="py-3 pr-4 font-bold text-stone-800">対価の支払時期</th><td className="py-3 text-stone-600">当日、現地にて現金払い</td></tr>
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'privacy': return 'プライバシーポリシー';
      case 'terms': return '利用規約（サークルルール）';
      case 'disclaimer': return '免責事項・大切なお知らせ';
      case 'law': return '特定商取引法に基づく表記';
      default: return '';
    }
  };

  return (
    <footer className="bg-stone-800 text-white pt-16 pb-12 border-t border-stone-700">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="flex items-center gap-5">
             <div className="w-20 h-20 bg-white rounded-full shadow-xl overflow-hidden flex-shrink-0 border-4 border-stone-600 flex items-center justify-center">
               <img 
                 src={LOGO_IMAGE_URL} 
                 alt="風ヨガ ロゴ" 
                 className="w-full h-full object-cover"
               />
             </div>
             <div>
               <h3 className="text-2xl font-bold tracking-widest text-white">風ヨガ</h3>
               <p className="text-stone-400 text-sm mt-1">～こころとからだの癒しの時間～</p>
             </div>
          </div>

          {/* クイックビュー表記 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full lg:max-w-4xl">
            <div className="space-y-3 p-5 bg-stone-700/30 rounded-2xl border border-stone-700">
              <h4 className="text-stone-200 font-bold text-sm flex items-center gap-2">
                <Info className="w-4 h-4 text-breeze-400" /> 運営形態
              </h4>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                本サークルは、営利を目的としない個人運営のヨガサークルです。
              </p>
            </div>
            <div className="space-y-3 p-5 bg-stone-700/30 rounded-2xl border border-stone-700">
              <h4 className="text-stone-200 font-bold text-sm flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-rose-400" /> 医療行為について
              </h4>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                治療を目的とした医療行為ではありません。不安のある方は事前に医師へご相談ください。
              </p>
            </div>
            <div className="space-y-3 p-5 bg-stone-700/30 rounded-2xl border border-stone-700">
              <h4 className="text-stone-200 font-bold text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sage-100" /> 免責について
              </h4>
              <p className="text-stone-400 text-[11px] leading-relaxed">
                ケガ・事故等については責任を負いかねます。ご自身の体調に合わせてご参加ください。
              </p>
            </div>
          </div>
        </div>

        {/* SNS and Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex gap-6">
            {SOCIAL_URLS.INSTAGRAM && (
              <a href={SOCIAL_URLS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="bg-stone-700 p-3 rounded-full hover:bg-breeze-500 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
            )}
            {SOCIAL_URLS.FACEBOOK && (
              <a href={SOCIAL_URLS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="bg-stone-700 p-3 rounded-full hover:bg-breeze-500 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
            )}
            {SOCIAL_URLS.TWITTER && (
              <a href={SOCIAL_URLS.TWITTER} target="_blank" rel="noopener noreferrer" className="bg-stone-700 p-3 rounded-full hover:bg-breeze-500 hover:text-white transition-all transform hover:-translate-y-1" aria-label="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-stone-400">
            <button onClick={() => setModalType('privacy')} className="hover:text-white transition-colors">プライバシーポリシー</button>
            <button onClick={() => setModalType('terms')} className="hover:text-white transition-colors">利用規約</button>
            <button onClick={() => setModalType('disclaimer')} className="hover:text-white transition-colors">免責事項・大切なお知らせ</button>
            <button onClick={() => setModalType('law')} className="hover:text-white transition-colors">特定商取引法</button>
          </div>
        </div>
        
        <div className="border-t border-stone-700 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Kaze Yoga. All rights reserved.</p>
        </div>
      </div>

      <LegalModal 
        isOpen={!!modalType} 
        onClose={() => setModalType(null)} 
        title={getModalTitle()}
      >
        {renderModalContent()}
      </LegalModal>
    </footer>
  );
};
