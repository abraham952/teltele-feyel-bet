import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MobileMenuView from './components/MobileMenuView';
import TvBoardView from './components/TvBoardView';
import TikTokFeed from './components/TikTokFeed';
import ItemDetailModal from './components/ItemDetailModal';
import ReservationModal from './components/ReservationModal';
import { MenuItem } from './types';
import { TRANSLATIONS, Language } from './translations';
import { Star, Award, Flame, Calendar, ExternalLink } from 'lucide-react';

export default function App() {
  const [isTvMode, setIsTvMode] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Global Language State with Persistence
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('selectedLanguage');
    return (saved === 'en' || saved === 'am' || saved === 'om' ? saved : 'en') as Language;
  });

  // Global Theme State with Persistence
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'dark' || saved === 'light' ? saved : 'dark') as 'dark' | 'light';
  });

  // Reservation Modal trigger
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('selectedLanguage', lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const t = TRANSLATIONS[lang];
  const isLight = theme === 'light';
  const storefrontPhoto = new URL('./assets/images/user_real_storefront_final_1781856959733.jpg', import.meta.url).href;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-all duration-300 ${
      isLight ? 'bg-[#FAF7F2] text-gray-900' : 'bg-[#0A0A0A] text-white'
    }`}>
      
      {/* Premium Luxury Header Overlay */}
      <Header 
        isTvMode={isTvMode} 
        setIsTvMode={setIsTvMode} 
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Hero Showcase Banner (Visible only in default Interactive Mobile/QR View to avoid cluttering full-screen TV Board view) */}
      {!isTvMode && (
        <section className={`relative border-b transition-all duration-300 ${
          isLight ? 'bg-amber-50/40 border-[#D4AF37]/20' : 'bg-[#0F0F0F] border-[#D4AF37]/15'
        }`}>
          {/* Subtle Background pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03]"></div>
          
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            
            <div className="space-y-4 max-w-xl">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold animate-pulse border ${
                isLight 
                  ? 'bg-amber-100/60 border-amber-300 text-[#85581A]' 
                  : 'bg-[#D4AF37]/10 border-[#D4AF37]/45 text-[#D4AF37]'
              }`}>
                <Flame className="w-3.5 h-3.5 fill-current" /> {t.heroTitle2}
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-black leading-tight">
                {t.heroTitle1} <br />
                <span className="bg-gradient-to-r from-[#85581A] to-[#D4AF37] bg-clip-text text-transparent">{t.heroTitle2}</span>
              </h2>
              
              <p className={`text-xs font-sans leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                {t.heroDesc}
              </p>

              {/* Action Buttons in Hero */}
              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white hover:scale-105 transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.reserveTable}</span>
                </button>
                <a
                  href="#search-input"
                  onClick={(e) => {
                    const searchInput = document.getElementById('search-input');
                    if (searchInput) {
                      e.preventDefault();
                      searchInput.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all hover:bg-[#D4AF37]/10 flex items-center gap-1.5 ${
                    isLight ? 'border-gray-300 text-gray-700' : 'border-gray-800 text-gray-300'
                  }`}
                >
                  <span>{t.orderNow}</span>
                </a>
              </div>
            </div>

            {/* Real Storefront Facade & Micro Info Badges Container */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-5 w-full md:w-auto items-center">
              {/* Premium Storefront Framed Showcase card */}
              <div className={`relative overflow-hidden rounded-3xl border shadow-xl max-w-sm sm:w-80 group transition-all duration-500 hover:scale-[1.02] ${
                isLight ? 'border-[#D4AF37]/35 bg-white' : 'border-[#D4AF37]/30 bg-[#121212]'
              }`}>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                <img 
                  src={storefrontPhoto} 
                  alt="Taltele Lounge Storefront Facade" 
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="p-3 text-left">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] font-bold uppercase">
                      {lang === 'en' ? 'Bole Road Welosefer' : lang === 'am' ? 'ቦሌ መንገድ ወሎሰፈር' : 'Bole Road Welosefer'}
                    </span>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-500 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold tracking-tight mt-1 text-[#85581A] dark:text-[#D4AF37]">
                    Taltele Lounge & Feyel Bet
                  </h4>
                </div>
              </div>

              {/* Micro Info Badges Box */}
              <div className="grid grid-cols-2 gap-3 w-full sm:w-auto md:w-full lg:w-auto">
                <div className={`border p-4 rounded-3xl text-center flex flex-col items-center justify-center min-w-[130px] shadow-lg ${
                  isLight ? 'bg-white border-[#D4AF37]/25' : 'bg-[#121212]/80 border-gray-800'
                }`}>
                  <Star className="w-5 h-5 text-[#D4AF37] fill-current" />
                  <span className="text-xl font-bold font-mono mt-1">{t.reviewsCount.split(' ')[0]}</span>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
                    {t.reviewsCount.split(' ').slice(1).join(' ')}
                  </p>
                </div>

                <div className={`border p-4 rounded-3xl text-center flex flex-col items-center justify-center min-w-[130px] shadow-lg ${
                  isLight ? 'bg-white border-[#D4AF37]/25' : 'bg-[#121212]/80 border-gray-800'
                }`}>
                  <Award className="w-5 h-5 text-red-500" />
                  <span className="text-xl font-bold font-mono mt-1">100%</span>
                  <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold font-mono">
                    {t.hajiCertified}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Main Dynamic Workspace Module */}
      <main className="flex-1">
        {isTvMode ? (
          <div className="p-4 md:p-6 lg:p-8">
            <TvBoardView lang={lang} theme={theme} />
          </div>
        ) : (
          <MobileMenuView 
            onSelectItem={(item) => setSelectedItem(item)} 
            lang={lang} 
            theme={theme}
            onOpenReservation={() => setIsReservationOpen(true)}
          />
        )}
      </main>

      {/* Shared TikTok Feed Area */}
      <TikTokFeed />

      {/* Global Luxury Footer */}
      <footer className={`border-t py-8 px-6 text-center text-xs z-10 font-sans transition-all duration-300 ${
        isLight ? 'bg-[#FCFAF6] border-gray-200 text-gray-500' : 'bg-black border-gray-900 text-gray-500'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-left leading-relaxed">
            &copy; {new Date().getFullYear()} Taltele Feyel Bet (Taltale Lounge). All rights reserved. 
            <span className="text-[10px] text-gray-400 block sm:inline sm:ml-2 sm:border-l sm:border-gray-300 sm:pl-2">
              Bole Road (opposite Welosefer), Addis Ababa, Ethiopia
            </span>
          </p>
          
          <div className="flex gap-4 items-center">
            <a 
              href="https://www.tiktok.com/@teltelefeyelbet" 
              target="_blank" 
              className="hover:text-[#D4AF37] transition-all flex items-center gap-1"
              id="footer-tiktok-link"
              rel="noreferrer"
            >
              <span>TikTok Feed</span>
              <ExternalLink className="w-3 h-3 text-gray-400" />
            </a>
            <span className="text-gray-300">|</span>
            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] font-semibold">MICHELIN LOUNGE ASSURED</span>
          </div>
        </div>
      </footer>

      {/* Interactive Customizer Modal */}
      {selectedItem && (
        <ItemDetailModal 
          item={selectedItem} 
          lang={lang}
          theme={theme}
          onClose={() => setSelectedItem(null)} 
        />
      )}

      {/* Floating Reservation modal */}
      {isReservationOpen && (
        <ReservationModal 
          lang={lang} 
          theme={theme} 
          onClose={() => setIsReservationOpen(false)} 
        />
      )}

    </div>
  );
}
