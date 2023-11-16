import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SelectedCategory from '../components/SelectedCategory'
import Footer from '../components/Footer'


const CategoryPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <SelectedCategory/>
        <Footer/>
    </div>
  )
}

export default CategoryPage