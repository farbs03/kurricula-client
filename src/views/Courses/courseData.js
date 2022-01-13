import { VariableIcon, BeakerIcon, BookOpenIcon, GlobeAltIcon, PencilIcon, TranslateIcon } from "@heroicons/react/solid"

export const courseData = [
    {
        title: "AP Calculus BC",
        subject: "Math",
        description: "EZ Money Calc BC",
        rating: 5,
        numRated: 32,
        href: 'calculus-bc/'
    },
    {
        title: "AP Chemistry",
        subject: "Science",
        description: "Chem is hard :(",
        rating: 3,
        numRated: 10,
        href: 'chemistry/'
    },
    {
        title: "AP Literature and Composition",
        subject: "English",
        description: "Books ig",
        rating: 4,
        numRated: 24,
        href: 'literature-comp/'
    },
    {
        title: "AP World History",
        subject: "Social Studies",
        description: "Every freshman's worst nightmare",
        rating: 1,
        numRated: 14,
        href: 'world-history/'
    },
    {
        title: "AP Music Theory",
        subject: "Art",
        description: "zzzz mimimimi",
        rating: 2,
        numRated: 5,
        href: 'music-theory/'
    },
    {
        title: "AP French",
        subject: "Language",
        description: "Ouais chouette",
        rating: 3,
        numRated: 23,
        href: 'french/'
    },
]

export const subjects = {
    'Math': {icon: <VariableIcon className='w-5 h-5 mr-1 text-red-500' />, text: 'text-red-500', bg: 'bg-red-100'},
    'Science': {icon: <BeakerIcon className='w-5 h-5 mr-1 text-orange-500' />, text: 'text-orange-500', bg: 'bg-orange-100'},
    'English': {icon: <BookOpenIcon className='w-5 h-5 mr-1 text-green-500' />, text: 'text-green-500', bg: 'bg-green-100'},
    'Social Studies': {icon: <GlobeAltIcon className='w-5 h-5 mr-1 text-sky-500' />, text: 'text-sky-500', bg: 'bg-sky-100'},
    'Art': {icon: <PencilIcon className='w-5 h-5 mr-1 text-indigo-500' />, text: 'text-indigo-500', bg: 'bg-indigo-100'},
    'Language': {icon: <TranslateIcon className='w-5 h-5 mr-1 text-violet-500' />, text: 'text-violet-500', bg: 'bg-violet-100'},
}
