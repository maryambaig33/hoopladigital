import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getLibrarianResponse = async (userQuery: string, contextItems: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently offline (API Key missing). Please check back later!";
  }

  try {
    const model = 'gemini-2.5-flash';
    const systemInstruction = `You are "Lumina", a friendly, highly knowledgeable, and slightly witty digital librarian.
    Your goal is to help users find books, movies, music, and comics based on their mood or requests.
    
    You have access to a small catalog of items for context, but you can recommend anything generally popular or classic if it fits the user's request better.
    However, prioritize mentioning items from the catalog if they are relevant.
    
    Current Catalog Context: ${contextItems}

    Keep your responses concise (under 100 words) and conversational.
    If suggesting items, bullet point them.`;

    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I couldn't quite find that in the stacks. Could you try asking differently?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to the main archive. Please try again in a moment.";
  }
};