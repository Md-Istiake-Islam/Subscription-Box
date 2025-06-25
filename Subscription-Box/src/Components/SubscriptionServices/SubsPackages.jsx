import React from "react";
import { useNavigate } from "react-router";

const SubsPackages = ({ item }) => {
   const navigate = useNavigate();
   const { id, name, thumbnail, frequency, price, tech_category, highlight } =
      item;

   return (
      <div className="card bg-base-100 w-full shadow-sm border border-gray-300 p-6">
         <figure className="aspect-[16/9] mb-3">
            <img
               src={thumbnail}
               alt="Shoes"
               className="w-full h-full object-cover object-center rounded-xl"
            />
         </figure>
         <div className="card-body pb-2 pr-0.5 ">
            <h2 className="card-title text-1xl lg:text-2xl mb-2 ">{name}</h2>
            <h3 className="text-base lg:text-lg font-semibold text-gray-700 !font-jost">
               Join from{" "}
               <span className="text-lg lg:text-1xl text-gray-900">
                  ${price}/
               </span>
               <span className="text-base">{frequency} (Plus tax).</span>
            </h3>
            <p className="text-sm font-semibold bg-amber-300 px-3 py-1 max-w-max rounded-sm text-gray-600 mb-2 grow-0">
               Cancel anytime
            </p>
            <h3 className="text-base font-medium text-gray-700">
               Service Type{" "}
               <span className="font-bold text-primary-content">
                  {tech_category}
               </span>
            </h3>
            <p className="mb-4">{highlight}</p>
            <div className="card-actions justify-end">
               <button
                  onClick={() => navigate(`./packageDetails/${id}`)}
                  className="btn btn-primary text-white px-6"
               >
                  View More
               </button>
            </div>
         </div>
      </div>
   );
};

export default SubsPackages;
