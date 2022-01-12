import React, {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/solid'

const Alert = ({variant='success', duration, open, children}) => {

    const [alert, setAlert] = useState(open)

    let variants = {
        'danger': 'max-w-lg w-full border-l-4 border-l-red-500 bg-red-100 text-red-500 p-4 flex items-center bottom-0 absolute mx-auto my-4 space-x-2',
        'success': 'max-w-lg w-full border-l-4 border-l-green-500 bg-green-100 text-green-500 p-4 flex items-center bottom-0 absolute mx-auto my-4 space-x-2',
    }

    let icons = {
        'danger': <ExclamationCircleIcon className='w-5 h-5' />,
        'success': <CheckCircleIcon className='w-5 h-5' />
    }

    useEffect(() => {
        if(alert) {
            setTimeout(() => {
                setAlert(false)
            }, duration)
        }
    })

    return (
        <div className='max-w-lg mx-auto justify-center'>
            <AnimatePresence>
                {alert &&
                    <motion.div
                        key='alert'
                        className={variants[variant]}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.2}}
                        exit={{opacity: 0, y: 10}}
                    >
                        {icons[variant]}
                        <div>
                            {children}
                        </div>
                    </motion.div>
                }
                
            </AnimatePresence>
        </div>
    )
}

export default Alert
