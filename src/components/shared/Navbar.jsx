import React, {useEffect, useState} from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { theme } from '../../theme'
import Button from '../Button'
import CoursesPopover, {courses} from './CoursesPopover'
import Drawer from './Drawer'
import { AcademicCapIcon, CogIcon } from '@heroicons/react/outline'
import AccountPopover from './AccountPopover'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

    const links = [
        {title: 'Home', href: '/home'},
        {title: 'About', href: '/about'},
        {title: 'Blog', href: '/blog'}
    ]

    const [drawerOpen, setDrawerOpen] = useState(false)

    let userData = JSON.parse(localStorage.getItem("userInfo"))

    let path = window.location.pathname
    const [pathName, setPathName] = useState(path)
    useEffect(() => {
        setPathName(path)
    }, [path])

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

    return (
        <div className='text-gray-900 dark:text-gray-100 dark:bg-gray-900 min-h-screen flex flex-col'>
            <div className="bg-white dark:bg-gray-800">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to="/">
                        <div className='flex items-center'>
                            <div className='w-8 h-8 border-2 border-emerald-500 inline-flex items-center justify-center flex-shrink-0 rounded-full mr-2'>
                                <AcademicCapIcon className='text-emerald-500 w-6 h-6' />
                            </div>
                            <p className={theme.title} style={{lineHeight: "normal"}}>Kurricula</p>
                        </div>
                    </NavLink>
                    <div className='items-center hidden md:flex md:flex-wrap'>
                        {links.map((link) => (
                            <NavLink 
                                className={link.href === pathName ? theme.selectedNavlink : theme.navlink} 
                                key={link.href}
                                to={link.href}
                                style={{
                                    margin: "0px 16px",
                                    display: "block"
                                }}
                                onClick={() => setPathName(link.href)}
                            >
                                {link.title}
                            </NavLink>
                        ))}
                        <div style={{margin: "0px 16px"}}>
                            <CoursesPopover />
                        </div>
                    </div>

                    <div className='px-2 space-x-3 hidden md:flex items-center'>
                        {userData ?
                            <>
                                <AccountPopover />
                            </>
                            :
                            <>
                                <NavLink to="/login" onClick={() => setPathName('/login')}>
                                    <Button>Login</Button>
                                </NavLink>
                                <NavLink to="/register" onClick={() => setPathName('/register')}>
                                    <button className={theme.gradientButton}>Register</button>
                                </NavLink>
                                <button onClick={toggleDarkMode} className='text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 ease-in w-6 h-6'>
                                    <CogIcon />
                                </button>
                            </>
                        }
                        

                    </div>

                    <div className='block md:hidden'>
                        <button className='w-5 h-5' onClick={() => setDrawerOpen(true)}>
                            <MenuIcon className='w-5 h-5 text-gray-900 dark:text-gray-100' />
                        </button>
                        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <div className='w-full'>
                                <div className='border-b border-b-gray-200 dark:border-b-gray-700 py-2'>
                                    {courses.map((item) => (
                                        <NavLink onClick={() => setDrawerOpen(false)} key={item.href} to={item.href} className='my-1 w-full rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200 ease-in p-2 flex items-center'>
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-emerald-500 mr-2" aria-hidden="true" />
                                            <p className='font-semibold text-gray-700 dark:text-gray-300'>{item.name}</p>
                                        </NavLink>
                                    ))}
                                </div>
                                <div>
                                    <div className='mt-6 px-2 flex flex-wrap items-center space-x-4'>
                                        {links.map((link) => (
                                            <NavLink onClick={() => setDrawerOpen(false)} key={link.href} to={link.href} className='font-semibold text-gray-700 dark:text-gray-300'>{link.title}</NavLink>
                                        ))}
                                    </div>
                                    <div className='mt-4 p-2 justify-center'>
                                        <NavLink onClick={() => setDrawerOpen(false)} to="/register">
                                            <button className={theme.gradientButton} style={{width: "100%", textAlign: "center"}}>Register</button>
                                        </NavLink>
                                    </div>
                                    <div className='px-2'>
                                        <p className='text-gray-500 dark:text-gray-400'>Already have an account?</p>
                                        <NavLink onClick={() => setDrawerOpen(false)} to="/login" className='text-emerald-500'>Sign in</NavLink>
                                    </div>
                                </div> 
                            </div>
                        </Drawer>
                    </div>
                    
                </div> 
            </div>
            <div className='max-w-7xl mx-auto w-full justify-center p-4 flex-grow inline-flex flex-shrink-0 items-center'>
                {props.children}
            </div>
        </div>
    )
}

export default Navbar
