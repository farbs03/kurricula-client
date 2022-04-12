import React, { useState, useEffect } from 'react'

import { CheckCircleIcon, EyeIcon, EyeOffIcon, XCircleIcon } from '@heroicons/react/solid'
import Button from '../../components/Button'
import {theme} from "../../theme"
import Alert from '../../components/Alert'
import { AcademicCapIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
import PropTypes from  'prop-types'

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

async function loginUser(credentials) {
    return fetch("/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    }).then((res) => res.json())
}

const Login = ({ setToken }) => {

    const [userInfo, setUserInfo] = useState('')

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const [alert, setAlert] = useState(false)
    const [alertType, setAlertType] = useState('success')

    const [loading, setLoading] = useState(false)

    const [rememberInfo, setRememberInfo] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userInfo,
            password
        });
        setToken(token);
        if(window.location.pathname == '/login')
            window.location.pathname = '/'
    }

    return (
        <div className="h-screen flex p-4 flex-col items-center justify-center flex-shrink-0 w-full bg-gradient-to-tr from-emerald-500 to-cyan-500 blur-">
            <div className='max-w-lg w-full mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 mt-4 drop-shadow-2xl'>
                
                <div className='max-w-sm w-full mx-auto'>
                    <p className='font-bold text-2xl text-center mb-4'>Sign In</p>
                    <form onSubmit={handleSubmit}>
                        <div className='my-2'>
                            <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                                Email or username
                                <input type="text" id='email-or-username' className={theme.textfield} value={userInfo} onChange={(e) => setUserInfo(e.target.value)}  />
                            </span>
                        </div>

                        <div className='mt-2'>
                            <span className='font-semibold text-gray-500 dark:text-gray-400 text-sm'>
                                Password
                                <div className='flex items-center relative'>
                                    <input
                                        style={{width: "100%", zIndex: '0', paddingRight: "30px"}}
                                        type={passwordVisible ? 'text' : 'password'} 
                                        className={theme.textfield} 
                                        value={password} 
                                        onChange={(e) => setPassword(e.target.value)} 
                                    />
                                    {/*<PasswordVisibleButton isVisible={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)} />*/}
                                </div>
                            </span>
                        </div>

                        <div className='mt-4 flex align-center'>
                            <label htmlFor='remember' className='flex align-center text-gray-500 dark:text-gray-400 text-sm'>
                                <input 
                                    id='remember'
                                    type="checkbox" 
                                    className={theme.checkbox}
                                    checked={rememberInfo}
                                    onChange={(e) => setRememberInfo(!rememberInfo)}
                                    style={{marginRight: "4px"}}
                                />
                                Remember me
                            </label>
                        </div>
                    </form>
                    
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
                            Sign In
                        </Button>
                    }
                    
                    <p className='my-2 text-gray-500 dark:text-gray-400 text-center text-sm'>Need an account? <NavLink to='/register' className='text-emerald-500'>Sign up today</NavLink> </p>

                </div>
                {alert &&
                    <Alert duration={1200} open={true} variant={alertType}>
                        <p className='font-semibold'>
                            {alertType === 'success' ? 
                                "Successfully logged in!"
                                :
                                "Error logging in!"
                            }
                        </p>
                    </Alert>
                }
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login
