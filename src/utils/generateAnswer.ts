import axios from 'axios';

export const generateAnswer = async (
  question: string,
  dbType: string,
  setAnswer: (answer: string) => void,
  setGeneratingAnswer: (generating: boolean) => void
) => {
  setGeneratingAnswer(true);
  setAnswer("Loading your answer... \n It might take up to 10 seconds");

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.NEXT_PUBLIC_API_GENERATIVE_LANGUAGE_CLIENT}`,
      {
        contents: [{ parts: [{ text: `Convert the following English prompt to a ${dbType} query:\n\n${question}\n\n${dbType} Query:` }] }],
      }
    );

    setAnswer(response.data.candidates[0].content.parts[0].text);
    console.log(dbType);
  } catch (error) {
    console.error(error);
    
    setAnswer("Sorry - Something went wrong. Please try again!");
  }

  setGeneratingAnswer(false);
};
