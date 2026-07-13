import React, { useState, useEffect, useMemo } from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';
import { Tv, Play, Pause, ChevronRight, ChevronLeft, Flame, Award, Star, Volume2, Sparkles, Clock } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

const FEYEL_TIBS_BG = new URL('../assets/images/feyel_tibs_1781852326700.jpg', import.meta.url).href;
const FAMILY_FEAST_BG = new URL('../assets/images/family_feast_1781852341486.jpg', import.meta.url).href;

interface TvBoardViewProps {
  lang: Language;
  theme: 'dark' | 'light';
}

export default function TvBoardView({ lang, theme }: TvBoardViewProps) {
  const t = TRANSLATIONS[lang];
  const isLight = theme === 'light';

  const [activeCatIndex, setActiveCatIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState(9); // 9 seconds per category rotation
  const [loungePromoIndex, setLoungePromoIndex] = useState(0);

  // Constants
  const ROTATION_SECONDS = 9;
  const activeCategory = useMemo(() => CATEGORIES[activeCatIndex], [activeCatIndex]);

  // Rotating items in active category
  const activeItems = useMemo(() => {
    return MENU_ITEMS.filter(item => item.category === activeCategory.key);
  }, [activeCategory]);

  // Translation helpers
  const getItemName = (item: MenuItem) => {
    if (lang === 'am' && item.nameAm) return item.nameAm;
    if (lang === 'om' && item.nameOm) return item.nameOm;
    return item.name;
  };

  const getItemDesc = (item: MenuItem) => {
    if (lang === 'am' && item.descriptionAm) return item.descriptionAm;
    if (lang === 'om' && item.descriptionOm) return item.descriptionOm;
    return item.description;
  };

  const getCategoryLabel = (cat: any) => {
    if (lang === 'am' && cat.labelAm) return cat.labelAm;
    if (lang === 'om' && cat.labelOm) return cat.labelOm;
    return cat.label;
  };

  const getCategoryDesc = (cat: any) => {
    if (lang === 'am' && cat.descriptionAm) return cat.descriptionAm;
    if (lang === 'om' && cat.descriptionOm) return cat.descriptionOm;
    return cat.description;
  };

  // Promos for the side-display ticker
  const promos = useMemo(() => [
    { 
      title: lang === 'am' ? "የዛሬው ልዩ ምግብ" : lang === 'om' ? "EESSUMITTI ADDAA GUYYAA" : "TODAY'S SPECIALTY", 
      dish: lang === 'am' ? "የተጠበሰ የፍየል ጎድን (ለለቅ)" : lang === 'om' ? "Kostii Re'ee Roasted (Lelek)" : "Roasted Goat Ribs (Lelek)", 
      desc: lang === 'am' ? "በቀስታ የተጠበሰ የፍየል የጎድን ስጋ በንጥር ቅቤ እና በደጋማ ዕፅዋት የተዘጋጀ::" : lang === 'om' ? "Kostii re'ee dhadhaa kibbeh fi qullubbii wajjin qophaaye." : "Slow-roasted premium ribs brushed with spiced garlic butter (Niter Kibbeh) & wild highland herbs.", 
      price: "390 ETB", 
      code: "CHEF-01" 
    },
    { 
      title: lang === 'am' ? "የሳምንቱ መጨረሻ ግብዣ" : lang === 'om' ? "WEEKEND BANQUET" : "WEEKEND BANQUET", 
      dish: lang === 'am' ? "ባህላዊ የቤተሰብ ማዕድ" : lang === 'om' ? "Platter Maaddii Aadaa" : "Traditional Family Platter", 
      desc: lang === 'am' ? "ግዙፍ ባህላዊ በያይነቱ ከጭማቂ የፍየል ስጋ ጥብስ ጋር በጤፍ እንጀራ የሚቀርብ::" : lang === 'om' ? "Beyaynetu kolossal fi foon re'ee tibs buddeena xaafii wajjin dhiyaatu." : "A colossal authentic Beyaynetu combined with juicy grilled feyel segments over unlimited teff injera.", 
      price: "1200 ETB", 
      code: "FAM-FEAST" 
    },
    { 
      title: lang === 'am' ? "ልዩ ቀዝቃዛ መጠጥ" : lang === 'om' ? "DHUGAATTI QABBANAWA ADDAA" : "PREMIUM COLD BEVERAGE", 
      dish: lang === 'am' ? "ባህላዊ ጠጅ" : lang === 'om' ? "Tej Aadaa (Honey Wine)" : "Traditional Tej (Honey Wine)", 
      desc: lang === 'am' ? "ከማር እና ከጌሾ ቅጠል የተጠመቀ ባህላዊ የኢትዮጵያ ማር ጠጅ::" : lang === 'om' ? "Dhugaatii fermented damma aadaa Itoophiyaa." : "Sweet fermented organic honey brew formulated from wild gesho tree leaves. Served in classic glass flask.", 
      price: "180 ETB", 
      code: "TEJ-BOTTLE" 
    },
    { 
      title: lang === 'am' ? "የዋናው ሼፍ ምክረ-ሃሳብ" : lang === 'om' ? "FILANNOO OGESSA NYAATAA" : "CHEF RECOMMENDATION", 
      dish: lang === 'am' ? "የፍየል እጅጌ ጥብስ" : lang === 'om' ? "Roasted Gatila Feyel" : "Special Roasted Goat Shoulder", 
      desc: lang === 'am' ? "ለ6 ሰዓታት በቀስታ የበሰለ ለስላሳ እና ጣፋጭ የፍየል ስጋ::" : lang === 'om' ? "Foon re'ee baredaa sa'aatii 6-f suutaan bilcheeffame." : "Whole golden shoulder slow-baked for 6 hours, incredibly tender, falling cleanly off the bone.", 
      price: "950 ETB", 
      code: "VIP-SHOULDER" 
    }
  ], [lang]);

  // Category rotation effect
  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          setActiveCatIndex(prevIndex => (prevIndex + 1) % CATEGORIES.length);
          return ROTATION_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isPlaying]);

  // Side-promo rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLoungePromoIndex(prev => (prev + 1) % promos.length);
    }, 6000); // changes every 6s

    return () => clearInterval(interval);
  }, [promos]);

  // Manual navigation
  const handleNext = () => {
    setActiveCatIndex(prev => (prev + 1) % CATEGORIES.length);
    setTimeLeft(ROTATION_SECONDS);
  };

  const handlePrev = () => {
    setActiveCatIndex(prev => (prev - 1 + CATEGORIES.length) % CATEGORIES.length);
    setTimeLeft(ROTATION_SECONDS);
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  const cardBgClass = isLight 
    ? 'bg-white border-[#D4AF37]/25 text-gray-900 shadow hover:border-[#D4AF37]/65' 
    : 'bg-[#0B0B0B]/80 border-gray-800 text-gray-400 hover:text-white hover:border-[#D4AF37]/35';

  return (
    <div className={`w-full select-none font-sans overflow-hidden transition-all duration-300 p-2 md:p-4 ${
      isLight ? 'bg-[#FCFAF6] text-gray-950' : 'bg-black text-white'
    }`}>
      
      {/* Smart TV Header Console */}
      <div className={`flex flex-col md:flex-row justify-between items-center border rounded-2xl p-4 gap-4 mb-6 relative shadow-2xl transition-all ${
        isLight ? 'bg-white border-[#D4AF37]/35' : 'bg-[#070707] border-[#D4AF37]/35'
      }`}>
        <div className="absolute top-0 left-0 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

        <div className="flex items-center gap-3 text-left">
          <div className="bg-[#D4AF37]/20 border border-[#D4AF37] p-2.5 rounded-xl animate-pulse">
            <Tv className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#D4AF37] border border-[#D4AF37]/30 px-1.5 py-0.2 rounded bg-black">
                {t.tvSmartTVFeed}
              </span>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-ping"></span>
              <span className="text-[9px] uppercase font-mono text-gray-500">{t.tvDisplayActive}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-serif tracking-wide uppercase">
              {t.loungeTitle} <span className="text-[#D4AF37]">{lang === 'en' ? 'Lounge TV Console' : lang === 'am' ? 'ባህላዊ የቲቪ ማሳያ' : 'TV Console'}</span>
            </h3>
          </div>
        </div>

        {/* TV Autoplay Control Dashboard */}
        <div className="flex items-center gap-4 bg-black/90 px-4 py-2 border border-gray-850 rounded-xl relative z-10">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              id="tv-btn-prev"
              className="p-1.5 rounded-lg bg-gray-950 text-gray-400 hover:text-white transition-all hover:bg-gray-900"
              title="Previous Category"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlayback}
              id="tv-btn-play-pause"
              className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-black font-bold text-[10px] flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer"
              title={isPlaying ? "Pause automatic slideshow" : "Start automatic slideshow"}
            >
              {isPlaying ? <Pause className="w-3 h-3 fill-current" /> : <Play className="w-3 h-3 fill-current" />}
              <span className="uppercase tracking-wider font-bold">{isPlaying ? t.tvAutoplayOn : t.tvAutoplayOff}</span>
            </button>

            <button
              onClick={handleNext}
              id="tv-btn-next"
              className="p-1.5 rounded-lg bg-gray-950 text-gray-400 hover:text-white transition-all hover:bg-gray-900"
              title="Next Category"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Glowing Timer Bar */}
          <div className="flex flex-col gap-1 w-24">
            <div className="flex justify-between text-[8px] font-mono text-gray-500 uppercase tracking-widest leading-none">
              <span>{t.tvNextSlide}</span>
              <span className="text-[#D4AF37] font-semibold">{timeLeft}s</span>
            </div>
            <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden border border-gray-800/40">
              <div 
                className="h-full bg-gradient-to-r from-amber-600 to-[#D4AF37] transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${(timeLeft / ROTATION_SECONDS) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Ambient details */}
        <div className="hidden lg:flex items-center gap-3 text-xs border-l border-gray-300/30 pl-4 text-left">
          <div>
            <p className="font-bold">Addis Ababa, ET</p>
            <p className="text-[10px] text-gray-500 uppercase font-mono">19°C • Cool Highland Air</p>
          </div>
          <div className="font-serif italic text-xl text-[#D4AF37] font-bold">20:30</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side: Traditional Categories Tracker HUD (3-Cols on XL) */}
        <div className="xl:col-span-3 flex flex-row xl:flex-col gap-3 overflow-x-auto xl:overflow-x-visible no-scrollbar pb-3 xl:pb-0">
          {CATEGORIES.map((cat, idx) => {
            const isActive = idx === activeCatIndex;
            return (
              <button
                key={cat.key}
                onClick={() => {
                  setActiveCatIndex(idx);
                  setTimeLeft(ROTATION_SECONDS);
                }}
                id={`tv-cat-btn-${cat.key}`}
                className={`flex-shrink-0 text-left w-60 xl:w-full p-3.5 rounded-xl border transition-all duration-305 ${
                  isActive 
                    ? isLight
                      ? 'bg-amber-100/60 border-[#D4AF37] scale-102 shadow-lg relative overflow-hidden text-gray-950 font-bold'
                      : 'bg-gradient-to-br from-[#121212] to-black border-[#D4AF37] scale-105 shadow-xl shadow-[#D4AF37]/5 relative overflow-hidden text-white' 
                    : isLight
                      ? 'bg-white border-gray-200 text-gray-600 hover:text-black'
                      : 'bg-[#0B0B0B]/80 border-gray-850 text-gray-400 hover:text-white'
                }`}
              >
                {/* Active highlight bar on left */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#C62828] to-[#D4AF37]"></div>
                )}
                
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[9px] font-mono tracking-widest uppercase ${isActive ? 'text-[#D4AF37]' : 'text-gray-500'}`}>
                    SECTION 0{idx + 1}
                  </span>
                  <span className="text-[9px] bg-black/60 border border-gray-800/40 px-1.5 py-0.5 rounded text-gray-400 font-mono">
                    {cat.count} items
                  </span>
                </div>
                
                <h4 className="font-serif text-sm font-black truncate">
                  {getCategoryLabel(cat)}
                </h4>
                
                <p className="text-[10px] text-gray-500 mt-0.5 lines-clamp-1 truncate font-sans leading-relaxed">
                  {getCategoryDesc(cat)}
                </p>
              </button>
            );
          })}

          {/* Social Proof TV Promo block */}
          <div className={`hidden xl:block mt-auto rounded-2xl p-4 text-center border ${
            isLight ? 'bg-amber-50/50 border-[#D4AF37]/30' : 'bg-black border-[#D4AF37]/20 bg-cover'
          }`}>
            <span className="text-[9px] uppercase font-mono tracking-widest text-gray-500 block mb-1">{t.tvInteractiveSlogan.split(' ')[0]} URL</span>
            <div className="bg-white p-2 rounded-xl w-24 h-24 mx-auto flex items-center justify-center shadow-lg border border-gray-800/20">
              <div className="w-full h-full flex flex-col justify-between items-center border border-black p-0.5">
                <div className="grid grid-cols-4 gap-0.5 w-full h-full">
                  <div className="bg-black"></div>
                  <div className="bg-gray-100"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-gray-100"></div>
                  <div className="bg-black"></div>
                  <div className="bg-gray-100"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                  <div className="bg-gray-100"></div>
                  <div className="bg-black"></div>
                  <div className="bg-gray-100"></div>
                  <div className="bg-black"></div>
                  <div className="bg-black"></div>
                </div>
              </div>
            </div>
            <p className="text-[10px] font-serif font-black text-[#D4AF37] mt-3 uppercase">{t.tvInteractiveSlogan}</p>
            <p className="text-[8px] text-[#C62828] font-mono tracking-widest uppercase mt-0.5">@TELTELEFEYELBET</p>
          </div>
        </div>

        {/* Center: Beautiful Large TV Cards Grid (6-Cols on XL) */}
        <div className="xl:col-span-6 flex flex-col gap-4">
          
          {/* Active Category Display Banner */}
          <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-black p-4 flex items-center justify-between shadow-lg text-left">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C62828]/15 via-[#D4AF37]/5 to-transparent"></div>
            <div className="relative z-10">
              <span className="text-[9px] font-mono tracking-widest bg-[#C62828]/20 border border-[#C62828]/45 px-2 py-0.5 rounded text-white uppercase font-bold">
                {t.tvFeaturedSelection}
              </span>
              <h2 className="font-serif text-2xl font-black text-white mt-1 tracking-wide uppercase">
                {getCategoryLabel(activeCategory)}
              </h2>
            </div>
            <div className="text-right z-10 hidden sm:block">
              <span className="text-[9px] font-mono block text-gray-500 uppercase tracking-widest">{t.tvEstPrepTime}</span>
              <p className="text-[11px] font-black text-[#D4AF37] font-mono">{t.tvEstTimeText}</p>
            </div>
          </div>

          {/* Active Items list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
            {activeItems.map((item) => {
              return (
                <div
                  key={item.id}
                  id={`tv-grid-card-${item.id}`}
                  className={`group relative rounded-2xl overflow-hidden p-4 flex flex-col justify-between border hover:border-[#D4AF37]/40 transition-all duration-300 text-left ${cardBgClass}`}
                  style={{ minHeight: '170px' }}
                >
                  {/* Subtle Background Photo watermark */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-[0.07] group-hover:opacity-15 transition-opacity duration-700"
                    style={{ backgroundImage: `url(${item.image})` }}
                  ></div>
                  
                  {/* Glowing background gradient inside card */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white via-white/90 to-white/40' : 'from-black via-black/80 to-black/30'}`}></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-base font-black tracking-wide truncate pr-4 group-hover:text-[#D4AF37] transition-all">
                        {getItemName(item)}
                      </h4>
                      
                      <div className="flex gap-1 flex-shrink-0">
                        {item.isChefChoice && (
                          <span className="bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white p-1 rounded uppercase tracking-wider text-[8px] font-bold" title="Chef Choice">
                            <Award className="w-3.5 h-3.5" />
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="bg-[#C62828] text-white p-1 rounded uppercase tracking-wider text-[8px] font-bold" title="Popular House Special">
                            <Star className="w-3.5 h-3.5 fill-current" />
                          </span>
                        )}
                      </div>
                    </div>

                    <p className={`text-[11px] font-sans mt-2 leading-relaxed line-clamp-3 ${isLight ? 'text-gray-650' : 'text-gray-400'}`}>
                      {getItemDesc(item)}
                    </p>
                  </div>

                  {/* Pricing and Attributes */}
                  <div className="relative z-10 flex items-center justify-between mt-4 pt-3 border-t border-gray-200/10">
                    <div className="flex items-center gap-2">
                      {item.isSpicy && (
                        <span className="flex items-center gap-0.5 text-[#C62828] text-[9px] font-black font-mono">
                          <Flame className="w-3.5 h-3.5 fill-current animate-pulse" /> SPICY
                        </span>
                      )}
                      {item.isGlutenFree && (
                        <span className="text-[9px] font-mono text-amber-600 font-bold">[TEFF-GF]</span>
                      )}
                      {item.isVegan && (
                        <span className="text-[9px] text-green-650 dark:text-green-400 font-mono font-bold">[YETSOM]</span>
                      )}
                    </div>
                    
                    <span className="text-base font-mono font-bold text-[#D4AF37] tracking-wider">
                      {item.price} <span className={`text-[10px] font-bold uppercase ${isLight ? 'text-gray-650' : 'text-gray-400'}`}>ETB</span>
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Ticker Tape Footer for Chef Updates & Live Announcements */}
          <div className="bg-[#0B0B0B] border border-gray-850 rounded-xl p-3 flex items-center overflow-hidden h-11 relative shadow-inner text-left">
            <span className="bg-[#C62828] text-white font-mono uppercase text-[9px] tracking-widest px-2.5 py-1 rounded-sm font-black z-10 flex-shrink-0 mr-3">
              {t.tvKitchenAnnouncement}
            </span>
            <div className="absolute left-40 right-2 overflow-hidden w-full whitespace-nowrap text-xs text-gray-450 font-sans">
              <span className="inline-block animate-pulse-slow">
                {t.tvAnnouncementText}
              </span>
            </div>
          </div>

        </div>

        {/* Right Side: Immersive Culinary Showcase (3-Cols on XL) */}
        <div className="xl:col-span-3 flex flex-col gap-4">
          
          {/* Chef Signature Rotating Banner Container */}
          <div className="border-2 border-[#D4AF37]/35 rounded-2xl p-4 flex flex-col justify-between flex-1 relative overflow-hidden min-h-[290px] shadow-2xl text-left bg-black text-white">
            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <div 
                className="w-full h-full bg-cover bg-center opacity-40 transform scale-102 transition-all duration-1000 rotate-0"
                style={{ backgroundImage: `url(${promos[loungePromoIndex].code === 'FAM-FEAST' || promos[loungePromoIndex].code === 'CHEF-01' ? FEYEL_TIBS_BG : FAMILY_FEAST_BG})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/40"></div>
            </div>

            {/* Glowing Corner decoration */}
            <div className="relative z-10 flex justify-between items-center bg-transparent">
              <span className="inline-flex items-center gap-1 bg-[#C62828] border border-[#C62828]/50 text-[8px] tracking-widest text-white font-black uppercase px-2 py-0.5 rounded">
                <Sparkles className="w-2.5 h-2.5" /> Chef Recommendation
              </span>
              <span className="text-[9px] text-[#D4AF37] font-mono">CODE: {promos[loungePromoIndex].code}</span>
            </div>

            {/* Promotional content */}
            <div className="relative z-10 mt-12 mb-4 bg-transparent">
              <span className="text-[10px] text-gray-500 font-mono tracking-widest block uppercase mb-1">
                {promos[loungePromoIndex].title}
              </span>
              <h4 className="font-serif text-xl font-black text-[#D4AF37] leading-tight block">
                {promos[loungePromoIndex].dish}
              </h4>
              <p className="text-[11px] text-gray-300 mt-1.5 font-sans leading-relaxed">
                {promos[loungePromoIndex].desc}
              </p>
            </div>

            <div className="relative z-10 flex items-end justify-between border-t border-gray-805 pt-4 bg-transparent">
              <div>
                <span className="text-[8px] text-gray-505 uppercase block">{t.banquetPrice}</span>
                <span className="font-mono text-xl font-bold text-white tracking-tight">{promos[loungePromoIndex].price}</span>
              </div>
              <div className="text-right">
                <span className="text-[8px] bg-amber-500/10 border border-amber-550/40 text-[#D4AF37] px-2.5 py-1 rounded inline-block font-mono font-bold tracking-wider uppercase">
                  {t.orderAtCounter}
                </span>
              </div>
            </div>
          </div>

          {/* Traditional Ethiopian Music / Lounge Ambience Widget */}
          <div className={`p-4 rounded-2xl border text-left ${
            isLight ? 'bg-white border-gray-200' : 'bg-[#090909] border-gray-800'
          }`}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[8px] uppercase font-mono tracking-widest text-[#D4AF37] font-black">{t.tvLoungeAtmosphere}</span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#C62828]"></span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A]/80 border border-[#D4AF37]/35 flex items-center justify-center relative flex-shrink-0 animate-pulse">
                <Volume2 className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="truncate">
                <span className="text-[9px] text-gray-500 block uppercase font-mono">{t.tvCurrentlyPlaying}</span>
                <p className="text-xs font-serif font-bold tracking-wide truncate">{t.tvMasinkoWashint}</p>
                <p className="text-[9px] text-gray-500 leading-none mt-1">{t.tvInstrumentalMelodies}</p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
