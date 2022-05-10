import React, { useState } from 'react'

const IconButton = ({children}) => {
    return (
        <button
            className='w-6 h-6 p-1 bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition duration-200 ease-in rounded-full inline-flex items-center justify-center flex-shrink-0'
        >
            {children}
        </button>
    )
}

export default IconButton