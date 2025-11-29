import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

const priceData = [
  { name: 'Jan', piyoz: 2400, kartoshka: 3500, sabzi: 1200 },
  { name: 'Feb', piyoz: 2600, kartoshka: 3800, sabzi: 1500 },
  { name: 'Mar', piyoz: 3000, kartoshka: 4200, sabzi: 2000 },
  { name: 'Apr', piyoz: 4500, kartoshka: 4500, sabzi: 2500 },
  { name: 'May', piyoz: 3200, kartoshka: 4000, sabzi: 1800 },
  { name: 'Jun', piyoz: 2000, kartoshka: 3000, sabzi: 1000 },
];

const demandData = [
  { name: 'Mon', talab: 4000, taklif: 2400 },
  { name: 'Tue', talab: 3000, taklif: 1398 },
  { name: 'Wed', talab: 2000, taklif: 9800 },
  { name: 'Thu', talab: 2780, taklif: 3908 },
  { name: 'Fri', talab: 1890, taklif: 4800 },
  { name: 'Sat', talab: 2390, taklif: 3800 },
  { name: 'Sun', talab: 3490, taklif: 4300 },
];

const Analytics: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Analitika va Bozor Prognozi</h2>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500">Piyoz O'rtacha Narxi</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">2,850 UZS</h3>
            </div>
            <div className="bg-green-100 p-1.5 rounded-lg text-green-600">
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <ArrowUpRight size={16} />
            <span className="font-medium ml-1">+12%</span>
            <span className="text-slate-400 ml-2">o'tgan oyga nisbatan</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500">Oylik Xarajatlar</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">45.2M UZS</h3>
            </div>
            <div className="bg-blue-100 p-1.5 rounded-lg text-blue-600">
              <BarChart2 size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-red-500">
            <ArrowDownRight size={16} />
            <span className="font-medium ml-1">-5%</span>
            <span className="text-slate-400 ml-2">tejashga erishildi</span>
          </div>
        </div>

         <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-slate-500">Mavsumiy Indeks</p>
              <h3 className="text-2xl font-bold text-slate-900 mt-1">8.4/10</h3>
            </div>
            <div className="bg-yellow-100 p-1.5 rounded-lg text-yellow-600">
              <BarChart2 size={20} />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-slate-500">
            Talab yuqori mavsum
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Narx Dinamikasi (so'nggi 6 oy)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="piyoz" stroke="#059669" strokeWidth={3} dot={{r: 4}} />
                <Line type="monotone" dataKey="kartoshka" stroke="#d97706" strokeWidth={2} />
                <Line type="monotone" dataKey="sabzi" stroke="#64748b" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
          <h3 className="text-lg font-semibold mb-6">Haftalik Talab va Taklif</h3>
          <div className="h-80">
             <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={demandData}>
                <defs>
                  <linearGradient id="colorTalab" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTaklif" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <Tooltip />
                <Area type="monotone" dataKey="talab" stroke="#10b981" fillOpacity={1} fill="url(#colorTalab)" />
                <Area type="monotone" dataKey="taklif" stroke="#64748b" fillOpacity={1} fill="url(#colorTaklif)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
import { BarChart2 } from 'lucide-react';
export default Analytics;