import React from "react";
import heroBanner from "../assets/images/Job-hunt.svg";
import { motion } from "framer-motion";

const infoAnimate = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            staggerChildren: 0.4,
        },
    },
};

const infoChildAnimate = {
    hidden: {
        x: "-100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
};

const imageAnimate = {
    hidden: {
        x: "100vw",
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 1,
            // delay: 0.75,
        },
    },
};

const HomeHero = () => {
    return (
        <div className="md:flex md:gap-5 justify-between items-center h-screen">
            <motion.div
                variants={infoAnimate}
                initial="hidden"
                animate="visible"
                className="md:w-1/2 overflow-hidden"
            >
                <motion.h1
                    variants={infoChildAnimate}
                    className="text-4xl lg:text-5xl"
                >
                    Connecting{" "}
                    <span className="font-semibold linear-text">Talents,</span>
                    <br />
                    Crafting{" "}
                    <span className="font-semibold linear-text">Success,</span>
                    <br />
                    Elevate <br />
                    <span className="font-semibold linear-text">
                        Your Career.
                    </span>
                </motion.h1>
                <motion.p
                    variants={infoChildAnimate}
                    className="text-base lg:text-lg my-6"
                >
                    Jobs Craft Empowering Careers, Connecting Talents, Shaping
                    Futures, Elevating Professional Trajectories on a Global
                    Scale for Unparalleled Success and Growth.
                </motion.p>
                <motion.button
                    variants={infoChildAnimate}
                    className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize"
                >
                    get started
                </motion.button>
            </motion.div>
            <div className="md:w-1/2 overflow-hidden">
                <motion.img
                    variants={imageAnimate}
                    initial="hidden"
                    animate="visible"
                    src={heroBanner}
                    alt="job-hunt"
                />
            </div>
        </div>
    );
};

export default HomeHero;
