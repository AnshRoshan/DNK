import React, { useState } from 'react';
import { Product } from '../Data/Product';
const Cart = () => {
    const [cartItems, setCartItems] = useState(Product);

    const handleRemoveItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul className="cart-list">
                    {cartItems.map(item => (
                        <li key={item.id} className="cart-item">
                            <div className="cart-item-details">
                                <span>{item.name}</span>
                                <span>${item.price.toFixed(2)}</span>
                                <span>Quantity: {item.quantity}</span>
                            </div>
                            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="cart-total">
                <span>Total: ${calculateTotal()}</span>
            </div>
            <div className="checkout-btn-container">
                <button>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cart;

