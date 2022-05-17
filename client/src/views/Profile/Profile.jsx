import React, { useState, useEffect } from 'react'

import nature from "../../assets/nature-backdrop.PNG"
import beach from "../../assets/beach-backdrop.PNG"
import profile from "../../assets/chris-profile.jpeg"

import { PencilIcon, PlusCircleIcon, PlusIcon, UploadIcon, EyeIcon, EyeOffIcon, MailIcon, LinkIcon, PhoneIcon } from '@heroicons/react/solid'
import Button from '../../components/Button'
import IconButton from '../../components/IconButton'
import Badge from '../../components/Badge'

import {fakeUser} from "../../fakeUser"
import { theme } from '../../theme'

import useAuth from '../../utils/useAuth'

const PasswordVisibleButton = ({isVisible, onClick}) => {
    return (
        <button className='w-5 h-5' onClick={onClick}>
            {isVisible ? 
                <EyeIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                :
                <EyeOffIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
            }
        </button>
    )
}

const Profile = () => {

    const { token } = useAuth()

    let linkTypes = {
        "email": <MailIcon className='w-5 h-5 mr-1 text-emerald-500' />,
        "website": <LinkIcon className='w-5 h-5 mr-1 text-emerald-500' />,
        "phone": <PhoneIcon className='w-5 h-5 mr-1 text-emerald-500' />
    }


    let user = fakeUser

    let links = user.bio.links
    let tags = user.bio.tags

    const [email, setEmail] = useState("")
    const [school, setSchool] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const [password, setPassword] = useState(user.password)
    const [passwordVisible, setPasswordVisible] = useState(false)

    const getInfo = async () => {
        const res = await fetch("/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: token,
                data: {
                    path: "profile"
                }
            })
        })
        const data = await res.json()
        setEmail(data.email)
        setSchool(data.school)
        setFirstName(data.firstName)
        setLastName(data.lastName)
    }

    useEffect(()=>{
        getInfo()
    },[])

    return (
        <div className='bg-white dark:bg-gray-800'>
            {user &&
                <>
                    <div className="h-[150px] w-full" style={{backgroundImage: `url(${user.bio.backgroundImage})`, backgroundSize: "100%", backgroundRepeat: "none"}}>
                    </div>
                    <div className='px-4'>

                        <div className='-mt-20'>
                            <div className='p-1 z-0 inline-flex items-center justify-center flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-tr from-emerald-400 to-indigo-500 drop-shadow-xl'>
                                <img src={user.profilePicture} className='w-full h-full rounded-full object-cover' />
                            </div>
                            {/* 
                            <button
                                className='w-6 h-6 p-1 z-10 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in rounded-full inline-flex items-center justify-center flex-shrink-0'
                            >
                                <UploadIcon className='w-5 h-5 text-gray-700' />
                            </button>
                            */}  
                        </div>

                        <button
                            className='px-4 py-1 mt-4 mb-2 text-sm rounded-md font-semibold bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-200 ease-in'
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
                                            {linkTypes[link.type]} {link.title}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center max-w-md flex-wrap space-x-2 w-full my-1 py-1'>
                            {tags.map((badge) => (
                                <>
                                    <Badge>{badge}</Badge>
                                </>
                            ))}
                        </div>

                        <div className='max-w-lg w-full my-4'>
                            <p className='text-gray-500 dark:text-gray-400 font-semibold mr-2'>Bio</p>
                            
                            <p>
                                {user.bio.description}
                            </p>
                        </div>
                        
                        <div className='my-2 max-w-lg w-full'>
                            <p className='text-gray-500 dark:text-gray-400 font-semibold mr-2'>Account Info</p>

                            <div className="my-2">
                                <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                                    Email
                                    <input type="text" id='first-name' className={theme.textfield} value={email} onChange={(e) => setEmail(e.target.value)}  />
                                </span>
                            </div>

                            <div className="my-2">
                                <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                                    First Name
                                    <input type="text" className={theme.textfield} value={firstName} onChange={(e) => setFirstName(e.target.value)}  />
                                </span>
                            </div>

                            <div className='my-2'>
                                <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
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
                </>
            }
        </div>
    )
}

export default Profile