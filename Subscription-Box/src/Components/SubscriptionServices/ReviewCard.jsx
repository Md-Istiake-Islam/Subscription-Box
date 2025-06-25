import React, { useState } from "react";
import { ReviewStorage } from "../../Utility/addToDB";
import { ToastContainer, toast } from "react-toastify";

const ReviewCard = ({ id }) => {
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(0);
   const [review, setReview] = useState("");

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!rating || !review.trim()) {
         alert("Please provide a rating and a written review.");
         return;
      }

      const reviewData = {
         rating: rating,
         Comment: review,
      };

      ReviewStorage.addReview(id, reviewData);
      toast.success("Review submit successfully");

      setRating(0);
      setHover(0);
      setReview("");
   };

   return (
      <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-2xl">
         <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Write your review
         </h2>

         <form onSubmit={handleSubmit}>
            {/* Rating */}
            <div className="flex items-center space-x-1 mb-4">
               {[1, 2, 3, 4, 5].map((star) => (
                  <button
                     key={star}
                     type="button"
                     onClick={() => setRating(star)}
                     onMouseEnter={() => setHover(star)}
                     onMouseLeave={() => setHover(0)}
                     className={`text-3xl ${
                        (hover || rating) >= star
                           ? "text-yellow-400"
                           : "text-gray-300"
                     } transition-colors`}
                  >
                     ★
                  </button>
               ))}
            </div>

            {/* Review Textarea */}
            <textarea
               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
               placeholder="Write your review here..."
               value={review}
               onChange={(e) => setReview(e.target.value)}
               rows="4"
            ></textarea>

            {/* Submit Button */}
            <button
               type="submit"
               className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
               Submit Review
            </button>
         </form>
         <ToastContainer position="top-center" theme="colored" pauseOnHover />
      </div>
   );
};

export default ReviewCard;
