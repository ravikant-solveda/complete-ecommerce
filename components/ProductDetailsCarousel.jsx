import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[200px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
    <Carousel
      infiniteLoop={true}
      showIndicators={false}
      showStatus={false}
      thumbWidth={60}
      className="productCarousel"
    >
      <img src="/p1.png" alt="first" />
      <img src="/p2.png" alt="second" />
      <img src="/p3.png" alt="second" />
      <img src="/p4.png" alt="third" />
      <img src="/p5.png" alt="fouth" />
      <img src="/p6.png" alt="sixth" />
      <img src="/p7.png" alt="seventh" />
    </Carousel>
    
  </div>
  )
  
};

export default ProductDetailsCarousel;
