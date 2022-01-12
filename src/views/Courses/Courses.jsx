import React, {useState, useEffect} from 'react'
import { courseData, subjects } from './courseData'
import Badge from "../../components/Badge"
import Rating from '../../components/Rating'
import { motion } from 'framer-motion'
import FilterCourses from './FilterCourses'

const Courses = () => {

    return (
        <div>
            <p className='text-2xl font-bold mb-6'>Courses</p>
            <div className='flex max-w-7xl w-full mx-auto justify-center'>
                <FilterCourses />
                <div className='w-full md:ml-6 ml-0'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto'>
                        {courseData.map((course, idx) => (
                            <motion.div
                                initial={{scale: 0.8, opacity: 0}}
                                animate={{scale: 1, opacity: 1}}
                                transition={{duration: 0.2, delay: 0.1 + idx * 0.1}} 
                            >
                                <motion.div
                                    className='rounded-xl drop-shadow-lg p-6 bg-white'
                                >
                                    <div className='flex items-center'>
                                        <p className='font-bold font-lg mb-1 mr-2'>{course.title}</p>
                                        <Rating />
                                        <p className='text-gray-600 text-xs mb-1 ml-1'>({course.numRated})</p>
                                    </div>
                                    <Badge>
                                        <div className='flex items-center'>
                                            {subjects['Math'].icon}
                                            {course.subject}
                                        </div>
                                    </Badge>
                                    <p className='font-semibold text-gray-600 text-sm mt-2'>{course.description}</p>
                                </motion.div>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
