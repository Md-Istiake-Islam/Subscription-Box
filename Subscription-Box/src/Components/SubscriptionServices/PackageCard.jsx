import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { FaStarHalfStroke } from "react-icons/fa6";
import ReviewCard from "./ReviewCard";
import DescriptionCard from "./DescriptionCard";
import UserReview from "./UserReview";

const PackageCard = ({ id, packageData }) => {
   const {
      name,
      banner,
      frequency,
      price,
      description,
      tech_category,
      features,
      subscription_benefits,
      ratings,
      number_of_reviews,
      highlight,
   } = packageData;
   return (
      <div>
         <div className="pb-10">
            <div className="min-h-60 container mx-auto flex flex-col items-center justify-center px-20 lg:px-60 gap-6 mb-8">
               <h1 className="text-4xl font-bold !font-jost">
                  What’s included in {name}
               </h1>
               <p className="text-center text-gray-600 font-sm">
                  Explore a world of personalized subscription boxes — from
                  wellness and beauty to tech, snacks, and lifestyle essentials.
                  Whether you’re treating yourself or gifting someone special,
                  we bring top-quality products and services straight to your
                  door, tailored to your tastes and needs. One platform, endless
                  surprises.
               </p>
            </div>
            <div className="hero">
               <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12  gap-20">
                  <div className="flex items-center justify-center lg:col-span-5 px-14 lg:px-0">
                     <div className="aspect-[15/9] overflow-hidden justify-center">
                        <img
                           src={banner}
                           className="w-full h-full rounded-lg object-cover object-center"
                        />
                     </div>
                  </div>
                  <div className="lg:col-span-7 flex flex-col items-center lg:items-start gap-1">
                     <h1 className="text-4.5xl font-bold mb-3">{name}</h1>
                     <h3 className="text-lg font-semibold text-gray-700 !font-jost">
                        Join from{" "}
                        <span className="text-1xl text-gray-900">
                           ${price}/
                        </span>
                        <span className="text-base">
                           {frequency} (Plus tax).
                        </span>
                     </h3>
                     <p className="text-sm font-semibold  text-gray-800 mb-2 flex items-center gap-2 ">
                        <FaStarHalfStroke className="text-lg text-amber-600" />{" "}
                        <span className=" font-bold text-base">{ratings}</span>
                        <span>reviews {number_of_reviews}</span>
                     </p>
                     <h3 className="text-base font-medium text-gray-700">
                        Service Type{" "}
                        <span className="font-bold text-primary-content">
                           {tech_category}
                        </span>
                     </h3>
                     <p className="pb-2">{highlight}</p>

                     <div className="mb-2">
                        <span className="text-base font-semibold">
                           Features
                        </span>
                        {features.map((item, index) => {
                           return (
                              <p
                                 key={index}
                                 className="flex gap-1 text-sm items-center ml-2 text-gray-600 !font-jost"
                              >
                                 {" "}
                                 <IoCheckmarkCircleOutline className="text-base text-green-700" />
                                 {item}
                              </p>
                           );
                        })}
                     </div>
                     <div className="mb-3">
                        <span className="text-base font-semibold">
                           Subscription Benefits
                        </span>
                        {subscription_benefits.map((item, index) => {
                           return (
                              <p
                                 key={index}
                                 className="flex gap-1 text-sm items-center ml-2 text-gray-600 !font-jost"
                              >
                                 {" "}
                                 <IoCheckmarkCircleOutline className="text-base text-green-700" />
                                 {item}
                              </p>
                           );
                        })}
                     </div>

                     <button className="btn btn-primary bg-blue-800 text-white max-w-max">
                        Subscribe Now
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="bg-base-200 py-20 mx-auto">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-3">
               <div className="col-span-8">
                  <DescriptionCard description={description} />
                  <UserReview id={id}></UserReview>
               </div>
               <div className="col-span-4">{<ReviewCard id={id} />}</div>
            </div>
         </div>
      </div>
   );
};

export default PackageCard;
