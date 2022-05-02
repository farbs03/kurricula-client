import {
    CollectionIcon,
    ChatIcon,
    SearchCircleIcon,
    CalendarIcon
} from '@heroicons/react/outline'
import React from 'react'

export const routes = [
    {
        title: "Courses",
        href: "/courses",
        icon: <CollectionIcon className='w-6 h-6' />
    },
    {
        title: "Chat",
        href: "/chat",
        icon: <ChatIcon className='w-6 h-6' />
    },
    {
        title: "Resources",
        href: "/resources",
        icon: <SearchCircleIcon className='w-6 h-6' />
    },
    {
        title: "Study",
        href: "/study",
        icon: <CalendarIcon className='w-6 h-6' />
    },
]