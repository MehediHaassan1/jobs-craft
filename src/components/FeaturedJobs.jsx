import React, { useEffect, useRef, useState } from "react";
import FeaturedJob from "./FeaturedJob";
import { motion, useScroll } from "framer-motion";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [slicedJobs, setSlicedJobs] = useState([]);
    useEffect(() => {
        fetch("featuredJobs.json")
            .then((res) => res.json())
            .then((data) => setJobs(data));
    }, []);

    useEffect(() => {
        setSlicedJobs(jobs.slice(0, 4));
    }, [jobs]);

    const [showBtn, setShowBtn] = useState(true);
    const handleAllJobs = () => {
        setSlicedJobs(jobs);
        setShowBtn(false);
    };
    const featuredTextRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: featuredTextRef,
        offset: ["0 1", "1 1"],
    });
    return (
        <div>
            <motion.h1
                ref={featuredTextRef}
                style={{
                    scale: scrollYProgress,
                    opacity: scrollYProgress,
                }}
                className="text-4xl lg:text-5xl text-center font-semibold"
            >
                Featured Jobs
            </motion.h1>
            <p className="text-base lg:text-lg my-6 text-center text-[#A3A3A3]">
                Unlock your career potential: discover, apply, and thrive.
            </p>
            <div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
                    {slicedJobs.map((job) => (
                        <FeaturedJob key={job.id} job={job}></FeaturedJob>
                    ))}
                </div>
                <div
                    className={`text-center mb-10 ${
                        showBtn ? "block" : "hidden"
                    }`}
                >
                    <button
                        onClick={handleAllJobs}
                        className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize"
                    >
                        see all jobs
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
