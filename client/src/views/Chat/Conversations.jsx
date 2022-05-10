import React, { useState } from 'react'
import {theme} from "../../theme"
import { fakeUser } from '../../fakeUser'
import {SearchIcon} from "@heroicons/react/solid"

const Conversations = ({friendName, onChange}) => {

    let user = fakeUser
    let chats = user.chats

    return (
        <div className='w-[350px] rounded-2xl overflow-y-auto mx-auto bg-white dark:bg-gray-800 flex flex-col gap-4 py-4'>
            <div className='px-4'>
                <label className="relative text-gray-500 dark:text-gray-400 block transition-duration-200 ease-in">
                    <SearchIcon className='w-5 h-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-2' fill='currentColor' />
                    <input 
                        type="text" 
                        className='
                            rounded-md 
                            transition ease-in duration-200 
                            border-transparent 
                            flex-1 
                            appearance-none 
                            w-full 
                            block 
                            pr-2
                            py-2
                            pl-8 
                            bg-transparent 
                            placeholder-gray-400 
                            focus:outline-none 
                            focus:ring-0 
                            focus:border-transparent
                            bg-gray-100 dark:bg-gray-700
                            mb-4
                            text-sm
                            text-gray-900 dark:text-gray-100                            
                        '
                        placeholder='Search Conversations'
                    />
                </label>
            </div>


            {Object.keys(chats).map((person) => (
                <div onClick={() => onChange(person)} className='px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-200 ease-in cursor-pointer'>
                    <div className="flex items-center gap-2">
                        <div className='flex gap-2 items-center'>
                            <div className="w-2 h-2">
                                {true ? <div className='w-2 h-2 bg-cyan-400 rounded-full' /> : <></>}
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-700">

                            </div>
                        </div>
                        <div className='flex-grow'>
                            <div className="flex items-center justify-between">
                                <p className='font-semibold'>{person}</p>
                                <p className='text-gray-500 dark:text-gray-400 text-sm font-semibold'>2:50 PM</p>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 line-clamp-1">{chats[person][chats[person].length - 1].message}</p>
                        </div>
                        
                    </div>
                    
                </div>
            ))}
        </div>
    )
}

export default Conversations