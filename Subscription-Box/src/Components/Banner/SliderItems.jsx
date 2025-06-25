import React from "react";

const SliderItems = ({ item, index, sliderLength }) => {
   const { id, name, banner } = item;

   return (
      <div id={`slide${index + 1}`} className="carousel-item relative w-full">
         <img src={banner} className="w-full max-h-[calc(100vh-85px)] " />
         <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
               href={`#slide${index === 0 ? sliderLength : index}`}
               className="btn btn-circle"
            >
               ❮
            </a>
            <a
               href={`#slide${
                  index === sliderLength - 1 ? sliderLength - index : index + 2
               }`}
               className="btn btn-circle"
            >
               ❯
            </a>
         </div>
      </div>
   );
};

export default SliderItems;
