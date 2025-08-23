import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/Header.css';
const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem('access_token');
      setIsLoggedIn(!!token);
    };
    const updateCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    };
    checkLoginStatus();
    updateCount();
    window.addEventListener("cartUpdated", updateCount);
    return () => window.removeEventListener("cartUpdated", updateCount);
  }, []);
  return (
    <header>
      <div className="container">
        <nav className="menu-items">
          <div className="brand">
            <h3>Tote</h3>
            <p>Frunky Printed Bags</p>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/gift">Gift Card</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          {/* Icons */}
          <div className="header-icons">
            <div className="search-box">
              <Link to="/search" className="user-icon">
                <img src='/images/search.svg' alt="Search" />
              </Link>
            </div>
            {isLoggedIn ? (
              <Link to="/user" className="user-icon">
                <img src="/images/userpass.svg" alt="User Account" />
              </Link>
            ) : (
              <Link to="/login" className="user-icon">
                <img src="/images/usercross.svg" alt="Login" />
              </Link>
            )}
            <Link to="/cart" className="cart-icon">
              <img src="/images/shopping-bag.svg" alt="Shopping Cart" />
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;


















// import React from 'react'
// import '../styles/Header.css'
// import { Link } from "react-router-dom"
// import { useState, useEffect } from 'react';



// const Header = () => {
//     const [cartCount, setCartCount] = useState(0);
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const checkLoginStatus = () => {
//             const token = localStorage.getItem('access_token');
//             setIsLoggedIn(!!token)
//         };
//         checkLoginStatus();
//         const updateCount = () => {
//             const cart = JSON.parse(localStorage.getItem("cart")) || [];
//             const total = cart.reduce((sum, item) => sum + item.quantity, 0);
//             setCartCount(total);
//         };
//         updateCount();

//         window.addEventListener("cartUpdated", updateCount);
//         return () => window.removeEventListener("cartUpdated", updateCount);
//     }, []);
//   return (
//     <header>
//         <div className='container'>
//             <nav className='menu-items'>
//                 <div>
//                     <h3>Tote</h3>
//                     <p>Frunky Printed Bags</p>
//                 </div>
//                 <div>
//                     <ul >
//                        <div>
//                         <li><Link to={'/'}>Home</Link></li>
//                         <li><Link to={'/shop'}>Shop</Link></li>
//                         <li><Link to={'/about'}>About</Link></li>
//                         <li><Link to={'/faq'}>FAQ</Link></li>
//                         <li><Link to={'/gift'}>Gift Card</Link></li>
//                         <li><Link to={'/contact'}>Contact</Link></li>
//                        </div>

//                             <div className="header-icons">
//                                 <div className="search-box">
//                                     <Link to="/search" className="user-icon"><img src='/images/search.svg' alt="#" />
//                                     </Link>
                                    

//                                 </div>
//                                 <div>
//                                     {isLoggedIn ? (  
//                                     <li>
//                                         <Link to="/user" className="user-icon"><img src="/images/userpass.svg" alt="#" />
//                                         </Link>
//                                     </li>
//                                 ):(
//                                     <li>
//                                         <Link to="/login" className="user-icon"><img src="/images/usercross.svg" alt="#" />
                                        
//                                         </Link>
//                                     </li>
//                                 )}                  
//                                 <Link to="/cart" className="cart-icon"><img src="/images/shopping-bag.svg" alt="#" />
//                                     {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
//                                 </Link>
//                                 </div>
//                             </div>

//                     </ul>
//                 </div>
//             </nav>  
//         </div>
//     </header>
//   )
// }

// export default Header