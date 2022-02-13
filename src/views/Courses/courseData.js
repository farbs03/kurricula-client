import { VariableIcon, BeakerIcon, BookOpenIcon, GlobeAltIcon, PencilIcon, TranslateIcon } from "@heroicons/react/solid"
import {data} from "./data"

let topics = ['Math', 'Science', 'English', 'Social Studies', 'Language', 'Art']
let organizedCourses = []

topics.forEach((topic) => {
    data.forEach((course) => {
        if(course['subject'] === topic) {
            organizedCourses.push(course)
        }
    })
})

export const courseData = organizedCourses

export const subjects = {
    'Math': {icon: <VariableIcon className='w-5 h-5 mr-1' />, text: 'text-red-500 dark:text-gray-100', bg: 'bg-red-100 dark:bg-red-500'},
    'Science': {icon: <BeakerIcon className='w-5 h-5 mr-1' />, text: 'text-orange-500 dark:text-gray-100', bg: 'bg-orange-100 dark:bg-orange-500'},
    'English': {icon: <BookOpenIcon className='w-5 h-5 mr-1' />, text: 'text-green-500 dark:text-gray-100', bg: 'bg-green-100 dark:bg-green-500'},
    'Social Studies': {icon: <GlobeAltIcon className='w-5 h-5 mr-1' />, text: 'text-sky-500 dark:text-gray-100', bg: 'bg-sky-100 dark:bg-sky-500'},
    'Language': {icon: <TranslateIcon className='w-5 h-5 mr-1' />, text: 'text-indigo-500 dark:text-gray-100', bg: 'bg-indigo-100 dark:bg-indigo-500'},
    'Art': {icon: <PencilIcon className='w-5 h-5 mr-1' />, text: 'text-violet-500 dark:text-gray-100', bg: 'bg-violet-100 dark:bg-violet-500'},
}
