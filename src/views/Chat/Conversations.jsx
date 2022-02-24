import React, { useState } from 'react'
import {theme} from "../../theme"
import { fakeUser } from '../../fakeUser'

const Conversations = ({friendName, onChange}) => {

    let user = fakeUser
    let chats = user.chats

    return (
        <div className='w-[350px] overflow-y-auto mx-auto p-4 bg-white dark:bg-gray-800 flex flex-col gap-4'>
            <div className="flex justify-center">
                <input type='text' className={theme.textfield} placeholder='Search Conversations' />
            </div>
            {Object.keys(chats).map((person) => (
                <div onClick={() => onChange(person)} className='p-2 hover:bg-gray-600 transition duration-200 ease-in cursor-pointer'>
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