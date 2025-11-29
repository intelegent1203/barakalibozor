import React, { useState } from 'react';
import { Search, Filter, ShoppingCart, Star, MapPin, Award, Sun, Beef, Wheat, Carrot, Apple } from 'lucide-react';
import { Product } from '../types';

interface MarketplaceProps {
  onAddToCart?: (product: Product) => void;
}

const MOCK_PRODUCTS: Product[] = [
  // MEAT (GO'SHT)
  {
    id: 'm1',
    name: 'Mol go\'shti (Yumshoq lahm)',
    category: 'Go\'sht',
    price: 95000,
    unit: 'kg',
    supplier: 'Halal Meat Pro',
    rating: 5.0,
    isHalal: true,
    stock: 200,
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Toshkent sh.'
  },
  {
    id: 'm2',
    name: 'Qo\'y go\'shti (Yangi so\'yilgan)',
    category: 'Go\'sht',
    price: 110000,
    unit: 'kg',
    supplier: 'Qashqadaryo Chorva',
    rating: 4.9,
    isHalal: true,
    stock: 150,
    image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Qarshi'
  },
  // GRAINS (DON)
  {
    id: 'g1',
    name: 'Guruch "Lazer" (Xorazm)',
    category: 'Don mahsulotlari',
    price: 24000,
    unit: 'kg',
    supplier: 'Xorazm Agro Eksport',
    rating: 4.8,
    isHalal: true,
    stock: 5000,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Urganch'
  },
  {
    id: 'g2',
    name: 'Un (Oliy nav, Qozog\'iston)',
    category: 'Don mahsulotlari',
    price: 6500,
    unit: 'kg',
    supplier: 'Toshkent Un Zavodi',
    rating: 4.7,
    isHalal: true,
    stock: 10000,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Toshkent'
  },
  // VEGETABLES (SABZAVOT)
  {
    id: 'v1',
    name: 'Sariq Piyoz (Eksportbop)',
    category: 'Sabzavotlar',
    price: 3200,
    unit: 'kg',
    supplier: 'Surxon Agro',
    rating: 4.8,
    isHalal: true,
    stock: 15000,
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Termiz'
  },
  {
    id: 'v2',
    name: 'Kartoshka "Gala" (Yirik)',
    category: 'Sabzavotlar',
    price: 5500,
    unit: 'kg',
    supplier: 'Samarqand Dehqon',
    rating: 4.6,
    isHalal: true,
    stock: 8000,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82a6b69d?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Samarqand'
  },
   {
    id: 'v3',
    name: 'Sabzi (Sariq, Oshbop)',
    category: 'Sabzavotlar',
    price: 2500,
    unit: 'kg',
    supplier: 'Buxoro Zamin',
    rating: 4.5,
    isHalal: true,
    stock: 4000,
    image: 'https://images.unsplash.com/photo-1445282768818-728615cc8d07?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Buxoro'
  },
  // GREENHOUSE (ISSIQXONA)
  {
    id: 'gh1',
    name: 'Pomidor "Pink Paradise"',
    category: 'Issiqxona',
    price: 18500,
    unit: 'kg',
    supplier: 'Navoiy Greenhouse',
    rating: 4.9,
    isHalal: true,
    stock: 800,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Navoiy'
  },
  {
    id: 'gh2',
    name: 'Bodring "Orzu" (Gullagan)',
    category: 'Issiqxona',
    price: 14000,
    unit: 'kg',
    supplier: 'Toshkent Teplitsa',
    rating: 4.8,
    isHalal: true,
    stock: 1200,
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Zangiota'
  },
  {
    id: 'gh3',
    name: 'Qulupnay (Mavsumiy/Teplitsa)',
    category: 'Issiqxona',
    price: 35000,
    unit: 'kg',
    supplier: 'Jizzax Berry',
    rating: 5.0,
    isHalal: true,
    stock: 300,
    image: 'https://images.unsplash.com/photo-1464965911861-746a04b4b0ae?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Jizzax'
  },
  // FRUIT (MEVA)
  {
    id: 'f1',
    name: 'Olma "Golden" (Krimskiy)',
    category: 'Meva',
    price: 12000,
    unit: 'kg',
    supplier: 'Namangan Bog\'lari',
    rating: 4.7,
    isHalal: true,
    stock: 2000,
    image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=400&h=300&q=80',
    location: 'Namangan'
  },
];

const Marketplace: React.FC<MarketplaceProps> = ({ onAddToCart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = MOCK_PRODUCTS.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory || (selectedCategory === 'Issiqxona' && p.category === 'Issiqxona')) &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [
    { id: 'All', label: 'Barchasi', icon: null },
    { id: 'Issiqxona', label: 'Issiqxona', icon: <Sun size={14} className="text-orange-500" /> },
    { id: 'Sabzavotlar', label: 'Sabzavotlar', icon: <Carrot size={14} className="text-emerald-500" /> },
    { id: 'Meva', label: 'Meva', icon: <Apple size={14} className="text-red-400" /> },
    { id: 'Go\'sht', label: 'Go\'sht', icon: <Beef size={14} className="text-red-700" /> },
    { id: 'Don mahsulotlari', label: 'Don', icon: <Wheat size={14} className="text-yellow-600" /> },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Barakali Bozor</h2>
          <p className="text-sm text-slate-500">Ulgurji narxlar va to'g'ridan-to'g'ri yetkazib berish</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-2">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-3 text-slate-400 h-5 w-5" />
            <input 
              type="text" 
              placeholder="Mahsulot yoki fermerni qidiring..." 
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600">
            <Filter className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map(cat => (
          <button 
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition flex items-center gap-2 ${
              selectedCategory === cat.id 
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-200' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-emerald-50'
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 overflow-hidden flex flex-col group">
            <div className="relative h-48 bg-slate-200 overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              
              <div className="absolute top-2 right-2 flex flex-col gap-1 items-end">
                {product.isHalal && (
                  <div className="bg-emerald-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <Award size={10} /> HALAL
                  </div>
                )}
                {product.category === 'Issiqxona' && (
                  <div className="bg-orange-500/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                    <Sun size={10} /> ISSIQXONA
                  </div>
                )}
              </div>
            </div>
            <div className="p-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-slate-900 line-clamp-1 text-lg">{product.name}</h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <MapPin size={12} /> {product.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700 text-xs font-bold border border-yellow-100">
                  <Star size={10} fill="currentColor" /> {product.rating}
                </div>
              </div>
              
              <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-emerald-700">{product.price.toLocaleString()}</span>
                  <span className="text-xs text-slate-400 font-medium ml-1">so'm / {product.unit}</span>
                </div>
                <button 
                  onClick={() => onAddToCart && onAddToCart(product)}
                  className="bg-slate-900 hover:bg-slate-800 text-white p-2.5 rounded-lg transition active:scale-95 shadow-lg shadow-slate-200"
                >
                  <ShoppingCart size={18} />
                </button>
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">
                Sotuvchi: <span className="text-slate-600">{product.supplier}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;