import {
  dining_detail_light,
  dining_light,
  events_detail_light,
  events_light,
  fitness_light,
  resources_light,
  safety_light,
  study_light,
} from "../../assets";
import { useState, useEffect } from "react";

function ImageCarousel() {
  const images = [
    dining_detail_light,
    dining_light,
    events_detail_light,
    events_light,
    fitness_light,
    resources_light,
    safety_light,
    study_light,
  ];

  const [currImgIndex, setCurrImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrImgIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="relative h-[600px] w-full overflow-hidden">
    {images.map((image, index) => (
      <img
        key={index}
        src={image}
        alt={`Slide ${index}`}
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000
          ${index === currImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
      />
    ))}
  </div>
);

}

export default ImageCarousel;
