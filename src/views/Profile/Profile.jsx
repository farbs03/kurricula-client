import React, { useState } from 'react'

import nature from "../../assets/nature-backdrop.PNG"
import beach from "../../assets/beach-backdrop.PNG"
import profile from "../../assets/chris-profile.jpeg"

import { PencilIcon, PlusCircleIcon, PlusIcon, UploadIcon, EyeIcon, EyeOffIcon, MailIcon, LinkIcon, PhoneIcon } from '@heroicons/react/solid'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import Badge from '../../components/Badge'

import { theme } from '../../theme'

const PasswordVisibleButton = ({isVisible, onClick}) => {
    return (
        <button className='w-5 h-5' onClick={onClick}>
            {isVisible ? 
                <EyeIcon className="w-5 h-5 text-gray-700" />
                :
                <EyeOffIcon className="w-5 h-5 text-gray-700" />
            }
        </button>
    )
}

const Profile = () => {

    let badges = [
        'Developer',
        'AP Student',
        'Cool Guy'
    ]

    let links = [
        {
            title: "cgeraldfarber@icloud.com", 
            link: 'mailto:cgeraldfarber@icloud.com', 
            icon: <MailIcon className='w-5 h-5 mr-1 text-emerald-500' />
        },
        {
            title: 'chrisfarbs.com',
            link: "https://chrisfarbs.com",
            icon: <LinkIcon className='w-5 h-5 mr-1 text-emerald-500' />
        },
        {
            title: '915-490-6814',
            link: "#",
            icon: <PhoneIcon className='w-5 h-5 mr-1 text-emerald-500' />
        }
    ]

    let userInfo = JSON.parse(localStorage.getItem('userInfo'))

    const [email, setEmail] = useState(userInfo.email)
    const [userName, setUsername] = useState(userInfo.userName)

    const [password, setPassword] = useState(userInfo.password)
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div className='bg-white'>
            <div
                style={{height: "150px", backgroundImage: `url(${nature})`, backgroundSize: "100%", backgroundRepeat: "no-repeat"}}
            />
            <div className='px-4'>

                <div className='-mt-20'>
                    <div className='p-1 z-0 inline-flex items-center justify-center flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-500 drop-shadow-xl'>
                        <img src={profile} className='w-full h-full rounded-full object-cover' />
                    </div>
                    <button
                        className='w-6 h-6 p-1 z-10 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in rounded-full inline-flex items-center justify-center flex-shrink-0'
                    >
                        <UploadIcon className='w-5 h-5 text-gray-700' />
                    </button>  
                </div>

                <button
                    className='px-4 py-1 mt-4 mb-2 text-sm rounded-md font-semibold bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in'
                >
                    Edit Profile
                </button>

                <div className='md:flex md:items-center md:space-x-6 mb-2'>
                    <p className='font-bold text-2xl md:mb-0 mb-2'>Chris Farber</p>
                    <div className='flex items-center flex-wrap'>
                        {links.map((link) => (
                            <a 
                                href={link.link} 
                                className='font-semibold text-sm text-emerald-500 flex items-center m-1'>
                                    {link.icon} {link.title}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='flex items-center max-w-md flex-wrap space-x-2 w-full my-1 py-1'>
                    {badges.map((badge) => (
                        <>
                            <Badge>{badge}</Badge>
                        </>
                    ))}
                </div>

                <div className='max-w-lg w-full my-4'>
                    <p className='text-gray-500 font-semibold mr-2'>Bio</p>
                    
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi fugit architecto, labore tempora natus, quidem voluptas
                    </p>
                </div>
                
                <div className='my-2 max-w-lg w-full'>
                    <p className='text-gray-500 font-semibold mr-2'>Account Info</p>

                    <div className="my-2">
                        <span className='font-semibold text-gray-600 text-sm'>
                            Email
                            <input type="text" id='first-name' className={theme.textfield} value={email} onChange={(e) => setEmail(e.target.value)}  />
                        </span>
                    </div>

                    <div className="my-2">
                        <span className='font-semibold text-gray-600 text-sm'>
                            Username
                            <input type="text" className={theme.textfield} value={userName} onChange={(e) => setUsername(e.target.value)}  />
                        </span>
                    </div>

                    <div className='my-2'>
                        <span className='font-semibold text-gray-600 text-sm'>
                            Password
                            <div className='flex items-center space-x-1'>
                                <input type={passwordVisible ? 'text' : 'password'} className={theme.textfield} value={password} onChange={(e) => setPassword(e.target.value)} />
                                <PasswordVisibleButton isVisible={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)} />
                            </div>
                        </span>
                    </div>

                    <Button variant='primary'>
                        Update Account
                    </Button>

                </div>
            </div>
        </div>
    )
}

export default Profile