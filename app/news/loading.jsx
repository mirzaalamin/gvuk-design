import PostCardSkeleton from '@/components/Cards/PostCardSkeleton'
import RecentPostCardSkeleton from '@/components/Cards/RecentPostCardSkeleton'
import Hero from '@/components/Hero'
import React from 'react'

const loading = () => {
    return (


        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px]'>
                <div className="container">
                    <div className="flex flex-col lg:flex-row py-8 lg:py-0 gap-10 animate-pulse">
                        {/* Left Side - Logo, Title, Description */}
                        <div className="flex flex-1 flex-col lg:pt-0 gap-5 justify-center">
                            <div className="flex flex-col gap-5 lg:py-[100px]">
                                {/* Logo */}
                                <div className="w-[100px] h-[100px] bg-gray-300 dark:bg-gray-700 rounded" />

                                {/* Title */}
                                <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />

                                {/* Description */}
                                <div className="space-y-2">
                                    <div className="h-4 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                                    <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-700 rounded" />
                                    <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 rounded" />
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full h-[350px] bg-gray-300 dark:bg-gray-700 rounded" />
                        </div>
                    </div>

                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container  flex flex-col lg:flex-row gap-16'>
                    <div className='flex flex-col flex-1 gap-6'>
                        <h2 className="h3 text-primary">Latest news</h2>

                        <div className='grid lg:grid-cols-2 gap-10'>
                            <PostCardSkeleton />
                            <PostCardSkeleton />
                            <PostCardSkeleton />
                            <PostCardSkeleton />

                        </div>
                    </div>
                    <div className="shrink-0 lg:w-[300px] flex flex-col gap-5">
                        <h2 className="h3 text-primary">Training & Events</h2>
                        <div className='flex flex-col gap-10'>
                            <RecentPostCardSkeleton />
                            <RecentPostCardSkeleton />
                            <RecentPostCardSkeleton />
                        </div>
                    </div>
                </div>
            </div>
            {/* Section 2 End */}
        </div>

    )
}

export default loading
