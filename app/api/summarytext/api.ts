interface Messages {
    text: { role: 'user' | 'ai'; content: string }[];
    lang: string;
  }
  
  export const getApiSummaryText = async ({ text, lang }: Messages): Promise<{ content: string }> => {
    try {
      const response = await fetch("https://article-extractor-and-summarizer.p.rapidapi.com/summarize-text", {
        method: "POST",
        headers: {
          'x-rapidapi-key': '91ca6dd1demsh892e5a53bbd6635p162836jsn1989634657e2',
          'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          lang: lang,
          text: text.map((msg) => msg.content).join(" "), 
        }),
      });
  
      if (!response.ok) {
        throw new Error(response.statusText);
      }
  
      const data = await response.json();
      return { content: data.summary };  
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  