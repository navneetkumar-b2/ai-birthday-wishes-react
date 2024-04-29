import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const GreetingDisplay = () => {
  // State variables to store user input and generated greeting
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hobbies, setHobbies] = useState('');
  const [event, setEvent] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English
  const [greeting, setGreeting] = useState('');

  // API Key (replace with your actual API key)
  const apiKey = '';

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create GoogleGenerativeAI instance
    const generativeAI = new GoogleGenerativeAI(apiKey);

    // Get the generative model
    // const model = await generativeAI.getGenerativeModel('gemini-pro');
    const model = await generativeAI.getGenerativeModel({ model: 'gemini-pro' });

    // Construct the prompt for Gemini based on user input
    const prompt = `Generate a ${event} greeting in ${language} for someone named ${name} who is ${age} years old and enjoys ${hobbies}.`;

    // Call the API to generate text
    try{
        //   const result = await model.generateContent(prompt);
        const result = await model.generateContentStream(prompt);
        let text = '';
        for await (const chunk of result.stream) {
          const chunkText = chunk.text();
          console.log(chunkText);
          text += chunkText;
          console.log(text);
        }
        setGreeting(text)
        //   const response = await result.response;
        //   const text = response.text();
        } catch (error) {
      console.error(error);
      alert("err")
      // Handle API errors
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Input fields for user information */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
                <br></br>

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age"
        />
                <br></br>

        <input
          type="text"
          value={hobbies}
          onChange={(e) => setHobbies(e.target.value)}
          placeholder="hobbies"
        />
        <br></br>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="event"
        />
        <br></br>

        {/* Other input fields for age, hobbies, event, language */}
        <button type="submit">Generate Greeting</button>
      </form>
      {/* Display the generated greeting */}
      {greeting && <p>{greeting}</p>}
    </div>
  );
};

export default GreetingDisplay;
