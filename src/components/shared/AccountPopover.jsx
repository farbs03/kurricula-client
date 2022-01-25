import React, { useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import {
    CollectionIcon,
    ChatIcon,
    SearchCircleIcon,
    CalendarIcon,
    LogoutIcon
} from '@heroicons/react/outline'

import { ChevronDownIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'

export const profileActions = [
    {
        name: 'Profile',
        href: '/profile',
        icon: UserIcon
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const logout = () => {
    localStorage.removeItem('userInfo')
    window.location.pathname = '/'
}

const AccountPopover = () => {
    return (
        <Popover className='relative'>
            {({ open }) => (
            <>
                <Popover.Button
                    className={
                        classNames(
                            'group bg-white rounded-md inline-flex items-center text-base font-semibold focus:outline-none focus:ring-0 transition ease-in duration-200'
                        )
                    }
                >
                    <span>
                        <UserCircleIcon className='text-emerald-500 w-6 h-6 mt-2' />
                    </span>
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
                    <Popover.Panel className="absolute z-10 mt-3 transform sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg drop-shadow-xl ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-4 bg-white px-6 py-4">
                                {profileActions.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        to={item.href}
                                        className="text-gray-500 hover:text-[#0d0d0d] text-sm transition ease-in duration-200 font-medium"
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                                <button
                                    className="text-rose-400 hover:text-rose-500 flex items-center text-sm transition ease-in duration-200 font-medium"
                                    onClick={logout}
                                >
                                    Logout
                                    <LogoutIcon className='w-5 h-5 ml-2' />
                                </button>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    )
}

export default AccountPopover