import React from 'react';
import gif1 from '../../assets/gif1.gif'
import gif2 from '../../assets/gif2.gif'
import gif3 from '../../assets/gif3.gif'


function ImageDispaly() {
  return (
    <div className='m-3'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
  <div className="bg-red-100">
    <img src={gif1} alt="img hee" srcSet="" className=''/>
  </div>
  <div className="bg-orange-400">
  <img src={gif2} alt="img hee" srcSet="" className=''/>

  </div>
  <div className="bg-green-500 col-span-2 md:col-span-1">
  <img src={gif3} alt="img hee" srcSet="" className=''/>

  </div>


</div>
    </div>
  );
}

export default ImageDispaly;
