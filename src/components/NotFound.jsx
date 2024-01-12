import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center max-w-md mx-auto">
                <img
                    src="https://media0.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
                    alt="Lost Astronaut"
                    className="mx-auto mb-8 rounded-lg shadow-lg sm:w-96"
                />
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                    404 - Not Found
                </h1>
                <p className="text-gray-600 mb-4">
                    Sorry, the page you are looking for might be in another
                    galaxy.
                </p>
                <Link
                    to="/"
                    className="text-blue-500 hover:underline block mt-4"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
