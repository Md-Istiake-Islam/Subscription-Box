import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

function MyProfile() {
   const { user, updateUser, setUser } = useContext(AuthContext);

   const handleSave = (e) => {
      e.preventDefault();

      const name = e.target.name.value;
      const photo = e.target.photo.value;

      updateUser({ displayName: name, photoURL: photo })
         .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success("Profile updated!");
         })
         .catch((error) => {
            const errorMessage = error.message;
            toast.error(errorMessage);
         });
   };

   return (
      <div className="bg-base-200">
         <div className="container mx-auto min-h-[calc(100vh-200px)] flex justify-center items-center">
            <div className="bg-white px-20 py-10  lg:min-w-6xl rounded-2xl ">
               <h2 className="text-2xl mb-20 text-center font-semibold text-primary-content !font-jost">
                  My Profile
               </h2>
               <div className="grid lg:grid-cols-12 grid-cols-1 w-full gap-4">
                  <div className=" col-span-4">
                     <img
                        src={user.photoURL}
                        alt="Profile"
                        className="min-w-48 rounded-2xl"
                     />
                  </div>
                  <div className="col-span-8">
                     <p className="mb-2">
                        <strong>Name:</strong> {user && user.displayName}
                     </p>
                     <p className="mb-2">
                        <strong>Email:</strong> {user && user.email}
                     </p>

                     <h3 className="mb-3">Edit Your Profile</h3>
                     <form onSubmit={handleSave}>
                        <div className="mb-3 flex flex-col gap-1">
                           <label className="text-base text-primary-content text font-semibold">
                              Name:
                           </label>

                           <label className="input">
                              <input
                                 name="name"
                                 ype="text"
                                 className="grow"
                                 placeholder="Enter your name"
                              />
                           </label>
                        </div>
                        <div className="mb-8 flex flex-col gap-1">
                           <label>Photo URL:</label>

                           <label className="input">
                              <input
                                 name="photo"
                                 type="text"
                                 className="grow"
                                 placeholder="PhotoURL"
                              />
                           </label>
                        </div>
                        <button
                           className="btn bg-blue-800 text-white "
                           type="submit"
                        >
                           Save Changes
                        </button>
                     </form>
                  </div>
               </div>
            </div>
         </div>
         <ToastContainer position="top-center" theme="colored" pauseOnHover />
      </div>
   );
}

export default MyProfile;
