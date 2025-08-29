import React from 'react'

const loading = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row gap-10 dark:bg-gray-800 py-12 animate-pulse">
            {/* Left Section */}
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-5 w-full max-w-md">
                    {/* Logo placeholder */}
                    <div className="h-20 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto" />

                    {/* Content placeholder (text lines) */}
                    <div className="space-y-3">
                        <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded" />
                        <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
                    </div>

                    {/* Button placeholders */}
                    <div className="h-12 w-full bg-gray-300 dark:bg-gray-600 rounded-lg" />
                    <div className="h-12 w-full bg-gray-300 dark:bg-gray-600 rounded-lg" />
                </div>
            </div>

            {/* Right Section (Product image) */}
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full lg:w-[400px] h-64 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            </div>
        </div>
    )
}

export default loading