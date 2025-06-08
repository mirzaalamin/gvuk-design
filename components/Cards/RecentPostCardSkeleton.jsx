import React from 'react'

const RecentPostCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-5 dark:bg-gray-800 bg-[#F0F0F0] px-4 py-12 animate-pulse">
            {/* Image Skeleton */}
            <div className="flex-1">
                <div className="w-full h-[350px] bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            {/* Text Content Skeleton */}
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-5 w-full max-w-2xl">
                    {/* Title */}
                    <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

                    {/* Description (2–3 lines) */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                        <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
                        <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default RecentPostCardSkeleton