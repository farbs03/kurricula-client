import React, {useState} from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { theme } from '../../theme'
import Button from '../Button'
import CoursesPopover, {courses} from './CoursesPopover'
import Drawer from './Drawer'
import { AcademicCapIcon } from '@heroicons/react/outline'

const Navbar = (props) => {

    const links = [
        {title: 'Home', href: '#'},
        {title: 'About', href: '#'},
        {title: 'Blog', href: '#'}
    ]

    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <div>
            <div className="border-b border-b-gray-100 bg-white">
                <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/">
                        <div className='flex items-center'>
                            <div className='w-8 h-8 border-2 border-emerald-500 inline-flex items-center justify-center flex-shrink-0 rounded-full mr-2'>
                                <AcademicCapIcon className='text-emerald-500 w-6 h-6' />
                            </div>
                            <p className={theme.title}>Kurricula</p>
                        </div>
                    </a>
                    <div className='items-center hidden md:flex md:flex-wrap'>
                        {links.map((link) => (
                            <a 
                                className={theme.navlink} 
                                href={link.href}
                                style={{
                                    margin: "0px 16px",
                                    display: "block"
                                }}
                            >
                                {link.title}
                            </a>
                        ))}
                        <div style={{margin: "16px"}}>
                            <CoursesPopover />
                        </div>
                    </div>

                    <div className='px-2 space-x-3 hidden md:flex items-center'>
                        <a href="/login">
                            <Button>Login</Button>
                        </a>
                        <a href="/register">
                            <Button variant="primary">Register</Button>
                        </a>
                    </div>

                    <div className='block md:hidden'>
                        <button className='w-5 h-5' onClick={() => setDrawerOpen(true)}>
                            <MenuIcon className='w-5 h-5 text-[#0d0d0d]' />
                        </button>
                        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <div className='w-full'>
                                <div className='border-b border-b-gray-200 py-2'>
                                    {courses.map((item) => (
                                        <a href={item.href} className='my-1 w-full rounded-md hover:bg-gray-100 transition duration-200 ease-in p-2 flex items-center'>
                                            <item.icon className="flex-shrink-0 h-6 w-6 text-emerald-500 mr-2" aria-hidden="true" />
                                            <p className='font-semibold text-gray-700'>{item.name}</p>
                                        </a>
                                    ))}
                                </div>
                                <div>
                                    <div className='mt-6 px-2 flex flex-wrap items-center space-x-4'>
                                        {links.map((link) => (
                                            <a href={link.href} className='font-semibold text-gray-700'>{link.title}</a>
                                        ))}
                                    </div>
                                    <div className='mt-4 p-2 justify-center'>
                                        <a href="/register">
                                            <Button variant="primary" style={{width: "100%", textAlign: "center"}}>Register</Button>
                                        </a>
                                    </div>
                                    <div className='p-2'>
                                        <p className='text-gray-400'>Already have an account?</p>
                                        <a href="/login" className='text-emerald-500'>Sign in</a>
                                    </div>
                                </div> 
                            </div>
                        </Drawer>
                    </div>
                    
                </div> 
            </div>
            <div className='max-w-7xl mx-auto w-full justify-center p-4'>
                {props.children}
            </div>
        </div>
    )
}

export default Navbar
