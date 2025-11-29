import React from 'react';
import { Truck, MapPin, Clock, Package, Users, Gavel, Car } from 'lucide-react';

const Logistics: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Logistika va Tracking</h2>
        <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition">
          + Yuk e'lon qilish
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Active Shipments */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Truck className="text-emerald-600" />
              Faol Buyurtmalar
            </h3>
            <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-bold">2 ta yo'lda</span>
          </div>

          <div className="space-y-6 relative">
            <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>

            <div className="relative pl-10">
              <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white shadow-sm transform -translate-x-1/2"></div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-900">#ORD-7723</span>
                  <span className="text-xs text-blue-600 font-medium">Yetib kelish: 14:00</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">500kg Piyoz • AgroGold Surxondaryo</p>
                <div className="flex items-center justify-between mt-3">
                   <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={12} /> Hozir: G'uzor posti, Qashqadaryo
                  </div>
                  <div className="flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 text-xs">
                     <Car size={12} className="text-slate-400" />
                     <span className="font-medium">Isuzu (Azizbek)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative pl-10">
              <div className="absolute left-2.5 top-1.5 w-3 h-3 bg-yellow-400 rounded-full border-2 border-white shadow-sm transform -translate-x-1/2"></div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 hover:shadow-md transition">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-slate-900">#ORD-7725</span>
                  <span className="text-xs text-yellow-600 font-medium">Yuklanmoqda</span>
                </div>
                <p className="text-sm text-slate-600 mb-2">200kg Mol go'shti • Halal Meat Pro</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={12} /> Kutilmoqda: 16:30
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Auction / Freelance Drivers */}
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex flex-col">
           <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <Users className="text-blue-600" />
              Logistika Birjasi (Haydovchilar)
            </h3>
            <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">Real-time</span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
             Sizning hududingizda bo'sh turgan xususiy va korporativ haydovchilar.
          </p>

          <div className="space-y-3 overflow-y-auto flex-1 pr-1">
             <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                      <Car size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Rustam (Labo)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">⭐️ 4.9</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 rounded">Xususiy</span>
                      </div>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-emerald-600">1,200 so'm/km</p>
                   <p className="text-xs text-slate-400">Bo'sh (Toshkent)</p>
                </div>
             </div>

             <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                      <Truck size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Gazel (Termo)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">⭐️ 4.7</span>
                        <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 rounded">Kompaniya</span>
                      </div>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-emerald-600">2,500 so'm/km</p>
                   <p className="text-xs text-slate-400">1 soatda keladi</p>
                </div>
             </div>

             <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-emerald-200 hover:bg-emerald-50/30 transition cursor-pointer group">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                      <Car size={20} />
                   </div>
                   <div>
                      <p className="text-sm font-bold text-slate-900">Akmal (Damas)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">⭐️ 5.0</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 rounded">Xususiy</span>
                      </div>
                   </div>
                </div>
                <div className="text-right">
                   <p className="text-sm font-bold text-emerald-600">1,000 so'm/km</p>
                   <p className="text-xs text-slate-400">Qaytish reysi</p>
                </div>
             </div>
          </div>
        </div>

        {/* Cold Storage */}
        <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg relative overflow-hidden md:col-span-2">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
          <div className="flex justify-between items-start relative z-10">
             <div>
                <h3 className="text-lg font-bold mb-1 flex items-center gap-2">
                  <Package size={20} className="text-emerald-400" /> 
                  Ombor holati (Smart Storage)
                </h3>
                <p className="text-sm text-slate-400 mb-4">Logistika markazlarida bo'sh joylar</p>
             </div>
             <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
                Joy band qilish
             </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Sovutkich A (Meva/Sabzavot)</span>
                <span className="text-emerald-400 font-bold">85% to'la</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-slate-400">Eng yaqin: Sergeli Logistika Markazi</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-slate-300">Muzlatkich B (Go'sht)</span>
                <span className="text-blue-400 font-bold">45% to'la</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
               <p className="text-xs text-slate-400">Eng yaqin: Bektemir Muzlatkichi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logistics;