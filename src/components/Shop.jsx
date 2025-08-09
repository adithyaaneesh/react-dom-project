import React from 'react'
import ShopCard from './ShopCard'
import '../styles/Shop.css'
import { productList } from '../data/Shop'
const Shop = () => {

  return (
    <div className='container product-list'>
      <div className="cards">
          {
            productList.map((item,idx) => <ShopCard data={item} key={idx}/>)
          }
      </div>
    </div>
  )
}

export default Shop

