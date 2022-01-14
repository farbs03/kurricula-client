import React, {useState} from 'react'
import {CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, MenuIcon, TrashIcon} from "@heroicons/react/solid"
import { CheckIcon } from '@heroicons/react/outline'

const Event = ({event}) => {

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

    const [checked, setChecked] = useState(false)

    return (
        <>
            <div className='flex items-center'>

                {checked ?
                    <button 
                        onClick={() => setChecked(!checked)} 
                        className='w-6 h-6 p-0 text-center inline-flex justify-center items-center mr-2 transition duration-200 ease-in'
                    >
                        <CheckCircleIcon className='w-6 h-6 text-white bg-emerald-500 rounded-full' />
                    </button>
                    :
                    <button onClick={() => setChecked(!checked)} className='w-6 h-6 mr-2 border border-gray-300 rounded-full transition duration-200 ease-in'>
                    </button>
                }
                
                <div>
                    <p className='font-semibold text-sm'>{event.title}</p>
                    <p className='font-sembold text-sm text-gray-500'>{formatTime(event.startTime)} - {formatTime(event.endTime)}</p>
                </div>
            </div>
            <button className='w-5 h-5'>
                <TrashIcon className='w-5 h-5 text-red-500' />
            </button>
        </>
    )
}

export default Event
