import React from 'react'

export default function Onclick() {
    const Onclick=(parameter)=>{
        console.log(parameter);

    }
  return (
    <div>
        <button style={{backgroundColor:'green',borderColor:'#000',borderRadius:"10px",padding:"10px 12px"}} onClick={() => Onclick('dfgsdfg')} >Onclick</button>
    </div>
  )
}
