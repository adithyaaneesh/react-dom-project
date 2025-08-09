import { useState } from "react";

export const handleAddToCart = (productToAdd) => {
    const [cartItems, setCartItems] = useState([]);


    const existingItemIndex = cartItems.findIndex(item => item.id === productToAdd.id);

    if (existingItemIndex > -1) {
    
    const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);
    } else {
    
    setCartItems([...cartItems, { ...productToAdd, quantity: 1 }]);
    }

};
    
