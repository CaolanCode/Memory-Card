import React from "react";


export default function Card({image, index}) {
  return (
    <div className="card">
      <img src={image} alt={"Card " + index}/>
    </div>
  )
}