import React, { useState } from 'react';
import { X, Calendar, Clock, Users, Coffee, Gift, ShieldAlert, Sparkles, Check, CheckSquare } from 'lucide-react';
import { TRANSLATIONS, Language } from '../translations';

interface ReservationModalProps {
  onClose: () => void;
  lang: Language;
  theme: 'dark' | 'light';
}

export default function ReservationModal({ onClose, lang, theme }: ReservationModalProps) {
  const t = TRANSLATIONS[lang];

  // Form Stats
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<number>(4);
  const [specialRequest, setSpecialRequest] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [vipLounge, setVipLounge] = useState<boolean>(false);

  // States
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1); // 1 = form, 2 = confirmed
  const [bookingCode, setBookingCode] = useState<string>('');

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !time) {
      alert("Please fill in the required fields to verify available lounges.");
      return;
    }

    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      const code = `VIP-TBT-${(Math.floor(1000 + Math.random() * 9000))}`;
      setBookingCode(code);
      setStep(2);
    }, 2000);
  };

  const isLight = theme === 'light';

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-xl rounded-3xl overflow-hidden relative border-2 transition-all duration-300 ${
          isLight 
            ? 'bg-[#FAF7F2] border-[#D4AF37] text-gray-900 shadow-2xl' 
            : 'bg-[#0F0F0F] border-[#D4AF37]/50 text-white shadow-3xl shadow-[#D4AF37]/5'
        }`}
      >
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-[#D4AF37] to-green-600"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          id="reservation-close-btn"
          className={`absolute top-4 right-4 z-20 rounded-full p-2 border transition-all ${
            isLight
              ? 'bg-amber-100 hover:bg-amber-200 border-[#D4AF37]/30 text-gray-700'
              : 'bg-black/60 hover:bg-[#D4AF37] hover:text-black hover:border-transparent text-[#D4AF37] border-[#D4AF37]/35'
          }`}
          title={t.closeWindow}
        >
          <X className="w-4 h-4" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleReservation} className="p-6 md:p-8 space-y-5">
            <div className="text-center pt-2">
              <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full ${
                isLight ? 'bg-amber-100 text-[#85581A] border border-[#D4AF37]/35' : 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30'
              }`}>
                {t.genuineTag} Taltale Lounge
              </span>
              <h3 className="font-serif text-2xl font-black tracking-wide mt-2">
                {t.reservationFormTitle}
              </h3>
              <p className={`text-xs mt-1 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                {t.reservationFormSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {/* Date selection */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.selectDate} *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      isLight 
                        ? 'bg-white border-gray-300 text-gray-900' 
                        : 'bg-black/40 border-gray-800 text-white'
                    }`}
                  />
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.selectTime} *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                  <select
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                    className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      isLight 
                        ? 'bg-white border-gray-300 text-gray-900' 
                        : 'bg-black/40 border-gray-800 text-white'
                    }`}
                  >
                    <option value="">--:--</option>
                    <option value="12:00 PM">12:00 PM (Lunch)</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="6:00 PM">6:00 PM (Dinner)</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:30 PM">9:30 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Number of Guests */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.numberOfGuests}
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className={`w-full text-xs pl-9 pr-3 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                      isLight 
                        ? 'bg-white border-gray-300 text-gray-900' 
                        : 'bg-black/40 border-gray-800 text-white'
                    }`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20].map(n => (
                      <option key={n} value={n}>{n} Guests</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Passenger Contact Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.contactName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Almaz Bekele"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full text-xs px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    isLight 
                      ? 'bg-white border-gray-300 text-gray-900 select-all' 
                      : 'bg-black/40 border-gray-800 text-white'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Phone Contacts */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.contactPhone} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +251 911 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`w-full text-xs px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    isLight 
                      ? 'bg-white border-gray-300 text-gray-900' 
                      : 'bg-black/40 border-gray-800 text-white'
                  }`}
                />
              </div>

              {/* Email Addresses */}
              <div className="space-y-1">
                <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                  {t.contactEmail}
                </label>
                <input
                  type="email"
                  placeholder="almaz@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full text-xs px-4 py-2.5 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all ${
                    isLight 
                      ? 'bg-white border-gray-300 text-gray-900' 
                      : 'bg-black/40 border-gray-800 text-white'
                  }`}
                />
              </div>
            </div>

            {/* Special Instructions */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold font-mono uppercase tracking-wider text-gray-500 block">
                {t.specialRequests}
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Celebratory traditional cake, high level of spices, extra Awaze..."
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
                className={`w-full text-xs p-3 rounded-xl border focus:outline-none focus:ring-1 focus:ring-[#D4AF37] transition-all resize-none ${
                  isLight 
                    ? 'bg-white border-gray-300 text-gray-900' 
                    : 'bg-black/40 border-gray-800 text-white'
                }`}
              />
            </div>

            {/* VIP Lounge Upgrade Box */}
            <div className={`p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${
              vipLounge 
                ? 'bg-amber-500/10 border-[#D4AF37]' 
                : isLight ? 'bg-amber-500/5 border-gray-200' : 'bg-[#151515] border-gray-800'
            }`}
              onClick={() => setVipLounge(!vipLounge)}
            >
              <div className="pt-0.5">
                <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                  vipLounge 
                    ? 'bg-[#D4AF37] border-transparent text-black' 
                    : 'border-gray-500 bg-transparent'
                }`}>
                  {vipLounge && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <h4 className="text-xs font-bold font-serif uppercase tracking-wider text-[#D4AF37]">
                    {t.vipLoungeUpgrade}
                  </h4>
                </div>
                <p className={`text-[10px] mt-0.5 leading-normal ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                  {t.vipLoungeDesc}
                </p>
              </div>
            </div>

            {/* Submit Reservation Action */}
            <button
              type="submit"
              disabled={isVerifying}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#85581A] to-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/20 text-black py-3 rounded-xl font-bold uppercase text-xs tracking-wider transition-all"
            >
              <Sparkles className={`w-4 h-4 ${isVerifying ? 'animate-spin' : ''}`} />
              <span>{isVerifying ? t.checkingAvailability : t.confirmReservationBtn}</span>
            </button>
          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#078930]/15 border-2 border-[#078930] text-[#078930] rounded-full flex items-center justify-center mx-auto shadow-lg shadow-[#078930]/10 animate-bounce">
              <CheckSquare className="w-8 h-8 stroke-[2.5]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-black text-[#078930]">{t.reservationConfirmed}</h3>
              <p className={`text-xs max-w-md mx-auto leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>
                {t.reservationConfirmedMsg}
              </p>
            </div>

            {/* Visual Gold Booking Ticket */}
            <div className={`border-2 border-[#D4AF37]/50 rounded-2xl p-4 max-w-sm mx-auto text-left relative overflow-hidden ${
              isLight ? 'bg-amber-50/70' : 'bg-black/60'
            }`}>
              <div className="absolute top-0 right-0 py-1 px-3 bg-[#D4AF37] text-black text-[8px] font-mono font-black rounded-bl uppercase">
                {vipLounge ? 'VIP SALOON' : 'STANDARD LOUNGE'}
              </div>
              
              <span className="text-[9px] text-gray-500 font-mono tracking-widest block uppercase">{t.bookingCode}</span>
              <span className="text-xl font-mono font-bold text-[#D4AF37] tracking-widest block mt-0.5">
                {bookingCode}
              </span>

              <div className="grid grid-cols-2 gap-4 mt-4 pt-3 border-t border-gray-200/25 text-[11px]">
                <div>
                  <span className="text-[8px] text-gray-500 uppercase block">GUEST</span>
                  <span className="font-semibold">{name}</span>
                </div>
                <div>
                  <span className="text-[8px] text-gray-500 uppercase block">TABLE SIZE</span>
                  <span className="font-semibold">{guests} GUESTS</span>
                </div>
                <div>
                  <span className="text-[8px] text-gray-500 uppercase block">APPOINTMENT</span>
                  <span className="font-semibold">{date} @ {time}</span>
                </div>
                <div>
                  <span className="text-[8px] text-gray-500 uppercase block">LOCATION</span>
                  <span className="font-semibold text-red-500">BOLE ROAD, AA</span>
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-[#D4AF37] text-black hover:bg-[#b59223] transition-all"
            >
              Back to Lounge
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
