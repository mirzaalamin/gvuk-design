import Panel from '@/components/Cards/Panel'
import Hero from '@/components/Hero'
import { getPanelsByCategory } from '@/lib/actions/actions'
import React from 'react'

const page = async () => {
    const panels = await getPanelsByCategory(73)
    return (
        <div>
            {/* Section 1 Start */}
            <div className='bg-primary dark:bg-gray-800 pt-[100px] border-t-2 border-primary'>
                <div className="container">
                    <Hero title="Consumables"
                        description="From industry leading DLP resins from EnvisionTEC, Loctite and Somos to high grade laser wires from Improbond, you know you will have the finest materials for your work."
                        imgUrl="/assets/images/Consumables-1.png"
                        titleColor="text-white"
                        descriptionColor="!text-white"
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