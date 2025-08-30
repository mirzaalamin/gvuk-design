import Button from '@/components/Button'
import Panel from '@/components/Cards/Panel'
import PostCard from '@/components/Cards/PostCard'
import Hero from '@/components/Hero'
import { modelMaking } from '@/contant/constant'
import { getPanelsByCategory } from '@/lib/actions/actions'
import Image from 'next/image'
import React from 'react'

const page = async () => {

    const panels = await getPanelsByCategory(65)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='primary-gradient dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="Model Making" description="EnvisionTEC’s RC series is used by Games Workshop, Rob MacFarlane and a host of other leading modellers for super fine and smooth models."
                        imgUrl="/assets/images/model-makers.png"
                        titleColor="text-primary"
                    />
                </div>
            </div>
            {/* Section 1 End */}

            {/* Section 2 Start */}
            <div className='bg-white dark:bg-gray-900 py-16'>
                <div className='container flex flex-col gap-10'>
                    {panels.map((panel) => (
                        <Panel panel={panel} key={panel.id} />
                    ))}
                </div>
            </div>
            {/* Section 2 End */}
        </div>
    )
}

export default page