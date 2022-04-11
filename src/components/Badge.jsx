import React from 'react'

const Badge = ({text='text-gray-500 dark:text-gray-400', bg='bg-gray-100 dark:bg-gray-700', children, style}) => {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div 
            className={
                classNames(
                    text, bg, 'font-semibold text-xs p-1 rounded-md w-fit'
                )
            }
            style={style}
        >
            {children}
        </div>
    )
}

export default Badge
