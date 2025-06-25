import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import Logo from "../../assets/SubscriptionBox-Logo.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const Navbar = () => {
   const navigate = useNavigate();
   const { user, logOut } = useContext(AuthContext);

   const handelLogout = () => {
      logOut()
         .then(() => {
            toast.success("logout successfully");
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };
   const links = (
      <>
         <li className="text-base font-semibold hover:text-blue-500 rounded-lg">
            <NavLink className="hover:bg-transparent" to={"/"}>
               Home
            </NavLink>
         </li>
         <li className="text-base font-semibold hover:text-blue-500  rounded-lg">
            <NavLink className="hover:bg-transparent" to={"./my-profile"}>
               My-profile
            </NavLink>
         </li>
         <li className="text-base font-semibold hover:text-blue-500  rounded-lg">
            <NavLink className="hover:bg-transparent" to={"./about-us"}>
               About-Us
            </NavLink>
         </li>
      </>
   );

   return (
      <div className="bg-gray-300 py-2">
         <div className="container mx-auto navbar">
            <div className="navbar-start">
               <div className="dropdown">
                  <div
                     tabIndex={0}
                     role="button"
                     className="btn btn-ghost lg:hidden"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        {" "}
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth="2"
                           d="M4 6h16M4 12h8m-8 6h16"
                        />{" "}
                     </svg>
                  </div>
                  <ul
                     tabIndex={0}
                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
                  >
                     {links}
                  </ul>
               </div>
               <Link className="hidden lg:block" to={"/"}>
                  <h1 className="text-xl lg:text-3xl font-bold !font-work-sans bg-gradient-to-l from-blue-500 to-blue-800  text-transparent bg-clip-text flex items-center gap-4">
                     <span>
                        <img
                           src={Logo}
                           alt=""
                           className="w-12 h-12 rounded-xl"
                        />
                     </span>{" "}
                     Subscription Box
                  </h1>
               </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
            </div>
            <div className="navbar-end gap-3 lg:gap-4 ">
               <div>
                  {user ? (
                     <div className="aspect-square">
                        <img
                           className="max-w-12 lg:max-w-14 h-full rounded-full"
                           src={user.photoURL}
                           alt=""
                           data-tooltip-id="my-tooltip"
                           data-tooltip-content={user.displayName}
                        />
                        <Tooltip id="my-tooltip" className="z-50 text-sm" />
                     </div>
                  ) : (
                     ""
                  )}
               </div>
               <div>
                  {user ? (
                     <button
                        onClick={() => {
                           handelLogout();
                        }}
                        className="btn px-4 lg:px-10 text-base border border-blue-600 bg-transparent shadow-sm text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white"
                     >
                        Log out
                     </button>
                  ) : (
                     <button
                        onClick={() => {
                           navigate("./login");
                        }}
                        className="btn px-4 lg:px-10 text-base border border-blue-600 bg-transparent shadow-sm text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white"
                     >
                        Login
                     </button>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
