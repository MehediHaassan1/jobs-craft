import React from "react";
import Blog from "../components/Blog";
import { motion } from "framer-motion";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import blogs from "../../public/blogs.json";

const Blogs = () => {
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
                    Blogs
                </motion.h1>
                <div className="absolute bottom-0 left-0">
                    <img src={bg1} alt="" />
                </div>
                <div className="absolute top-0 right-0">
                    <img src={bg2} alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
                {blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog}></Blog>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
