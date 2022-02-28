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
    'Math': {icon: <VariableIcon className='w-5 h-5 mr-1' />, text: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900 dark:bg-opacity-20'},
    'Science': {icon: <BeakerIcon className='w-5 h-5 mr-1' />, text: 'text-orange-500', bg: 'bg-orange-100 bg-orange-100 dark:bg-orange-900 dark:bg-opacity-20'},
    'English': {icon: <BookOpenIcon className='w-5 h-5 mr-1' />, text: 'text-green-500', bg: 'bg-green-100 bg-green-100 dark:bg-green-900 dark:bg-opacity-20'},
    'Social Studies': {icon: <GlobeAltIcon className='w-5 h-5 mr-1' />, text: 'text-sky-500', bg: 'bg-sky-100 bg-sky-100 dark:bg-sky-900 dark:bg-opacity-20'},
    'Language': {icon: <TranslateIcon className='w-5 h-5 mr-1' />, text: 'text-indigo-500', bg: 'bg-indigo-100 bg-indigo-100 dark:bg-indigo-900 dark:bg-opacity-20'},
    'Art': {icon: <PencilIcon className='w-5 h-5 mr-1' />, text: 'text-violet-500', bg: 'bg-violet-100 bg-violet-100 dark:bg-violet-900 dark:bg-opacity-20'},
}
