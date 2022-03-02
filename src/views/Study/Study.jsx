import React, { useEffect, useState } from 'react'
import {PlusIcon} from "@heroicons/react/solid"
import { motion, AnimatePresence } from 'framer-motion'
import Event from './Event'

import AddEvent from './AddEvent'
import CalendarDisplay from './CalendarDisplay'

import format from 'date-fns/format'
import BottomDrawer from '../../components/BottomDrawer'

import { fakeUser } from '../../fakeUser'
import OnBoard from './OnBoard'

import {Reorder} from "framer-motion"
import ReorderItem from '../../components/ReorderItem'
import Modal from '../../components/Modal'

const Study = () => {
    
    const date = new Date();
    const [selectedDay, setSelectedDay] = useState(format(date, 'yyyy/MM/dd'))
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    const [onBoard, setOnBoard] = useState(fakeUser.events.onBoard)
    const [inProgress, setInProgress] = useState(fakeUser.events.inProgress)

    const [eventPrompt, setEventPrompt] = useState(false)

    const [calendarOpen, setCalendarOpen] = useState(false)

    useEffect(() => {
        console.log(onBoard)
    }, [onBoard])


    const addEvent = (data) => {
        setOnBoard([...onBoard, data])
        setEventPrompt(false)
    }

    return (
        <div className='relative'>
            <p className='text-2xl font-bold mb-4'>Study</p>

            <div className="mb-2 hidden md:block">
                <button 
                    onClick={() => setEventPrompt(!eventPrompt)} 
                    className='rounded-md font-semibold bg-emerald-500 hover:bg-emerald-600 transition duration-200 ease-in text-gray-100 px-4 py-2 flex items-center gap-2'
                >
                    New Event <PlusIcon className='w-5 h-5' />
                </button>
            </div>

            <Modal open={eventPrompt} setOpen={setEventPrompt}>
                <AddEvent addEvent={addEvent} />
            </Modal>

            <div className='md:hidden'>
                    <button 
                        className="px-4 py-2 rounded-md font-semibold ring ring-emerald-500 text-emerald-500"
                        onClick={() => setCalendarOpen(true)}
                    >
                        Open Calendar
                    </button>
                    <BottomDrawer open={calendarOpen} onClose={() => setCalendarOpen(false)}>
                        <CalendarDisplay 
                            date={date}
                            selectedDay={selectedDay}
                            setSelectedDay={setSelectedDay}
                            month={month}
                            setMonth={setMonth}
                            year={year}
                            setYear={setYear}
                        />
                    </BottomDrawer>
                </div>

            <div className='flex flex-wrap justify-center gap-10 w-full'>
                

                <div className='flex-grow'>
                    <div>

                        <div className="md:hidden top-auto left-auto right-4 bottom-4 margin-0 fixed">
                            <button
                                onClick={() => setEventPrompt(!eventPrompt)} 
                                className='rounded-full shadow-lg shadow-emerald-500/40 bg-emerald-500 text-gray-100 w-14 h-14 inline-flex items-center justify-center flex-shrink-0 hover:bg-emerald-600 transition duration-200 ease-in'
                            >
                                <PlusIcon className='w-5 h-5' />
                            </button>
                        </div>

                        <div className="grid md:grid-cols-2 p-4 gap-10 w-full">
                            <div className='w-full'>
                                <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">On Board</p>

                                    {onBoard && onBoard.map((event, idx) => (
                                        <motion.div 
                                            key={event.title} 
                                            className='w-full p-2 flex items-center justify-between'
                                            initial={{opacity: 0, x: 5}}
                                            animate={{opacity: 1, x: 0}}
                                            transition={{duration: 0.2}}
                                            exit={{opacity: 0, x: 5, transition: {duration: 0.2}}}
                                        >
                                            <OnBoard event={event} />
                                        </motion.div>
                                    ))}

                            </div>
                            <div>
                                <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">In Progress</p>
                                {inProgress && inProgress.map((event, idx) => (
                                    <motion.div 
                                        key={event.title} 
                                        className='w-full p-2 flex items-center justify-between'
                                        initial={{opacity: 0, x: 5}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.2}}
                                        exit={{opacity: 0, x: 5, transition: {duration: 0.2}}}
                                    >
                                        <Event event={event} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                
                <div className="w-fit hidden md:block">
                    <CalendarDisplay 
                        date={date}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        month={month}
                        setMonth={setMonth}
                        year={year}
                        setYear={setYear}
                    />
                </div>
                

            </div>
        </div>
    )
}

export default Study
