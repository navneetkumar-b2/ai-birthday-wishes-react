import { useEffect, useState } from 'react';

function useGemini(name, age, hobbies, tone, language) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiKey = ''; // Your API key
                const generativeAI = new GoogleGenerativeAI(apiKey);
                const prompt = `Generate a unique and engaging birthday greeting message in ${language} for someone named ${name} who is ${age} years old and enjoys ${hobbies}.`;
                const model = await generativeAI.getGenerativeModel({ model: 'gemini-pro' });
                const result = await model.generateContent(prompt);
                const response = await result.response;
                const text = await response.text();
                setData(text);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [name, age, hobbies, language]);

    return data;
}

export default useGemini;
