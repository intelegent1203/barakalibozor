import React from 'react';
import { ArrowRight, Leaf, TrendingUp, Truck, ShieldCheck, Users, BarChart3, Wallet } from 'lucide-react';
import { Tab } from '../types';

interface LandingProps {
  onEnterApp: () => void;
}

const LandingPage: React.FC<LandingProps> = ({ onEnterApp }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Barakali<span className="text-emerald-600">Bozor</span></span>
            </div>
            <div className="hidden md:flex space-x-8 text-slate-600 font-medium">
              <a href="#muammo" className="hover:text-emerald-600 transition">Muammo</a>
              <a href="#yechim" className="hover:text-emerald-600 transition">Yechim</a>
              <a href="#biznes" className="hover:text-emerald-600 transition">Biznes Model</a>
            </div>
            <button 
              onClick={onEnterApp}
              className="bg-emerald-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-emerald-700 transition shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2"
            >
              Platformaga kirish <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            MVP Tayyor
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Daladan dasturxonga <span className="text-emerald-600">shaffof va halol</span> zanjir.
          </h1>
          <p className="text-lg text-slate-600 max-w-xl">
            Fermerlar va restoranlarni birlashtiruvchi yagona raqamli ekotizim. 
            Isrofgarchilikni kamaytiring, daromadni oshiring va halol moliyadan foydalaning.
          </p>
          <div className="flex gap-4 pt-4">
            <button onClick={onEnterApp} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-800 transition">
              Demoni ko'rish
            </button>
            <button className="px-8 py-3 rounded-xl font-semibold text-slate-700 border border-slate-300 hover:bg-slate-50 transition">
              Investitsiya
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
            alt="Agro Supply Chain" 
            className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition duration-500 border-4 border-white object-cover h-[400px] w-full"
          />
        </div>
      </section>

      {/* Problem & Solution (Pitch Deck Style) */}
      <section id="yechim" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Nega Barakali Bozor?</h2>
            <p className="mt-4 text-slate-600">Biz agro-biznesdagi eng og'riqli 3 ta muammoni hal qilamiz.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:scale-110 transition">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Samarasiz Ta'minot</h3>
              <p className="text-slate-600">
                Restoranlar sifatli mahsulot topa olmaydi, fermerlar esa xaridor. O'rtakashlar sababli narx 40% ga oshadi.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-emerald-600 font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} /> Yechim: B2B Market & AI Matching
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition">
                <Truck size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Logistika & Isrof</h3>
              <p className="text-slate-600">
                Noto'g'ri saqlash va kechikish tufayli 30% hosil isrof bo'ladi.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-emerald-600 font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} /> Yechim: Smart Logistics & Tracking
                </p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl transition group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition">
                <Wallet size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Moliyaviy Uzilish</h3>
              <p className="text-slate-600">
                Fermerga naqd pul kerak, restoran esa keyinroq to'lamoqchi. Likvidlik yetishmaydi.
              </p>
              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-emerald-600 font-semibold flex items-center gap-2">
                  <ShieldCheck size={16} /> Yechim: Halal BNPL & Escrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Traction */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">$4.2B</div>
            <div className="text-emerald-200 text-sm uppercase tracking-wide">TAM (O'zbekiston Agro)</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">12k+</div>
            <div className="text-emerald-200 text-sm uppercase tracking-wide">Restoran & Cafe</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">35%</div>
            <div className="text-emerald-200 text-sm uppercase tracking-wide">Xarajatni tejash</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">100%</div>
            <div className="text-emerald-200 text-sm uppercase tracking-wide">Shaffoflik</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold text-white">Barakali Bozor</span>
            <p className="text-sm mt-2">© 2024 Barcha huquqlar himoyalangan.</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white">Foydalanish shartlari</a>
            <a href="#" className="hover:text-white">Investorlar uchun</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;