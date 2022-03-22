import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import React, {useState, useEffect} from 'react'
import {courseData, subjects} from "../courseData"

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

    const [postVote, setPostVote] = useState(5)
    const [vote, setVote] = useState(0)

    const fakeData = [
        {
            user: "farbs03",
            title: "Help w hw",
            description: "More help pls",
            votes: 5,
        }
    ]

    return (
        <div>
            {course &&
                <>
                    <p className='font-bold text-xl mb-2'>{course.title}</p>
                    <p className={`${!showMore ? "line-clamp-2" : ""}`}>{course.description}</p>
                    
                    <button className='font-semibold text-emerald-500' onClick={() => setShowMore(!showMore)}>{showMore ? "Less" : "More"}</button>
                    <div className="my-10 flex flex-col gap-10 max-w-xl w-full">
                        {fakeData.map((post) => (
                            <div className='flex gap-2'>
                                <div className="flex gap-2 flex-col w-12 justify-center items-center">
                                    <button className='inline-flex items-center rounded-md justify-center flex-shrink-0 w-6 h-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in'>
                                        <ChevronUpIcon className='w-5 h-5' />
                                    </button>
                                    <p className='text-center text-sm font-semibold'>{postVote}</p>
                                    <button className='inline-flex items-center rounded-md justify-center flex-shrink-0 w-6 h-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200 ease-in'>
                                        <ChevronDownIcon className='w-5 h-5' />
                                    </button>
                                </div>
                                <div>
                                    <p className='font-semibold text-sm text-emerald-500'>{post.user}</p>
                                    <p className='font-semibold text-lg mt-2'>{post.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}

export default Course
