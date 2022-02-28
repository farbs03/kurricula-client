import React, {useState} from 'react'
import { DotsVerticalIcon, CheckIcon, ArrowRightIcon } from "@heroicons/react/solid"
import { ClockIcon } from '@heroicons/react/outline'
import { motion } from 'framer-motion'

const OnBoard = ({event}) => {

    const formatTime= (time) => {

        let afternoon = false

        let mins = `${time % 60}`
        if(mins < 10) {
            mins = `0${mins}`
        }
        let hours = `${(time - mins) / 60}`

        if(hours > 12) {
            afternoon = true
            hours = `${hours - 12}`
        }

        return `${hours}:${mins} ${afternoon ? ' PM' : ' AM'}`
    }

    const eventClass = (t) => {
        switch (t) {
            case "red":
                return "text-red-500 bg-red-100 dark:bg-red-900 dark:bg-opacity-20";
            case "orange":
                return "text-orange-500 bg-orange-100 dark:bg-orange-900 dark:bg-opacity-20";
            case "green":
                return "text-green-500 bg-green-100 dark:bg-green-900 dark:bg-opacity-20";
            case "sky":
                return "text-sky-500 bg-sky-100 dark:bg-sky-900 dark:bg-opacity-20";
            case "indigo":
                return "text-indigo-500 bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-20";
            case "violet":
                return "text-violet-500 bg-violet-100 dark:bg-violet-900 dark:bg-opacity-20"
        }
    };

    return (
        <div className='flex w-full items-center p-4 rounded-xl justify-between transition duration-200 ease-in bg-opacity-50'>
            <div className='flex gap-2 items-center'>
                
                <button 
                    onClick={() => {}} 
                    className='w-6 h-6 p-0 bg-emerald-500 text-center inline-flex rounded-full justify-center items-center mr-2 transition duration-100 ease-in'
                >
                    
                    <ArrowRightIcon className='w-5 h-5 text-gray-100' />
                </button>

                <div>
                    <p className='font-semibold text-sm'>{event.title}</p>
                    <div className="flex gap-2 items-center text-gray-500 dark:text-gray-400">
                        <ClockIcon className='w-3 h-3' />
                        <p className='font-sembold text-xs'>{event.startTime} - {event.endTime}</p>
                    </div>
                </div>
            </div>
            <button className='w-8 h-8 inline-flex items-center justify-center flex-shrink-0 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in rounded-full text-gray-700 dark:text-gray-400'>
                <DotsVerticalIcon className='w-5 h-5' />
            </button>
        </div>
    )
}

export default OnBoard
