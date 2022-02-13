import React, { useState } from 'react'

const Footer = () => {

    const links = [
        {title: 'Home'},
        {title: 'About'},
        {title: 'Blog'},
        {title: 'Team'},
        {title: 'Partners'}
    ]

    const socials = [
        {icon: "fab fa-facebook", href: "#"},
        {icon: "fab fa-instagram", href: "#"},
        {icon: "fab fa-twitter", href: "#"},
        {icon: "fab fa-github", href: "#"},
    ]

    return (
        <div className='flex flex-col gap-4 pt-4 border-t border-t-gray-200 dark:border-t-gray-800'>
            <div className="flex justify-center gap-8">
                {links.map((link) => (
                    <a href="#" className='font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 ease-in'>{link.title}</a>
                ))}
            </div>
            <div className="flex justify-center gap-8">
                {socials.map((social) => (
                    <a href="#" className='font-semibold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition duration-200 ease-in'>
                        <span><i className={social.icon} /></span>
                    </a>
                ))}
            </div>
            <p className='font-semibold text-gray-500 dark:text-gray-400 text-center'>© 2022 Kurricula, All Rights Reserved</p>
        </div>
    )
}

export default Footer