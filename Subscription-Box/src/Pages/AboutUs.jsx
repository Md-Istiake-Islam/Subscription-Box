import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function AboutUs() {
   return (
      <div className="container mx-auto p-6 min-h-[calc(100vh-200px)] pt-20">
         <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-4 text-base text-gray-600">
               Discover joy through curated subscription boxes – gadgets,
               snacks, beauty, and entertainment!
            </p>
         </div>

         <div className="grid gap-8 lg:grid-cols-2">
            <div className="card bg-base-100 shadow-md p-6">
               <h2 className="text-2xl font-semibold mb-2">🎯 Our Mission</h2>
               <p className="text-base text-secondary-content">
                  We aim to deliver curated experiences to your doorstep.
                  Whether you're into cutting-edge tech, delicious food,
                  self-care, or pure fun — our boxes bring happiness to your
                  daily life.
               </p>
            </div>

            <div className="card bg-base-100 shadow-md p-6">
               <h2 className="text-2xl font-semibold mb-4">
                  💡 Why Choose Us?
               </h2>
               <ul className="space-y-1.5">
                  <li>
                     <p className="flex gap-2 text-sm">
                        <IoCheckmarkCircleOutline className="text-xl text-green-500" />
                        Top-quality, handpicked items
                     </p>
                  </li>
                  <li>
                     <p className="flex gap-2 text-sm">
                        <IoCheckmarkCircleOutline className="text-xl text-green-500" />
                        New surprises every month
                     </p>
                  </li>
                  <li>
                     <p className="flex gap-2 text-sm">
                        <IoCheckmarkCircleOutline className="text-xl text-green-500" />
                        Seamless delivery and tracking
                     </p>
                  </li>
                  <li>
                     <p className="flex gap-2 text-sm">
                        <IoCheckmarkCircleOutline className="text-xl text-green-500" />
                        Responsive customer support
                     </p>
                  </li>
               </ul>
            </div>

            <div className="card bg-base-100 shadow-md p-6 lg:col-span-2">
               <h2 className="text-2xl font-semibold mb-2">📞 Contact Us</h2>
               <p className="text-sm">
                  We'd love to hear from you! Email us at{" "}
                  <a
                     href="mailto:istiakeislam7@gmail.com"
                     className="link link-primary"
                  >
                     istiakeislam7@gmail.com
                  </a>
               </p>
            </div>
         </div>

         <div className="text-center mt-12">
            <p className="text-gray-500">
               Thank you for choosing{" "}
               <span className="font-semibold text-primary">BoxJoy</span> –
               let’s unbox happiness together!
            </p>
         </div>
      </div>
   );
}

export default AboutUs;
