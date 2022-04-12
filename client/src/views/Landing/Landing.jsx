import React from 'react'
import Features from './Features'
import Faq from './Faq'
import Footer from './Footer'
import Hero from './Hero'
import Testimonials from './Testimonials'

const Landing = () => {

    return (
        <div className='max-w-7xl w-full mx-auto p-4'>
            <Hero />
            <Features />
            <Testimonials />
            <Faq />
            <Footer />
        </div>
    )
}

export default Landing
