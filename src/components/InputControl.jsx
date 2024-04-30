import React, {useId} from 'react'

function InputControl({label,placeholder,error,value,type,onchange,required}) {
    const uniqueId=useId()
    const handleChange = (event) => {
        const value = event.target.value;
        onchange(value); // Call the onchange function with the new value
    };
  return (
    <>
            <div className="h-[60px] mb-[40px]">
            <label htmlFor={uniqueId} className=" text-green-800 p-1 my-3  text-left">{label}</label>
            <input required={required}  type={type} value={value} onChange={handleChange} id={uniqueId} placeholder={placeholder}  min={0}
            className="w-full h-[45px] mt-2 rounded-md bg-slate-100 border-2 border-black-300 px-3 placeholder:pl-0 text-green-800 outline-green-600"
            />
            {error && <p className="text-red-500 font-medium animate-bounce">*{error}</p>}
            </div>
        </>
  );
}

export default InputControl;
