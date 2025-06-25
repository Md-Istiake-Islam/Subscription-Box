import React from "react";
import PageNotFoundImg from "../../assets/page-found-error-404-landing.avif";
import { useNavigate } from "react-router";

const PageNotFound = () => {
   const navigate = useNavigate();

   return (
      <div className="container mx-auto bg-gray-50 rounded-2xl flex flex-col items-center p-15 gap-6">
         <div className="max-w-2xl  border border-green-400 rounded-2xl overflow-hidden ">
            <img className="" src={PageNotFoundImg} alt="" />
         </div>
         <div className="flex flex-col items-center ">
            <h1 className="text-red-500 text-3xl font-extrabold mb-3">
               404 - Page Not Found
            </h1>
            <p className="text-base text-gray-500 mb-5">
               Opps! Page you are looking for doesn't exist
            </p>
            <button
               onClick={() => navigate("/")}
               className="btn bg-blue-500 text-white rounded-3xl px-6"
            >
               {" "}
               Back to Home
            </button>
         </div>
      </div>
   );
};

export default PageNotFound;
