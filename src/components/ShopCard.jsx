import React from 'react';
import '../styles/ShopCard.css'
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ data }) => {
    const navigate = useNavigate();

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = cart.find(item => item.id === data.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...data, quantity: 1 });
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    return (
        <div className="product-card">
            {data.status && (
                <div className={`product-tag ${data.status.toLowerCase().replace(' ', '-')}`}>
                    {data.status}
                </div>
            )}
            <img src={data.image} alt={data.title} className="product-image" />
            <p className="product-title">{data.title}</p>
            <div className="product-price">
                {data.salePrice ? (
                    <>
                        <span className="original-price">${data.price.toFixed(2)}</span>
                        <span className="sale-price">${data.salePrice.toFixed(2)}</span>
                    </>
                ) : (
                    <span className="regular-price">${data.price.toFixed(2)}</span>
                )}
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ShopCard;