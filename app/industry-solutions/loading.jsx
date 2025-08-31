import React from "react";

const PanelsSkeleton = () => {
    return (
        <div className="bg-white dark:bg-gray-900 py-16 animate-pulse">
            <div className="container flex flex-col gap-10">
                {[1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center justify-center lg:flex-row gap-10 border-t-2 border-primary dark:bg-gray-800 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 px-8 py-12 rounded-lg"
                    >
                        {/* Left Section */}
                        <div className="flex flex-1 flex-col gap-5 items-center justify-center w-full">
                            <div className="flex flex-col gap-5 w-full max-w-md">
                                {/* Logo Placeholder */}
                                <div className="h-15 w-30 bg-gray-300 dark:bg-gray-600 rounded-lg mx-auto" />

                                {/* Title Placeholder */}
                                <div className="h-6 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />

                                {/* Description Placeholder (multiple lines) */}
                                <div className="space-y-3">
                                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                                    <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-600 rounded" />
                                    <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                                </div>

                                {/* Button Placeholder */}
                                <div className="h-10 w-40 bg-gray-400 dark:bg-gray-500 rounded-lg" />
                            </div>
                        </div>

                        {/* Right Section (Image) */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full lg:w-[400px] h-64 bg-gray-300 dark:bg-gray-600 rounded-lg" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PanelsSkeleton;
