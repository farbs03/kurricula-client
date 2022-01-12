import React from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    BookmarkAltIcon,
    BookOpenIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'

import { ChevronDownIcon } from '@heroicons/react/solid'

const courses = [
    {
        name: 'Course List',
        description: 'See a list of all courses and their reviews',
        href: '/courses',
        icon: BookOpenIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: CursorClickIcon,
    },
    { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
    {
        name: 'Integrations',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: ViewGridIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will drive your customers to convert',
        href: '#',
        icon: RefreshIcon,
    },
]

const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
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
                            open ? 'text-[#0d0d0d]' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-semibold hover:text-[#0d0d0d] focus:outline-none focus:ring-0 transition ease-in duration-200'
                        )
                    }
                >
                    <span>Courses</span>
                    <ChevronDownIcon
                        className={classNames(
                        open ? 'text-gray-600' : 'text-gray-500',
                        'ml-2 h-5 w-5 group-hover:text-gray-600 transition ease-in duration-200'
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
                        <div className="rounded-lg shadow-lg ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {courses.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 transition ease-in duration-200"
                                >
                                    <item.icon className="flex-shrink-0 h-6 w-6 text-emerald-500" aria-hidden="true" />
                                    <div className="ml-4">
                                        <p className="text-base font-medium">{item.name}</p>
                                        <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                    </div>
                                </a>
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
