import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { generateAgroAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Assalomu alaykum! Men "Barakali Bozor" AI maslahatchisiman. Sizga quyidagilar bo\'yicha yordam bera olaman:\n\n1. Bozor narxlari tahlili\n2. Mavsumiy xarid rejalashtirish\n3. Qaysi fermer ishonchli ekanligi\n4. Menyu tannarxini hisoblash\n\nSavolingiz bormi?',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const responseText = await generateAgroAdvice(input);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const suggestions = [
    "Plov uchun eng yaxshi guruch narxlari qanday?",
    "Keyingi oy piyoz narxi oshishi kutiladimi?",
    "Mavsumiy salatlar uchun tavsiyalar bering",
    "Ishonchli kartoshka yetkazib beruvchilarni ko'rsat"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      <div className="p-4 border-b border-slate-100 bg-emerald-50/50 flex items-center gap-3">
        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="font-bold text-slate-800">AI Agro-Analitik</h3>
          <p className="text-xs text-slate-500">Google Gemini 2.5 Flash modeli asosida</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
              msg.role === 'user' ? 'bg-slate-200 text-slate-600' : 'bg-emerald-600 text-white'
            }`}>
              {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
            </div>
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
              msg.role === 'user' 
                ? 'bg-slate-900 text-white rounded-tr-none' 
                : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3">
             <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
               <Bot size={16} />
             </div>
             <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none border border-slate-200 flex items-center gap-2 text-slate-500 text-sm">
               <Loader2 size={16} className="animate-spin" /> O'ylayapman...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-slate-100 bg-white">
        {messages.length < 3 && (
          <div className="flex gap-2 overflow-x-auto pb-3 mb-2 no-scrollbar">
            {suggestions.map((s, i) => (
              <button 
                key={i} 
                onClick={() => setInput(s)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-50 hover:bg-emerald-50 text-slate-600 text-xs rounded-full border border-slate-200 transition"
              >
                {s}
              </button>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Agro-biznes bo'yicha savol bering..." 
            className="flex-1 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            disabled={isLoading}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white p-3 rounded-xl transition shadow-lg shadow-emerald-200"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiAdvisor;