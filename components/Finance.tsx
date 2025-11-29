import React from 'react';
import { CreditCard, Shield, FileText, CheckCircle } from 'lucide-react';

const Finance: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Moliya va Hisob-kitob (Islamic BNPL)</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Credit Limit Card */}
        <div className="bg-gradient-to-br from-emerald-900 to-emerald-700 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
          <div className="relative z-10">
            <p className="text-emerald-200 text-sm font-medium mb-1">Tasdiqlangan limit (Murabaha)</p>
            <h3 className="text-3xl font-bold mb-6">150,000,000 UZS</h3>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-xs text-emerald-300">Keyingi to'lov:</p>
                <p className="font-semibold">12,500,000 UZS (15 Okt)</p>
              </div>
              <button className="bg-white text-emerald-900 px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:bg-emerald-50 transition">
                To'lash
              </button>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-emerald-500 transition cursor-pointer group">
            <div className="bg-emerald-50 p-3 rounded-full text-emerald-600 mb-3 group-hover:bg-emerald-600 group-hover:text-white transition">
              <Shield size={24} />
            </div>
            <h4 className="font-bold text-slate-900">Murabaha</h4>
            <p className="text-xs text-slate-500 mt-1">Nasiya savdo shartnomasi</p>
          </div>
          <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center items-center text-center hover:border-emerald-500 transition cursor-pointer group">
            <div className="bg-blue-50 p-3 rounded-full text-blue-600 mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
              <FileText size={24} />
            </div>
            <h4 className="font-bold text-slate-900">Salam</h4>
            <p className="text-xs text-slate-500 mt-1">Oldindan to'lov (Ekin uchun)</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-slate-800">Faol Shartnomalar</h3>
          <button className="text-sm text-emerald-600 font-medium">Barchasi</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Turi</th>
                <th className="px-6 py-3">Summa</th>
                <th className="px-6 py-3">Holati</th>
                <th className="px-6 py-3">Muddat</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900">#TRX-9921</td>
                <td className="px-6 py-4">Murabaha (3 oy)</td>
                <td className="px-6 py-4">45,000,000 UZS</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle size={12} /> Faol
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">10 Nov 2024</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-medium text-slate-900">#TRX-8842</td>
                <td className="px-6 py-4">Salam (Ekish)</td>
                <td className="px-6 py-4">25,000,000 UZS</td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-semibold">
                    <CheckCircle size={12} /> Tasdiqlangan
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-500">01 Dec 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Finance;