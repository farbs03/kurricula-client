import React, {useEffect, useState} from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { theme } from '../../theme'
import Button from '../../components/Button'
import Drawer from '../../components/Drawer'
import { AcademicCapIcon } from '@heroicons/react/outline'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/kurriculalogo.png'

const LandingNav = () => {

    const links = [
        {title: 'About', id: 'about', type: 'section'},
        {title: 'Features', id: 'features', type: 'section'},
        {title: 'Courses', id: 'courses', type: 'page'},
        {title: 'Contact', id: 'contact', type: 'section'}
    ]

    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <div className="bg-white dark:bg-gray-900">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <NavLink to="/">
                    <div className='flex items-center'>
                        <div className="w-8 h-8">
                            <img src={logo} alt='logo' className='w-8 h-8 mr-2' />
                        </div>
                        <p className={theme.title} style={{lineHeight: "normal"}}>Kurricula</p>
                    </div>
                </NavLink>
                <div className='items-center hidden md:flex md:flex-wrap'>
                    {links.map((link) => (
                        <a 
                            className={theme.navlink}
                            key={link.id}
                            href={(link.type=='section')?('#section_'+link.id):('/'+link.id)}
                            style={{
                                margin: "0px 16px",
                                display: "block"
                            }}
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                    <div className='px-2 space-x-3 hidden md:flex items-center'>

                        <NavLink to="/login">
                            <Button>Login</Button>
                        </NavLink>
                        <NavLink to="/register">
                            <Button variant="primary">Register</Button>
                        </NavLink>

                    </div>

                    <div className='block md:hidden'>
                        <button className='w-5 h-5' onClick={() => setDrawerOpen(true)}>
                            <MenuIcon className='w-5 h-5 text-gray-900 dark:text-gray-100' />
                        </button>
                        <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                            <div className='w-full'>
                                <div className='mt-6 px-2 flex flex-wrap items-center space-x-4'>
                                    {links.map((link) => (
                                        <a onClick={() => setDrawerOpen(false)} key={link.href} className='font-semibold text-gray-700 dark:text-gray-300'>{link.title}</a>
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
                        </Drawer>
                    </div>
            </div> 
        </div>
    )
}

export default LandingNav
