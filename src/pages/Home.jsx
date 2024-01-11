import React, { createContext } from "react";
import HomeHero from "../components/HomeHero";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../components/JobCategory";
import FeaturedJobs from "../components/FeaturedJobs";

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
            <JobCategory />
            <FeaturedJobs />
        </div>
    );
};

export default Home;
