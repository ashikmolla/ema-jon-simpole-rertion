import React from 'react';
import './Products.css'

const Products = (props) => {
    // console.log(props.product);
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='products'>
            <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>
            <p>Price:- ${price}</p>
            <p>Manufacturer:- {seller}</p>
            <p>Rating:- {ratings}Stares</p>
            </div>
            <button className='add-cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Products;