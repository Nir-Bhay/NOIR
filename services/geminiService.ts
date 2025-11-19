import { GoogleGenAI } from "@google/genai";

// Initialize the client with the API key from the environment
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Sends a message to the Gemini model acting as the portfolio owner's digital twin.
 */
export const sendPortfolioMessage = async (
  message: string,
  history: { role: 'user' | 'model'; text: string }[]
): Promise<string> => {
  try {
    // Transform simple history into a prompt context if needed, 
    // or use chat history if we were maintaining a persistent chat session object.
    // For simplicity in this stateless service call, we regenerate the context.
    
    const systemInstruction = `
      You are the digital assistant for "NOIR", a high-end creative agency and portfolio.
      Your tone is professional, minimalist, artistic, and slightly mysterious.
      You answer questions about design, photography, branding, and our services.
      Keep answers concise (under 50 words) and elegant.
      Do not use emojis. Use sophisticated vocabulary.
    `;

    // Convert history to text format for the prompt context since we are doing single-turn generation for simplicity here,
    // or we could use chat.sendMessage if we stored the Chat object. 
    // Let's use generateContent with a strong system instruction context.
    
    const prompt = `
      ${systemInstruction}
      
      Previous conversation:
      ${history.map(h => `${h.role === 'user' ? 'Visitor' : 'NOIR'}: ${h.text}`).join('\n')}
      
      Visitor: ${message}
      NOIR:
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    return response.text || "I am currently observing silence. Please try again later.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Connection interrupted. Simulating offline aesthetic.";
  }
};