import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { BiLogoYoutube } from "react-icons/bi";
import Logo from "../../assets/SubscriptionBox-Logo.png";

const Footer = () => {
   return (
      <div className="w-full bg-[#1a1a1a] ">
         <div className="">
            <footer className="footer sm:footer-horizontal p-10 text-base-300 container mx-auto">
               <nav>
                  <h6 className="footer-title">Services</h6>
                  <a className="link link-hover">Branding</a>
                  <a className="link link-hover">Design</a>
                  <a className="link link-hover">Marketing</a>
                  <a className="link link-hover">Advertisement</a>
               </nav>
               <nav>
                  <h6 className="footer-title">Company</h6>
                  <a className="link link-hover">About us</a>
                  <a className="link link-hover">Contact</a>
                  <a className="link link-hover">Jobs</a>
                  <a className="link link-hover">Press kit</a>
               </nav>
               <nav>
                  <h6 className="footer-title">Legal</h6>
                  <a className="link link-hover">Terms of use</a>
                  <a className="link link-hover">Privacy policy</a>
                  <a className="link link-hover">Cookie policy</a>
               </nav>
            </footer>
            <div className="border-gray-700 border-t ">
               <footer className=" container mx-auto footer text-base-300 px-10 py-4 gap-5 lg:gap-0">
                  <aside className="grid-flow-col items-center">
                     <img src={Logo} alt="" className="w-12 h-12 rounded-xl" />
                     <p className="text-xl font-semibold">
                        Subscription Box
                        <br />
                        <span className="text-sm font-light">
                           Providing reliable tech since 1992
                        </span>
                     </p>
                  </aside>
                  <nav className="md:place-self-center md:justify-self-end ">
                     <div className="mb-3">
                        <ul className="grid grid-flow-col  text-3xl gap-6">
                           <li>
                              <a href="http://www.facebook.com" target="blank">
                                 <FaFacebook color="#0871FF" />
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://x.com/home?lang=en"
                                 target="blank"
                              >
                                 <FaXTwitter
                                    style={{
                                       borderRadius: "50%",
                                       backgroundColor: "#03273D",
                                       padding: "4px",
                                       color: "white",
                                    }}
                                 />
                              </a>
                           </li>
                           <li>
                              <a
                                 href="https://www.linkedin.com/"
                                 target="blank"
                              >
                                 <TiSocialLinkedin
                                    style={{
                                       borderRadius: "50%",
                                       backgroundColor: "#0871FF",
                                       padding: "2px",
                                       color: "white",
                                    }}
                                 />
                              </a>
                           </li>
                           <li>
                              <a href="https://www.youtube.com/" target="blank">
                                 <BiLogoYoutube
                                    style={{
                                       borderRadius: "50%",
                                       backgroundColor: "#D41F2C",
                                       padding: "4px",
                                       color: "white",
                                    }}
                                 />
                              </a>
                           </li>
                        </ul>
                     </div>
                  </nav>
               </footer>
            </div>
         </div>
      </div>
   );
};

export default Footer;
