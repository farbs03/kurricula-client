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
    'Math': {icon: <VariableIcon className='w-5 h-5 mr-1 text-red-500' />, text: 'text-red-500', bg: 'bg-red-100'},
    'Science': {icon: <BeakerIcon className='w-5 h-5 mr-1 text-orange-500' />, text: 'text-orange-500', bg: 'bg-orange-100'},
    'English': {icon: <BookOpenIcon className='w-5 h-5 mr-1 text-green-500' />, text: 'text-green-500', bg: 'bg-green-100'},
    'Social Studies': {icon: <GlobeAltIcon className='w-5 h-5 mr-1 text-sky-500' />, text: 'text-sky-500', bg: 'bg-sky-100'},
    'Art': {icon: <PencilIcon className='w-5 h-5 mr-1 text-violet-500' />, text: 'text-violet-500', bg: 'bg-violet-100'},
    'Language': {icon: <TranslateIcon className='w-5 h-5 mr-1 text-indigo-500' />, text: 'text-indigo-500', bg: 'bg-indigo-100'},
}
