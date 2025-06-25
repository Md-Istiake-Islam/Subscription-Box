import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

const Register = () => {
   const { createUser, setUser, googleSignIn, updateUser } =
      useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();

   const [password, setPassword] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [showPassword, setShowPassword] = useState(false);

   const validatePassword = (value) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
      return regex.test(value);
   };

   const handleChange = (e) => {
      const value = e.target.value;
      setPassword(value);
      setIsValid(validatePassword(value));
   };

   const handelRegister = (e) => {
      e.preventDefault();

      if (!isValid) {
         return;
      }
      const name = e.target.name.value;
      const photo = e.target.Photo.value;
      const email = e.target.email.value;
      const password = e.target.password.value;

      createUser(email, password)
         .then((result) => {
            const user = result.user;
            updateUser({ displayName: name, photoURL: photo })
               .then(() => {
                  setUser({ ...user, displayName: name, photoURL: photo });
                  toast.success("Registration successful");
                  navigate(`${location.state ? location.state : "/"}`);
               })
               .catch((error) => {
                  const errorMessage = error.message;
                  toast.error(errorMessage);
               });
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
      <div className="min-h-screen container mx-auto flex items-center justify-center">
         <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
            <div className="card-body px-14 pb-10 gap-0">
               <div className="flex items-center justify-center border-b border-gray-200 mb-5 py-5">
                  <h1 className="text-center text-[26px] font-semibold !font-jost">
                     Register your account
                  </h1>
               </div>
               <form onSubmit={handelRegister}>
                  <fieldset className="fieldset w-full">
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Name
                     </label>
                     <input
                        name="name"
                        type="text"
                        className="input mb-3 w-full"
                        placeholder="Name"
                        required
                     />
                     <label className="label text-base text-gray-700 !font-jost font-medium">
                        Photo URL
                     </label>
                     <input
                        name="Photo"
                        type="text"
                        className="input mb-3 w-full"
                        placeholder="Photo Url"
                        required
                     />
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
                           value={password}
                           onChange={handleChange}
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
                     <Link to={"../../forgot-password"}>
                        <p>Forget password</p>
                     </Link>
                     {!isValid && (
                        <p style={{ color: "red" }}>
                           Password must have at least 6 characters, including
                           one uppercase and one lowercase letter.
                        </p>
                     )}
                     <button
                        type="submit"
                        className="btn bg-blue-800 hover:bg-blue-900 text-white mt-4"
                     >
                        Register
                     </button>
                     <p className="text-center mt-4">
                        Already have an account ?{" "}
                        <Link to={"../login"} className="text-red-600">
                           Login Now
                        </Link>
                     </p>
                  </fieldset>
               </form>
               <button
                  onClick={() => {
                     handelGoogleSignIn();
                  }}
                  className="btn bg-transparent text-blue-700 hover:bg-blue-800 hover:text-white mt-4 border border-blue-800"
               >
                  Login with Google
               </button>
            </div>
         </div>
         <ToastContainer position="top-center" theme="colored" pauseOnHover />
      </div>
   );
};

export default Register;
