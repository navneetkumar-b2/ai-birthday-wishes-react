import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';

function useGeminiApi(prompt) {
    const [data, setData] = useState("");
  
    useEffect(() => {
        let isMounted = true; // Flag to track whether the component is mounted

        const fetchData = async () => {
            try {
                const apiKey = API; // Your API key
                const generativeAI = new GoogleGenerativeAI(apiKey);
        
                const model = generativeAI.getGenerativeModel({ model: 'gemini-pro' });
                const result = await model.generateContent(prompt);
                const response = await result.response.text();
                
                if (isMounted) {
                    setData(response);
                }
            } catch (error) {
                console.error(error);
                throw new Error("Error occurred while generating message");
            }
        };

        fetchData();

        // Cleanup function
        return () => {
            isMounted = false; // Set flag to false when component unmounts
        };
    }, [prompt]);

    return data;
}

export default useGeminiApi;
