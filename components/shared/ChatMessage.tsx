import React from "react";
import Loader from "./Loader";
import TextTyper from "./TextTyper";
import Image from "next/image";

interface ChatMessageProps {
  role: 'user' | 'ai';
  content: string;
  isTyping: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, isTyping }) => {
  return (
    <div className={`wrapper ${role === "ai" && "ai"}`}>
      <div className="w-full max-w-5xl m-auto flex flex-row gap-3 items-start">
        <div className="w-[30px] h-[30px] rounded-full items-center flex justify-center">
          <Image
            src={role === "ai" ? "/assets/images/chatgpt.png" : "/assets/images/user.png"}
            alt={role}
            width={40}
            height={40}
          />
        </div>
        <div className="flex-1 text-gray-700 p-medium-14 w-full whitespace-pre-wrap message">
          {role === "ai" && isTyping && <Loader />}
          {role === "ai" && !isTyping && <TextTyper  text={content} />}
          {role === "user" && <span className="text-black">{content}</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
