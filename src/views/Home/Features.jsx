import { CalendarIcon, ChatIcon, SearchIcon, StarIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { theme } from '../../theme'

const Features = () => {

    //todo: add pictures of each feature from website and display features w/ pictures and alternate pattern (iykyk)

    const features = [
        {
            title: "Rate Courses",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique culpa necessitatibus illum! Deserunt atque nam provident accusamus, architecto amet aperiam inventore",
            icon: <StarIcon className='w-6 h-6' />
        },
        {
            title: "Chat With Others",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique culpa necessitatibus illum! Deserunt atque nam provident accusamus, architecto amet aperiam inventore",
            icon: <ChatIcon className='w-6 h-6' />
        },
        {
            title: "Browse Resources",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique culpa necessitatibus illum! Deserunt atque nam provident accusamus, architecto amet aperiam inventore",
            icon: <SearchIcon className='w-6 h-6' />
        },
        {
            title: "Create Study Plans",
            description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique culpa necessitatibus illum! Deserunt atque nam provident accusamus, architecto amet aperiam inventore",
            icon: <CalendarIcon className='w-6 h-6' />
        },
    ]

    return (
        <div className="my-20">
            <p className="font-bold text-3xl text-center mb-8">Features</p>
            <div className='grid md:grid-cols-2 justify-between w-fit mx-auto gap-12'>
                {features.map((feature) => (
                    <div className='max-w-lg flex flex-col gap-4 justify-center items-center w-full mx-auto p-4 rounded-xl drop-shadow-md transition duration-200 ease-in'>
                        
                        <div className='bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 shadow-md shadow-cyan-400/40 w-fit rounded-lg'>
                            <div className='w-12 h-12 mx-auto inline-flex justify-center items-center flex-shrink-0 bg-white dark:bg-gray-800 rounded-md'>
                                <span className='text-emerald-500'>{feature.icon}</span>
                            </div>
                        </div>

                        <div>
                            <p className='text-xl font-semibold text-center mb-2'>{feature.title}</p>
                            <p className='text-gray-500 dark:text-gray-400 text-center'>{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       
    )
}

export default Features