import React from "react";
import { useLoaderData } from "react-router";
import BannerSlider from "../Components/Banner/BannerSlider";
import SubscriptionServices from "../Components/SubscriptionServices/SubscriptionServices";
import BestSubsServices from "../Components/BestSubsServices/BestSubsServices";
import { ToastContainer } from "react-toastify";
import HomeHighlightSection from "../Components/Banner/HomeHighlightSection";

const Home = () => {
   const subsData = useLoaderData();
   const mostPopularPack = subsData.filter(
      (item) => item.number_of_reviews > 1200
   );

   return (
      <div className=" bg-base-100">
         <section>
            <BannerSlider mostPopularPack={mostPopularPack} />
         </section>
         <section className="mt-30 container mx-auto ">
            <SubscriptionServices subsData={subsData} />
         </section>
         <section className="mt-30 container mx-auto">
            <BestSubsServices subsData={subsData}></BestSubsServices>
         </section>
         <section>
            <HomeHighlightSection></HomeHighlightSection>
         </section>
         <ToastContainer position="top-center" theme="colored" pauseOnHover />
      </div>
   );
};

export default Home;
