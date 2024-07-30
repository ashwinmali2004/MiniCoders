import axios from 'axios';

const geminiApiKey = process.env.NEXT_PUBLIC_API_GENERATIVE_LANGUAGE_CLIENT;

const convertPromptToSQL = async (prompt: string): Promise<string> => {
  const response = await axios.post(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`,
    {
      contents: [
        {
          parts: [
            {
              text: `Convert the following English prompt to a SQL query:\n\n${prompt}\n\nSQL Query:`
            }
          ]
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json'
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export default convertPromptToSQL;
