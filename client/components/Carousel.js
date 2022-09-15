import React, { useState, useEffect } from 'react'
import { Image, ScrollView, Text } from 'react-native';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};



function Carousel() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3000/images")
      .then((r) => r.json())
      .then((r) => {
        setImages(r);
        console.log(images);
      });
  }, []);


  return (
    <ScrollView horizontal={true}>
    {/* {images.map((image) => <Image source={image.src} key={image.id} />)} */}
    <Image source={logo} />
    <Text>Image 1</Text>
    <Image source={logo} />
    <Text>Image 2</Text>
    <Image source={logo} />
    <Text>Image 3</Text>
    <Image source={logo} />
    <Text>Image 4</Text>
    <Image source={logo} />
    <Text>Image 5</Text>

  </ScrollView>
);
}

export default Carousel