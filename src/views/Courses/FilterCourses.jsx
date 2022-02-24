import { SearchIcon } from '@heroicons/react/solid'
import React, {useState} from 'react'
import { motion } from 'framer-motion'
import Accordion from "../../components/Accordion"

const FilterCourses = ({filterCourses}) => {

    const [search, setSearch] = useState('')

    const searchItems = (query) => {
        setSearch(query)
        filterCourses(query)
    }

    return (
        <motion.div
            initial={{y: 10, opacity: 0, scale: 0.8}}
            animate={{y: 0, opacity: 1, scale: 1}}
            transition={{duration: 0.4}}
            className='bg-white dark:bg-gray-800 rounded-lg p-6 hidden md:block md:max-w-xs md:w-full max-h-fit h-full'
        >
            
            <label className="relative text-gray-400 focus-within:text-gray-700 dark:focus-within:text-gray-200 block transition-duration-200 ease-in">
                <SearchIcon className='w-5 h-5 pointer-events-none absolute top-1/2 transform -translate-y-1/2 left-2' fill='currentColor' />
                <input 
                    type="text" 
                    className='
                        rounded-md 
                        transition ease-in duration-200 
                        border-transparent 
                        flex-1 
                        appearance-none 
                        border 
                        border-gray-300 dark:border-gray-600
                        w-full 
                        block 
                        pr-2
                        py-2
                        pl-8 
                        bg-transparent 
                        placeholder-gray-400 
                        focus:outline-none 
                        focus:ring-1 
                        focus:ring-gray-900 dark:focus:ring-gray-100
                        focus:border-transparent
                        bg-gray-100 dark:bg-gray-700
                        mb-4
                        text-sm
                        text-gray-900 dark:text-gray-100                            
                    '
                    value={search}
                    onChange={(e) => searchItems(e.target.value)}
                    placeholder='Search Courses'
                />
            </label>

            <div className="flex justify-between items-center mb-2">
                <p className='font-semibold text-md'>Filter</p>
                <button className='bg-gray-100 dark:bg-gray-700 rounded-md font-semibold px-2 py-1 text-sm transition duration-200 ease-in hover:bg-gray-200 dark:hover:bg-gray-700'>
                    Reset Filters
                </button>
            </div>
            
            <Accordion title='Subjects'>
                <div>
                    <p>Subjects</p>
                </div>
            </Accordion>
            <Accordion title='Rating'>
                <div>
                    <p>Rating</p>
                </div>
            </Accordion>
        </motion.div>
    )
}

export default FilterCourses
