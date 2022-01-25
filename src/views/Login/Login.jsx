import React, { useState, useEffect } from 'react'

import { CheckCircleIcon, EyeIcon, EyeOffIcon, XCircleIcon } from '@heroicons/react/solid'
import Button from '../../components/Button'
import {theme} from "../../theme"
import Alert from '../../components/Alert'
import { AcademicCapIcon } from '@heroicons/react/solid'

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


const Login = () => {

    const [userInfo, setUserInfo] = useState('')

    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const [alert, setAlert] = useState(false)
    const [alertType, setAlertType] = useState('success')

    const [loading, setLoading] = useState(false)

    const [rememberInfo, setRememberInfo] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        
        let storedUser = JSON.parse(localStorage.getItem('userInfo'))
        let valid = (storedUser.email === userInfo || storedUser.userName === userInfo) && storedUser.password === password

        if(valid) {
            setAlert(true)
            setLoading(true)
            setAlertType('success')

            console.log('hi')
        }
        else {
            setAlert(true)
            setAlertType("danger")
            console.log('oh no')
        }
        
        setTimeout(() => {
            if(valid) {
                window.location.pathname = '/'
                return
            }
            setAlert(false)
        }, 1400)
    }

    return (
        <div className='max-w-lg w-full mx-auto bg-white rounded-md p-6 mt-4'>
            
            <div className='block w-10 h-10 mx-auto mb-2'>
                <AcademicCapIcon className='text-emerald-500 w-10 h-10' />
            </div>

            <p className='font-bold text-xl text-center mb-4'>Sign In</p>
            <div>

                <div className='my-2'>
                    <span className='font-semibold text-gray-600 text-sm'>
                        Email or username
                        <input type="text" id='email-or-username' className={theme.textfield} value={userInfo} onChange={(e) => setUserInfo(e.target.value)}  />
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

                <div className='mt-4 flex align-center'>
                    <label htmlFor='remember' className='flex align-center text-gray-500 text-sm'>
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
                
                {loading ?
                    <button disabled className='w-full mt-4 flex justify-center items-center text-center disabled text-white font-semibold bg-emerald-700 rounded-md px-4 py-2'>
                        <svg 
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
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
                    <Button onClick={onSubmit} variant='primary' style={{width: "100%", marginTop: "16px"}}>
                        Sign In
                    </Button>
                }
                
                <p className='my-2 text-gray-500 text-center text-sm'>Need an account? <a href='/register' className='text-emerald-500'>Sign up today</a> </p>

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
    )
}

export default Login
