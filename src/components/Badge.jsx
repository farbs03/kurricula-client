import React from 'react'

const Badge = ({color='red', children}) => {

    let bg = `bg-${color}-100`
    let text = `text-${color}-500`

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div 
            className={
                classNames(
                    bg, text, 'font-semibold text-xs p-1 rounded-md w-fit'
                )
            }
        >
            {children}
        </div>
    )
}

export default Badge
