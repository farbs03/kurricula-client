import React from 'react'
import { motion } from 'framer-motion'
import wave from "../../assets/Wave.svg"
import forest from "../../assets/forest.svg"
import {theme} from "../../theme"

const Home = () => {

    return (
        <div>
            <motion.div
                className='grid md:grid-cols-2 gap-2 items-center'
            >
                <motion.div
                    initial={{y: 20, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.4, delay: 0.2}}
                >
                    <p className='text-4xl font-semibold text-center md:text-left'>
                        Social media and productivity website
                        <span className='bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent'>&nbsp;all in one</span>
                    </p>
                    <motion.div
                        initial={{opacity: 0, scale: 0}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.4, delay: 0.6}}
                        className='w-fit mt-4'
                    >
                        <motion.button
                            className={theme.gradientButton}
                        >
                            View Features
                        </motion.button>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: 20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.4, delay: 0.4}}
                >
                    <motion.img className='object-cover' src={forest} />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Home
