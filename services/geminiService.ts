import { GoogleGenAI } from "@google/genai";

// Vite environment variable
// .env faylda:  VITE_API_KEY=your_key
const apiKey = import.meta.env.VITE_API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateAgroAdvice = async (prompt: string): Promise<string> => {
  if (!apiKey) return "API Kalit topilmadi. Iltimos, sozlamalarni tekshiring.";

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `Siz "Barakali Bozor" platformasining aqlli agro-maslahatchisisiz. 
        Sizning vazifangiz:
        1. Fermerlarga nima ekish kerakligi, bozor narxlari va ob-havo bo'yicha maslahat berish.
        2. Restoranlarga mavsumiy menyu tuzish, xom-ashyo narxlarini optimizatsiya qilish va ishonchli yetkazib beruvchilarni topishda yordam berish.
        3. MUHIM: Qishda narx oshadigan sabzavotlar uchun issiqxona mahsulotlarini tavsiya qiling.
        4. MUHIM: Logistika xarajatlarini kamaytirish uchun "Xususiy yuk tashuvchilar" xizmatidan foydalanishni tavsiya qiling.
        5. Javoblarni o'zbek tilida, lo'nda, professional tarzda bering.
        6. Retsept bo'lsa, tannarx hisobida yordam bering.
        7. Islomiy moliyadan qisqa tushuncha bera olasiz.`,
        temperature: 0.7,
      },
    });

    return response.text || "Kechirasiz, hozir javob bera olmayman.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xatolik yuz berdi. Iltimos keyinroq urinib ko'ring.";
  }
};
