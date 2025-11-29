import React, { useState } from 'react';
import { LayoutDashboard, ShoppingBag, BarChart2, Truck, Wallet, MessageSquare, LogOut, Sprout, Info, ArrowLeft, Menu, X } from 'lucide-react';
import { Tab, Product, CartItem } from '../types';
import Marketplace from './Marketplace';
import Analytics from './Analytics';
import Finance from './Finance';
import Logistics from './Logistics';
import AiAdvisor from './AiAdvisor';
import AboutModal from './AboutModal';
import CartDrawer from './CartDrawer';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.DASHBOARD_MARKET);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const handleBack = () => {
    if (activeTab === Tab.DASHBOARD_MARKET) {
      // If on main market page, logout directly
      onLogout();
    } else {
      // Otherwise go back to market
      setActiveTab(Tab.DASHBOARD_MARKET);
    }
  };

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.DASHBOARD_MARKET: return <Marketplace onAddToCart={handleAddToCart} />;
      case Tab.DASHBOARD_ANALYTICS: return <Analytics />;
      case Tab.DASHBOARD_LOGISTICS: return <Logistics />;
      case Tab.DASHBOARD_FINANCE: return <Finance />;
      case Tab.DASHBOARD_AI: return <AiAdvisor />;
      default: return <Marketplace onAddToCart={handleAddToCart} />;
    }
  };

  const SidebarContent = () => (
    <>
      <div className="p-6 border-b border-slate-800 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold text-white">
          <Sprout className="text-emerald-500" />
          Barakali Bozor
        </div>
        {/* Close button only for mobile */}
        <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <SidebarItem 
          icon={<ShoppingBag />} 
          label="B2B Market" 
          active={activeTab === Tab.DASHBOARD_MARKET} 
          onClick={() => handleTabChange(Tab.DASHBOARD_MARKET)} 
        />
        <SidebarItem 
          icon={<MessageSquare />} 
          label="AI Agro-Maslahatchi" 
          active={activeTab === Tab.DASHBOARD_AI} 
          onClick={() => handleTabChange(Tab.DASHBOARD_AI)} 
          badge="New"
        />
        <SidebarItem 
          icon={<BarChart2 />} 
          label="Analitika & Prognoz" 
          active={activeTab === Tab.DASHBOARD_ANALYTICS} 
          onClick={() => handleTabChange(Tab.DASHBOARD_ANALYTICS)} 
        />
        <SidebarItem 
          icon={<Truck />} 
          label="Logistika" 
          active={activeTab === Tab.DASHBOARD_LOGISTICS} 
          onClick={() => handleTabChange(Tab.DASHBOARD_LOGISTICS)} 
        />
        <SidebarItem 
          icon={<Wallet />} 
          label="Moliya (BNPL)" 
          active={activeTab === Tab.DASHBOARD_FINANCE} 
          onClick={() => handleTabChange(Tab.DASHBOARD_FINANCE)} 
        />
        <div className="pt-4 mt-4 border-t border-slate-800">
           <SidebarItem 
            icon={<Info />} 
            label="Biz haqimizda" 
            active={false} 
            onClick={() => {
              setIsAboutOpen(true);
              setIsSidebarOpen(false);
            }} 
          />
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-4 px-2">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100&q=80" alt="Profile" className="w-8 h-8 rounded-full border border-slate-600 object-cover" />
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-white truncate">Rayhon Milliy Taomlar</p>
            <p className="text-xs text-slate-400">Restoran Manager</p>
          </div>
        </div>
        <button onClick={onLogout} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:bg-slate-800 rounded-lg transition">
          <LogOut size={16} /> Chiqish
        </button>
      </div>
    </>
  );

  return (
    <div className="flex h-screen bg-slate-50 relative overflow-hidden">
      <AboutModal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemove={handleRemoveFromCart}
        onUpdateQuantity={handleUpdateQuantity}
        total={cartTotal}
        onClear={() => setCartItems([])}
      />

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar (Desktop & Mobile Drawer) */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <SidebarContent />
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full w-full overflow-hidden">
        <header className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-4 sm:px-6 sticky top-0 z-20 shadow-sm shrink-0">
          <div className="flex items-center gap-3">
             <button 
                onClick={() => setIsSidebarOpen(true)}
                className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
              >
                <Menu size={24} />
             </button>

             <button 
                onClick={handleBack}
                className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 font-medium p-2 hover:bg-slate-50 rounded-lg transition group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm sm:text-base">
                  {activeTab === Tab.DASHBOARD_MARKET ? 'Chiqish' : 'Orqaga'}
                </span>
              </button>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            <div className="bg-emerald-50 text-emerald-700 text-xs px-3 py-1 rounded-full font-medium border border-emerald-100 hidden sm:block">
              Balans: 12,400,000 UZS
            </div>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="p-2 hover:bg-slate-100 rounded-full text-slate-600 relative transition"
            >
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full border border-white text-[10px] text-white flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
              <ShoppingBag size={24} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          <div className="max-w-7xl mx-auto pb-10">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  badge?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick, badge }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition ${
      active 
        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <div className="flex items-center gap-3">
      {React.cloneElement(icon as React.ReactElement, { size: 18 })}
      <span>{label}</span>
    </div>
    {badge && <span className="text-[10px] bg-emerald-500 text-white px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">{badge}</span>}
  </button>
);

export default Dashboard;