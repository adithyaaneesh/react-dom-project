import React from 'react'
import '../styles/Header.css'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';


const Header = () => {
    const [cartCount, setCartCount] = useState(0);


    useEffect(() => {
        const updateCount = () => {
            const cart = JSON.parse(localStorage.getItem("cart")) || [];
            const total = cart.reduce((sum, item) => sum + item.quantity, 0);
            setCartCount(total);
        };
        updateCount();

        window.addEventListener("cartUpdated", updateCount);
        return () => window.removeEventListener("cartUpdated", updateCount);
    }, []);
  return (
    <div className='container'>
        <nav className='menu-items'>
            <div>
                <h3>Tote</h3>
                <p>Frunky Printed Bags</p>
            </div>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/shop'}>Shop</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/gift'}>Gift Card</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <div class="header-icons">
                <div class="search-box">
                <img src='/images/search.svg'/>
                <input type="text" placeholder="Search"/>
                </div>
                <div className='log'>
                    <Link to="/login" className="user-icon"><img src="/images/avatar.svg" alt="#" />
                      Log In   
                    </Link>
                    <Link to="/cart" className="cart-icon"><img src="/images/shopping-bag.svg" alt="#" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>
                
                
            </div>
        </nav>
      
    </div>
  )
}

export default Header


