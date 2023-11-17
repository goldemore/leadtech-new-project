import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Category from '../components/Category'
import Title from '../components/Title'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import HomeSlide from '../components/HomeSlide'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category/>
        <Title/>
        <Partners/>
        <Footer/>
    </div>
  )
}

export default Home