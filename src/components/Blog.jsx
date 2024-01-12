import React from "react";

const Blog = ({ blog }) => {
    const { blog_title, blog_image, author_name, published_date, blog_body } =
        blog;
    return (
        <div className="min-h-[400px] py-2 px-5 md:py-5 md:px-10">
            <img
                className="h-[280px] w-full"
                src={blog_image}
                alt={blog_title}
            />
            <h3 className="text-2xl font-semibold my-4">{blog_title}</h3>
            <p className="leading-loose lg:text-lg">{blog_body}</p>
            <h3 className="text-[20px] text-[#757575] mt-4">{author_name}</h3>
            <h3 className="text-[20px] text-[#757575] text-sm">
                {published_date}
            </h3>
        </div>
    );
};

export default Blog;
