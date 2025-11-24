import { GoogleGenAI, Type } from "@google/genai";
import { ItineraryRequest, GeneratedItinerary } from "../types";

// Always use process.env.API_KEY as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLuxuryItinerary = async (request: ItineraryRequest): Promise<GeneratedItinerary> => {
  const campingContext = request.includeCamping 
    ? "行程必须包含至少一晚的高端露营体验（推荐Snow Peak装备或富士山下豪华露营地）。" 
    : "行程以高端温泉旅馆或奢华酒店为主。";

  const vehicleContext = `客人选择的车型是 ${request.vehicleType}。请在行程建议中简要提及车内舒适度或沿途适合该车型的风景路段（如伊豆Skyline）。`;

  const prompt = `
    作为日本顶级私人旅行管家，请为客户设计一份关东地区（镰仓、箱根、伊豆、修善寺、富士山）的定制行程。
    时长：${request.days}天。
    人数：${request.guests}人。
    奢华等级：${request.luxuryLevel}。
    兴趣偏好：${request.interests.join(", ")}。
    
    ${campingContext}
    ${vehicleContext}
    
    要求：
    1. 语言必须是**简体中文**。
    2. 语调优雅、富有诗意，体现“轻奢”、“避世”和“ curated journeys”的品牌调性。
    3. 推荐具体的隐秘景点、米其林或怀石料理、以及具体的高级住宿名称（如强罗花坛、Asaba等）。
    4. 强调包车旅行的自由与舒适。
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are a world-class luxury travel concierge for Japan. Your output is elegant, poetic, and in Simplified Chinese.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "富有诗意的中文旅途标题" },
            summary: { type: Type.STRING, description: "一段优雅的旅程概述" },
            days: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  day: { type: Type.INTEGER },
                  title: { type: Type.STRING },
                  activities: { type: Type.ARRAY, items: { type: Type.STRING } },
                  stay: { type: Type.STRING, description: "推荐住宿" }
                }
              }
            }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GeneratedItinerary;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data in case of error
    return {
      title: "富士山的静默诗篇",
      summary: "抱歉，定制系统暂时繁忙。为您推荐经典的箱根至伊豆的避世路线，体验极致的温泉与山海。",
      days: [
        {
          day: 1,
          title: "箱根·云端艺术",
          activities: ["专属阿尔法专车接送至强罗", "雕刻之森美术馆私人导览", "怀石料理晚餐"],
          stay: "强罗花坛 (Gora Kadan)"
        }
      ]
    };
  }
};