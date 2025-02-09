import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { askOpenAI } from "../openaiHelper"; // OpenAI helper function
import { useState } from "react";
import { projects, skills } from "../data";

export function Chatbot() {
    const [aiResponse, setAIResponse] = useState("");

    const steps = [
        {
            id: "1",
            message: "Hi! Welcome to my portfolio. How can I assist you today?",
            trigger: "2",
        },
        {
            id: "2",
            options: [
                { value: "projects", label: "Tell me about your projects", trigger: "projects" },
                { value: "skills", label: "What skills do you have?", trigger: "skills" },
                { value: "contact", label: "How can I contact you?", trigger: "contact" },
                { value: "general", label: "I have a general question", trigger: "ask-question" },
            ],
        },
        {
            id: "projects",
            message: "Here are some of my key projects:",
            trigger: "dynamic-projects",
        },
        {
            id: "dynamic-projects",
            component: (
                <div>
                    {projects.map((project, idx) => (
                        <p key={idx}>
                            <strong>{project.title}:</strong> {project.description}
                        </p>
                    ))}
                </div>
            ),
            asMessage: true,
            trigger: "6",
        },
        {
            id: "skills",
            component: (
                <div>
                    {Object.keys(skills).map((category, idx) => (
                        <p key={idx}>
                            <strong>{category}:</strong> {skills[category].join(", ")}
                        </p>
                    ))}
                </div>
            ),
            asMessage: true,
            trigger: "6",
        },
        {
            id: "contact",
            message: "You can reach me at: jadhavjyotic1992@gmail.com",
            trigger: "6",
        },
        {
            id: "ask-question",
            message: "Please type your question below.",
            trigger: "user-question",
        },
        {
            id: "user-question",
            user: true,
            validator: async (value) => {
                try {
                    const response = await askOpenAI(value);
                    setAIResponse(response); // Store the response
                    return true;
                } catch (error) {
                    console.error("Error fetching OpenAI response:", error);
                    setAIResponse("Sorry, there was an issue with the chatbot.");
                    return true;
                }
            },
            trigger: "ai-response",
        },
        {
            id: "ai-response",
            message: () => aiResponse, // Use the dynamically updated state
            trigger: "6",
        },
        {
            id: "6",
            message: "Is there anything else I can help you with?",
            trigger: "2",
        },
    ];

    const theme = {
        background: "#f5f8fb",
        fontFamily: "Arial, sans-serif",
        headerBgColor: "#6c63ff",
        headerFontColor: "#fff",
        headerFontSize: "16px",
        botBubbleColor: "#6c63ff",
        botFontColor: "#fff",
        userBubbleColor: "#fff",
        userFontColor: "#4a4a4a",
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot steps={steps} floating={true} />
        </ThemeProvider>
    );
}
