import React, { useState } from 'react'

export default function FromView() {
    
    // const  [name,setName]= useState({});

    const  [inputValue, setInputValue] =  useState('');
    
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setName(values => ({...values, [name]: value}))
//   }

    const  handleChange = (event) => {
        const value = event.target;
        console.log(value);
        // setInputValue(values => ({...values, [inputValue]: value}));
    };


    const handleSubmit = (e) => {
    e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.age.value);
        console.log(e.target.message.value);
        // console.log(name.username);
        // console.log(name);
        // console.log(inputValue);
    }
  return (
    <div>
         {/* <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <input type="submit" />
         </form> */}
    <form onSubmit={handleSubmit}>
 
    <label>Input Value:
	<input  type="text" name='name' value={inputValue.name} onChange={handleChange} />
	</label>
    <label>Input Value:
	<input  type="text" name='age' value={inputValue.age} onChange={handleChange} />
	</label>

    <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={inputValue.message} onChange={handleChange}/>

    <button type="submit">Submit</button>
    </form>
    </div>
  )
}
