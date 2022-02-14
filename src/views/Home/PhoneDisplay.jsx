import React, { useState } from 'react'
import { motion } from 'framer-motion'

const PhoneDisplay = () => {
    return (
        <motion.div
            whileHover={{x: -20}}
            transition={{duration: 0.4}}
            className="p-2 rounded-3xl bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-xl shadow-cyan-400/20"
        >
            <div className='rounded-2xl bg-gray-800 p-2 mx-auto'>
                
                <div className='bg-gray-900 rounded-t-xl h-8'>
                    <div className='flex items-center justify-center gap-2 w-fit px-6 py-2 rounded-b-xl mx-auto bg-gray-800'>
                        <div className="rounded-full h-1 w-8 bg-gray-500" />
                        <div className='w-1 h-1 rounded-full bg-gray-500' />
                    </div>
                </div>

                <div className='p-2 bg-gray-900'>
                    <div className='bg-gray-100 dark:bg-gray-700 p-2 h-[384px]'>
                        {/* todo: add actual content here */}
                    </div>
                </div>

                <div className='bg-gray-900 rounded-b-xl h-8' />

            </div>
        </motion.div>
    )
}

export default PhoneDisplay