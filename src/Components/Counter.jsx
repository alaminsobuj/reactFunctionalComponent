import React, { useState } from 'react'

export default function Counter() {
 
    const [count, setCount] = useState(0);
    const handlechange=()=>{
        setCount(count+1);
    }
    const handleChangeDecrement=()=>{
        setCount(count-1);
        console.log('test');
    }
  return (
    <div>
        <span>{  count }</span>
        <button onClick={handlechange}>Onclick</button>
        <button onClick={handleChangeDecrement}>Onclick Decrement</button>
    </div>
  )
}
