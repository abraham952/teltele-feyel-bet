import React, { useState, useMemo } from 'react';
import { MenuItem, MenuCategoryKey } from '../types';
import { MENU_ITEMS, CATEGORIES } from '../data';
import { Search, Flame, Leaf, HelpCircle, Utensils, Star, Check, Plus, Minus, Receipt, Send, Sparkles, AlertCircle } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface MobileMenuViewProps {
  onSelectItem: (item: MenuItem) => void;
  lang: Language;
  theme: 'dark' | 'light';
  onOpenReservation: () => void;
}

export default function MobileMenuView({ onSelectItem, lang, theme, onOpenReservation }: MobileMenuViewProps) {
  const t = TRANSLATIONS[lang];
  const isLight = theme === 'light';

  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryKey | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Tag Filters
  const [filterSpicy, setFilterSpicy] = useState(false);
  const [filterGlutenFree, setFilterGlutenFree] = useState(false);
  const [filterVegan, setFilterVegan] = useState(false);

  // Cart / Table Planner Simulation
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  const [tableNumber, setTableNumber] = useState<string>('Lounge 04');
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState<string | null>(null);
  const [itemNotes, setItemNotes] = useState<{ [key: string]: string }>({});

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

  // Filter & Search Logic
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Text search
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const localizedName = getItemName(item).toLowerCase();
        const localizedDesc = getItemDesc(item).toLowerCase();
        const defaultName = item.name.toLowerCase();
        const defaultDesc = item.description.toLowerCase();
        
        const matchesName = localizedName.includes(query) || defaultName.includes(query);
        const matchesDesc = localizedDesc.includes(query) || defaultDesc.includes(query);
        
        if (!matchesName && !matchesDesc) return false;
      }
      // Tag filters
      if (filterSpicy && !item.isSpicy) return false;
      if (filterGlutenFree && !item.isGlutenFree) return false;
      if (filterVegan && !item.isVegan) return false;

      return true;
    });
  }, [selectedCategory, searchQuery, filterSpicy, filterGlutenFree, filterVegan, lang]);

  // Cart Operations
  const addToCart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCart(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }));
    setIsOrderPlaced(false);
  };

  const removeFromCart = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCart(prev => {
      const copy = { ...prev };
      if (copy[id] <= 1) {
        delete copy[id];
      } else {
        copy[id]--;
      }
      return copy;
    });
    setIsOrderPlaced(false);
  };

  const getCartCount = (id: string) => cart[id] || 0;

  const cartTotal = useMemo(() => {
    return Object.entries(cart).reduce((total: number, [id, qty]) => {
      const item = MENU_ITEMS.find(m => m.id === id);
      return total + (item ? item.price * (qty as number) : 0);
    }, 0);
  }, [cart]);

  const serviceCharge = useMemo(() => Math.round(cartTotal * 0.10), [cartTotal]);
  const vat = useMemo(() => Math.round((cartTotal + serviceCharge) * 0.15), [cartTotal, serviceCharge]);
  const grandTotal = useMemo(() => cartTotal + serviceCharge + vat, [cartTotal, serviceCharge, vat]);

  const handlePlaceOrder = () => {
    setIsOrderPlaced(true);
    setTimeout(() => {
      document.getElementById('simulated-receipt')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleResetOrder = () => {
    setCart({});
    setItemNotes({});
    setIsOrderPlaced(false);
  };

  // Theme styles variables
  const cardBgClass = isLight 
    ? 'bg-white border-[#D4AF37]/25 text-gray-900 shadow-md hover:shadow-lg hover:border-[#D4AF37]/50' 
    : 'bg-[#121212]/90 border-[#D4AF37]/15 text-white shadow-xl hover:border-[#D4AF37]/35';

  const textMutedClass = isLight ? 'text-gray-600' : 'text-gray-400';
  const textTitleClass = isLight ? 'text-gray-900' : 'text-white';
  const heroBackgroundImage = new URL('../assets/images/user_real_storefront_final_1781856959733.jpg', import.meta.url).href;

  return (
    <div className="w-full pb-20">
      
      {/* Search & Banner Frame */}
      <section className="relative h-72 w-full bg-cover bg-center overflow-hidden flex items-center justify-center pt-8 border-b border-[#D4AF37]/25"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, ${isLight ? '0.6' : '0.8'}), rgba(0, 0, 0, ${isLight ? '0.75' : '0.92'})), url(${heroBackgroundImage})` }}
      >
        <div className="text-center px-4 max-w-2xl mx-auto z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#D4AF37]/15 border border-[#D4AF37]/45 rounded-full text-xs text-[#D4AF37] font-semibold mb-3 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-spin" /> Luxury Dining & Lounge Vibe
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white uppercase">
            {t.exploreFlavors}
          </h2>
          <p className="text-xs text-gray-300 mt-2 tracking-wide font-sans max-w-md mx-auto leading-relaxed">
            {t.tablesideSlogan}
          </p>

          {/* Search Box */}
          <div className="mt-5 max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              id="search-input"
              className="w-full bg-[#1A1A1A]/95 text-xs pl-11 pr-4 py-3.5 rounded-full border border-[#D4AF37]/35 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all duration-300"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 flex flex-col lg:flex-row gap-8 relative z-10">
        
        {/* Main Menu Panel (Left 2/3) */}
        <div className="flex-1">
          
          {/* Quick Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200/25">
            {/* Category Select Pillbox */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 md:mx-0 md:px-0">
              <button
                onClick={() => setSelectedCategory('all')}
                id="cat-all"
                className={`flex-shrink-0 px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white font-bold'
                    : isLight
                      ? 'bg-white text-gray-600 hover:text-black border border-gray-200'
                      : 'bg-[#151515] text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {t.allCategories}
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key as MenuCategoryKey)}
                  id={`cat-${cat.key}`}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-xs tracking-wider uppercase font-medium transition-all ${
                    selectedCategory === cat.key
                      ? 'bg-gradient-to-r from-[#85581A] to-[#D4AF37] text-white font-bold'
                      : isLight 
                        ? 'bg-white text-gray-600 hover:text-black border border-gray-200'
                        : 'bg-[#151515] text-gray-400 hover:text-white border border-gray-800'
                  }`}
                >
                  {getCategoryLabel(cat)}
                </button>
              ))}
            </div>

            {/* Diet Tag Filters */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setFilterSpicy(!filterSpicy)}
                id="filter-spicy"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] transition-all border ${
                  filterSpicy 
                    ? 'bg-[#C62828]/20 border-[#C62828] text-[#E53935] font-semibold' 
                    : isLight 
                      ? 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'
                      : 'bg-[#151515] border-gray-850 text-gray-450 hover:text-gray-300'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>{t.spicyMitmita}</span>
              </button>
              <button
                onClick={() => setFilterGlutenFree(!filterGlutenFree)}
                id="filter-gluten-free"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] transition-all border ${
                  filterGlutenFree 
                    ? 'bg-amber-500/10 border-amber-500 text-amber-500 dark:text-amber-400 font-semibold' 
                    : isLight
                      ? 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'
                      : 'bg-[#151515] border-gray-850 text-gray-450 hover:text-gray-300'
                }`}
              >
                <span className="font-semibold text-[10px]">100%</span>
                <span>{t.teffGf}</span>
              </button>
              <button
                onClick={() => setFilterVegan(!filterVegan)}
                id="filter-vegan"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] transition-all border ${
                  filterVegan 
                    ? 'bg-green-500/20 border-green-500 text-green-600 dark:text-green-400 font-semibold' 
                    : isLight
                      ? 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'
                      : 'bg-[#151515] border-gray-850 text-gray-450 hover:text-gray-300'
                }`}
              >
                <Leaf className="w-3.5 h-3.5" />
                <span>{t.veganYetsom}</span>
              </button>
            </div>
          </div>

          {/* Grid of Dishes */}
          {filteredItems.length === 0 ? (
            <div className={`p-12 text-center rounded-3xl border border-dashed text-left max-w-lg mx-auto mt-8 ${
              isLight ? 'bg-amber-50/20 border-[#D4AF37]/40' : 'bg-black/40 border-[#D4AF37]/30'
            }`}>
              <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto opacity-60 mb-3" />
              <h3 className={`text-lg font-serif font-medium ${textTitleClass}`}>{t.noDishesFound}</h3>
              <p className={`text-xs mt-2 ${textMutedClass}`}>
                {t.noDishesDesc}
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setFilterSpicy(false);
                  setFilterGlutenFree(false);
                  setFilterVegan(false);
                }}
                className="mt-4 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#D4AF37] text-black hover:bg-[#b08e2a] transition-all"
              >
                {t.resetFilters}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredItems.map((item) => {
                const count = getCartCount(item.id);
                return (
                  <div
                    key={item.id}
                    onClick={() => onSelectItem(item)}
                    id={`menu-item-card-${item.id}`}
                    className={`group rounded-3xl border overflow-hidden transition-all duration-305 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1 ${cardBgClass}`}
                  >
                    {/* Food Image Container */}
                    <div className="relative h-48 w-full overflow-hidden bg-black/60">
                      <img
                        src={item.image}
                        alt={getItemName(item)}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Ambient Overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                      {/* Floating Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        {item.isChefChoice && (
                          <span className="flex items-center gap-1 bg-gradient-to-r from-yellow-600 to-[#D4AF37] text-black font-semibold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded shadow-lg">
                            <Star className="w-3 h-3 fill-current" /> Chef Choice
                          </span>
                        )}
                        {item.isPopular && (
                          <span className="flex items-center gap-1 bg-[#C62828] text-white font-semibold text-[9px] tracking-widest uppercase px-2.5 py-1 rounded shadow-lg">
                            ★ Popolar
                          </span>
                        )}
                      </div>

                      {/* Spicy indicator in corner */}
                      <div className="absolute top-3 right-3 flex gap-1.5">
                        {item.isSpicy && (
                          <span className="bg-orange-600 text-white rounded-full p-1.5 shadow-lg" title="Spicy">
                            <Flame className="w-3.5 h-3.5 fill-current" />
                          </span>
                        )}
                        {item.isVegan && (
                          <span className="bg-green-600 text-white rounded-full p-1.5 shadow-lg" title="Vegan">
                            <Leaf className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>

                      {/* Display price in bottom-right corner over image */}
                      <div className="absolute bottom-3 right-3 bg-black/80 border border-[#D4AF37]/50 rounded-lg px-3 py-1 font-mono text-sm tracking-wide text-[#D4AF37] font-semibold">
                        {item.price} ETB
                      </div>
                    </div>

                    {/* Food Details */}
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <h4 className="font-serif text-lg font-semibold tracking-wide group-hover:text-[#D4AF37] transition-all">
                            {getItemName(item)}
                          </h4>
                        </div>
                        <p className={`text-xs font-sans leading-relaxed line-clamp-2 ${textMutedClass}`}>
                          {getItemDesc(item)}
                        </p>
                      </div>

                      {/* Bottom row: order simulation actions */}
                      <div className="flex items-center justify-between mt-5 pt-3.5 border-t border-gray-200/20">
                        {/* Dietary tags info */}
                        <div className="flex gap-2">
                          {item.isGlutenFree && (
                            <span className="text-[10px] font-mono tracking-widest text-[#D4AF37]" title="Made with 100% clean sourdough teff">
                              [TEFF-GF]
                            </span>
                          )}
                          {!item.isAvailable && (
                            <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest">[SOLD OUT]</span>
                          )}
                        </div>

                        {/* Interactive Cart Button */}
                        <div className="flex items-center gap-1">
                          {count > 0 ? (
                            <div className="flex items-center bg-black/90 border border-[#D4AF37]/50 rounded-full py-1 px-2.5 shadow-lg">
                              <button
                                onClick={(e) => removeFromCart(item.id, e)}
                                id={`btn-minus-${item.id}`}
                                className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1F1F1F] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="mx-2.5 font-mono text-xs text-[#D4AF37] font-bold">
                                {count}
                              </span>
                              <button
                                onClick={(e) => addToCart(item.id, e)}
                                id={`btn-plus-inc-${item.id}`}
                                className="w-5 h-5 flex items-center justify-center rounded-full bg-[#1F1F1F] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={(e) => addToCart(item.id, e)}
                              disabled={!item.isAvailable}
                              id={`btn-add-${item.id}`}
                              className={`text-[10px] font-bold uppercase tracking-wider transition-all px-4 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:border-transparent cursor-pointer`}
                            >
                              {t.addToTablePlan.split(' ')[0]} {t.addToTablePlan.split(' ').slice(1).join(' ')}
                            </button>
                          )}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>

        {/* Tableside Interactive Order Planner (Right 1/3) */}
        <div className="w-full lg:w-96">
          <div className={`rounded-3xl p-6 sticky top-28 border transition-all duration-300 shadow-2xl ${
            isLight 
              ? 'bg-[#FAF7F2] border-[#D4AF37]/35 text-gray-900' 
              : 'bg-[#0B0B0B]/95 border-[#D4AF37]/30 text-white'
          }`}>
            
            {/* Planner Header */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-200/20">
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[#D4AF37]" />
                <div>
                  <h3 className="font-serif text-base font-bold uppercase tracking-wide">{t.tablesidePlannerTitle}</h3>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">{t.tablesidePlannerDesc}</p>
                </div>
              </div>
              <span className="text-[10px] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/35 px-2 py-0.5 rounded font-mono font-bold">
                {Object.values(cart).reduce((a: number, b: number) => a + b, 0)} Items
              </span>
            </div>

            {/* Table Selector */}
            <div className="mt-4 flex items-center justify-between bg-black/45 p-2 border border-gray-200/10 rounded-xl">
              <label htmlFor="table-selector" className="text-[9px] text-gray-400 font-mono tracking-widest">{t.tableNumberLabel}</label>
              <select
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                id="table-selector"
                className="bg-black/95 text-xs text-[#D4AF37] font-bold border-none focus:ring-0 focus:outline-none cursor-pointer text-right w-28"
              >
                <option value="Lounge 04">Lounge 04</option>
                <option value="VIP Saloon 1">VIP Saloon 1</option>
                <option value="VIP Saloon 2">VIP Saloon 2</option>
                <option value="Terrace T8">Terrace T8</option>
                <option value="Family Room 1">Family Room 1</option>
                <option value="Table 12">Table 12</option>
              </select>
            </div>

            {/* Cart Items List */}
            <div className="mt-5 space-y-4 max-h-60 overflow-y-auto no-scrollbar">
              {Object.keys(cart).length === 0 ? (
                <div className="py-8 text-center bg-black/15 rounded-2xl border border-dashed border-gray-200/10">
                  <Receipt className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-xs text-gray-400 px-3">{t.banquetPlanEmpty}</p>
                  <p className="text-[10px] text-gray-500 mt-1 px-3 leading-normal">{t.banquetPlanEmptySub}</p>
                </div>
              ) : (
                Object.entries(cart).map(([id, qty]) => {
                  const item = MENU_ITEMS.find(m => m.id === id);
                  if (!item) return null;
                  return (
                    <div key={id} className="flex justify-between items-start gap-2 text-xs border-b border-gray-200/10 pb-3">
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold">{getItemName(item)}</span>
                          <span className="text-[9px] text-gray-500 font-mono">x{qty}</span>
                        </div>
                        
                        {/* Item note trigger */}
                        {itemNotes[id] ? (
                          <p className="text-[10px] italic text-[#D4AF37] mt-1 bg-amber-500/5 px-2 py-0.5 rounded border border-[#D4AF37]/10 flex items-center justify-between">
                            <span>&ldquo;{itemNotes[id]}&rdquo;</span>
                            <button onClick={() => {
                              const notesCopy = { ...itemNotes };
                              delete notesCopy[id];
                              setItemNotes(notesCopy);
                            }} className="hover:text-red-500 font-bold ml-1 text-[8px]">×</button>
                          </p>
                        ) : (
                          <button
                            onClick={() => setIsAddingNote(isAddingNote === id ? null : id)}
                            className="text-[9px] text-gray-500 hover:text-[#D4AF37] underline mt-1 block"
                          >
                            {t.addSpicesNote}
                          </button>
                        )}

                        {isAddingNote === id && (
                          <div className="mt-2 flex gap-1">
                            <input
                              type="text"
                              placeholder={t.spiceNotePlaceholder}
                              id={`note-input-${id}`}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  const val = (e.target as HTMLInputElement).value;
                                  if (val.trim()) {
                                    setItemNotes(prev => ({ ...prev, [id]: val.trim() }));
                                  }
                                  setIsAddingNote(null);
                                }
                              }}
                              className="bg-black text-[10px] text-white p-1.5 border border-amber-500/35 rounded flex-1 focus:outline-none"
                            />
                            <button
                              onClick={(e) => {
                                const input = document.getElementById(`note-input-${id}`) as HTMLInputElement;
                                if (input && input.value.trim()) {
                                  setItemNotes(prev => ({ ...prev, [id]: input.value.trim() }));
                                }
                                setIsAddingNote(null);
                              }}
                              className="bg-[#D4AF37] text-black text-[9px] font-bold px-2 py-1 rounded"
                            >
                              ✓
                            </button>
                          </div>
                        )}
                      </div>
                      <span className="font-mono text-gray-500 whitespace-nowrap">
                        {item.price * (qty as number)} ETB
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Calculations Panel */}
            {Object.keys(cart).length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200/20 space-y-2 text-xs font-sans">
                <div className="flex justify-between text-gray-400">
                  <span>{t.subtotal}</span>
                  <span className="font-mono font-semibold">{cartTotal} ETB</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>{t.serviceCharge}</span>
                  <span className="font-mono">{serviceCharge} ETB</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>{t.govVat}</span>
                  <span className="font-mono">{vat} ETB</span>
                </div>
                <div className="flex justify-between font-bold text-sm pt-2 border-t border-gray-200/25">
                  <span className="text-[#D4AF37]">{t.totalEstimate.split(':')[0]}:</span>
                  <span className="text-[#D4AF37] font-mono">{grandTotal} ETB</span>
                </div>

                {/* Simulated Order Button */}
                {!isOrderPlaced ? (
                  <button
                    onClick={handlePlaceOrder}
                    id="btn-place-order"
                    className="w-full mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-[#85581A] to-[#D4AF37] hover:shadow-[#D4AF37]/35 hover:shadow-lg hover:scale-[1.02] text-white font-bold uppercase tracking-wider py-3 rounded-xl transition-all duration-300"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{t.submitTableOrder}</span>
                  </button>
                ) : (
                  <button
                    onClick={handleResetOrder}
                    id="btn-reset-order"
                    className="w-full mt-4 bg-gray-900 border border-red-500/30 text-red-400 py-2.5 rounded-xl text-center text-xs hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer"
                  >
                    {t.clearOrder}
                  </button>
                )}
              </div>
            )}

            {/* Dynamic Simulated Digital Receipt Code / Waiter Callback Panel */}
            {isOrderPlaced && Object.keys(cart).length > 0 && (
              <div id="simulated-receipt" className="mt-6 bg-black p-4 rounded-2xl border border-green-500/40 text-left animate-pulse-slow">
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Check className="w-4 h-4 bg-green-500 text-black rounded-full p-0.5" />
                  <span className="text-xs font-bold tracking-wider uppercase font-mono">{t.transmissionComplete}</span>
                </div>
                
                <p className="text-[10px] text-gray-400 leading-relaxed font-sans">
                  {t.kitchenRegisteredMsg.replace('{tableNumber}', tableNumber)}
                </p>

                <div className="mt-3 bg-gray-900 p-2.5 rounded border border-gray-800 text-center font-mono">
                  <span className="text-gray-450 text-[9px] block uppercase">{t.waiterReceiptId}</span>
                  <span className="text-white text-base font-bold tracking-widest text-[#D4AF37]">
                    TF-9241-{tableNumber.replace(/\s+/g, '')}
                  </span>
                </div>

                {/* Simulated Waiter QR Code */}
                <div className="relative mt-4 w-28 h-28 mx-auto bg-white p-2 rounded-lg flex items-center justify-center shadow-lg">
                  <div className="w-full h-full flex flex-col justify-between items-center opacity-95 border-2 border-dashed border-[#0F0F0F] p-1">
                    <div className="grid grid-cols-4 gap-1 w-full h-full">
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="border border-black"></div>
                      <div className="bg-black"></div>
                      <div className="border border-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="border border-black"></div>
                      <div className="bg-black"></div>
                      <div className="border border-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                      <div className="border border-black"></div>
                      <div className="bg-black"></div>
                      <div className="bg-black"></div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 -bottom-3 text-[8px] font-mono font-bold text-center py-0.5 bg-black text-green-400 border border-green-500/20 rounded uppercase">
                    {t.kitchenSent}
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-4 pt-4 border-t border-gray-200/10 flex items-start gap-2 text-[10px] text-gray-500">
              <AlertCircle className="w-3.5 h-3.5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <span className="text-left">{t.freshDailyNotice}</span>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
