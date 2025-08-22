import React, { useState } from 'react'
import ShopCard from './ShopCard'
import '../styles/Shop.css'
import { productList } from '../data/Shop'
import { Slider, Typography } from "@mui/material";

const options = [
    { value: 'all', label: 'All' },
    { value: 'topSeller', label: 'Top Seller' },
    { value: 'sale', label: 'Sale' }, 
    { value: 'priceLowHigh', label: 'Price: Low to High' },
    { value: 'priceHighLow', label: 'Price: High to Low' },
];



const Shop = () => {

  const [searchProduct, setSearchProduct] = useState("");
  const [priceRange, setPriceRange] = useState([100 , 500]);

  const [sortType, setSortType] = useState('all');
  

  let filteredItems = productList.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchProduct.toLowerCase());
    const productPrice = item.salePrice ? item.salePrice : item.price;
    const matchesPrice =
      productPrice >= priceRange[0] && productPrice <= priceRange[1];
    let matchesSort = true;
    if (sortType === 'topSeller') matchesSort = item.topSeller === true;
    if (sortType === 'sale') matchesSort = item.sale === true;
    
    
    return matchesSearch && matchesPrice && matchesSort;
    
  });
  if (sortType === "priceLowHigh") {
    filteredItems = [...filteredItems].sort((a, b) => {
      const priceA = a.salePrice ? a.salePrice : a.price;
      const priceB = b.salePrice ? b.salePrice : b.price;
      return priceA - priceB;
    });
  } else if (sortType === "priceHighLow") {
    filteredItems = [...filteredItems].sort((a, b) => {
      const priceA = a.salePrice ? a.salePrice : a.price;
      const priceB = b.salePrice ? b.salePrice : b.price;
      return priceB - priceA;
    });
  }


  return (
      <div className='container'>
        <div className='product-main'>
          <div className='input-container'>
            <img src='/images/search.svg' alt="#" className='search-icon'/>
            <input
              className='input-bar'
              type="text"
              placeholder="Search products here..."
              value={searchProduct}
              onChange={(e) => setSearchProduct(e.target.value)}
            />
          </div>
          <div className="sort-options">
            <p>Sort by :</p>
            <div className="filter-option">
              <select value={sortType} onChange={(e) => setSortType(e.target.value)}>
                {options.map((item, idx) => (
                  <option value={item.value} key={idx}>{item.label}</option>
                ))}
              </select>
            </div>  
        </div>
          <div className="slider-container">
            <Typography variant="subtitle1" gutterBottom>
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </Typography>
            <Slider
              value={priceRange}
              onChange={(e, newValue) => setPriceRange(newValue)}
              valueLabelDisplay="auto"
              min={100}
              max={500}
              className="price-slider"
            />
          </div>
          
            <div className="cards">
              {filteredItems.map((item, idx) => (
                <ShopCard data={item} key={idx} />
              ))}
            </div>
        </div>    
      </div>
  )
}

export default Shop