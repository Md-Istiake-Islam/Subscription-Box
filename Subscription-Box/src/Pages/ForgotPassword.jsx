import React from "react";

const ForgotPassword = () => {
   const handleSubmit = (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      console.log("Reset link sent to:", email);
   };

   return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
         <div className="card w-full max-w-md shadow-xl bg-base-100">
            <div className="card-body">
               <h2 className="text-2xl font-bold text-center">
                  Forgot Password
               </h2>
               <p className="text-sm text-center text-gray-500 mb-4">
                  Enter your email to receive a password reset link.
               </p>
               <form onSubmit={handleSubmit}>
                  <div className="form-control mb-4">
                     <label className="label">
                        <span className="label-text">Email Address</span>
                     </label>
                     <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="input input-bordered"
                     />
                  </div>
                  <button className="btn btn-primary w-full" type="submit">
                     Send Reset Link
                  </button>
               </form>
               <div className="text-center mt-4">
                  <a href="/login" className="link link-primary text-sm">
                     Back to Login
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ForgotPassword;
