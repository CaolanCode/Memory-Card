import React, { useState } from "react";
import Card from "./Card";


const Deck = () => {
  const [score, setScore] = useState({})
  const [total, setTotal] = useState(0)
  const [best, setBest] = useState(0)
  const [imageObj, setImageObj] = useState(getImages())

  const handleClick = (id) => {
    if(score[id] === 1) {
      setScore({})
      if(total > best) {
        setBest(total)
      } 
      setTotal(0)
    } else {
       setScore({...score, [id]: 1})
       setTotal(total + 1)
    }
    setImageObj(shuffleDeck(imageObj))
  }


  return (
    <>
    <div className="score">
      <div>Score: {total}</div>
      <div>Best: {best}</div>
    </div>
    <div className="deck">
      {imageObj.map((image) => 
        <Card 
          key={image.id} 
          image={image.url}
          onClick={() => handleClick(image.id)}
          index={image.id}
          />
      )}
    </div>
    </>
  )
}

const shuffleDeck = (arr) => {
  const shuffleArr = [...arr]

  for(let i = shuffleArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffleArr[i]
    shuffleArr[i] = shuffleArr[j]
    shuffleArr[j] = temp 
  }

  return shuffleArr
}

const getImages = () => {
  const images = [
    { id: 1, url: "../src/images/poppy1.jpg"},
    { id: 2, url: "../src/images/poppy2.jpg"},
    { id: 3, url: "../src/images/poppy3.jpg"},
    { id: 4, url: "../src/images/poppy4.jpg"},
    { id: 5, url: "../src/images/poppy5.jpg"},
    { id: 6, url: "../src/images/poppy6.jpg"},
    { id: 7, url: "../src/images/poppy7.jpg"},
    { id: 8, url: "../src/images/poppy8.jpg"},
    { id: 9, url: "../src/images/poppy9.jpg"},
    { id: 10, url: "../src/images/poppy10.jpg"},
    { id: 11, url: "../src/images/poppy11.jpg"},
    { id: 12, url: "../src/images/poppy12.jpg"},
    { id: 13, url: "../src/images/poppy13.jpg"},
    { id: 14, url: "../src/images/poppy14.jpg"},
    { id: 15, url: "../src/images/poppy15.jpg"},
    { id: 16, url: "../src/images/poppy16.jpg"}
  ]

  return images
}


export default Deck