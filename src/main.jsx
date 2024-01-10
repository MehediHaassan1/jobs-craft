import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AppliedJobs from "./pages/AppliedJobs.jsx";
import Statistics from "./pages/Statistics.jsx";
import { AnimatePresence } from "framer-motion";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "applied-jobs",
                element: <AppliedJobs />,
            },
            {
                path: "statistics",
                element: <Statistics />,
            },
            {
                path: "blogs",
                element: <AppliedJobs />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AnimatePresence mode="wait">
            <RouterProvider router={router} />
        </AnimatePresence>
    </React.StrictMode>
);
