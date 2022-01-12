import React from 'react'
import Accordion from "../../components/Accordion"

const FilterCourses = () => {


    return (
        <div className='bg-white rounded-lg p-6 hidden md:block md:max-w-xs md:w-full max-h-96'>
            <p className='font-bold text-lg mb-4'>Filter</p>
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
        </div>
    )
}

export default FilterCourses
