import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import LoadingSpinner from "../Components/LoadingSpinner";
import MyProfile from "../Pages/MyProfile";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import PackageDetails from "../Pages/PackageDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import AboutUs from "../Pages/AboutUs";
import ForgotPassword from "../Pages/ForgotPassword";

const Routes = createBrowserRouter([
   {
      path: "/",
      Component: Root,
      hydrateFallbackElement: <LoadingSpinner />,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
         {
            index: true,
            Component: Home,
            hydrateFallbackElement: <LoadingSpinner />,
            loader: async () => {
               const res = await fetch("../SubscriptionPackages.json");
               return res.json();
            },
         },
         {
            path: "login",
            Component: Login,
         },
         {
            path: "register",
            Component: Register,
         },
         {
            path: "packageDetails/:id",
            hydrateFallbackElement: <LoadingSpinner />,
            element: (
               <PrivateRoute>
                  <PackageDetails />
               </PrivateRoute>
            ),
            loader: async () => {
               const res = await fetch("../SubscriptionPackages.json");
               return res.json();
            },
         },
         {
            path: "my-profile",
            element: (
               <PrivateRoute>
                  <MyProfile />
               </PrivateRoute>
            ),
         },
         {
            path: "about-us",
            element: (
               <PrivateRoute>
                  <AboutUs />
               </PrivateRoute>
            ),
         },
         {
            path: "forgot-password",
            element: <ForgotPassword />,
         },
      ],
   },
]);

export default Routes;
