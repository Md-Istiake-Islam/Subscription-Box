import React from "react";
import CountUp from "react-countup";

const ReviewCountup = ({ item }) => {
   const { name, banner, number_of_reviews } = item;
   return (
      <div>
         <div className="card  px-8 py-10 bg-gray-50 rounded-xl w-full">
            <figure className="aspect-[16/9] w-full">
               <img
                  src={banner}
                  alt="Shoes"
                  className="w-full h-full object-cover object-center rounded-xl"
               />
            </figure>
            <h1 className="text-3xl lg:text-4xl font-bold my-6">
               {<CountUp start={0} end={number_of_reviews}></CountUp>}+
            </h1>
            <p className="text-sm">{name}</p>
         </div>
      </div>
   );
};

export default ReviewCountup;
