import React, { useState } from "react";
import InputControl from "../InputControl";
import { fetchGeminiData } from "../../useGeminiApi";
import {
  generatePrompt,
  extractMessage,
  capitalizeFirstLetter,
  generatePositiveWords,
} from "../../getPrompt";
import "./loader.css";
import "./home.css";
function Home() {
  const [name, setName] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [tone, setTone] = useState("Short and Simple");
  const [error, setError] = useState("");
  const [language, setLanguage] = useState("english");
  const [loading, setLoading] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState(""); // State to store the generated message
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const [thirdLine, setThirdLine] = useState("");
  const handleSelectChange = (event) => {
    setTone(event.target.value); // Update the selected option when it changes
  };
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log("called submit");
    setLoading(true); // Set loading state to true while fetching data
    try {
      const prompt = generatePrompt(name, hobbies, tone, language);
      //   alert(prompt);
      const res = await fetchGeminiData(prompt);

      const { part1, part2 } = extractMessage(res);
      const part3 =generatePositiveWords(name)
      setFirstLine(part1);
      setSecondLine(part2);
      setThirdLine(part3);
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="">
      <div
        style={{ backgroundColor: "rgba(220, 255, 251, 1)" }}
        className="min-w-[300px] max-w-[600px] 
        flex flex-col items-center
        pt-7 mx-auto p-2 bg-teal-100
        "
      >
        <p className="font-bold text-center text-xl">
          Enter Name below and get Started
        </p>
        <form onSubmit={handleSubmit} className="w-[100%] p-5">
          <InputControl
            label={"Enter Name :"}
            type={"text"}
            onchange={(value) => setName(value)}
            // id={"title"}
            value={name}
            placeholder={"Enter Name Here"}
            error={error.title}
          />
          <InputControl
            label={"Hobbies :(optional)"}
            type={"text"}
            value={hobbies}
            onchange={(val) => setHobbies(val)}
            placeholder={"caring,biking,music,dance,reels"}
            error={error.amount}
          />

          <label className="text-xl text-green-800  h-[60px] mb-[30px]p-1 my-3 mb-[50px] font-bold text-left">
            Keep the Tone :
          </label>
          <select
            value={tone}
            onChange={handleSelectChange} // Call handleSelectChange when the selection changes
            className="w-full h-[45px] mt-2 mb-2 rounded-md bg-slate-100 border-2 border-black-300 px-3 placeholder:pl-3 text-green-800 outline-green-600"
          >
            <option value="Short and Simple">Short and Simple</option>
            <option value="Funny">Funny</option>
            <option value="Happy">Happy</option>
            <option value="Rhyming Poem">Rhyming Poem</option>
            <option value="Heartfelt">Heartfelt</option>
            <option value="Inspirational">Inspirational</option>
            <option value="Professional">Professional</option>
            <option value="Poetic">Inspirational</option>
          </select>
          <label className="text-xl h-[60px] mb-[30px] mt-2 text-green-800  font-bold text-left">
            language :
          </label>
          <select
            value={language}
            onChange={handleLanguageChange} // Call handleSelectChange when the selection changes
            className="w-full h-[45px] mt-2 bg-slate-100 border-2 border-black-300 rounded-md px-3 placeholder:pl-3 text-green-800 outline-green-600"
          >
            <option value="English">English</option>
            <option value="Hinglish">Hinglish</option>
            <option value="Hindi">Hindi</option>
          </select>

          <button
            type="submit"
            className="bg-green-300 mt-4 p-2 w-[100px] rounded-lg font-bold text-green-800"
          >
            Generate
          </button>
        </form>
        {loading && (
          <div className="flex flex-col justify-center items-center ">
            <h1 className="mt-6"> loading data... </h1>
            <div class="loader m-4"></div>
          </div>
        )}
        {/* Display the generated message if available */}
        {generatedMessage && (
          <div>
            <h2>Generated Message:</h2>
            {/* <h1 className="bg-yellow-500">{firstLine}</h1>
          <p>{restOfText}</p> */}
            <p className="bg-red-500">{generatedMessage}</p>
          </div>
        )}
      </div>
      {firstLine && (
      <div className="w-full bg-cyan-100">
        <div className="flex flex-col  ">
          {firstLine && (
            <>
              <div className="flex flex-col px-4 mx-2 py-1 items-center justify-center">
                <h2 className="text-3xl text-center p-1 leading-10  text-orange-500">
                  Happy Birthday ,{`${name.toUpperCase()}`}
                  <br></br>
                  🧁🕯🎈🥳🎁🎉
                </h2>
                <p className="p-1 pl-2 my-6 italic text-xl border-l-4 bg-orange-50 border-orange-500">{firstLine}</p>
                <hr className="font-bold text-red-400"></hr>
              </div>
            </>
          )}
          {secondLine && (
            <>
              <div className="flex flex-col px-4 mx-2 ">
                <p className="text-2xl font-bold text-black">
                  Greetings for {`${name.toUpperCase()}`}
                </p>
                <p className="pb-8 pt-2 text-xl">{secondLine}</p>
              </div>
            </>
          )}
          {thirdLine && (
            <>
              <div className=" px-4 mx-2">
                <p>{thirdLine}</p>
              </div>
            </>
          )}
        </div>
      </div>
      )}
    </div>
  );
}

export default Home;
