import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Drinks from '../components/Drinks'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import '../App.css'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutUs/>
        <Menu/>
        <Drinks/>
        <Footer/>
    </div>
  )
}

export default Home