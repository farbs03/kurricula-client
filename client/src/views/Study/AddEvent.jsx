import { CheckIcon, XIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';
import {theme} from "../../theme"
import { motion } from 'framer-motion';
import Modal from "../../components/Modal"
import { eventThemes } from './eventThemes';

const AddEvent = ({addEvent}) => {

    const [title, setTitle] = useState('')
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [color, setColor] = useState()
    
    const onSubmit = () => {
        const data = {title: title, startTime: startTime, endTime: endTime, completed: false}
        if(title) {
            addEvent(data)
            setTitle('')
            setStartTime()
            setEndTime()
            setColor()
        }
    }

    return (
        <div>
            <p className="text-lg font-semibold mb-2">New Event</p>
            
            <div className="my-4">
                <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold mb-1'>Title</p>

                <input 
                    type='text' 
                    className={theme.textfield} 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </div>

            <div className="my-4 grid grid-cols-2 gap-10 w-full justify-center">
                <div>
                    <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold mb-1'>Start Time</p>
                    <input type='time' className={theme.textfield} />
                </div>

                <div>
                    <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold mb-1'>End Time</p>
                    <input type='time' className={theme.textfield} />
                </div>
            </div>

            <div className='my-4'>
                <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold mb-1'>Color</p>
                <div className='flex gap-2'>
                    {eventThemes && Object.values(eventThemes).map((eventTheme) => (
                        <button 
                            onClick={() => setColor(eventTheme)} 
                            className={`rounded-full w-6 h-6 ${eventTheme} ${color === eventTheme ? "ring-2 ring-gray-900 dark:ring-gray-100" : ""} transition duration-200 ease-in`} 
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )
};

export default AddEvent;
