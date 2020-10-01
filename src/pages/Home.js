import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Slideshow />
            <Content1 />
            <Content2 />
            <Content3 />
            <Footer />
        </>
    )
}

export default Home
