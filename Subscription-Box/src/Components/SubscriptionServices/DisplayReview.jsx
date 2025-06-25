import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";

const DisplayReview = ({ item }) => {
   const { rating, Comment } = item;
   return (
      <div className="flex gap-2 items-center bg-base-200 px-5 min-w-md py-2 rounded-xl">
         <div className="p-2 bg-base-200 rounded-full">
            <h1>
               <FaRegUserCircle />
            </h1>
         </div>
         <div className=" flex gap-3">
            <p className="flex gap-2">
               {" "}
               <FaStarHalfStroke className="text-lg text-amber-600" />{" "}
               <span className="text-primary-content">{rating}</span>
            </p>
            <p className="text-sm text-primary-content font-medium">
               {" "}
               Reviews{" "}
               <span className="text-secondary-content text-sm">{Comment}</span>
            </p>
         </div>
      </div>
   );
};

export default DisplayReview;
