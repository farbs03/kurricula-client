import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    CollectionIcon,
    ChatIcon,
    SearchCircleIcon,
    CalendarIcon
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

export const courses = [
    {
        name: 'Rate Courses',
        description: 'See a list of all courses and their reviews',
        href: '/courses',
        icon: CollectionIcon,
    },
    {
        name: 'Chat',
        description: 'Receive or provide help for coursework by chatting with others',
        href: '/chat',
        icon: ChatIcon,
    },
    { 
        name: 'Resources', 
        description: "Browse our curated list of resources for each course", 
        href: '/tutoring', 
        icon: SearchCircleIcon 
    },
    {
        name: 'Study',
        description: "Create a study plan and see important upcoming AP test dates",
        href: '/study',
        icon: CalendarIcon,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const CoursesPopover = () => {
    return (
        <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                    className={
                        classNames(
                            open ? 'text-gray-900 dark:text-gray-100' : 'text-gray-500 dark:text-gray-400',
                            'group bg-transparent rounded-md inline-flex items-center text-base font-semibold hover:text-[#0d0d0d] focus:outline-none focus:ring-0 transition ease-in duration-200'
                        )
                    }
                >
                    <span>Courses</span>
                    <ChevronDownIcon
                        className={classNames(
                        open ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500',
                        'ml-2 h-5 w-5 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition ease-in duration-200'
                        )}
                        aria-hidden="true"
                    />
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg drop-shadow-xl ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white dark:bg-gray-700 px-5 py-6 sm:gap-8 sm:p-8">
                                {courses.map((item) => (
                                <Popover.Button key={item.name} className='text-left'>
                                    <NavLink
                                        to={item.href}
                                        className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition ease-in duration-200"
                                    >
                                        <item.icon className="flex-shrink-0 h-6 w-6 text-emerald-500" aria-hidden="true" />
                                            <div className="ml-4">
                                                <p className="text-base font-medium">{item.name}</p>
                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
                                            </div>
                                    </NavLink>
                                </Popover.Button>
                                ))}
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    )
}

export default CoursesPopover
