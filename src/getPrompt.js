// import { useCallback } from 'react';

const generatePrompt = (receipt, hobbies, tone, language) => {
  let prompt = `
Generate a unique and engaging birthday greeting message for ${receipt} in ${language}.`;

  if (hobbies) {
    prompt += `Who love and enjoy ${hobbies}, integrate ${hobbies} into the message in a natural way.`;
  }
  switch (tone) {
    case 'Short and Simple':
      prompt += 'Aim for a concise and straightforward message.';
      break;
    case 'Happy':
      prompt += 'Aim for a joyful and celebratory tone.';
      break;
    case 'Funny':
      prompt += 'Aim for a humorous and lighthearted tone.';
      break;
    case 'Rhyming Poem':
      prompt += 'Aim for a short and rhyming poem-like message.';
      break;
    case 'Heartfelt':
      prompt += 'Aim for a sincere and emotionally touching message.';
      break;
    case 'Inspirational':
      prompt += 'Aim for a message that is uplifting and motivating.';
      break;
    case 'Professional':
      prompt += 'Aim for a formal and respectful tone.';
      break;
    case 'Poetic':
      prompt += 'Aim for a more lyrical and descriptive message.';
      break;
    default:
      prompt += '';
      break;
  }

  prompt += `
First line must be a short, crisp, and unique lyric line for ${receipt} birthday.`;
  prompt += ``;
  prompt += `
Overall text generated at all should not be greater than 150 words.`;
  prompt += `
Generate the content in 2 paragraph first paragraph for creative lyric line second for birthday greeting message and both paragraph must start with @ symbol and must maintain this format please don't apply any style in words like **happy birthday**.`;
  
  return prompt;
};

function generatePositiveWords(name) {
  const positiveWords = {  //object where keys are Alphabets and values are array
    A: ['Amazing', 'Admirable', 'Authentic'],
    B: ['Brave', 'Bold', 'Bright'],
    C: ['Creative', 'Compassionate', 'Courageous'],
    D: ['Determined', 'Dynamic', 'Dazzling'],
    E: ['Energetic', 'Empathetic', 'Enthusiastic'],
    F: ['Friendly', 'Fearless', 'Fascinating'],
    G: ['Grateful', 'Generous', 'Genuine'],
    H: ['Hopeful', 'Happy', 'Harmonious'],
    I: ['Inspiring', 'Innovative', 'Incredible'],
    J: ['Joyful', 'Jovial', 'Just'],
    K: ['Kind', 'Knowledgeable', 'Keen'],
    L: ['Loving', 'Loyal', 'Life-affirming'],
    M: ['Motivated', 'Mindful', 'Magical'],
    N: ['Noble', 'Nurturing', 'Natural'],
    O: ['Optimistic', 'Open-minded', 'Outstanding'],
    P: ['Positive', 'Passionate', 'Playful'],
    Q: ['Quality', 'Quick-witted', 'Quietly confident'],
    R: ['Resilient', 'Radiant', 'Reliable'],
    S: ['Strong', 'Supportive', 'Spirited'],
    T: ['Talented', 'Thoughtful', 'Tenacious'],
    U: ['Upbeat', 'Unstoppable', 'Unique'],
    V: ['Vibrant', 'Visionary', 'Valiant'],
    W: ['Wise', 'Warm', 'Wonderful'],
    X: ['Xtraordinary', 'Xceptional', 'Xciting'],
    Y: ['Youthful', 'Yearning', 'Yielding'],
    Z: ['Zestful', 'Zealous', 'Zippy'],
  };
  const words = name.trim().split(/\s+/);
  
  // Return the first word
  //  words.length > 0 ? words[0] : name;

  const capitalizedLetters = words[0].toUpperCase();
  const positiveWordsList = [...capitalizedLetters].map(letter => { 
    return positiveWords[letter] || [];
  });  //returned value se ek naya array bnega

  const formattedWords = positiveWordsList.map((words, index) => { //
    const word = words[index % words.length]; // Cycling through words if fewer words than characters
    return word;
  });
//formattedWords=[ 'Motivated', 'Open-minded', 'Magical' ]
  return formattedWords;
}

function extractMessage(text) {
  const parts = text.split('@').map(part => part.trim()).filter(Boolean);
      // Extract the lines into separate variables
      // creates a new array from calling a function for every array element. map applied on array
      let len=parts.length;
      let part1 = ''
      let part2 = ''
      let part3 = ''
      if(len<=3){
       part1 = parts[0].trim();
       part2 = parts[1].trim();
      //  part3 = parts[2].trim();
      }
      else if(len>=3){
         part1 = parts[0].trim();
         part2 = parts[1].trim();
         part3 =""
        for (let i=2;i<len;i++){
          part3+=parts[i].trim();
        }
      }
      
  return { part1, part2 };
}
async function fetchData(){
  try {
    setLoading(true); // Set loading state to true while fetching data
    const prompt=generatePrompt(name, hobbies, tone, language);
   
    const res = await fetchGeminiData(prompt);
    const { part1, part2 } = extractMessage(res);
    const part3 =generatePositiveWords(name) //array value is returned
    setFirstLine(part1);
    setSecondLine(part2);
    setThirdLine(part3);
    setName1(name1)
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
}


export { generatePrompt,extractMessage,generatePositiveWords,fetchData};