import React, {useState, useEffect} from 'react'
import {courseData, subjects} from "../courseData"

const Course = () => {

    const [course, setCourse] = useState()
    const [loading, setLoading] = useState(false)

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
                    <p className='font-bold text-xl text-center mb-2'>{course.title}</p>
                    <p className='text-gray-600 font-semibold text-md text-center'>{course.description}</p>
                </>
            }
        </div>
    )
}

export default Course
