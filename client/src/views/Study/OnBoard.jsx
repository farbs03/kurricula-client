import React from 'react'
import { DotsVerticalIcon, PlayIcon } from "@heroicons/react/solid"
import { ClockIcon } from '@heroicons/react/outline'
import { eventThemes } from "./eventThemes"

const OnBoard = ({event}) => {

    let theme = event.theme

    return (
        <div className={`flex w-full rounded-xl items-center p-4 justify-between transition duration-200 ease-in bg-white dark:bg-gray-900`}>
            <div className='flex gap-2 items-center'>
                
                <button 
                    onClick={() => {}} 
                    className='w-6 h-6 text-center inline-flex bg-emerald-500 rounded-full justify-center items-center mr-2 transition duration-100 ease-in'
                >
                    
                    <PlayIcon className='w-6 h-6 text-white dark:text-gray-900' />
                </button>

                <div>
                    <p className='font-semibold text-sm'>{event.title}</p>
                    <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
                        <ClockIcon className='w-3 h-3' />
                        <p className='font-sembold text-xs'>{event.startTime} - {event.endTime}</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button className='w-8 h-8 inline-flex items-center justify-center flex-shrink-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in rounded-full text-gray-700 dark:text-gray-400'>
                    <DotsVerticalIcon className='w-5 h-5' />
                </button>
                <div className={`w-2 h-2 rounded-full ${eventThemes[theme]}`}></div>
            </div>
        </div>
    )
}

export default OnBoard
