import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, CreditCard, Shield, Truck, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  total: number;
  onClear: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, onClose, items, onRemove, onUpdateQuantity, total, onClear 
}) => {
  const [step, setStep] = useState<'cart' | 'payment' | 'success'>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bnpl' | 'escrow'>('escrow');

  if (!isOpen) return null;

  const handleCheckout = () => {
    setStep('payment');
  };

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setStep('success');
      onClear();
    }, 1500);
  };

  const reset = () => {
    setStep('cart');
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <ShoppingBag className="text-emerald-600" size={20} />
            {step === 'cart' ? 'Xarid Savati' : step === 'payment' ? "To'lov Tizimi" : 'Buyurtma Qabul Qilindi'}
          </h2>
          <button onClick={reset} className="p-2 hover:bg-slate-100 rounded-full text-slate-500 transition">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                  <ShoppingBag size={48} className="opacity-20" />
                  <p>Savatingiz hozircha bo'sh</p>
                  <button onClick={onClose} className="text-emerald-600 font-medium hover:underline">
                    Xarid qilish
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 line-clamp-1">{item.name}</h4>
                        <p className="text-xs text-slate-500 mb-2">{item.supplier}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-emerald-700">{item.price.toLocaleString()} so'm</span>
                          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-lg px-2 py-1">
                            <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-slate-400 hover:text-slate-600">-</button>
                            <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                            <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-slate-400 hover:text-slate-600">+</button>
                          </div>
                        </div>
                      </div>
                      <button onClick={() => onRemove(item.id)} className="text-red-400 hover:text-red-600 self-start p-1">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {step === 'payment' && (
             <div className="space-y-6">
               <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                 <p className="text-sm text-slate-500 mb-1">To'lanadigan summa:</p>
                 <p className="text-3xl font-bold text-emerald-700">{total.toLocaleString()} UZS</p>
               </div>

               <div className="space-y-3">
                 <label className="text-sm font-bold text-slate-900">To'lov usulini tanlang:</label>
                 
                 <div 
                   onClick={() => setPaymentMethod('escrow')}
                   className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${paymentMethod === 'escrow' ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500' : 'border-slate-200 hover:border-emerald-200'}`}
                 >
                   <div className={`mt-1 p-1 rounded-full ${paymentMethod === 'escrow' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                     <Shield size={16} />
                   </div>
                   <div>
                     <span className="font-bold text-slate-900 block">Escrow (Xavfsiz Bitim)</span>
                     <p className="text-xs text-slate-500 mt-1">Pul muzlatiladi va mahsulot yetib kelgandan keyin fermerga o'tkaziladi.</p>
                   </div>
                 </div>

                 <div 
                   onClick={() => setPaymentMethod('bnpl')}
                   className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${paymentMethod === 'bnpl' ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500' : 'border-slate-200 hover:border-emerald-200'}`}
                 >
                   <div className={`mt-1 p-1 rounded-full ${paymentMethod === 'bnpl' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                     <Truck size={16} />
                   </div>
                   <div>
                     <span className="font-bold text-slate-900 block">Halol Nasiya (Murabaha)</span>
                     <p className="text-xs text-slate-500 mt-1">3 oyga bo'lib to'lash. Islomiy moliya shartlari asosida.</p>
                   </div>
                 </div>

                 <div 
                   onClick={() => setPaymentMethod('card')}
                   className={`p-4 rounded-xl border cursor-pointer transition flex items-start gap-3 ${paymentMethod === 'card' ? 'border-emerald-500 bg-emerald-50/50 ring-1 ring-emerald-500' : 'border-slate-200 hover:border-emerald-200'}`}
                 >
                   <div className={`mt-1 p-1 rounded-full ${paymentMethod === 'card' ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500'}`}>
                     <CreditCard size={16} />
                   </div>
                   <div>
                     <span className="font-bold text-slate-900 block">Korporativ Karta / Hisob raqam</span>
                     <p className="text-xs text-slate-500 mt-1">UzCard, Humo yoki pul o'tkazish yo'li bilan.</p>
                   </div>
                 </div>
               </div>
             </div>
          )}

          {step === 'success' && (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 animate-bounce">
                <CheckCircle size={40} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">To'lov Muvaffaqiyatli!</h3>
                <p className="text-slate-500 mt-2">Buyurtmangiz qabul qilindi. Yetkazib berish holatini "Logistika" bo'limida kuzatishingiz mumkin.</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl text-sm text-slate-600 w-full">
                Buyurtma raqami: <span className="font-mono font-bold text-slate-900">#ORD-{Math.floor(Math.random() * 9000) + 1000}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {step !== 'success' && (
          <div className="p-4 border-t border-slate-100 bg-slate-50">
            {step === 'cart' && items.length > 0 && (
              <div className="space-y-4">
                <div className="flex justify-between items-center text-lg font-bold text-slate-900">
                  <span>Jami:</span>
                  <span>{total.toLocaleString()} UZS</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg"
                >
                  Rasmiylashtirish
                </button>
              </div>
            )}
            
            {step === 'payment' && (
              <div className="space-y-3">
                 <button 
                  onClick={handlePayment}
                  className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200"
                >
                  To'lovni Tasdiqlash
                </button>
                <button 
                  onClick={() => setStep('cart')}
                  className="w-full bg-white text-slate-600 py-3 rounded-xl font-bold border border-slate-200 hover:bg-slate-50 transition"
                >
                  Orqaga
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;