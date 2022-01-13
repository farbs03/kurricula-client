import React, {useState, useEffect} from 'react'
import Calendar from 'react-calendar'
import "./calendar.css"
import { format, addMonths, subMonths } from "date-fns"
import {CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon, MenuIcon, TrashIcon} from "@heroicons/react/solid"
import { CalendarIcon } from '@heroicons/react/outline'



const CalendarDisplay = () => {

    const fakeEvents = {
        '01/13/2022': [
            {
                title: 'Study for math class', 
                completed: false, 
                startTime: 60 * 13, //minute representation of 1:00 PM*/
                endTime: 60 * 14  
            }
        ],
        '01/14/2022': [
            {
                title: 'Study for science', 
                completed: false, 
                startTime: 60 * 15,
                endTime: 60 * 16
            }
        ]
    }
    
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState()

    useEffect(() => {
        let formatted = format(date, 'MM/dd/yyyy')
        setEvents(fakeEvents[formatted.toString()])
    }, [date])

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

    return (
        <div >
            
            <div className='p-6 drop-shadow-xl rounded-xl bg-white flex flex-wrap md:space-x-2 md:space-y-0 space-y-2 justify-center max-w-4xl mx-auto'>
                {/*
                <div className="flex items-center">
                    <CalendarIcon className='w-6 h-6 mr-2'/>
                    <p className='font-bold text-lg'>Calendar</p>
                </div>
                */}
                <Calendar
                    onChange={setDate}
                    value={date}
                    view="month"
                    tileClassName='transition duration-100 ease-in rounded-full font-medium'
                    className='text-gray-700 text-sm'
                    next2Label={null}
                    prev2Label={null}
                    prevLabel={<ChevronLeftIcon className='w-5 h-5 mx-auto' />}
                    nextLabel={<ChevronRightIcon className='w-5 h-5 mx-auto' />}
                />

                <div className='max-w-md w-full mx-auto'>
                    {!events ?
                        <div className='h-full p-2 border-2 border-dashed border-gray-300 rounded-lg inline-flex items-center justify-center flex-shrink-0 w-full'>
                            <p className='text-gray-400 font-semibold'>No events today</p>
                        </div>
                        :
                        <div>
                            {events.map((event, idx) => (
                                <div key={idx} className='w-full p-2 flex items-center justify-between border-b border-b-gray-300'>
                                    <div className='flex items-center'>
                                        <CheckCircleIcon className='w-5 h-5 mr-2' />
                                        <div>
                                            <p className='font-semibold text-sm'>{event.title}</p>
                                            <p className='font-sembold text-sm text-gray-500'>{formatTime(event.startTime)} - {formatTime(event.endTime)}</p>
                                        </div>
                                    </div>
                                    <button className='w-5 h-5'>
                                        <TrashIcon className='w-5 h-5 text-gray-600' />
                                    </button>
                                </div>
                               
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default CalendarDisplay
