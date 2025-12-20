import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-fade-in-up border border-stone-100">
        <div className="p-5 border-b border-stone-100 flex justify-between items-center bg-stone-50/50">
          <h3 className="text-xl font-bold text-stone-700">{title}</h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-stone-200 rounded-full transition-colors text-stone-500"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto text-stone-600 text-sm leading-relaxed space-y-4 custom-scrollbar">
          {children}
        </div>
        
        <div className="p-4 border-t border-stone-100 bg-stone-50/50 text-center">
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-stone-700 text-white rounded-full hover:bg-stone-800 transition-colors text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};