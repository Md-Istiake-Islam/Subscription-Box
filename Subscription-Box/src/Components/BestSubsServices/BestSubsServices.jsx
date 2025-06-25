import React, { useEffect, useState } from "react";

import ReviewCountup from "./ReviewCountup";

const BestSubsServices = ({ subsData }) => {
   const [mostPopularPack, setMostPopularPack] = useState([]);

   useEffect(() => {
      const reviewData = [];
      subsData.map((item) => {
         reviewData.push(item.number_of_reviews);
      });
      const shortedData = reviewData.toSorted((a, b) => b - a);
      const shortedSubsData = subsData.filter((item) => {
         return shortedData.slice(0, 5).includes(item.number_of_reviews);
      });

      setMostPopularPack(shortedSubsData);
   }, [subsData]);

   return (
      <div className="container mb-20 mx-auto">
         <div className="w-full flex flex-col items-center gap-6 mb-8">
            <h1 className="text-2xl lg:text-4xl font-bold !font-jost">
               We Provide Best Subscriptions Services
            </h1>
            <p className="text-gray-500 max-w-lg lg:max-w-5xl text-center !font-jost">
               Enjoy hassle-free access to premium features with our top-rated
               subscription plans. Designed for value, flexibility, and
               convenience—experience the best, every day.{" "}
            </p>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 ">
            {mostPopularPack.map((item) => (
               <ReviewCountup key={item.id} item={item} />
            ))}
         </div>
      </div>
   );
};

export default BestSubsServices;
