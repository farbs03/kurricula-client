import React from 'react'
import { motion } from 'framer-motion'
import {theme} from "../../theme"
import PhoneDisplay from './PhoneDisplay'

const Hero = () => {

    return (
        <div className='my-20'>
            <motion.div
                className='flex flex-wrap gap-4 justify-center md:justify-between items-center h-full'
            >
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.2}}
                    className='max-w-2xl'
                >
                    <p className='text-5xl md:text-5xl font-bold text-center md:text-left'>
                        Social media and productivity website
                        <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>&nbsp;all in one</span>
                    </p>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}                        
                        transition={{duration: 0.4, delay: 0.6}}
                        className='w-fit mt-6 mb-2 md:mb-0 mx-auto md:mx-0 p-1 rounded-lg bg-gradient-to-tr from-emerald-400 to-cyan-400'
                    >
                        <motion.button
                            className={`bg-gray-900 rounded-md font-semibold px-4 md:px-6 py-2 md:py-3`}
                        >
                            View Features
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                    className='max-w-[300px] w-full shadow-xl bg-transparent rounded-2xl'
                >
                    <PhoneDisplay />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Hero