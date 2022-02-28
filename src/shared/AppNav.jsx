import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {routes} from "./routes"
import logo from "../assets/kurriculalogo.png"
import { BellIcon, CogIcon, LogoutIcon, MenuIcon, UserCircleIcon } from '@heroicons/react/outline'
import Drawer from "../components/Drawer"

const AppNav = (props) => {

    const [path, setPath] = useState(window.location.pathname)

    const [darkMode, setDarkMode] = useState(false)
    var darkModeStatus = false;
    if(typeof window !== 'undefined')
        darkModeStatus = JSON.parse(localStorage.getItem('darkMode'))
    
    useEffect(() => {
        if(!darkModeStatus) {
            localStorage.setItem('darkMode', JSON.stringify(false))
        }
        else {
            setDarkMode(darkModeStatus)
            if(darkModeStatus === true) {
                document.documentElement.classList.add('dark')
            }
            else {
                document.documentElement.classList.remove('dark')
            }
        }
    }, [darkModeStatus])

    const toggleDarkMode = () => {
        const newVal = !darkMode
        setDarkMode(newVal)
        localStorage.setItem('darkMode', JSON.stringify(newVal))

        if (newVal === true) {
            document.documentElement.classList.add('dark')
        } 
        else {
            document.documentElement.classList.remove('dark')
        }
    }

    const [drawerOpen, setDrawerOpen] = useState(false)
    
    return (
        <div className='flex h-screen'>
            <div className='hidden md:block w-[350px] h-full'>
                <div className='p-4 w-full relative h-full'>
                    <div className='mb-10'>
                        <div className="w-16 h-16 mx-auto dark:invert">
                            <img src={logo} alt='logo' className='w-16 h-16' />
                        </div>
                    </div>
                    <div>
                        {routes.map((route) => (
                            <NavLink to={route.href}>
                                <button onClick={() => setPath(route.href)} className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-4 rounded-lg transition duration-200 ease-in ${route.href === path ? 'text-emerald-500 bg-emerald-100 dark:bg-gray-800' : "hover:bg-gray-200 dark:hover:bg-gray-800"}`}>
                                    {route.icon}
                                    {route.title}
                                </button>
                            </NavLink>
                        ))}
                    </div>
                    <div className='absolute bottom-0 left-0 w-full p-4'>
                        <button onClick={toggleDarkMode} className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-2 rounded-lg transition duration-200 ease-in hover:bg-gray-200 dark:hover:bg-gray-800`}>
                            <CogIcon className='w-6 h-6' />
                            Settings
                        </button>
                        <NavLink to='/'>
                            <button className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-2 rounded-lg transition duration-200 ease-in hover:bg-gray-200 dark:hover:bg-gray-800`}>
                                <LogoutIcon className='w-6 h-6' />
                                Log Out
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='h-full w-full overflow-y-auto'>
                <div className='flex items-center justify-between w-full p-4 md:px-6 h-20 mb-6'>
                    <div className="flex gap-2 md:gap-4 items-center">
                        <div className="block md:hidden w-fit">
                            <button onClick={() => setDrawerOpen(true)} className='w-8 h-8 inline-flex items-center justify-center flex-shrink-0 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 ease-in rounded-full'>
                                <MenuIcon className='w-6 h-6' />
                            </button>
                            <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                                <div className='relative h-full px-4'>
                                    {routes.map((route) => (
                                        <NavLink to={route.href}>
                                            <button onClick={() => {setPath(route.href); setDrawerOpen(false)}} className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-4 rounded-lg transition duration-200 ease-in ${route.href === path ? 'text-emerald-500 bg-emerald-100 dark:bg-gray-700' : "hover:bg-gray-200 dark:hover:bg-gray-700"}`}>
                                                {route.icon}
                                                {route.title}
                                            </button>
                                        </NavLink>
                                    ))}
                                    <div className='absolute bottom-0 w-full'>
                                        <button onClick={toggleDarkMode} className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-2 rounded-lg transition duration-200 ease-in hover:bg-gray-200 dark:hover:bg-gray-800`}>
                                            <CogIcon className='w-6 h-6' />
                                            Settings
                                        </button>
                                        <NavLink to='/'>
                                            <button className={`select-none w-full my-2 px-2 py-3 font-semibold flex items-center gap-2 rounded-lg transition duration-200 ease-in hover:bg-gray-200 dark:hover:bg-gray-800`}>
                                                <LogoutIcon className='w-6 h-6' />
                                                Log Out
                                            </button>
                                        </NavLink>
                                    </div>
                                </div>
                                
                            </Drawer>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 md:gap-4'>
                        <button className="relative w-8 h-8 inline-flex items-center justify-center flex-shrink-0 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 ease-in rounded-full">
                            <div className='w-2 h-2 bg-red-500 rounded-full absolute top-1 right-1' />
                            <BellIcon className='w-6 h-6' />
                        </button>
                        <button className="w-8 h-8 inline-flex items-center justify-center flex-shrink-0 hover:bg-gray-200 dark:hover:bg-gray-800 transition duration-200 ease-in rounded-full">
                            <UserCircleIcon className='w-6 h-6' />
                        </button>
                        
                    </div>
                </div>
                <div className='p-4 md:p-6'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default AppNav