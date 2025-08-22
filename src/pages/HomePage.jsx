import React from 'react'
import Shop from '../components/Shop'
import About from '../components/About'
import '../styles/Home.css'


const HomePage = () => {
  return (
    <section>
      <div className='banner'>
        {/* <button>SHOP NOW</button> */}
        <img src='/images/set-eco-bags.webp'/>
      </div>
      <About/>
    </section>
  )
}

export default HomePage
