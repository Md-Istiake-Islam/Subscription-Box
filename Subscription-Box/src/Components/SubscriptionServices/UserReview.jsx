import React, { useEffect, useState } from "react";
import { ReviewStorage } from "../../Utility/addToDB";
import DisplayReview from "./DisplayReview";
import { TbMessage2Star } from "react-icons/tb";
import { TbMessage2X } from "react-icons/tb";

const UserReview = ({ id }) => {
   const [reviews, setReview] = useState([]);

   useEffect(() => {
      const reviewData = ReviewStorage.getReviewsById(id);
      setReview(reviewData);
   }, [id]);

   return (
      <div className="bg-white rounded-xl mt-3 ">
         <div className="px-6 py-3 border-b border-b-gray-200">
            <h1 className="text-lg font-semibold text-primary-content mb-1">
               Review ( {reviews.length} )
            </h1>
            <p className="text-sm text-secondary-content">
               Get specific details about this product from customers who own
               it.
            </p>
         </div>
         <div className="text-sm p-6 text-secondary-content flex items-center justify-center flex-col min-h-60">
            <div className="p-3 bg-base-300 rounded-full mb-4">
               {reviews.length > 0 ? (
                  <TbMessage2Star className="text-4xl text-blue-500" />
               ) : (
                  <TbMessage2X className="text-4xl text-blue-500" />
               )}
            </div>

            <div>
               {reviews.length > 0 ? (
                  reviews.map((item, index) => (
                     <DisplayReview key={index} item={item} />
                  ))
               ) : (
                  <p className="text-sm !font-jost text-gray-700">
                     This product has no reviews yet. Be the first one to write
                     a review.
                  </p>
               )}
            </div>
         </div>
      </div>
   );
};

export default UserReview;
