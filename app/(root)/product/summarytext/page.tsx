'use client';

import React, { useState, useEffect } from 'react';
import DeleteConfirmation from '@/components/shared/DeleteConfirmation';
import FormTextarea from '@/components/shared/FormTextarea';
import { getApiSummaryText } from '@/app/api/summarytext/api';
import ChatMessage from '@/components/shared/ChatMessage';
import MessageLoading from "@/components/shared/MessageLoading";
import FormPrompt from '@/components/shared/FormPrompt';

interface ChatMessage {
  role: 'user' | 'ai';
  content: string;
  isTyping?: boolean;
}

const SummaryTextPage: React.FC = () => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);


  useEffect(() => {
    const storedMessages = localStorage.getItem('summaryChatMessages');
    if (storedMessages) {
      setChatMessages(JSON.parse(storedMessages));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem('summaryChatMessages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage: ChatMessage = { role: 'user', content: input };
    setChatMessages((prevMessages) => [
      ...prevMessages,
      newMessage,
    ]);

    setLoading(true);
    setIsTyping(true);

    try {
      const response = await getApiSummaryText({
        text: [{ role: 'user', content: input }],
        lang: 'id' // Ganti sesuai kebutuhan
      });

      const aiMessage: ChatMessage = { role: 'ai', content: response.content, isTyping: false };
      setChatMessages((prevMessages) => [
        ...prevMessages,
        aiMessage,
      ]);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }

    setInput("");
  };
  
  const handleDelete = () => {
    setChatMessages([]);
    localStorage.removeItem('summaryChatMessages');
  };
  const handleClear = () => {
    setChatMessages([]);
    localStorage.removeItem('summaryChatMessages');
  }

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
          buttonProps={{}}
        />
      </div>
    </section>
  );
};

export default SummaryTextPage;
