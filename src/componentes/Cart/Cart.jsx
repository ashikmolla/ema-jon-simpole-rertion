import React from 'react';
import './Cart.css'
import Products from '../Product/Products';

const Cart = (props) => {
    // const cart =props.cart
    const {cart}=props

    let totalPrice= 0;
    let totalShipping= 0;
    for(const product of  cart){
        totalPrice= totalPrice+product.price;
        totalShipping =totalShipping+product.shipping
        // console.log(product)
    }
    let tax=totalPrice*7/100;
    
    let grenTotal = totalPrice + totalShipping + tax;
    
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
                <p>Selected Item {cart.length}</p>
                <p>Total Price: ${totalPrice}</p>
                <p>Total Shipping Charge: ${totalShipping} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grenTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;