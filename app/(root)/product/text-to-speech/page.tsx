"use client";

import React, { useState, useEffect } from "react";
import DeleteConfirmation from "@/components/shared/DeleteConfirmation";
import { getApiTextToSpeech } from "@/app/api/texttospeech/api";
import MessageLoading from "@/components/shared/MessageLoading";
import FormPrompt from "@/components/shared/FormPrompt";
import { saveAs } from "file-saver";
import ChatSpeech from "@/components/shared/ChatSpeech";

interface ChatMessage {
  role: "user" | "ai";
  content: string;
  isTyping?: boolean;
}

const TextToSpeechPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedMessages = localStorage.getItem("textToImageChatMessages");
    if (storedMessages) {
      setChatMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("textToImageChatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage: ChatMessage = { role: "user", content: input };
    setChatMessages((prevMessages) => [...prevMessages, newMessage]);

    setLoading(true);
    setIsTyping(true);

    try {
      const response = await getApiTextToSpeech({
        text: [{ role: "user", content: input }],
      });

      console.log("API Response:", response); // <-- Tambahkan log ini untuk menampilkan respons API

      const aiMessage: ChatMessage = {
        role: "ai",
        content: response.content,
      };
      setChatMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (err) {
      console.log("API Error:", err);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }

    setInput("");
  };

  const handleClear = () => {
    setChatMessages([]);
    localStorage.removeItem("textToImageChatMessages");
  };

  console.log("Chat Messages:", chatMessages); // <-- Log untuk menampilkan chat messages

  return (
    <section className="relative min-h-[98vh] w-full transition-width flex flex-col overflow-hidden items-center justify-between flex-1">
      <header className="w-full sticky top-0">
        <div className="wrapper flex justify-between items-center">
          <div className="flex h-12 w-12 justify-center bg-white cursor-pointer hover:shadow-2xl shadow-lg">
            <DeleteConfirmation onDelete={handleClear} />
          </div>
        </div>
      </header>
      <div id="chat_container" className="h-full w-full overflow-y-scroll flex flex-col gap-3 flex-1">
        {chatMessages.map((message, index) => (
          <ChatSpeech key={index} role={message.role} content={message.content} />
        ))}
        {loading && <MessageLoading />}
      </div>
      <div className="max-w-5xl mx-auto px-5 md:px-10 w-full p-16-regular relative">
        <FormPrompt
          onSubmit={handleSubmit}
          inputProps={{
            value: input,
            onChange: (e) => setInput(e.target.value),
          }}
          buttonProps={{}}
        />
      </div>
    </section>
  );
};

export default TextToSpeechPage;
