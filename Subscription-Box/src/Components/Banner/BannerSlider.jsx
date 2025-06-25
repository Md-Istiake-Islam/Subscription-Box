import React from "react";
import SliderItems from "./SliderItems";

const BannerSlider = ({ mostPopularPack }) => {
   const sliderLength = mostPopularPack.length;
   return (
      <div className="carousel w-full">
         {mostPopularPack.map((item, index) => (
            <SliderItems
               key={index}
               item={item}
               index={index}
               sliderLength={sliderLength}
            />
         ))}
      </div>
   );
};

export default BannerSlider;
