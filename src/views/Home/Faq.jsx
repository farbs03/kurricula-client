import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Disclosure, Transition } from '@headlessui/react'

const Faq = () => {

    const questions = [
        {
            question: "What about 'Rate My Professor'?",
            answer: "Idk, try the website out for yourself"
        },
        {
            question: "What about 'Rate My Professor'?",
            answer: "Idk, try the website out for yourself"
        },
        {
            question: "What about 'Rate My Professor'?",
            answer: "Idk, try the website out for yourself"
        },
        {
            question: "What about 'Rate My Professor'?",
            answer: "Idk, try the website out for yourself"
        },
    ]

    return (
        <div className='my-12'>
            <p className='font-bold text-3xl text-center mb-8'>FAQ</p>
            <div className='max-w-xl w-full mx-auto divide-y divide-gray-200 dark:divide-gray-800'>
                {questions.map((question, idx) => (
                    <Disclosure key={idx}>
                        {({ open }) => (
                            <div className='p-4'>
                                <Disclosure.Button className={`flex justify-between w-full py-2 font-medium text-left transition duration-200 ease-in text-gray-900 dark:text-gray-100 bg-transparent hover:text-emerald-500 dark:hover:text-emerald-500 focus:outline-none`}>
                                    <p className={`${open ? 'text-emerald-500' : ''}`}>{question.question}</p>
                                    <ChevronUpIcon
                                        className={`${
                                        open ? 'transform rotate-180 text-emerald-500' : 'text-gray-500 dark:text-gray-400 '
                                        } w-5 h-5 transition-all duration-200 ease-in`}
                                    />
                                </Disclosure.Button>
                    
                                <Transition
                                    enter="transition duration-200 ease-in"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-200 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Disclosure.Panel className="text-gray-500 mt-2 dark:text-gray-400">{question.answer}</Disclosure.Panel>
                                </Transition>
                            </div>
                        )}
                    </Disclosure>
                ))}
            </div>
        </div>
    )
}

export default Faq