import React from 'react'
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'

const Home = () => {
  return (
    <div className='product'>
      <Slider/>
      <FeaturedProducts type="Нови"/>
      <FeaturedProducts type="Най-популярни"/>
    </div>
  )
}

export default Home