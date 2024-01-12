import React, { useState } from "react";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
    const { id, companyLogo, companyName, jobTitle, jobLocation, jobType } =
        job;

    return (
        <>
            <div className="border my-5 py-5 md:flex gap-5 items-center md:px-5 lg:p-10 lg:gap-10">
                <img
                    className="h-20 md:w-1/3 object-cover"
                    src={companyLogo}
                    alt={companyName}
                />
                <div className="md:flex md:items-center md:justify-between md:w-full">
                    <div>
                        <h2 className="text-lg lg:text-xl my-2 font-semibold">
                            {jobTitle}
                        </h2>
                        <h3 className="text-lg lg:text-xl my-2">
                            {companyName}
                        </h3>
                        <div className="flex gap-4 my-4">
                            <h3 className="px-4 py-1 font-bold linear-text linear-border">
                                {jobLocation}
                            </h3>
                            <h3 className="px-4 py-1 font-bold linear-text linear-border">
                                {jobType}
                            </h3>
                        </div>
                        <div className="lg:flex lg:gap-4 items-center">
                            <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                                <IoLocationOutline className="text-green-300" />
                                Dhanmondi, Dhaka, Bangladesh
                            </p>
                            <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                                <PiCurrencyCircleDollarFill className="text-green-300" />
                                Salary : 100K - 150K (Per Month)
                            </p>
                        </div>
                    </div>
                    <Link to={`/job-details/${id}`}>
                        <button className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default AppliedJob;
