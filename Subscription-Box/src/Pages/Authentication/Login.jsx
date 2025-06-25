import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Login = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const { signIn, googleSignIn, setUser } = useContext(AuthContext);

   const [showPassword, setShowPassword] = useState(false);

   const handelSignin = (e) => {
      e.preventDefault();

      const email = e.target.email.value;
      const password = e.target.password.value;

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            setUser(user);
            toast.success("login successfully");
            navigate(`${location.state ? location.state : "/"}`);
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };

   const handelGoogleSignIn = () => {
      googleSignIn()
         .then((result) => {
            const user = result.user;
            setUser(user);
            toast.success("login successfully");
            navigate(`${location.state ? location.state : "/"}`);
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };
   return (
      <div className="min-h-[calc(100vh-200px)] container mx-auto flex items-center justify-center">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body px-14 pb-10 gap-0">
               <div className="flex items-center justify-center border-b border-gray-200 mb-5 py-5">
                  <h1 className="text-center text-[26px] font-semibold !font-jost">
                     Login your account
                  </h1>
               </div>
               <form onSubmit={handelSignin}>
                  <fieldset className="fieldset ">
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Email
                     </label>
                     <input
                        name="email"
                        type="email"
                        className="input mb-3 w-full"
                        placeholder="Email"
                        required
                     />
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Password
                     </label>
                     <div className="relative flex items-center">
                        <input
                           name="password"
                           type={showPassword ? "text" : "password"}
                           className="input mb-1 w-full"
                           placeholder="Password"
                           required
                        />
                        <button
                           onClick={() => {
                              setShowPassword((prev) => !prev);
                           }}
                           type="button"
                           className="absolute right-3 z-50"
                        >
                           {showPassword ? (
                              <AiFillEyeInvisible className="text-xl" />
                           ) : (
                              <AiFillEye className="text-xl" />
                           )}
                        </button>
                     </div>
                     <div className="mb-2">
                        <a className="link link-hover">Forgot password?</a>
                     </div>
                     <button
                        type="submit"
                        className="btn bg-blue-800 hover:bg-blue-900 text-white mt-4"
                     >
                        Login
                     </button>
                     <p className="text-center mt-4">
                        Dont’t Have An Account ?{" "}
                        <Link to={"../register"} className="text-red-600">
                           Register
                        </Link>
                     </p>
                  </fieldset>
               </form>
               <button
                  onClick={() => {
                     handelGoogleSignIn();
                  }}
                  className="btn bg-transparent text-blue-700 hover:bg-blue-900 hover:text-white mt-4 border border-blue-800"
               >
                  Login with Google
               </button>
            </div>
         </div>
         <ToastContainer position="top-center" theme="colored" pauseOnHover />
      </div>
   );
};

export default Login;
