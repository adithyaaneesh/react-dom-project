import React from 'react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import '../styles/Home.css';
const HomePage = () => {
  return (
    <section className="hero-section">
      <img
        src="/images/banner.webp"
        alt="Shop your Bag!!!"
        className="hero-image"
      />
      <div className="hero-content">
        <h1>
          REDEFINING EVERYDAY <br /> ESSENTIALS <br />
        </h1>
        <p>
          Discover timeless tote bags crafted with care, <br />
          built to last, and made to inspire.
        </p>
        <Link to="/shop" className="cta-button">
          SHOP NOW
        </Link>
      </div>
      <About />
    </section>

  );
};
export default HomePage;
