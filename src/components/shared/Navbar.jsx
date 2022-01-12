import React, {useState} from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { theme } from '../../theme'
import Button from '../Button'
import CoursesPopover from './CoursesPopover'
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
                            <p>hi</p>
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
