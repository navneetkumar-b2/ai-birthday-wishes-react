
const generatePrompt = (receipt, hobbies, tone, language) => {
    let prompt = `
  Generate a unique and engaging birthday greeting message for ${receipt} in ${language}.`;
    alert("i cld")
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
  Generate the content in 2 paragraph first paragraph for creative lyric line second for birthday greeting message and each paragraph must start with @ symbol and must maintain this format please don't apply any style in words like **happy birthday**.`;
    
    return prompt;
  }
  export default generatePrompt;