import { GoogleGenAI } from "@google/genai";

// Safely access process.env, falling back to empty string if undefined in browser
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

const apiKey = getApiKey();
const ai = new GoogleGenAI({ apiKey });

export const generateAgroAdvice = async (prompt: string): Promise<string> => {
  if (!apiKey) return "API Kalit topilmadi. Iltimos, sozlamalarni tekshiring.";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: `Siz "Barakali Bozor" platformasining aqlli agro-maslahatchisisiz. 
        Sizning vazifangiz:
        1. Fermerlarga nima ekish kerakligi, bozor narxlari va ob-havo bo'yicha maslahat berish.
        2. Restoranlarga mavsumiy menyu tuzish, xom-ashyo narxlarini optimizatsiya qilish va ishonchli yetkazib beruvchilarni topishda yordam berish.
        3. MUHIM: Mavsumiylik muammosini hal qilish uchun "Issiqxona" (Greenhouse) usullarini tavsiya qiling. Masalan, qishda kartoshka yoki pomidor narxi oshganda, issiqxona mahsulotlarini taklif qiling.
        4. MUHIM: Logistika xarajatlarini kamaytirish uchun platformadagi "Xususiy yuk tashuvchilar" (Crowdsourced Logistics) xizmatini tavsiya qiling. Bo'sh turgan mashinalardan foydalanish (Backhauling) haqida gapiring.
        5. Javoblarni o'zbek tilida, qisqa, lo'nda va professional tarzda bering.
        6. Agarda foydalanuvchi retsept so'rasa, uning tannarxini hisoblashda yordam bering.
        7. Islomiy moliya (Murabaha, Salam) bo'yicha qisqa tushuncha bera olasiz.`,
        temperature: 0.7,
      }
    });
    
    return response.text || "Kechirasiz, hozir javob bera olmayman.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.";
  }
};