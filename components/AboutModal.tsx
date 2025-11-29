import React from 'react';
import { X, Sprout, ShoppingBag, Truck, Brain, BarChart2, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const modules = [
    {
      title: "B2B Marketplace (Bozor)",
      icon: <ShoppingBag className="text-emerald-600" size={24} />,
      bg: "bg-emerald-50",
      border: "border-emerald-100",
      description: "Fermerlar va restoranlarni vositachilarsiz bog'lovchi asosiy savdo maydoni.",
      features: [
        "Real suratlar va ulgurji narxlar",
        "Mavsumiy va issiqxona mahsulotlari filtri",
        "To'g'ridan-to'g'ri xarid qilish imkoniyati"
      ]
    },
    {
      title: "AI Agro-Maslahatchi",
      icon: <Brain className="text-purple-600" size={24} />,
      bg: "bg-purple-50",
      border: "border-purple-100",
      description: "Sun'iy intellekt yordamida biznesingizni aqlli boshqarish tizimi.",
      features: [
        "Menyu tannarxini hisoblash",
        "Bozor narxlari prognozi",
        "Fermerlar uchun ekish bo'yicha tavsiyalar"
      ]
    },
    {
      title: "Logistika va Tracking",
      icon: <Truck className="text-blue-600" size={24} />,
      bg: "bg-blue-50",
      border: "border-blue-100",
      description: "Mahsulot yetkazib berish jarayonini to'liq nazorat qilish va optimizatsiya.",
      features: [
        "GPS orqali yukni real vaqtda kuzatish",
        "Logistika birjasi (Arzon haydovchi topish)",
        "Omborxona (Cold Storage) band qilish"
      ]
    },
    {
      title: "Moliya (Islamic BNPL)",
      icon: <Wallet className="text-amber-600" size={24} />,
      bg: "bg-amber-50",
      border: "border-amber-100",
      description: "Halol standartlar asosida moliyaviy yechimlar va to'lov tizimi.",
      features: [
        "Murabaha (Nasiya savdo)",
        "Salam (Oldindan to'lov)",
        "Escrow (Xavfsiz bitim kafolati)"
      ]
    },
    {
      title: "Analitika va Hisobot",
      icon: <BarChart2 className="text-indigo-600" size={24} />,
      bg: "bg-indigo-50",
      border: "border-indigo-100",
      description: "Biznes qarorlar qabul qilish uchun aniq raqamlar va statistika.",
      features: [
        "Narxlar dinamikasi (Oylik/Yillik)",
        "Talab va taklif monitoringi",
        "Xarajatlar tahlili"
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="bg-white border-b border-slate-100 p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-600 p-2.5 rounded-xl text-white shadow-lg shadow-emerald-200">
              <Sprout size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Barakali Bozor</h2>
              <p className="text-sm text-slate-500 font-medium">Platforma imkoniyatlari bilan tanishing</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition">
            <X size={24} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 space-y-8 custom-scrollbar">
          
          {/* Intro Section */}
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="flex-1 relative z-10">
               <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                 <ShieldCheck className="text-emerald-400" />
                 Bizning Missiyamiz
               </h3>
               <p className="text-slate-300 leading-relaxed">
                 Biz agro-sanoat zanjiridagi barcha ishtirokchilarni — daladan dasturxongacha bo'lgan yo'lni raqamlashtiramiz. 
                 Maqsadimiz: isrofni kamaytirish, shaffof narxlar va halol savdo ekotizimini yaratish.
               </p>
             </div>
          </div>

          {/* Modules Grid */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4 px-1">Ilova Bo'limlari va Imkoniyatlar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((mod, idx) => (
                <div key={idx} className={`p-5 rounded-2xl border ${mod.border} ${mod.bg} hover:shadow-md transition duration-300 group`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition">
                      {mod.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{mod.title}</h4>
                  <p className="text-sm text-slate-600 mb-4 min-h-[40px]">{mod.description}</p>
                  
                  <ul className="space-y-2">
                    {mod.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <ArrowRight size={12} className="text-slate-400" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition active:scale-95"
          >
            Tushunarli, Rahmat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;