import React from 'react'
import '../Style/HomePage.css'
import Header from '../Components/Header'
import Footer from '../Components/footer'
import Banner from '../Components/Banner'

const HomePage = () => {
  return (
    <div className='homeWrapper'>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default HomePage