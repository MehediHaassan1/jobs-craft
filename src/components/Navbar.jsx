import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Cross as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    const navMenu = [
        { id: 1, path: "/", pathName: "home" },
        { id: 2, path: "/applied-jobs", pathName: "applied jobs" },
        { id: 3, path: "/statistics", pathName: "statistics" },
        { id: 4, path: "/blogs", pathName: "blogs" },
    ];

    return (
        <>
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="max-w-7xl mx-auto h-20 flex justify-between items-center relative px-2 lg:px-0"
            >
                <Link to="/">
                    <img src={logo} alt="jobs craft" />
                </Link>
                <div
                    className={`absolute flex flex-col w-full text-center duration-300 bg-gradient-to-r from-[#656565] to-[#B3FFB3] py-4  
                ${isOpen ? "top-20 left-0" : "top-[-100vh] left-0"}
                md:sticky md:top-0 md:flex-row md:bg-none md:w-fit
                `}
                >
                    {navMenu.map((menu) => (
                        <div className="overflow-hidden p-2" key={menu.id}>
                            <Link
                                className="capitalize text-lg font-semibold "
                                to={menu.path}
                            >
                                {menu.pathName}
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center w-2/3 md:w-fit">
                    <Link to="/" className="flex-auto">
                        <button className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold my-custom-button">
                            Start Applying
                        </button>
                    </Link>
                    <div className="md:hidden">
                        <Hamburger
                            className="flex-auto"
                            duration={0.2}
                            color="linear-gradient(to right, #656565, #B3FFB3)"
                            easing="ease-in"
                            toggled={isOpen}
                            toggle={setOpen}
                        />
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="border-t-2 border-[#B3FFB3] pb-2"
            ></motion.div>
        </>
    );
};

export default Navbar;
