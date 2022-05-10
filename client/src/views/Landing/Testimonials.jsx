import React, { useState } from 'react'

const Testimonials = () => {
    return (
        <div className='my-40 max-w-2xl w-full mx-auto font-semibold'>
            
            <p className='text-center text-xl'>
                <span className='bg-gradient-to-tr mr-1 from-emerald-400 to-cyan-400 text-transparent bg-clip-text font-extrabold'>"</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi a maiores consectetur alias ab maxime culpa voluptatibus quaerat, obcaecati, veniam cupiditate ex minima explicabo, consequatur omnis vero incidunt perspiciatis eligendi.
                <span className='bg-gradient-to-tr ml-1 from-emerald-400 to-cyan-400 text-transparent bg-clip-text font-extrabold'>"</span>
            </p>

            <div className='mt-4 flex gap-2 justify-center items-center'>

                <div className='w-12 h-12 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 shadow-lg shadow-cyan-400/20 p-1'>
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800"></div>
                </div>

                <p>Coby Newgate</p>
                <p><span className="text-cyan-400">/</span> <span className='text-gray-500 dark:text-gray-400'>Student</span></p>
            </div>
        </div>
    )
}

export default Testimonials