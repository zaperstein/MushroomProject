import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text } from 'react-native';

const jewelweed = {
  uri: 'https://www.americanmeadows.com/media/catalog/product/i/m/impatiens_capensis.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=',
  width: 64,
  height: 64
};

const bolete = {
  uri: 'https://www.first-nature.com/fungi/images/boletaceae/imleria-badia1.jpg',
  width: 64,
  height: 64
};

const chanterelle = {
  uri: 'https://grocycle.com/wp-content/uploads/2022/02/black-trumpet-mushrooms-1-1024x674.jpg',
  width: 64,
  height: 64
};

const lambsquarters = {
  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRSMjAN--lGo3svK_M2Ib8-REDtGq8njVz3A&usqp=CAU',
  width: 64,
  height: 64
};



function Carousel() {
  const [images, setImages] = useState([]);


  //need to work on this, maybe using catch function, to get images from the back end 
  // useEffect(() => {
  //   fetch("http://localhost:3000/images")
  //     .then((r) => r.json())
  //     .then((r) => {
  //       // setImages(r);
  //       console.log(images);
  //     });
      
  // }, 
  // []);


  return (
    <ScrollView horizontal={true}>
    {/* {images.map((image) => <Image source={image.src} key={image.id} />)} */}
    <Image source={jewelweed} />
    <Text>Image 1</Text>
    <Image source={bolete} />
    <Text>Image 2</Text>
    <Image source={chanterelle} />
    <Text>Image 3</Text>
    <Image source={lambsquarters} />
    <Text>Image 4</Text>

  </ScrollView>
);
}

export default Carousel