'use client';

import { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import Image from 'next/image';


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: process.env.NEXT_PUBLIC_API_INSTRUCTIONS,
});
const chat = model.startChat();

export default function Chatbox() {
    const [isOpen, setIsOpen] = useState(true);
    const [responses, setResponses] = useState(["AI: Hello, how can I help you today?"]);
    const [input, setInput] = useState("");

    const chatContainerRef = useRef(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [responses]);

    const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages

        const userMessage = input;
        setResponses([...responses, `You: ${userMessage}`]);

        try {
            setInput(""); // Clear input field temporarily
            const result = await chat.sendMessage(userMessage);
            setResponses(prev => [...prev, `AI: ${result.response.text()}`]);
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    return isOpen ? (
        <div  className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-lg z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
                <h1 className="text-lg font-semibold">AI Chat Assistant</h1>
                <button
                    className="text-gray-600 hover:text-gray-900"
                    onClick={() => setIsOpen(false)}
                >
                    <Image src="/right-arrow.png" width={15} height={15} className="rotate-90" alt="Close" />
                </button>
            </div>
            <div
                className="p-4 flex-1 overflow-y-auto space-y-2"
                ref={chatContainerRef} // Attach ref to the chat container
            >
                {responses.map((response, index) => (
                    <p key={index} className={`text-gray-600 ${response.startsWith("You:") ? "text-right" : ""}`}>
                        {response}
                    </p>
                ))}
            </div>
            <div className="p-2 border-t flex items-center">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
                />
                <button
                    onClick={handleSend}
                    className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Send
                </button>
            </div>
        </div>
    ) : (
        <button
            className="transition ease-in delay-50 fixed bottom-4 right-4 bg-gray-300 border border-gray-800 text-gray-800 p-4 rounded-full shadow-lg z-50 hover:bg-gray-100"
            onClick={() => setIsOpen(true)}
        >
            <Image src="/right-arrow.png" width={15} height={15} className="-rotate-90" alt="Open" />
        </button>
    );
}