import { PlusIcon } from '@heroicons/react/outline'
import React, {useState, useEffect} from 'react'
import {courseData, subjects} from "../courseData"
import Rating from "../../../components/Rating"

const Course = () => {

    const [course, setCourse] = useState()
    const [loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        let path = window.location.pathname.split('/')[2]
        let courseInfo = courseData.find((courseItem) => courseItem.href.split('/')[0] === path)
        console.log(courseInfo)
        setCourse(courseInfo)
    }, [])

    return (
        <div>
            {course &&
                <>
                    <div className='max-w-xl w-full'>
                        <p className='font-bold text-xl mb-2'>{course.title}</p>
                        <div className="my-4 p-4 rounded-xl shadow-xl max-h-60 overflow-y-auto">
                            <p className="font-bold text-sm my-2">Description</p>
                            <p className={`${!showMore ? "line-clamp-3" : ""}`}>{course.description}</p>
                            <button className='font-semibold text-emerald-400' onClick={() => setShowMore(!showMore)}>{showMore ? "Less" : "More"}</button>
                        </div>

                    </div>
                    
                    <div className='mt-8'>

                        <p className="font-bold text-sm">Overall Rating</p>

                        <div className='flex items-center gap-4 my-2'>
                            <p className='text-xl font-semibold'>{course.rating}</p>
                            <div className="w-fit -mb-2">
                                <Rating variant='display' displayValue={course.rating} />
                            </div>
                            <p className='text-sm text-gray-500'>({course.numRated})</p>
                            <button className="w-4 h-4">
                                <PlusIcon />
                            </button>
                        </div>
                    </div>
                
                </>
            }
        </div>
    )
}

export default Course
