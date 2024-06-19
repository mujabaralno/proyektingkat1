interface Message {
  role: 'user' | 'ai';
  content: string;
}

interface Messages {
  text: Message[];
}

export const getApiTextToSpeech = async ({ text }: Messages): Promise<{ content: string }> => {
  const url = 'https://open-ai-text-to-speech1.p.rapidapi.com/';
  const options = {
    method: 'POST',
    headers: {
      'x-rapidapi-key': 'f0f7edb346mshf8cdec684c6b451p1cb795jsna10c34d3f627',
      'x-rapidapi-host': 'open-ai-text-to-speech1.p.rapidapi.com',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'tts-1',
      input: text.map(msg => msg.content).join(' '),
      voice: 'alloy'
    })
  };

  try {
    const response = await fetch(url, options);
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer], { type: 'audio/wav' });
    const audioUrl = URL.createObjectURL(blob);
    return { content: audioUrl };
  } catch (error) {
    console.error("Error fetching text to speech:", error);
    throw error;
  }
};
