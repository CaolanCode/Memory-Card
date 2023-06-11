import React from "react";
import Card from "./Card";


const Deck = () => {
  const imageArr = getImages()

  return (
    <div className="deck">
      {imageArr.map((pic, index) => 
        <Card key={index} image={pic} />
      )}
    </div>
  )
}

const getImages = () => {
  const img1 = "../src/images/poppy1.jpg"
  const img2 = "../src/images/poppy2.jpg"
  const img3 = "../src/images/poppy3.jpg"
  const img4 = "../src/images/poppy4.jpg"
  const img5 = "../src/images/poppy5.jpg"
  const img6 = "../src/images/poppy6.jpg"
  const img7 = "../src/images/poppy7.jpg"
  const img8 = "../src/images/poppy8.jpg"
  const img9 = "../src/images/poppy9.jpg"
  const img10 = "../src/images/poppy10.jpg"
  const img11 = "../src/images/poppy11.jpg"
  const img12 = "../src/images/poppy12.jpg"
  const img13 = "../src/images/poppy13.jpg"
  const img14 = "../src/images/poppy14.jpg"
  const img15 = "../src/images/poppy15.jpg"
  const img16 = "../src/images/poppy16.jpg"
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16]

  return images
}

export default Deck