import React from 'react';
import './ReviewItem.css';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const{_id, img, price, name, quantity}=product;
    return (
        <div className='review-Item'>
            <img src={img} alt="" />
            <div className='review-detalis'>
                <p className='product-title'>{name}</p>
                <p>Pricr:- <span className='orange-color'>${price}</span> </p>
                <p>Quantity:- <span className='orange-color'>${quantity}</span> </p>
            </div>
            <button className='review-btn-delet' onClick={()=> handleRemoveFromCart(_id)} >
                <FontAwesomeIcon className='review-btn-delet-icon' icon={faTrashAlt} />
                </button>
            
        </div>
    );
};

export default ReviewItem;