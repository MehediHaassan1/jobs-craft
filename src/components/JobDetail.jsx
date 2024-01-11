import React from "react";
import { PiCurrencyCircleDollarFill } from "react-icons/pi";
import { MdOutlineCalendarViewDay } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const JobDetail = ({ jobDetail }) => {
    const { jobTitle, jobDescription, jobDetails, educationalBackground } =
        jobDetail;
    return (
        <>
            <div className="md:col-span-2">
                <p className="leading-loose mb-5 lg:text-lg">
                    <b>Job Description: </b> {jobDescription}
                </p>
                <p className="leading-loose mb-5 lg:text-lg">
                    <b>Job Responsibility: </b> {jobDetails}
                </p>
                <div className="lg:mb-5 lg:text-lg">
                    <p className="mb-2">
                        <b>Educational Requirements:</b>
                    </p>
                    <p className="mb-2">{educationalBackground}</p>
                </div>
                <div className="lg:mb-5 lg:text-lg">
                    <p className="mb-2">
                        <b>Experiences::</b>
                    </p>
                    <p className="mb-2">2-3 Years in this field.</p>
                </div>
            </div>
            <div className="md:col-span-1 lg:text-lg">
                <div className="mb-5">
                    <p className="mb-2">
                        <b>Job details:</b>
                    </p>
                    <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                        <PiCurrencyCircleDollarFill />
                        <b>Salary :</b> 100K - 150K (Per Month)
                    </p>
                    <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                        <MdOutlineCalendarViewDay />
                        <b>Job Title :</b> {jobTitle}
                    </p>
                </div>
                <div className="mb-5">
                    <p className="mb-2 lg:mb-3">
                        <b>Contact Information:</b>
                    </p>
                    <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                        <IoCall />
                        <b>Phone :</b> 01750-00 00 00
                    </p>
                    <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                        <FaEnvelope />
                        <b>Email : </b> info@gmail.com
                    </p>
                    <p className="mb-2 lg:mb-3 flex items-center gap-1 lg:gap-2">
                        <IoLocationOutline />
                        <b>Address : </b> Dhanmondi, Dhaka, Bangladesh
                    </p>
                </div>
                <div>
                    <button className="bg-gradient-to-r from-[#656565] to-[#B3FFB3] border rounded px-5 py-3 font-semibold capitalize w-full">
                        apply now
                    </button>
                </div>
            </div>
        </>
    );
};

export default JobDetail;
