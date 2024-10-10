import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className='product'>
      <Slider/>
      <FeaturedProducts type="Нови"/>
      <Categories/>
      <FeaturedProducts type="Най-популярни"/>
    </div>
  )
}

export default Home