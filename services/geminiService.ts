import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a message to the Gemini model acting as the India Succession assistant.
 */
export const sendPortfolioMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    const systemInstruction = `
      You are the digital assistant for "India Succession", a boutique advisory firm specializing in estate and succession planning for Indians and NRIs.
      Your tone is professional, empathetic, knowledgeable, and legally astute (but you must include disclaimers that you are an AI and not a replacement for legal counsel).
      
      Key Services: Will Writing, Private Trusts, Family Business Succession, Cross Border Succession, Mediation, Probate.
      Key Team: Namita Agarwal (Founder), Pallavi Uzgare (CRO), Manita Agarwal (Strategic Adviser).
      
      Answer questions about these services clearly. Keep answers concise (under 75 words) and professional.
      Do not use emojis. Use formal language suitable for high-net-worth individuals.
    `;

    const prompt = `
      ${systemInstruction}
      
      Previous conversation:
      ${history.map(h => `${h.role === 'user' ? 'Client' : 'Advisor'}: ${h.text}`).join('\n')}
      
      Client: ${message}
      Advisor:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.5, // Lower temperature for more consistent, professional responses
      }
    });

    return response.text || "I am currently reviewing your request. Please try again momentarily.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are currently experiencing high inquiry volume. Please try again later or contact us at contact@indiasuccession.com";
  }
};