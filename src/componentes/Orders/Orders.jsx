import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Orders.css'
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const saveCart = useLoaderData();
    const [cart, setCart]=useState(saveCart)
    const handleRemoveFromCart = (id) => {
        // console.log(id)
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id)
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;