import React, { useEffect, useState } from "react";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import { dataFromDb } from "../utilities/fakeDb";
import AppliedJob from "./AppliedJob";
import jobs from "../../public/featuredJobs.json";
import { easeInOut, motion } from "framer-motion";

const AppliedJobsHero = () => {
    const data = dataFromDb();

    const [appliedJobList, setAppliedJobList] = useState([]);
    const [hasEffectRun, setHasEffectRun] = useState(false);

    useEffect(() => {
        if (!hasEffectRun) {
            const updateAppliedJobList = () => {
                const newAppliedJobList = [];
                for (const id in data) {
                    const listedJob = jobs.find((job) => job.id === id);
                    newAppliedJobList.push(listedJob);
                }
                setAppliedJobList(newAppliedJobList);
            };
            updateAppliedJobList();
            setHasEffectRun(true);
        }
    }, [data, hasEffectRun]);

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleRemoteJob = (jobLocation) => {
        const shortedJobs = [];
        const shortedRemoteJobs = appliedJobList.find(
            (jobs) => jobs.jobLocation === jobLocation
        );
        shortedJobs.push(shortedRemoteJobs);
        setAppliedJobList(shortedJobs);
    };

    const handleOnsiteJob = (jobLocation) => {
        const shortedJobs = [];
        const shortedRemoteJobs = appliedJobList.find(
            (jobs) => jobs.jobLocation === jobLocation
        );
        shortedJobs.push(shortedRemoteJobs);
        setAppliedJobList(shortedJobs);
    };

    return (
        <div>
            <div className="h-1/2 w-full relative overflow-hidden">
                <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{
                        duration: 0.75,
                        ease: "easeInOut",
                    }}
                    className="text-center text-4xl lg:text-5xl font-semibold py-20 lg:py-32"
                >
                    Applied Jobs
                </motion.h1>
                <div className="absolute bottom-0 left-0">
                    <img src={bg1} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={bg2} alt="" />
                </div>
            </div>
            <div className="text-right mt-5">
                <div className="relative inline-block text-left">
                    <button
                        type="button"
                        onClick={toggleDropdown}
                        className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize"
                    >
                        Filter
                    </button>

                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-36 
                        rounded-md shadow-lg bg-gradient-to-r from-[#656565] to-[#B3FFB3] ring-1 ring-black ring-opacity-5"
                        >
                            <div className="py-1">
                                <button
                                    onClick={() => handleRemoteJob("Remote")}
                                    className="block w-full px-4 py-2 text-sm font-semibold     
                                    hover:bg-gray-100"
                                >
                                    Remote
                                </button>
                                <button
                                    onClick={() => handleOnsiteJob("Onsite")}
                                    className="block w-full px-4 py-2 text-sm font-semibold     
                                    hover:bg-gray-100"
                                >
                                    Onsite
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div>
                {appliedJobList.map((job) => (
                    <AppliedJob key={job.id} job={job}></AppliedJob>
                ))}
            </div>
        </div>
    );
};

export default AppliedJobsHero;
