
import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Wind } from 'lucide-react';
import { GOOGLE_FORM_URL, LOGO_IMAGE_URL } from '../constants';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'コンセプト', href: '#concept' },
    { name: 'クラス紹介', href: '#classes' },
    { name: 'スケジュール', href: '#schedule' },
    { name: 'インストラクター', href: '#instructors' },
    { name: 'アクセス', href: '#access' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 text-stone-600'
          : 'bg-transparent py-6 text-stone-700'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#" 
          onClick={handleLogoClick}
          className="flex items-center gap-3 group"
        >
          <div className={`relative w-12 h-12 md:w-14 md:h-14 overflow-hidden rounded-full border-2 shadow-md transition-all duration-500 group-hover:scale-105 flex items-center justify-center ${isScrolled ? 'bg-white border-breeze-100' : 'bg-white/80 border-white'}`}>
            <img 
              src={LOGO_IMAGE_URL} 
              alt="風ヨガ ロゴ" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className={`text-xl font-bold tracking-widest transition-colors duration-300 ${isScrolled ? 'text-stone-700' : 'text-white md:text-stone-700'}`}>
            風ヨガ
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors tracking-wider relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-breeze-400 after:transition-all hover:after:w-full ${isScrolled ? 'hover:text-breeze-500' : 'text-white md:text-stone-700 hover:text-breeze-500'}`}
            >
              {link.name}
            </a>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-breeze-500 hover:bg-breeze-600 text-white px-6 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>予約する</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-stone-100 shadow-xl transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col px-6 gap-4 text-stone-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 border-b border-stone-50"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-breeze-500 text-white py-3 text-center rounded-lg mt-2 flex items-center justify-center gap-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <span>予約フォームへ</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
};
