import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css'
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart]=useState(saveCart)
    const handleRemoveFromCart = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
    }


    const handelClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    console.log(saveCart);
    return (
        <div className='shop-contaneir'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}
                    ></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart 
                cart={cart}
                handelClearCart={handelClearCart}
                
                >
                      <Link to="/checkout">
                        <button className='btn-procedo'> <span>Proceed Checkout</span><FontAwesomeIcon  className='clear-cart-btn-icon' icon={faCreditCard} /> </button>  
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;