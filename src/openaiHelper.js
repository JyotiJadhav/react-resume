import { OpenAI } from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const fetchOpenAIAPI = async (message) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Updated model
      messages: [{ role: "user", content: message }], // Required for chat models
      max_tokens: 150,
      temperature: 0.7,
    });
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    throw new Error("OpenAI API call failed");
  }
};

export const askOpenAI = async (message) => {
  try {
    const response = await fetchOpenAIAPI(message);
    console.log("OpenAI Response:", response);
    return response;
  } catch (error) {
    console.error("Error communicating with OpenAI:", error);
    return "Sorry, I couldn't get a response. Please try again.";
  }
};