import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { productList } from '../data/Shop';
import { FaSearch,FaTimes} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import '../styles/Search.css'


const Search = () => {
      const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(productList);
  useEffect(() => {
    const filtered = productList.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [query]);
  return (
    <div className='product-main'>
      <div className='input-container'>
        <img src='/images/search.svg' alt="#" className='search-icon'/>
        <input
        className='input-bar'
        type="text"
        placeholder="Search here.."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      </div>
      <hr className='line'/>
      <h2 className='product-heading'>Our Products</h2>
      <div className="cards">
        {filteredItems.map((item, index) => (
          <Link to={`/productview/${item.idx}`} className="product-card-link">
                  <div className='product-card'>
                    <img src={item.image} alt={item.title} />
                    <h3>{item.title}</h3>
                    <span>${item.price}</span>
                  </div>
                </Link>
        ))}
      </div>
    </div>
  );
}
export default Search;

