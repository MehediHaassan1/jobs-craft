import React from "react";
import HomeHero from "../components/HomeHero";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../components/JobCategory";

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
    const joblist = useLoaderData();
    const { jobCategories } = joblist;
    
    return (
        <div>
            <HomeHero />
            <JobCategory jobCategories={jobCategories} />
        </div>
    );
};

export default Home;
