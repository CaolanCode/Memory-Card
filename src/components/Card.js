import React from "react";


export default function Card({image, index, onClick}) {

  const handleClick = () => {
    onClick(index)
  }
  
  return (
    <div className="card" onClick={handleClick}>
      <img src={image} alt={"Card " + index}/>
    </div>
  )
}