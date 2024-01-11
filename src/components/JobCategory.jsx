import React, { useEffect, useState } from "react";

const JobCategory = () => {
    const [jobCategories, setJobCategories] = useState([]);
    useEffect(() => {
        fetch("jobsCateroy.json")
            .then((res) => res.json())
            .then((data) => setJobCategories(data));
    }, []);

    return (
        <div className="min-h-screen lg:flex justify-center items-center">
            <div>
                <h1 className="text-4xl lg:text-5xl text-center font-semibold">
                    Jobs Category
                </h1>
                <p className="text-base lg:text-lg my-6 text-center text-[#A3A3A3]">
                    Explore thousands of job opportunities with all the
                    information you need.
                </p>
                <div className="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {jobCategories.map((item) => (
                        <div
                            key={item.id}
                            className="w-[310px] h-[240px] mx-auto border-2 mb-8 last:mb-0 p-8 rounded-lg flex flex-col flex-start justify-center hover:shadow-lg shadow-slate-200"
                        >
                            <img className="w-20 h-20" src={item.icon} />
                            <h4 className="font-semibold text-xl my-3">
                                {item.name}
                            </h4>
                            <p className="text-[#A3A3A3]">
                                {item.jobsAvailable}+ Jobs available
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JobCategory;
