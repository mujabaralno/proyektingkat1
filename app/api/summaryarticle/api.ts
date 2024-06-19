interface Messages {
    text: string; // URL of the article
    lang: string;
  }
  
  export const getApiSummaryArticle = async ({
    text,
    lang,
  }: Messages): Promise<{ content: string }> => {
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${encodeURIComponent(
      text
    )}&lang=${lang}&engine=2`;
  
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "91ca6dd1demsh892e5a53bbd6635p162836jsn1989634657e2",
        "x-rapidapi-host": "article-extractor-and-summarizer.p.rapidapi.com",
      },
    };
  
    try {
      const response = await fetch(url, options);
  
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
  