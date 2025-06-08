import React from 'react'

const PostCardSkeleton = () => {
    return (
        <div className="flex flex-col gap-5 animate-pulse dark:bg-gray-800 bg-[#F0F0F0] p-5 rounded">
            {/* Image Skeleton */}
            <div className="flex-1">
                <div className="w-full h-[350px] bg-gray-300 dark:bg-gray-700 rounded" />
            </div>

            {/* Text Content Skeleton */}
            <div className="flex flex-1 flex-col gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 w-full">
                    {/* Title */}
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />

                    {/* Date */}
                    <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/4 mt-2" />

                    {/* Excerpt (simulate paragraphs) */}
                    <div className="space-y-2 mt-4">
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-5/6" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-4/6" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-full" />
                        <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostCardSkeleton