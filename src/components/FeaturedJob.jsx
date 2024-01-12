import React from "react";
import location from "../assets/images/Location.png";
import money from "../assets/images/money.png";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
    const { id, companyLogo, jobTitle, companyName, jobType, jobLocation } =
        job;
    return (
        <div className="min-h-[400px] py-2 px-5 md:py-5 md:px-10">
            <img
                className="h-[40px] mb-8"
                src={companyLogo}
                alt={companyName}
            />
            <h3 className="text-2xl font-semibold mb-4">{jobTitle}</h3>
            <h3 className="text-[20px] text-[#757575] my-2">{companyName}</h3>
            <div className="flex gap-4 my-4">
                <h3 className="px-4 py-1 font-bold linear-text linear-border">
                    {jobLocation}
                </h3>
                <h3 className="px-4 py-1 font-bold linear-text linear-border">
                    {jobType}
                </h3>
            </div>
            <div className="lg:w-3/4 lg:flex  justify-between items-center">
                <h4 className="flex items-center gap-2 my-2 text-[#757575]">
                    <img
                        className="linear-text"
                        src={location}
                        alt="Dhaka, Bangladesh"
                    />
                    Dhaka, Bangladesh
                </h4>
                <h4 className="flex items-center gap-2 my-2 text-[#757575]">
                    <img src={money} alt="Salary : 100K - 150K" />
                    Salary : 100K - 150K
                </h4>
            </div>
            <Link to={`/job-details/${id}`}>
                <button className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize mt-4">
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default FeaturedJob;
