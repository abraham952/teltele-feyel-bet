export type Language = 'en' | 'am' | 'om';

export interface TranslationSet {
  // Brand Header
  loungeTitle: string;
  loungeSubtitle: string;
  viewMenu: string;
  reserveTable: string;
  orderNow: string;
  displayMode: string;
  mobileMenu: string;
  tvMenuBoard: string;
  addressBole: string;
  addressOpposite: string;
  loungeTime: string;
  genuineTag: string;

  // Hero Section
  heroTitle1: string;
  heroTitle2: string;
  heroDesc: string;
  reviewsCount: string;
  hajiCertified: string;

  // Categories Toolbar
  allCategories: string;
  spicyMitmita: string;
  teffGf: string;
  veganYetsom: string;
  noDishesFound: string;
  noDishesDesc: string;
  resetFilters: string;
  addToTablePlan: string;
  searchPlaceholder: string;
  exploreFlavors: string;
  tablesideSlogan: string;

  // Tableside Planner (Cart)
  tablesidePlannerTitle: string;
  tablesidePlannerDesc: string;
  tableNumberLabel: string;
  banquetPlanEmpty: string;
  banquetPlanEmptySub: string;
  addSpicesNote: string;
  spiceNotePlaceholder: string;
  subtotal: string;
  serviceCharge: string;
  govVat: string;
  totalEstimate: string;
  submitTableOrder: string;
  clearOrder: string;
  transmissionComplete: string;
  kitchenRegisteredMsg: string;
  waiterReceiptId: string;
  kitchenSent: string;
  freshDailyNotice: string;

  // Item Detail Modal
  recipeComposition: string;
  tailorHeat: string;
  teffInjeraOption: string;
  teffInjeraDesc: string;
  extraInjeraBtn: string;
  extraInjeraAdded: string;
  slaughterCertified: string;
  organicHighlandFeed: string;
  michelinAtmosphere: string;
  backToMenu: string;
  confirmCustomization: string;
  selectionsSaved: string;
  gastronomySeries: string;

  // Reservation Form
  reservationFormTitle: string;
  reservationFormSubtitle: string;
  selectDate: string;
  selectTime: string;
  numberOfGuests: string;
  specialRequests: string;
  contactName: string;
  contactPhone: string;
  contactEmail: string;
  vipLoungeUpgrade: string;
  vipLoungeDesc: string;
  checkAvailability: string;
  checkingAvailability: string;
  confirmReservationBtn: string;
  reservationConfirmed: string;
  reservationConfirmedMsg: string;
  bookingCode: string;
  closeWindow: string;

