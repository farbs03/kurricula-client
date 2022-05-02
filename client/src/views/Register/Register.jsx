import React, { useState } from 'react'

import { CheckCircleIcon, EyeIcon, EyeOffIcon, XCircleIcon } from '@heroicons/react/solid'
import Button from '../../components/Button'
import {theme} from "../../theme"
import { NavLink } from 'react-router-dom'
import validate from '../../utils/fieldValidator'
import LANG_DATA from "../../utils/lang/en_us.json"
let lang = LANG_DATA.fieldValidation

const PasswordVisibleButton = ({isVisible, onClick}) => {
    return (
        <button className='w-5 h-5 absolute right-2 z-10' onClick={onClick}>
            {isVisible ? 
                <EyeIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
                :
                <EyeOffIcon className="w-5 h-5 text-gray-700 dark:text-gray-400" />
            }
        </button>
    )
}

async function registerUser(credentials) {
    return fetch("/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    }).then((res) => res.json())
}

const Register = ({ setToken }) => {

    const [email, setEmail] = useState('')
    const [school, setSchool] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')

    const [validation, setValidation] = useState({
        email: {valid: false, message: lang.email.missing},
        school: {valid: false, message: lang.school.missing},
        firstName: {valid: false, message: lang.firstName.missing},
        lastName: {valid: false, message: lang.lastName.missing},
        password: {valid: false, message: lang.password.missing}
    })

    /*
        Input Field Outlines
        Defaults true=valid until first submit attempt
    */
    const [visualValidation, setVisualValidation] = useState({
        email: true,
        school: true,
        firstName: true,
        lastName: true,
        password: true
    })

    const setField = (field, data) => {
        validation[field] = validate(field, data)
        setValidation(validation)
        switch(field){
            case "email":
                setEmail(data)
                break
            case "school":
                setSchool(data)
                break
            case "firstName":
                setFirstName(data)
                break
            case "lastName":
                setLastName(data)
                break
            case "password":
                setPassword(data)
        }
    }

    const allVisualValid = (data) => {
        for (const [key, value] of Object.entries(data)) {
            if(!data[key])
                return false
        }
        return true
    }

    const [passwordVisible, setPasswordVisible] = useState(false)

    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        let valueInvalid = false
        for (const [key, value] of Object.entries(validation)) {
            if(!value.valid){
                valueInvalid = true
                visualValidation[key] = false
            } else {
                visualValidation[key] = true
            }
        }
        setVisualValidation({...visualValidation})
        if(valueInvalid)
            return;
        const data = await registerUser({
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            school: school
        });
        setToken(data);
        if(window.location.pathname === '/register')
            window.location.pathname = '/'
    }
    return (
        <div className="h-screen flex p-4 flex-col items-center justify-center flex-shrink-0 w-full bg-gradient-to-tr from-emerald-500 to-cyan-500 blur-">
            <div className='max-w-lg w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 mt-4 drop-shadow-2xl'>
                
                <div className='max-w-sm w-full mx-auto'>

                    <p className='font-bold text-2xl text-center mb-4'>Create Account</p>

                    <div className="my-2">
                        <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                            Email
                            <input type="text" id='first-name' className={theme.textfield + ((visualValidation.email || validation.email.valid)?"":theme.errorTextField)} maxLength="320" value={email} onChange={(e) => setField('email',e.target.value)}  />
                        </span>
                    </div>

                    <div className="my-2">
                        <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                            First Name
                            <input type="text" className={theme.textfield + ((visualValidation.firstName || validation.firstName.valid)?"":theme.errorTextField)} maxLength="50" value={firstName} onChange={(e) => setField('firstName',e.target.value)}  />
                        </span>
                    </div>

                    <div className="my-2">
                        <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                            Last Name
                            <input type="text" className={theme.textfield + ((visualValidation.lastName || validation.lastName.valid)?"":theme.errorTextField)} maxLength="50" value={lastName} onChange={(e) => setField('lastName',e.target.value)}  />
                        </span>
                    </div>

                    <div className="my-2">
                        <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                            School
                            <input type="text" className={theme.textfield + ((visualValidation.school || validation.school.valid)?"":theme.errorTextField)} maxLength="50" value={school} onChange={(e) => setField('school',e.target.value)}  />
                        </span>
                    </div>

                    <div className='mt-2 mb-2'>
                        <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                            Password
                            <div className='flex items-center relative'>
                                <input
                                    style={{width: "100%", zIndex: '0', paddingRight: "30px"}}
                                    type={passwordVisible ? 'text' : 'password'}
                                    maxLength="100"
                                    className={theme.textfield + ((visualValidation.password || validation.password.valid)?"":theme.errorTextField)}
                                    value={password} 
                                    onChange={(e) => setField('password',e.target.value)} 
                                />
                                {/*<PasswordVisibleButton isVisible={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)} />*/}
                            </div>
                        </span>
                    </div>
                    

                    <div className={'grid grid-cols-1 md:grid-cols-3 gap-2 mt-4 md:mt-6 '+(allVisualValid(visualValidation)?'hidden':'block')}>
                        <div className={visualValidation.email?'hidden':'block'}>
                            <div className='flex space-x-1 my-1'>
                                {validation.email.valid ? 
                                    <CheckCircleIcon className='w-5 h-5 flex-shrink-0 text-green-500' />
                                    :
                                    <XCircleIcon className='w-5 h-5 flex-shrink-0 text-red-500' />
                                }
                                <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>{ validation.email.message }</p>
                            </div>
                            
                        </div>
                        <div className={visualValidation.password?"hidden":"block"}>
                            <div className='flex space-x-1 my-1'>
                                {validation.password.valid ? 
                                    <CheckCircleIcon className='w-5 h-5 flex-shrink-0 text-green-500' />
                                    :
                                    <XCircleIcon className='w-5 h-5 flex-shrink-0 text-red-500' />
                                }
                                <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>{ validation.password.message }</p>
                            </div>
                        </div>
                        <div className={visualValidation.firstName?"hidden":"block"}>
                            <div className='flex space-x-1 my-1'>
                                {validation.firstName.valid ? 
                                    <CheckCircleIcon className='w-5 h-5 flex-shrink-0 text-green-500' />
                                    :
                                    <XCircleIcon className='w-5 h-5 flex-shrink-0 text-red-500' />
                                }
                                <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>{ validation.firstName.message }</p>
                            </div>
                        </div>
                        <div className={visualValidation.lastName?"hidden":"block"}>
                            <div className='flex space-x-1 my-1'>
                                {validation.lastName.valid ? 
                                    <CheckCircleIcon className='w-5 h-5 flex-shrink-0 text-green-500' />
                                    :
                                    <XCircleIcon className='w-5 h-5 flex-shrink-0 text-red-500' />
                                }
                                <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>{ validation.lastName.message }</p>
                            </div>
                        </div>
                        <div className={visualValidation.school?"hidden":"block"}>
                            <div className='flex space-x-1 my-1'>
                                {validation.school.valid ? 
                                    <CheckCircleIcon className='w-5 h-5 flex-shrink-0 text-green-500' />
                                    :
                                    <XCircleIcon className='w-5 h-5 flex-shrink-0 text-red-500' />
                                }
                                <p className='text-sm text-gray-500 dark:text-gray-400 font-semibold'>{ validation.school.message }</p>
                            </div>
                        </div>
                    </div>
                    {loading ?
                        <button disabled className='w-full mt-4 flex justify-center items-center text-center disabled text-gray-100 font-semibold bg-emerald-700 rounded-md px-4 py-2'>
                            <svg 
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-100" 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24"
                            >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Loading...
                        </button>
                        :
                        <Button onClick={handleSubmit} variant='primary' style={{width: "100%", marginTop: "16px"}}>
                            Register
                        </Button>
                    }
                    <p className='my-2 text-gray-500 dark:text-gray-400 text-center text-sm'>Already have an account? <NavLink to='/login' className='text-emerald-500'>Sign in</NavLink> </p>
                </div>
            </div>
        </div>
    )
}

export default Register
