import React, { useEffect,useState } from "react";

function MsgBox() {
// const [scroll,setScroll]=useState(false)
  const handleClick=()=>{
    // setScroll(true);
    
  };

  // useEffect(() => {
  //   if (scroll) {
  //     formRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly into vie
  //   }
  // }, [scroll]);

//forward rdf is a hook ,and hook cant called from a function,
  return (
    <div>
      <h3 className="text-2xl p-5 font-bold text-center	">10 Best short Birthday wishes:</h3>
      <ol className="m-8 list-outside  list-decimal "> 
        <li className="py-2">Happy Birthday! 🎉 May your day be as wonderful as you are! 🌟</li>

        <li className="py-2">Cheers to you on your special day! 🥂🎂 Have a blast! 🚀</li>

        <li className="py-2">Wishing you a year full of blessings and joy! 🎊🎁</li>

        <li className="py-2">Have a fantastic birthday celebration! 🎈🍰 Party on! 🎉</li>

        <li className="py-2">
          Have a Very Happy Birthday! Keep shining bright! ✨🌈{" "}
         
            Eat lots of Cakes
          
          🍰
        </li>

        <li className="py-2">
    
          Happy Birthday! May your day be filled with smiles, laughter, and
          love! ❤️😊🎂
        </li>

        <li className="py-2">
          Celebrating you today! 🥳🌟 Wishing you an amazing year ahead! 🎈✨🍰
        </li>

        <li className="py-2">
          Happy Birthday! 🎉🎂 May each moment today be as special as you are!
          🌈💖🥂
        </li>

        <li className="py-2">
          Here’s to a fabulous birthday and a joyful year ahead! 🍾🎊🎂 Cheers!
          🥂✨
        </li>
        <li className="py-2">
          Sending waves of joy and
            happiness on your special day 
          ! 🌊🎉 Happy Birthday! 🎂🌟🎈
        </li>
      </ol>
      <div className="p-4">
        <p>
          Want personalised greeting ? 
        </p>
        <p>
          <button  className="" onClick={handleClick}>Generate Now ☝
          </button>
        </p>
      </div>
    </div>
  );
}
export default MsgBox;
