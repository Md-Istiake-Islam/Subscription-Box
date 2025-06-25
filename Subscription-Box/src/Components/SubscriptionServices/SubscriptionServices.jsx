import React, { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import SubsPackages from "./SubsPackages";

const SubscriptionServices = ({ subsData }) => {
   /* const collapsedData = subsData.slice(0, 6); */

   const [displaySubsData, setDisplaySubsData] = useState(subsData.slice(0, 6));
   const [viewAll, setViewAll] = useState(false);

   useEffect(() => {
      if (viewAll) {
         setDisplaySubsData(subsData);
      } else {
         setDisplaySubsData(subsData.slice(0, 6));
      }
   }, [subsData, viewAll]);

   return (
      <div>
         <div className="w-full text-center my-20 flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4.5xl font-semibold text-secondary-content !font-jost mb-3">
               Our{" "}
               <span className="font-extrabold text-primary-content !font-jost">
                  Subscription Services
               </span>
            </h1>
            <p className="text-secondary-content text-sm lg:text-lg font-medium !font-jost">
               Different Subscription Box Model is available in our Site
            </p>
            <div className="flex flex-col mt-8 gap-2 ">
               <p className="flex items-center gap-2 text-secondary-content !font-jost text-sm lg:text-base">
                  <IoCheckmarkCircleOutline className="text-base lg:text-xl !text-primary-content" />
                  100% Satisfaction Guarantee
               </p>
               <p className="flex items-center gap-2 text-secondary-content !font-jost text-sm lg:text-base">
                  <IoCheckmarkCircleOutline className="text-base lg:text-xl !text-primary-content" />
                  Stay Up-To-Date Through Newsletter
               </p>
            </div>
         </div>
         <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {displaySubsData.map((item) => (
               <SubsPackages key={item.id} item={item}></SubsPackages>
            ))}
         </div>
         <div className="w-full flex items-center justify-center mb-6">
            <button
               onClick={() => {
                  setViewAll((pre) => !pre);
               }}
               className="btn btn-primary bg-transparent border border-blue-600 rounded-xl text-blue-600 hover:bg-blue-600 hover:text-white px-10"
            >
               View More
            </button>
         </div>
      </div>
   );
};

export default SubscriptionServices;
