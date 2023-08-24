import React from 'react'
import Hero from './Hero'

import Navbar from './Top'
import OurStory from './OurStory'
import OurCollection from './OurCollection'
import Hour from './Hour'
import Purpose from './Purpose'
import Gallery from './Gallery'
import Achivement from './Achivement'
import Footer from './Footer'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <OurStory/>
        <OurCollection/>
        <Hour/>
        <Purpose/>
        <Gallery/>
        <Achivement/>
        <Footer/>
        
    </div>
  )
}

export default Home