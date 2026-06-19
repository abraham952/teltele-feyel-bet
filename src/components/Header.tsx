import React, { useState, useEffect } from 'react';
import { Tv, Smartphone, Clock, MapPin, Award, Phone, Sun, Moon, Calendar } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface HeaderProps {
  isTvMode: boolean;
  setIsTvMode: (val: boolean) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'dark' | 'light';
  setTheme: (theme: 'dark' | 'light') => void;
  onOpenReservation: () => void;
}

export default function Header({ 
  isTvMode, 
  setIsTvMode, 
  lang, 
  setLang, 
  theme, 
  setTheme, 
  onOpenReservation 
}: HeaderProps) {
  const [time, setTime] = useState<string>('');
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isLight = theme === 'light';

  return (
    <header className={`relative w-full border-b backdrop-blur-md px-4 sm:px-6 py-4 z-40 transition-all duration-300 ${
      isLight 
        ? 'border-[#D4AF37]/15 bg-[#FCFAF6]/95 text-gray-950' 
        : 'border-[#D4AF37]/20 bg-[#0F0F0F]/90 text-white'
    }`}>
      {/* Decorative colored margin line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-red-600 via-[#D4AF37] to-green-600 opacity-80"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        {/* Left Side: Brand & Identity */}
        <div className="flex items-center gap-4">
          <div className="relative w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center bg-black shadow-inner shadow-amber-500/10">
            <span className="font-serif text-lg font-bold text-[#D4AF37] tracking-wider">TF</span>
            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-600"></span>
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-serif text-xl sm:text-2xl font-black tracking-widest">
                {t.loungeTitle} <span className="text-[#D4AF37]">{t.loungeSubtitle}</span>
              </h1>
              <span className="hidden sm:inline-flex items-center gap-1 rounded bg-[#C62828]/15 border border-[#C62828]/40 px-1.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-red-500">
                <Award className="w-3 h-3 text-[#D4AF37]" /> {t.genuineTag}
              </span>
            </div>
            <p className={`text-xs tracking-wide opacity-80 font-sans ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
              &ldquo;The Home of Authentic Ethiopian Goat Cuisine&rdquo; • Taltale Lounge
            </p>
          </div>
        </div>

        {/* Middle Info Banner */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] font-sans">
          <div className="flex items-center gap-2 border-r border-gray-300/35 pr-4">
            <MapPin className="w-4 h-4 text-[#D4AF37]" />
            <div>
              <p className="font-semibold">{t.addressBole}</p>
              <p className="text-[10px] text-gray-500">{t.addressOpposite}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 border-r border-gray-300/35 pr-4">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            <div>
              <p className="font-semibold">+251 911 234 567</p>
              <p className="text-[10px] text-gray-500">Reserve a Table / VIP Lounge</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-500" />
            <div>
              <p className="font-semibold">{time || '11:00 AM'}</p>
              <p className="text-[10px] text-[#D4AF37] font-mono font-bold">{t.loungeTime}</p>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Controls */}
        <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 border-t border-gray-200/25 pt-3 md:pt-0 md:border-t-0">
          
          {/* Theme Switcher Toggle */}
          <button
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            id="theme-toggle-btn"
            className={`p-2 rounded-full border transition-all ${
              isLight 
                ? 'bg-amber-100 hover:bg-amber-200 border-[#D4AF37]/35 text-[#85581A]' 
                : 'bg-[#151515] border-gray-800 text-[#D4AF37] hover:text-white hover:bg-[#1C1C1C]'
            }`}
            title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          {/* Language Switcher Buttons block */}
          <div className={`flex rounded-full p-1 border ${
            isLight ? 'bg-amber-100/50 border-[#D4AF37]/30' : 'bg-black/95 border-gray-800'
          }`}>
            {[
              { code: 'en', label: '🇺🇸 EN' },
              { code: 'am', label: 'አማ' },
              { code: 'om', label: 'OR' }
            ].map((langObj) => {
              const active = lang === langObj.code;
              return (
                <button
                  key={langObj.code}
                  onClick={() => setLang(langObj.code as Language)}
                  id={`lang-sel-${langObj.code}`}
                  className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase transition-all ${
                    active
                      ? isLight 
                        ? 'bg-[#85581A] text-white shadow-sm' 
                        : 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/15'
                      : 'text-gray-500 hover:text-gray-800 dark:hover:text-white'
                  }`}
                >
                  {langObj.label}
                </button>
              );
            })}
          </div>

          {/* Quick Reservation Action button */}
          <button
            onClick={onOpenReservation}
            id="header-reserve-btn"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.reserveTable}</span>
          </button>
          
          {/* Display Mode Toggle */}
          <div className={`inline-flex rounded-full p-1 border ${
            isLight ? 'bg-amber-100/50 border-[#D4AF37]/30' : 'bg-black/95 border-gray-800'
          }`}>
            <button
              onClick={() => setIsTvMode(false)}
              id="header-btn-switch-mobile"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                !isTvMode 
                  ? 'bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white font-black shadow-md' 
                  : 'text-gray-400 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-3 h-3" />
              <span className="hidden sm:inline">{t.mobileMenu.split(' / ')[0]}</span>
            </button>
            <button
              onClick={() => setIsTvMode(true)}
              id="header-btn-switch-tv"
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${
                isTvMode 
                  ? 'bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white font-black shadow-md' 
                  : 'text-gray-400 hover:text-gray-800 dark:hover:text-white'
              }`}
            >
              <Tv className="w-3 h-3" />
              <span className="hidden sm:inline">{t.tvMenuBoard.split(' ')[0]}</span>
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}
