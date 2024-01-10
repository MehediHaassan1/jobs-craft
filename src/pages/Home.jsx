import React from "react";
import HomeHero from "../components/HomeHero";
import { motion } from "framer-motion";

const routeAnimate = {
    hidden: {
        y: "100%",
    },
    visible: {
        y: 0,
        transition: {
            duration: 0.75,
            ease: "easeOut",
            // when: "beforeChildren"
        },
    },
    exit: {
        opacity: 1,
    },
};

const Home = () => {
    return (
        <div>
            <HomeHero />
        </div>
    );
};

export default Home;
