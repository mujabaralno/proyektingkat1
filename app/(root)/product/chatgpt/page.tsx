'use client';

import React, { useState, useEffect } from 'react';
import ChatMessage from '@/components/shared/ChatMessage';
import DeleteConfirmation from '@/components/shared/DeleteConfirmation';
import FormPrompt from '@/components/shared/FormPrompt';
import { getApiGPT } from '@/app/api/chatgpt/api';
import MessageLoading from "@/components/shared/MessageLoading";

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  isTyping?: boolean;
}

const ChatGPTPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setChatMessages((prevMessages) => [
      ...prevMessages,
      { role: 'user', content: input },
    ]);
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await getApiGPT({
        messages: [{ role: 'user', content: input }],
        web_access: false
      });

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { role: 'ai', content: response.content, isTyping: false }, 
      ]);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }

    setInput("");
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  };

  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages");
    if (storedMessages) {
      setChatMessages(JSON.parse(storedMessages));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);
  
  const handleClear = () => {
    setChatMessages([]);
    localStorage.removeItem("chatMessages");
  };

  return (
    <section className='relative min-h-[98vh] w-full transition-width flex flex-col overflow-hidden items-center justify-between flex-1'>
      <header className='w-full sticky top-0'>
        <div className='wrapper flex justify-between items-center'>
          <div className='flex h-12 w-12  justify-center bg-white cursor-pointer hover:shadow-2xl shadow-lg'>
            <DeleteConfirmation onDelete={handleClear} />
          </div>
        </div>
      </header>
      <div id='chat_container' className='h-full w-full overflow-y-scroll  flex flex-col gap-3 flex-1'>
        {chatMessages.map((message, index) => (
          <ChatMessage
            key={index}
            role={message.role}
            content={message.content}
            isTyping={isTyping && message.role === 'ai' && index === chatMessages.length - 1}
          />
        ))}
        {loading && <MessageLoading />}
      </div>
      <div className='max-w-5xl mx-auto px-5 md:px-10 w-full p-16-regular relative'>
        <FormPrompt 
          onSubmit={handleSubmit} 
          inputProps={{
            value: input,
            onChange: (e) => setInput(e.target.value),
          }}
          buttonProps={{ disabled: loading }}
        />
      </div>
      
    </section>
  );
};

export default ChatGPTPage;
