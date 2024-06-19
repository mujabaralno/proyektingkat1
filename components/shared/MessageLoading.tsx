import React from "react";
import Image from "next/image";
const MessageLoading: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-row gap-3 items-start">
      <article className=" mb-2 flex items-center gap-4 p-4 md:p-5 rounded-2xl ">
        
        <p className="text-emerald-800 p-medium-14">Nexus Thinking</p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="text-emerald-800"
        >
          <circle cx="4" cy="12" r="2" fill="currentColor">
            <animate
              id="spinner_qFRN"
              begin="0;spinner_OcgL.end+0.25s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
          <circle cx="12" cy="12" r="2" fill="currentColor">
            <animate
              begin="spinner_qFRN.begin+0.1s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
          <circle cx="20" cy="12" r="2" fill="currentColor">
            <animate
              id="spinner_OcgL"
              begin="spinner_qFRN.begin+0.2s"
              attributeName="cy"
              calcMode="spline"
              dur="0.6s"
              values="12;6;12"
              keySplines=".33,.66,.66,1;.33,0,.66,.33"
            />
          </circle>
        </svg>
        
      </article>
    </div>
  );
};

export default MessageLoading;
