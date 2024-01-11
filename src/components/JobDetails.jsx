import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import JobDetail from "./JobDetail";

const JobDetails = () => {
    // const jobs = useLoaderData();
    const [myJobs, setMyJobs] = useState([]);
    useEffect(() => {
        fetch("/public/featuredJobs.json")
            .then((res) => res.json())
            .then((data) => setMyJobs(data));
    }, []);

    const params = useParams();
    const jobId = params.jobId;

    const jobDetail = myJobs && myJobs.find((job) => job.id === jobId);

    return (
        <div className="">
            <div className="h-1/2 w-full relative">
                <h1 className="text-center text-4xl lg:text-5xl font-semibold py-20 lg:py-32">
                    Job Details
                </h1>
                <div className="absolute bottom-0 left-0">
                    <img src={bg1} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={bg2} alt="" />
                </div>
            </div>
            <div className="my-10 md:grid md:grid-cols-3 md:gap-2 lg:gap-5">
                {jobDetail && <JobDetail jobDetail={jobDetail}></JobDetail>}
            </div>
        </div>
    );
};

export default JobDetails;
