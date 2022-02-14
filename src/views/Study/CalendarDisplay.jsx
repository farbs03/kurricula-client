import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import "./calendar.css"
import { format, addMonths, subMonths } from "date-fns"
import {CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, MenuIcon, PlusIcon, TrashIcon} from "@heroicons/react/solid"
import { CalendarIcon } from '@heroicons/react/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Event from './Event'

import nature from "../../assets/nature-backdrop.PNG"
import { theme } from '../../theme'

import AddEvent from './AddEvent'

const CalendarDisplay = () => {
    
    const [date, setDate] = useState(new Date());

    let formatted = format(date, 'MM/dd/yyyy').toString()
    const [events, setEvents] = useState([])

    const addEvent = (event) => {
        setEvents([...events, event])
        setEventPrompt(false)
    }

    const [eventPrompt, setEventPrompt] = useState(false)
    

    return (
        <div>
            
            <div className='flex flex-wrap gap-6 max-w-4xl mx-auto justify-center'>
                {/*
                <div className="flex items-center">
                    <CalendarIcon className='w-6 h-6 mr-2'/>
                    <p className='font-bold text-lg'>Calendar</p>
                </div>
                */}
                <div className='drop-shadow-xl rounded-lg bg-white dark:bg-gray-800 w-fit p-2 md:mx-0 mx-auto'>
                    <Calendar
                        onChange={setDate}
                        value={date}
                        view="month"
                        tileClassName='transition duration-100 ease-in rounded-full font-medium'
                        className='text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 text-sm mx-auto'
                        next2Label={null}
                        prev2Label={null}
                        prevLabel={<ChevronLeftIcon className='w-5 h-5 mx-auto' />}
                        nextLabel={<ChevronRightIcon className='w-5 h-5 mx-auto' />}
                        
                    />
                </div>

                <div className='max-w-lg max-h-fit w-full overflow-y-auto overflow-x-hidden drop-shadow-xl rounded-xl bg-white dark:bg-gray-800 p-4'>
                    <div className="max-h-auto">
                        <div className="flex items-center space-x-1 mb-2">
                            <p className='font-semibold text-lg'>Events</p>
                            <button onClick={() => setEventPrompt(!eventPrompt)} className='w-6 h-6 inline-flex flex-shrink-0 items-center justify-center rounded-md transition duration-200 ease-in'><PlusIcon className='text-emerald-500 w-5 h-5' /></button>
                        </div>
                        {!events && !eventPrompt ?
                            <motion.div 
                                className='h-full p-2 border-2 border-dashed border-gray-300 rounded-lg inline-flex flex-col justify-center flex-shrink-0 w-full'
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 0.2}}
                            >
                                <p className='font-semibold text-gray-500 text-center'>No Events Added</p>
                            </motion.div>
                        :
                            <AnimatePresence>
                                {events && events.map((event, idx) => (
                                    <motion.div 
                                        key={idx} 
                                        className='w-full p-2 flex items-center justify-between'
                                        initial={{opacity: 0, x: 5}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.2}}
                                        exit={{opacity: 0, x: 5, transition: {duration: 0.2}}}
                                    >
                                        <Event event={event} />
                                    </motion.div>
                                ))}
                                {eventPrompt &&
                                    <AddEvent addEvent={addEvent} />
                                }
                            </AnimatePresence>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarDisplay
