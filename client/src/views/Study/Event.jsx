import React, {useState} from 'react'
import {DotsVerticalIcon, CheckIcon} from "@heroicons/react/solid"
import { ClockIcon } from '@heroicons/react/outline'
import { eventThemes } from './eventThemes'

const Event = ({event}) => {

    const [checked, setChecked] = useState(false)

    let theme = event.theme

    return (
        <div className='flex w-full items-center p-4 rounded-xl justify-between transition duration-200 ease-in bg-opacity-50'>
            <div className='flex gap-2 items-center'>
                {checked ?
                    <button 
                        onClick={() => setChecked(!checked)} 
                        className='w-6 h-6 bg-emerald-400 text-center inline-flex rounded-full justify-center items-center mr-2 transition duration-100 ease-in'
                    >
                        
                        <CheckIcon className='w-5 h-5 text-gray-100' />
                    </button>
                    :
                    <button onClick={() => setChecked(!checked)} className='w-6 h-6 mr-2 ring-1 ring-gray-300 dark:ring-gray-700 rounded-full transition duration-100 ease-in' />
                }
                <div>
                    <p className={`font-semibold text-sm transition duration-200 ease-in ${checked ? "line-through text-gray-500 dark:text-gray-400" : ""}`}>{event.title}</p>
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

export default Event
