import React, { useEffect, useState } from 'react'

const CheckBox = (props) => {
    // setOption(props.value)
    // useEffect(()=>{console.log(option)},[])
    console.log(props.value)
     
  return (
    <div  >
        {
            props.value.map((opt,index)=>{
                
            })
        }
    </div>
  )
}

export default CheckBox
