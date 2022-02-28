import { CheckIcon, XIcon } from '@heroicons/react/solid';
import React, {useState} from 'react';
import {theme} from "../../theme"
import { motion } from 'framer-motion';

const AddEvent = ({addEvent}) => {
    const [title, setTitle] = useState('')
    const [startTime, setStartTime] = useState(60 * (3 + 12))
    const [endTime, setEndTime] = useState( 60 * (4 + 12))
    
    const onSubmit = () => {
        const data = {title: title, startTime: startTime, endTime: endTime, completed: false}
        if(title) {
            addEvent(data)
        }
    }

    return (
        <motion.div 
            className='justify-center max-w-sm flex items-center space-x-2'
            initial={{opacity: 0, y: 5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.2}}
        >
            <input 
                type='text' 
                className={theme.textfield} 
                placeholder='Title' 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
            />
            <div>
                5:00 PM
            </div>
            <button className='w-5 h-5' onClick={onSubmit}>
                <CheckIcon className='text-green-500 w-5 h-5' />
            </button>
            <button className='w-5 h-5'>
                <XIcon className='text-red-500 w-5 h-5' />
            </button>
        </motion.div>
    )
};

export default AddEvent;
