import React from "react";
import LoadingSpinner from "../Components/LoadingSpinner";
import Navbar from "../Components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const Root = () => {
   return (
      <div>
         <Navbar />
         <div>
            <Outlet />
         </div>
         <Footer />
      </div>
   );
};

export default Root;
