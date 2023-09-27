import React, { useState } from "react"
import { Orders } from "../Data/Order"
import Layout from "../components/Layout/Layout"
import { Link } from "react-router-dom"
const Cart = () => {
  const [cartItems, setCartItems] = useState(Orders)

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId)
    setCartItems(updatedCart)
  }

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
  }

  return (
    <Layout>
      <div className='bg-gray-100 p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className='space-y-4'>
            {cartItems.map((item, index) => (
              <li
                key={item.id}
                className='bg-white p-4 rounded-lg shadow-md flex items-center justify-between'
              >
                <div className='cart-item-details'>
                  <span className='text-lg font-semibold mr-10'>{index + 1}</span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className='w-20 h-20 object-contain mr-4 inline-block'
                  />
                  <span className='text-lg font-semibold mr-10'>{item.name}</span>
                  <span className='text-gray-600 mr-4'>${item.price.toFixed(2)}</span>
                  <span className='text-gray-600'>Quantity: {item.quantity}</span>
                </div>
                <button
                  className='bg-red-500 text-white px-3 py-1 rounded-md'
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className='mt-4 flex justify-between'>
          <span className='text-xl font-semibold'>Total: ${calculateTotal()}</span>
          
          <Link to="/checkout">
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
              Proceed to Checkout
            </button>
          </Link>
        </div>
        {/* <div className='mt-4'>
        </div> */}
      </div>
    </Layout>
  )
}

export default Cart
