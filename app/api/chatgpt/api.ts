interface Messages {
    messages: { role: 'user' | 'ai'; content: string }[];
    web_access: boolean;
  }
  
  export const getApiGPT = async ({ messages, web_access: WebAccess }: Messages): Promise<{ content: string }> => {
    const response = await fetch("https://open-ai21.p.rapidapi.com/chatgpt", {
      method: "POST",
      headers: {
        "x-rapidapi-key": "91ca6dd1demsh892e5a53bbd6635p162836jsn1989634657e2",
        "x-rapidapi-host": "open-ai21.p.rapidapi.com",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages,
        web_access: WebAccess,
      }),
    });
  
    if (!response.ok) {
      throw new Error(response.statusText);
    }
  
    const data = await response.json();
    return { content: data.result };
  };
  