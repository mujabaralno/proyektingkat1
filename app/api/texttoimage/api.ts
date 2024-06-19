interface Message {
    role: 'user' | 'ai';
    content: string;
  }
  
  interface Messages {
    text: Message[];
    web_access: boolean;
  }
  
  export const getApiTextToImage = async ({ text }: Messages): Promise<{ content: string }> => {
    const response = await fetch("https://chatgpt-42.p.rapidapi.com/texttoimage", {
      method: "POST",
      headers: {
        "x-rapidapi-key": "91ca6dd1demsh892e5a53bbd6635p162836jsn1989634657e2",
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text.map((msg) => msg.content).join(" "), 
      }),
    });
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    const data = await response.json();
    return { content: data.generated_image };
  };
  