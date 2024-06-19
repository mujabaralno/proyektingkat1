import React from "react";
import Markdown from "markdown-to-jsx";
import Image from "next/image";
import TextTyper from "./TextTyper";

interface MessageProps {
  content: string;
  role: string;
  isTyping: boolean;
}

const Message: React.FC<MessageProps> = ({ content, role, isTyping }) => {
  const isUser = role === "user";

  return (
    <article
      className={`mb-4 flex items-start gap-4 p-4 md:p-5 rounded-2xl ${
        isUser ? '' : 'bg-emerald-50'
      }`}
    >
      <div className="w-[30px] h-[30px] rounded-full items-center bg-slate-400 flex justify-center">
        <Image
          src={role === "ai" ? "/assets/images/chatgpt.png" : "/assets/images/user.png"}
          alt={role}
          width={40}
          height={40}
        />
      </div>
      <div className={`py-1.5 md:py-1 space-y-4 ${isUser ? 'font-semibold' : ''}`}>
        {role === 'ai' && isTyping ? (
          <TextTyper text={content} />
        ) : (
          <Markdown
            options={{
              overrides: {
                ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
                ul: ({ children }) => <ul className="list-disc">{children}</ul>,
              },
            }}
          >
            {content}
          </Markdown>
        )}
      </div>
    </article>
  );
};

export default Message;
