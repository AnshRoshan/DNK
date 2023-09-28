import { useState } from 'react';

function ImageSlider() {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://th.bing.com/th?id=OPA.9sccm7IctLvBJQ474C474&w=592&h=550&o=5&pid=21.1',
    '../images/2.jpg',
    '../images/3.jpg' 
  ];

  const previousImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  }

  const nextImage = () => {
    setCurrentImageIndex(prevIndex =>
       prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  }

  return (
    <div className="relative">
      <button onClick={previousImage}>Prev</button>
      <button onClick={nextImage}>Next</button>
      
      <img 
        className="transition duration-500 ease-in-out transform -translate-x-full"
        src={images[currentImageIndex]} 
        alt="slider" 
      />
    </div>
  );
}

export default ImageSlider;