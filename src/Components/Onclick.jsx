import React from 'react'

export default function Onclick() {

        const onclickfunction=(a,b)=>{
            console.log(a);
            console.log(b.type);
        }
  return (
    <div>
        <button style={{backgroundColor:'green',borderColor:'#000',borderRadius:"10px",padding:"10px 12px"}} onClick={(event) => onclickfunction('dfgsdfg',event)} >Onclick</button>
    </div>
  )
}
