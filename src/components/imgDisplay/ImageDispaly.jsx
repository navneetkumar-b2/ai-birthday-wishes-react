import React from 'react';
import img5 from '../../assets/img5.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
function ImageDispaly() {
  return (
    <div className='m-3'>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
  <div className="bg-red-100">
    <img src={img3} alt="img hee" srcSet="" className=''/>
  </div>
  <div className="bg-orange-400">
  <img src={img5} alt="img hee" srcSet="" className=''/>

  </div>
  <div className="bg-green-500 col-span-2 md:col-span-1">
  <img src={img4} alt="img hee" srcSet="" className=''/>

  </div>


</div>
    </div>
  );
}

export default ImageDispaly;
