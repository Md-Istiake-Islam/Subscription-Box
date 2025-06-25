import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReviewStorage = {
   key: "reviews",

   getAll() {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : {};
   },

   getReviewsById(id) {
      const data = this.getAll();
      return data[id]?.reviews || [];
   },

   addReview(id, review) {
      const data = this.getAll();

      if (!data[id]) {
         data[id] = { reviews: [] };
      }

      data[id].reviews.push(review);
      localStorage.setItem(this.key, JSON.stringify(data));
   },

   getAverageRating(id) {
      const reviews = this.getReviewsById(id);
      if (reviews.length === 0) return 0;

      const total = reviews.reduce((sum, r) => sum + r.rating, 0);
      return (total / reviews.length).toFixed(1);
   },
};

export { ReviewStorage };
