import React, {useState, useEffect} from 'react'
import { courseData, subjects } from './courseData'
import Badge from "../../components/Badge"
import Rating from '../../components/Rating'
import { AnimatePresence, motion } from 'framer-motion'
import FilterCourses from './FilterCourses'
import { isCompositeComponentWithType } from 'react-dom/cjs/react-dom-test-utils.development'
import PaginateCourses from './PaginateCourses'

const Courses = () => {

    const [courses, setCourses] = useState(courseData)
    const [search, setSearch] = useState('')

    const filterCourses = (query) => {
        setSearch(query)
        let results = courseData.filter((course) => course.title.toUpperCase().includes(query.toUpperCase()))
        setCourses(results)
    }

    const getHighlightedText = (text, highlight) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <span className='bg-emerald-100'>{part}</span> : part)}</span>;
    }


    return (
        <div>
            <p className='text-2xl font-bold mb-4'>Courses</p>
            <div className='flex max-w-7xl w-full mx-auto justify-center'>
                <FilterCourses filterCourses={filterCourses} />
                <div className='w-full md:ml-6 ml-0'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-auto'>
                        <AnimatePresence>
                            {courses && courses.map((course, idx) => (
                                <motion.div
                                    key={course.title}
                                    initial={{scale: 0.8, opacity: 0}}
                                    animate={{scale: 1, opacity: 1}}
                                    transition={{duration: 0.2, delay: 0.1 + idx * 0.1}} 
                                    exit={{scale: 0.8, opacity: 0, transition: {duration: 0.2}}}
                                >
                                    <a href={`/courses/${course.href}`}>
                                        <motion.div
                                            className='rounded-xl drop-shadow-md hover:drop-shadow-xl transition duration-200 ease-in p-6 bg-white'
                                        >
                                            <p className='font-bold font-lg mb-1 mr-2 line-clamp-1'>{getHighlightedText(course.title, search)}</p>
                                            {/*
                                            <div className='flex items-center -ml-1'>
                                                <Rating variant='display' displayValue={course.rating} />
                                                <p className='text-gray-600 text-xs mb-1 ml-1'>({course.numRated})</p>
                                            </div>
                                            */}  
                                            <Badge text={subjects[course.subject].text} bg={subjects[course.subject].bg}>
                                                <div className='flex items-center'>
                                                    {subjects[course.subject].icon}
                                                    {course.subject}
                                                </div>
                                            </Badge>
                                            <p className='font-semibold text-gray-600 text-sm mt-2 line-clamp-1'>{course.description}</p>
                                        </motion.div>
                                    </a>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
