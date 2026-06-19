import React, { useState } from 'react';
import { MenuItem } from '../types';
import { Flame, Star, X, Info, ShieldCheck, Heart, Sparkles, CheckSquare } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
  lang: Language;
  theme: 'dark' | 'light';
}

export default function ItemDetailModal({ item, onClose, lang, theme }: ItemDetailModalProps) {
  const [selectedSpiceLevel, setSelectedSpiceLevel] = useState<string>('Traditional');
  const [requiresExtraInjera, setRequiresExtraInjera] = useState<boolean>(false);
  const [successMsg, setSuccessMsg] = useState<boolean>(false);

  if (!item) return null;

  const t = TRANSLATIONS[lang];
  const isLight = theme === 'light';

  const getItemName = () => {
    if (lang === 'am' && item.nameAm) return item.nameAm;
    if (lang === 'om' && item.nameOm) return item.nameOm;
    return item.name;
  };

  const getItemDesc = () => {
    if (lang === 'am' && item.descriptionAm) return item.descriptionAm;
    if (lang === 'om' && item.descriptionOm) return item.descriptionOm;
    return item.description;
  };

  const spiceLevels = lang === 'am' ? [
    { name: 'አልጫ / ማቃጠል የሌለው', desc: 'ለህፃናትም የሚስማማ፣ የሚጥሚጣ ቅመም የሌለው' },
    { name: 'መካከለኛ ቅመም', desc: 'ከንጥር ቅቤ ጋር በሚገባ የተመጣጠነ ባህላዊ ጣዕም' },
    { name: 'ተጨማሪ አዋዜ 🔥', desc: 'በቀይ በርበሬ የሚዘጋጅ ጥሩ የላቀ ቅመም' },
    { name: 'በጣም የሚያቃጥል 🌶️🔥', desc: 'ለየት ባለ የሚጥሚጣ ዱቄት የተዘጋጀ' }
  ] : lang === 'om' ? [
    { name: 'Kunu / Alicha', desc: 'Mi\'eessituu malee baredaa daa\'immanif kan ta\'u' },
    { name: 'Mi\'eessituu Giddu galeessa', desc: 'Dhandhama aadaa dhadhaa kibbeh wajjin walmadaale' },
    { name: 'Awaaze Dabalataa 🔥', desc: 'Berbere aadaa gaddis qophaaye hoo\'aa' },
    { name: 'VIP Fire 🌶️🔥', desc: 'Mi\'eessituu mitmitaa aadaa addaa wajjin' }
  ] : [
    { name: 'Mild / Alicha', desc: 'Slightly aromatic, kids friendly, no mitmita' },
    { name: 'Traditional', desc: 'Correct heat balanced with niter kibbeh spiced butter' },
    { name: 'Extra Awaze 🔥', desc: 'Deep red chili cayenne paste added hot' },
    { name: 'VIP Fire 🌶️🔥', desc: 'Loaded with premium Mitmita highland powders' }
  ];

  const handleConfirmCustom = () => {
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-2xl rounded-3xl overflow-hidden relative border-2 transition-all duration-300 ${
          isLight 
            ? 'bg-[#FAF7F2] border-[#D4AF37] text-gray-950 shadow-2xl' 
            : 'bg-[#0F0F0F]/95 border-[#D4AF37]/45 text-white shadow-3xl shadow-[#D4AF37]/5'
        }`}
      >
        
        {/* Detail Top Close Button */}
        <button
          onClick={onClose}
          id="detail-modal-close"
          className={`absolute top-4 right-4 z-20 rounded-full p-2 border transition-all ${
            isLight
              ? 'bg-amber-100 hover:bg-amber-200 border-[#D4AF37]/35 text-gray-700'
              : 'bg-black/60 hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-[#D4AF37] border-[#D4AF37]/30 shadow-lg'
          }`}
          title="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-60 bg-cover bg-center overflow-hidden">
          <img
            src={item.image}
            alt={getItemName()}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

          {/* Floating tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <span className="bg-[#D4AF37] text-black font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded shadow-lg">
              {item.category.replace('-', ' ')}
            </span>
            {item.isChefChoice && (
              <span className="bg-red-600 text-white font-semibold text-[10px] tracking-widest uppercase px-3 py-1 rounded shadow-lg">
                ★ Chef Recommends
              </span>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto no-scrollbar">
          
          {/* Main Title and pricing */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/25 pb-4">
            <div>
              <h3 className="font-serif text-2xl font-black tracking-wide">
                {getItemName()}
              </h3>
              <p className="text-xs text-[#D4AF37] font-mono tracking-widest uppercase mt-0.5">{t.gastronomySeries}</p>
            </div>
            <div className="text-left sm:text-right">
              <span className="font-mono text-xl md:text-3xl font-black text-[#D4AF37]">
                {item.price} <span className="text-sm font-semibold text-gray-500">ETB</span>
              </span>
              <p className="text-[9px] text-[#C62828] font-mono tracking-widest leading-none mt-1 uppercase">{t.hajiCertified}</p>
            </div>
          </div>

          {/* Decriptions */}
          <div className="text-left">
            <span className="text-[9px] uppercase tracking-widest font-mono text-gray-500 block mb-1.5">{t.recipeComposition}</span>
            <p className={`text-xs font-sans leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
              {getItemDesc()}
            </p>
          </div>

          {/* Dynamic Spice Level Selector */}
          {item.category !== 'drinks' && item.category !== 'hot-drinks' && item.category !== 'cold-drinks' && (
            <div className="text-left">
              <span className="text-[9px] uppercase tracking-widest font-mono text-gray-500 block mb-1.5">{t.tailorHeat}</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {spiceLevels.map((lvl) => (
                  <button
                    key={lvl.name}
                    onClick={() => setSelectedSpiceLevel(lvl.name)}
                    id={`spice-level-btn-${lvl.name.replace(/\s+/g, '')}`}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      selectedSpiceLevel === lvl.name
                        ? isLight 
                          ? 'bg-[#85581A]/10 border-[#85581A] text-[#85581A] font-bold' 
                          : 'bg-[#C62828]/20 border-red-500 text-white font-semibold'
                        : isLight 
                          ? 'bg-white border-gray-200 text-gray-600 hover:text-black' 
                          : 'bg-[#121212]/85 border-gray-800 text-gray-400 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {(lvl.name.includes('🔥') || lvl.name.includes('🌶️')) && <Flame className="w-3.5 h-3.5 text-red-500" />}
                      <span className="text-xs">{lvl.name.split(' ').slice(0, 2).join(' ')}</span>
                    </div>
                    <span className="text-[8px] text-gray-500 font-sans block mt-1 leading-tight">{lvl.desc}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Traditional Accompaniments Checklist */}
          {item.category !== 'drinks' && item.category !== 'hot-drinks' && item.category !== 'cold-drinks' && (
            <div className={`border p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left ${
              isLight ? 'bg-amber-50/50 border-[#D4AF37]/30' : 'bg-[#121212] border-gray-800'
            }`}>
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="text-xs font-bold uppercase font-serif">{t.teffInjeraOption}</h5>
                  <p className={`text-[10px] ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>{t.teffInjeraDesc}</p>
                </div>
              </div>
              <button
                onClick={() => setRequiresExtraInjera(!requiresExtraInjera)}
                id="btn-extra-injera"
                className={`px-3 py-1.5 rounded-full text-[10px] font-semibold border transition-all whitespace-nowrap self-end sm:self-auto cursor-pointer ${
                  requiresExtraInjera 
                    ? 'bg-[#D4AF37] text-black border-transparent shadow' 
                    : 'bg-black/90 text-[#D4AF37] border-[#D4AF37]/45 hover:bg-[#D4AF37]/10'
                }`}
              >
                {requiresExtraInjera ? t.extraInjeraAdded : t.extraInjeraBtn}
              </button>
            </div>
          )}

          {/* SLA, health and premium assurance flags */}
          <div className="flex flex-wrap items-center gap-4 text-[9px] font-mono border-t border-gray-200/25 pt-4 text-gray-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> {t.slaughterCertified}
            </span>
            <span className="flex items-center gap-1">
              <Heart className="w-3.5 h-3.5 text-[#C62828]" /> {t.organicHighlandFeed}
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" /> {t.michelinAtmosphere}
            </span>
          </div>

          {/* Confirm Button */}
          <div className="flex gap-3 pt-2">
            <button
              onClick={onClose}
              className={`px-5 py-3 rounded-xl text-xs font-semibold border transition-all flex-1 ${
                isLight 
                  ? 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100' 
                  : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-850'
              }`}
            >
              {t.backToMenu}
            </button>
            <button
              onClick={handleConfirmCustom}
              id="btn-confirm-customization"
              className="px-6 py-3 rounded-xl text-xs font-black bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white flex-[2] text-center hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all cursor-pointer"
            >
              {successMsg ? t.selectionsSaved : t.confirmCustomization}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
