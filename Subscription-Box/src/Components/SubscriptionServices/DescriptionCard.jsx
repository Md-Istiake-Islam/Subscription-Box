import React from "react";

const DescriptionCard = ({ description }) => {
   return (
      <div className="bg-white rounded-xl">
         <div className="px-6 py-3 border-b border-b-gray-200">
            <h1 className="text-lg font-semibold">Description</h1>
         </div>
         <div className="text-sm p-6 text-secondary-content">
            <p>{description}</p>
         </div>
      </div>
   );
};

export default DescriptionCard;
