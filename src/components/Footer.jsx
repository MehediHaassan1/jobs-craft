import React from "react";
import logo from "../assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <div className="bg-[#A6D3A0] mt-10 grid grid-cols-1 gap-10 md:gap-5 lg:gap-5 md:grid-cols-2 lg:grid-cols-5   px-5 py-10 border-b border-[#B3FFB3]">
                <div className="md:col-span-2 lg:col-span-1">
                    <img src={logo} alt="logo" />
                    <p className="text-sm my-5">
                        Jobs Craft Empowering Careers, Connecting Talents,
                        Shaping Futures, Elevating Professional Trajectories on
                        a Global Scale for Unparalleled Success and Growth.
                    </p>
                    <div className="flex gap-5">
                        <FaFacebookF className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-[#656565] to-[#B3FFB3] cursor-pointer" />
                        <FaTwitter className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-[#656565] to-[#B3FFB3] cursor-pointer" />
                        <FaInstagram className="w-10 h-10 p-2 rounded-full bg-gradient-to-r from-[#656565] to-[#B3FFB3] cursor-pointer" />
                    </div>
                </div>
                <div>
                    <p className="text-lg font-semibold">Company</p>
                    <p className="my-2">About us</p>
                    <p className="my-2">Work</p>
                    <p className="my-2">Latest news</p>
                    <p className="my-2">Careers</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">Product</p>
                    <p className="my-2">Prototype</p>
                    <p className="my-2">Plans & Pricing</p>
                    <p className="my-2">Customers</p>
                    <p className="my-2">Integrations</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">Support</p>
                    <p className="my-2">Help Desk</p>
                    <p className="my-2">Sales</p>
                    <p className="my-2">Become a Partner</p>
                    <p className="my-2">Developers</p>
                </div>
                <div>
                    <p className="text-lg font-semibold">Contact</p>
                    <p className="my-2">524 Broadway, NYC</p>
                    <p className="my-2">+1 777 - 978 - 5570</p>
                </div>
            </div>

            <div className="bg-[#A6D3A0] flex justify-between items-center text-sm md:px-5  py-5    ">
                <p>
                    &copy;{new Date().getFullYear()}{" "}
                    <span className="font-semibold">Jobs Craft. </span>
                    All Rights Reserved
                </p>
                <p>
                    Powered by <span className="font-semibold">Jobs Craft</span>
                </p>
            </div>
        </>
    );
};

export default Footer;