  // TV Menu board
  tvFeaturedSelection: string;
  tvEstPrepTime: string;
  tvEstTimeText: string;
  tvKitchenAnnouncement: string;
  tvAnnouncementText: string;
  tvInteractiveSlogan: string;
  tvLoungeAtmosphere: string;
  tvCurrentlyPlaying: string;
  tvMasinkoWashint: string;
  tvInstrumentalMelodies: string;
  tvNextSlide: string;
  tvAutoplayOn: string;
  tvAutoplayOff: string;
  orderAtCounter: string;
  banquetPrice: string;
  tvDisplayActive: string;
  tvSmartTVFeed: string;
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  en: {
    loungeTitle: "TALTELE",
    loungeSubtitle: "FEYEL BET",
    viewMenu: "View Menu",
    reserveTable: "Reserve Table",
    orderNow: "Order Now",
    displayMode: "Display Mode:",
    mobileMenu: "Mobile / QR Menu",
    tvMenuBoard: "TV Menu Board",
    addressBole: "Bole Road, Addis Ababa",
    addressOpposite: "Opposite Welosefer",
    loungeTime: "LIVE LOUNGE TIME",
    genuineTag: "Authentic",

    heroTitle1: "Authentic Taste.",
    heroTitle2: "Michelin-Inspired Craft.",
    heroDesc: "Taltele Feyel Bet is premium Ethiopian gastronomy defined. Our grass-fed meat is harvested daily from Shoa, combined with organic herbs, hand-milled spices, and slow-fried to sizzling perfection. Discover our traditional specialties.",
    reviewsCount: "1,200+ Guest Reviews",
    hajiCertified: "Haji Certified Slaughter",

    allCategories: "All Feast Categories",
    spicyMitmita: "Spicy (Mitmita)",
    teffGf: "Teff / GF",
    veganYetsom: "Vegan / Yetsom",
    noDishesFound: "No Dishes Found",
    noDishesDesc: "We couldn't find matching products with the selected tags or search query. Try removing your filters!",
    resetFilters: "Reset All Filters",
    addToTablePlan: "Add to Table Plan",
    searchPlaceholder: "Search dishes (e.g. Feyel Tibs, Kitfo, Shiro)...",
    exploreFlavors: "EXPLORE THE TALTELE FLAVORS",
    tablesideSlogan: "Scan the QR code at your table to order. Below, browse our chef-designed offerings, tailor your spices, and preview your premium banquet plan.",

    tablesidePlannerTitle: "Tableside Planner",
    tablesidePlannerDesc: "Real-time order estimator",
    tableNumberLabel: "TABLE #",
    banquetPlanEmpty: "Your tableside banquet plan is empty.",
    banquetPlanEmptySub: "Select our Signature Feyel Specials to compose your feast!",
    addSpicesNote: "+ Add custom spices/note",
    spiceNotePlaceholder: "e.g. Extra hot Awaze, medium rare...",
    subtotal: "Subtotal:",
    serviceCharge: "10% Lounge Service:",
    govVat: "15% Gov VAT:",
    totalEstimate: "Total Estimate:",
    submitTableOrder: "Submit Table Order",
    clearOrder: "Clear Order & Start New",
    transmissionComplete: "Transmission Complete",
    kitchenRegisteredMsg: "Your kitchen ticket has been registered for VIP Table {tableNumber}. A waiter will approach you shortly. Present the code below or scan the generated QR ticket.",
    waiterReceiptId: "WAITER RECEIPT ID",
    kitchenSent: "KITCHEN SENT",
    freshDailyNotice: "100% organic local grass-fed highland goat meat is guaranteed slaughtered fresh daily under traditional oversight.",

    recipeComposition: "Heritage Recipe Composition",
    tailorHeat: "Tailor Heat / Mitmita Levels",
    teffInjeraOption: "Genuine Teff sourdough Injera Option",
    teffInjeraDesc: "Every main dish comes with 3 rolled sheets of pre-fermented sorghum/teff free-of-charge.",
    extraInjeraBtn: "+ Add Extra Injera",
    extraInjeraAdded: "✓ Extra Injera (+30 ETB)",
    slaughterCertified: "SLAUGHTER CERTIFIED",
    organicHighlandFeed: "100% ORGANIC HIGHLAND FEED",
    michelinAtmosphere: "MICHELIN ATMOSPHERE",
    backToMenu: "Back to Menu",
    confirmCustomization: "Confirm Tableside Customization",
    selectionsSaved: "✓ Selections Saved",
    gastronomySeries: "Taltele Gastronomy Series",

    reservationFormTitle: "Luxury Table Reservation",
    reservationFormSubtitle: "Book a premium banquet table or private VIP saloon",
    selectDate: "Select Date",
    selectTime: "Select Time",
    numberOfGuests: "Number of Guests",
    specialRequests: "Special Requests / Spices Preference",
    contactName: "Your Name",
    contactPhone: "Phone Number",
    contactEmail: "Email Address (Optional)",
    vipLoungeUpgrade: "VIP Lounge Private Saloon Upgrade",
    vipLoungeDesc: "Includes central Mesob setup, custom coffee ceremony, washint player and secure parking.",
    checkAvailability: "Verify Availability",
    checkingAvailability: "Checking VIP Allocations...",
    confirmReservationBtn: "Secure Luxury Booking",
    reservationConfirmed: "Reservation Secured!",
    reservationConfirmedMsg: "Your premium table has been reserved successfully. A confirmation SMS is dispatched to your registered phone. Please present this luxury booking invitation upon arrival.",
    bookingCode: "VIP BOOKING CODE",
    closeWindow: "Close Reservation Window",

    tvFeaturedSelection: "Featured Selection",
    tvEstPrepTime: "Est. Preparation",
    tvEstTimeText: "15 - 25 MINUTES MAXIMUM",
    tvKitchenAnnouncement: "KITCHEN ANNOUNCEMENT",
    tvAnnouncementText: "✨ Traditional coffee ceremony (Buna) begins promptly at 2:00 PM and 7:00 PM in the central pavilion. Salted popcorn is complimentary with every premium Jebena brew. | Our organic grass-fed goat herds are handpicked daily from Semien Shoa highlands.",
    tvInteractiveSlogan: "SCAN OR ORDER AT TABLE",
    tvLoungeAtmosphere: "Live Lounge Atmosphere",
    tvCurrentlyPlaying: "Currently playing in hall",
    tvMasinkoWashint: "Classical Masinko & Washint",
    tvInstrumentalMelodies: "Instrumental Ethiopian Melodies",
    tvNextSlide: "Next Slide",
    tvAutoplayOn: "Autoplay On",
    tvAutoplayOff: "Paused",
    orderAtCounter: "Order at Counter",
    banquetPrice: "BANQUET PRICE",
    tvDisplayActive: "Live Active Display",
    tvSmartTVFeed: "Smart TV Feed"
  },
  am: {
    loungeTitle: "ታልተለ",
    loungeSubtitle: "የፍየል ቤት",
    viewMenu: "ምናሌ ይመልከቱ",
    reserveTable: "ጠረጴዛ ያስይዙ",
    orderNow: "አሁን ያዝዙ",
    displayMode: "የማሳያ ሁኔታ:",
    mobileMenu: "ሞባይል / QR ምናሌ",
    tvMenuBoard: "ቲቪ ማሳያ ቦርድ",
    addressBole: "ቦሌ መንገድ ፣ አዲስ አበባ",
    addressOpposite: "ወሎ ሰፈር ፊት ለፊት",
    loungeTime: "የቀጥታ ላውንጅ ሰዓት",
    genuineTag: "ባህላዊ",

    heroTitle1: "እውነተኛ ጣዕም።",
    heroTitle2: "በጥበብ የተዘጋጀ ሙያ።",
    heroDesc: "ታልተለ የፍየል ቤት የላቀ የኢትዮጵያ ስነ-ምግብ መገለጫ ነው። በየቀኑ ከሸዋ በጥንቃቄ የተመረጡ የፍየል ስጋዎች ከባህላዊ ቅመማ ቅመሞች እና ከንጥር ቅቤ ጋር ተዋህደው በከፍተኛ እሳት ላይ ተጠብሰው ይቀርባሉ። ለየት ያሉ ምግቦቻችንን ይጎብኙ።",
    reviewsCount: "1,200+ የደንበኛ ምስክርነት",
    hajiCertified: "በእስልምና ወግ የታረደ (ሀላል)",

    allCategories: "ሁሉንም ምግቦች ይመልከቱ",
    spicyMitmita: "የሚጥሚጣ ቅመም (ማቃጠያ)",
    teffGf: "የጤፍ እንጀራ (ከግሉተን ነፃ)",
    veganYetsom: "የጾም ምግቦች / ቪጋን",
    noDishesFound: "የተገኘ ምግብ የለም",
    noDishesDesc: "ከተመረጡት ታጎች ወይም ፍለጋዎች ጋር የሚስማማ ምግብ ማግኘት አልቻልንም። እባክዎ ማጣሪያዎችን ያጽዱ!",
    resetFilters: "ማጣሪያዎችን አጽዳ",
    addToTablePlan: "የእኔ ጠረጴዛ ላይ ጨምር",
    searchPlaceholder: "ምግብ ይፈልጉ (ለምሳሌ የፍየል ጥብስ፣ ክትፎ፣ ሽሮ)...",
    exploreFlavors: "የታልተለ ልዩ ጣዕሞችን ይመርምሩ",
    tablesideSlogan: "ለማዘዝ በጠረጴዛዎ ላይ ያለውን የQR ኮድ ይቃኙ። ከዚህ በታች የምግብ አዘገጃጀቶቻችንን ይመልከቱ፣ ቅመማ ቅመሞችን ይምረጡ እና የግብዣ እቅድዎን ይጎብኙ።",

    tablesidePlannerTitle: "የጠረጴዛ እቅድ አውጪ",
    tablesidePlannerDesc: "የቀጥታ ሂሳብና ዝግጅት መገመቻ",
    tableNumberLabel: "ጠረጴዛ #",
    banquetPlanEmpty: "የዚህ ጠረጴዛ ዝርዝር ባዶ ነው።",
    banquetPlanEmptySub: "ግብዣዎን ለመጀመር ከላይ ካሉ ልዩ የፍየል ምግቦች ጠረጴዛዎ ላይ ይጨምሩ!",
    addSpicesNote: "+ ልዩ ፍላጎት ወይም ማስታወሻ ይጨምሩ",
    spiceNotePlaceholder: "ለምሳሌ፡ ተጨማሪ አዋዜ ይጨመርበት፣ መካከለኛ የበሰለ ስጋ...",
    subtotal: "የምግብ ዋጋ ድምር:",
    serviceCharge: "10% የላውንጅ አገልግሎት ክፍያ:",
    govVat: "15% የመንግስት ቫት (VAT):",
    totalEstimate: "አጠቃላይ የሚጠበቅ ሂሳብ:",
    submitTableOrder: "ትዕዛዙን አስተላልፍ",
    clearOrder: "አዲስ ትዕዛዝ ለመጀመር አጽዳ",
    transmissionComplete: "ትዕዛዙ በተሳካ ሁኔታ ተላልፏል",
    kitchenRegisteredMsg: "ትዕዛዝዎ ለጠረጴዛ VIP {tableNumber} በኩሽና ተመዝግቧል። አስተናጋጅ በአጭር ጊዜ ውስጥ ወደ እርስዎ ይመጣል። እባክዎን ከታች ያለውን ኮድ ያሳዩ ወይም ቲኬቱን ያስይዙ።",
    waiterReceiptId: "የአስተናጋጅ ደረሰኝ መለያ ኮድ",
    kitchenSent: "ወደ ኩሽና ተልኳል",
    freshDailyNotice: "100% ከተፈጥሮአዊ የደጋማ ስፍራ የፍየል ስጋ በየቀኑ ትኩስ ታርዶ በባህላዊ ጥንቃቄ መዘጋጀቱ የተረጋገጠ ነው።",

    recipeComposition: "የባህላዊው አዘገጃጀት ይዘት",
    tailorHeat: "የማቃጠል መጠን / የሚጥሚጣ ምርጫ",
    teffInjeraOption: "እውነተኛ የጤፍ እንጀራ አማራጭ",
    teffInjeraDesc: "እያንዳንዱ ዋና ምግብ ከ 3 ጥቅልል ንፁህ የጤፍ እንጀራ ጋር በነጻ ይቀርባል።",
    extraInjeraBtn: "+ ተጨማሪ እንጀራ ይጨመር",
    extraInjeraAdded: "✓ ተጨማሪ እንጀራ ተጨምሯል (+30 ብር)",
    slaughterCertified: "ትኩስ የታረደ",
    organicHighlandFeed: "100% ኦርጋኒክ የደጋ መኖ",
    michelinAtmosphere: "የላቀ የላውንጅ ድባብ",
    backToMenu: "ወደ ምናሌው ይመለሱ",
    confirmCustomization: "ይዘቱን አረጋግጥና አስቀምጥ",
    selectionsSaved: "✓ ምርጫዎ ተቀምጧል",
    gastronomySeries: "የታልተለ ልዩ የስነ-ምግብ ዝግጅት",

    reservationFormTitle: "የላቀ ጠረጴዛ ማስያዣ",
    reservationFormSubtitle: "ልዩ የግብዣ ጠረጴዛ ወይም የቪአይፒ (VIP) ሳሎን አስቀድመው ይያዙ",
    selectDate: "ቀን ይምረጡ",
    selectTime: "ሰዓት ይምረጡ",
    numberOfGuests: "የሰው ብዛት",
    specialRequests: "ልዩ ፍላጎቶች / የቅመም ምርጫዎች",
    contactName: "የእርስዎ ስም",
    contactPhone: "ስልክ ቁጥር",
    contactEmail: "የኢሜል አድራሻ (ካለ)",
    vipLoungeUpgrade: "ልዩ የቪአይፒ ሳሎን ዝግጅት ይጨምር",
    vipLoungeDesc: "የማዕከላዊ ሞሰብ ዝግጅት፣ ባህላዊ የቡና ስነ-ስርዓት፣ የዋሽንት ትርኢት እና አስተማማኝ የመኪና ማቆሚያ ያካትታል።",
    checkAvailability: "መኖሩን ያረጋግጡ",
    checkingAvailability: "ጠረጴዛዎችን በመፈተሽ ላይ...",
    confirmReservationBtn: "የጠረጴዛ ቦታውን ይቆልፉ",
    reservationConfirmed: "ቦታው በተሳካ ሁኔታ ተይዟል!",
    reservationConfirmedMsg: "የእርስዎ የቪአይፒ ጠረጴዛ በተሳካ ሁኔታ ተይዟል። የማረጋገጫ መልእክት በስልክዎ ላይ ይላካል። እባክዎ ሲደርሱ ይህን ልዩ የግብዣ ግብዣ ኮድ ያሳዩ።",
    bookingCode: "የቪአይፒ ማስያዣ ኮድ (VIP CODE)",
    closeWindow: "የማስያዣ መስኮቱን ዝጋ",

    tvFeaturedSelection: "የተመረጡ ምግቦች",
    tvEstPrepTime: "የዝግጅት ጊዜ",
    tvEstTimeText: "ቢያንስ ከ 15 እስከ 25 ደቂቃዎች",
    tvKitchenAnnouncement: "የኩሽና ማስታወቂያ",
    tvAnnouncementText: "✨ ባህላዊ የጄበና ቡና ስነስርዓት ከቀኑ 8:00 እና ከምሽቱ 1:00 ሰአት ጀምሮ በማዕከላዊው አዳራሽ ይካሄዳል። ከፋንዲሻ ጋር በነጻ ይቀርባል። | ሰባ የፍየል መንጎቻችን በየቀኑ ከሰሜን ሸዋ ሜዳዎች በጥንቃቄ ይመረጣሉ።",
    tvInteractiveSlogan: "ለማዘዝ በጠረጴዛዎ ያለውን የQR ኮድ ይቃኙ",
    tvLoungeAtmosphere: "የቀጥታ የላውንጅ ድባብ",
    tvCurrentlyPlaying: "በአዳራሹ ውስጥ እየተጫወተ ያለው ሙዚቃ",
    tvMasinkoWashint: "ክላሲካል ማሲንቆ እና ማሲንቆ",
    tvInstrumentalMelodies: "ጣፋጭ የኢትዮጵያ ባህላዊ መሣሪያዎች",
    tvNextSlide: "ቀጣይ ምድብ",
    tvAutoplayOn: "ራስ-አጫውት በርቷል",
    tvAutoplayOff: "ቆሟል",
    orderAtCounter: "ሂሳብ ከፍለው ይውሰዱ",
    banquetPrice: "የግብዣው ዋጋ",
    tvDisplayActive: "ቀጥታ ንቁ ማሳያ",
    tvSmartTVFeed: "የስማርት ቲቪ ምግብ"
  },
  om: {
    loungeTitle: "TALTELE",
    loungeSubtitle: "FEYEL BET",
    viewMenu: "Menuu Ilaali",
    reserveTable: "Iddoo Qabadhu",
    orderNow: "Amma Ajaji",
    displayMode: "Akkaataa Agarsiisaa:",
    mobileMenu: "Bilbila / QR Menuu",
    tvMenuBoard: "TV Menuu Board",
    addressBole: "Karaa Bole, Addis Ababa",
    addressOpposite: "Fuuldura Welosefer",
    loungeTime: "YEROO LOUNGE LIVE",
    genuineTag: "Aadaa",

    heroTitle1: "Dhandhama Keenna.",
    heroTitle2: "Ogummaa Addaa Kan Sharafame.",
    heroDesc: "Taltele Feyel Bet hiika gartuu nyaata Itoophiyaa isa baredaadha. Foon keenya kan re'ee marga dheeddu Semien Shoaa irraa guyyaa guyyaan filatame, mi'eessitoota aadaa fi dhadhaa uumamaa wajjin tolfamee dhiyaata. Nyaata keenya aadaa daawwadhaa.",
    reviewsCount: "1,200+ Reviews Keessummootaa",
    hajiCertified: "Qorannoo Hajiin Kan Mirkanaaye",

    allCategories: "Ramaddii Nyaataa Hundaa",
    spicyMitmita: "Mi'eessituu (Mitmita)",
    teffGf: "Taffii / GF",
    veganYetsom: "Vegan / Soomaa",
    noDishesFound: "Nyaatni Niri Hin Argamne",
    noDishesDesc: "Nyaata ati barbaadde faayilota kanaan argachuu hin dandeenye. Maaloo dhangala'aa filter keetii dhiisi!",
    resetFilters: "Filtaroota Hundaa Haqi",
    addToTablePlan: "Maaddii Koo Irratti Dabali",
    searchPlaceholder: "Nyaata barbaadi (kfk. Feyel Tibs, Kitfo, Shiro)...",
    exploreFlavors: "DHANDHAMA TALTELE BARBAADADHAU",
    tablesideSlogan: "Ajajuuf QR koodi minjaala keetii irratti dubbisi. Gadiitti, nyaata keenya filatamaa ilaali, mi'eessituu kee sirreessi fi karoora banquet kee qopheessi.",

    tablesidePlannerTitle: "Qopheessaa Maaddii",
    tablesidePlannerDesc: "Estimator ajajaa yeroo qabatamaa",
    tableNumberLabel: "MINJAALA #",
    banquetPlanEmpty: "Karoorri banquet minjaala keetii duudaadha.",
    banquetPlanEmptySub: "Banquet kee qopheessuaf nyaata re'ee filatamaa olirra jiru maaddii ketti dabali!",
    addSpicesNote: "+ Yaada ykn mi'eessituu dabalataa",
    spiceNotePlaceholder: "kfk. Awaaze dabalataa, foon xiqqoo bilchaate...",
    subtotal: "Qooda Waliigalaa:",
    serviceCharge: "10% Tajaajila Lounge:",
    govVat: "15% Taaksii Mootummaa (VAT):",
    totalEstimate: "Waliigala Ajajaa:",
    submitTableOrder: "Ajaja Minjaalaa Ergi",
    clearOrder: "Ajaja Haaraaf Barbaadi",
    transmissionComplete: "Ergamuun Mirkanaayeera",
    kitchenRegisteredMsg: "Tikeetiin kee VIP Table {tableNumber}-f kuusaa keessatti galmaa'eera. Gargaaraan dhiyootti si qaqqaba. Koodii gadii agarsiisi ykn QR koodii dubbisi.",
    waiterReceiptId: "ID RECIPIE WAITER",
    kitchenSent: "KITCHEN-TI ERGAME",
    freshDailyNotice: "Foon re'ee marga dheeddu aadaa kanaan dhibba irra dhibba guyyaa guyyaan mirkaneessamee kan gorra'amudha.",

    recipeComposition: "Qophii Recipe Aadaa",
    tailorHeat: "Akaakuu Mi'eessituu / Safara Ubbaa",
    teffInjeraOption: "Filannoo Buddeena Xaafii Dhugaa",
    teffInjeraDesc: "Nyaatni gurguddoon hundi buddeena xaafii qopheefame 3 wajjin bilisaan dhiyaata.",
    extraInjeraBtn: "+ Buddeena Dabalataa",
    extraInjeraAdded: "✓ Buddeena Dabalataa (+30 ETB)",
    slaughterCertified: "Gorra'uu Mirkaanaaye",
    organicHighlandFeed: "100% MARGA UUMAMAA",
    michelinAtmosphere: "DIBAAMA LOUNGE MICHELIN",
    backToMenu: "Gara Menuu Deebi'i",
    confirmCustomization: "Mirkaneessi Qophii Minjaalaa",
    selectionsSaved: "✓ Filannoon Keetii Ol Kaayameera",
    gastronomySeries: "Akaakuu Nyaataa Taltele",

    reservationFormTitle: "Iddoo Minjaalaa Qabachuu",
    reservationFormSubtitle: "Minjaala banquet aadaa ykn private VIP saloon qabadhu",
    selectDate: "Guyyaa Filadhu",
    selectTime: "Yeroo Filadhu",
    numberOfGuests: "Baay'ina Keessummootaa",
    specialRequests: "Yaada Dabalataa / Fedhii Mi'eessituu",
    contactName: "Maqaa Keetii",
    contactPhone: "Lakk. Bilbilaa",
    contactEmail: "Email (Yoo jiraate)",
    vipLoungeUpgrade: "VIP Lounge Saloon Private Upgrade",
    vipLoungeDesc: "Sirna mesob qopheeffame, sirna buna aadaa, tapha washint fi eegumsa makiinaa of keessaa qaba.",
    checkAvailability: "Bakka Jiraachuu Mirkaneessi",
    checkingAvailability: "VIP Check Godhamaa Jira...",
    confirmReservationBtn: "Iddoo Booking Sirreessi",
    reservationConfirmed: "Booking Keetii Mirkanayeera!",
    reservationConfirmedMsg: "Minjaalootni keetii VIP sirriitti qabameera. SMS mirkaneessaa bilbila kee irratti ni ergama. Maaloo yoo dhuftu koodii booking kana agarsiisi.",
    bookingCode: "VIP BOOKING CODE",
    closeWindow: "Booking Cufi",

    tvFeaturedSelection: "Filannoowwan Addaa",
    tvEstPrepTime: "Yeroo Qophii",
    tvEstTimeText: "DAQIQAALII 15 - 25 MAXIMUM",
    tvKitchenAnnouncement: "BEEKSIISA KITCHEN",
    tvAnnouncementText: "✨ Sirni buna aadaa (Buna) sa'aatii 8:00 fi sa'aatii 1:00 irratti galma giddu galeessatti jalqaba. Qorqodamee popcorn bilisaan dhiyaata. | Horii re'ee marga dheeddu Semien Shoaa irraa guyyaa guyyaan filatama.",
    tvInteractiveSlogan: "OORDER GOCHUUF QR KOODI DUBBISI",
    tvLoungeAtmosphere: "Lounge Live Atmosphere",
    tvCurrentlyPlaying: "Tapha aadaa galma keessa jiru",
    tvMasinkoWashint: "Masinqoo & Washint Classical",
    tvInstrumentalMelodies: "Muziqaa Aadaa Itoophiyaa",
    tvNextSlide: "Slide Itti Aanu",
    tvAutoplayOn: "Autoplay On",
    tvAutoplayOff: "Paused",
    orderAtCounter: "Counter irraa Ajaji",
    banquetPrice: "GATII BANQUET",
    tvDisplayActive: "Agarsiisa Active Live",
    tvSmartTVFeed: "Smart TV Feed"
  }
};
