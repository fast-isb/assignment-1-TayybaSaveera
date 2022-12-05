import React from 'react'
import Navbar from "../component/navbar"
import Slider from "../component/slider"
import Categories from '../component/categories'
import Products from '../component/products'
import Newsletter from '../component/newsletter'
const Home= ()=> {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
    </div>
  )
}
export default Home
