import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Product/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faArrowCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    useEffect(() => {
        const storedCart = getShoppingCart();
        // console.log(storedCart)
        const saveCart = [];

        // stap 1: get id
        for (const id in storedCart) {
            // stap 2: get the product by using id 
            const addedProduct = products.find(product => product._id === id);
            // stap  3: get  quantity of the products  
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // stap 4: add the added product to save
                saveCart.push(addedProduct)

            }
            // step 5: set the cart
            setCart(saveCart);
            // console.log(" addedproduct" , addedProduct)

        }
    }, [products])

    const handleAddYoCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product._id)
    }
    const handelClearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-contaneir'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product._id} product={product}
                        handleAddYoCart={handleAddYoCart}

                    ></Products>)
                }

            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handelClearCart={handelClearCart}
                >
                    <Link to="/orders">
                        <button className='btn-procedo'> 
                        <span>Review Order</span>
                        <FontAwesomeIcon  className='clear-cart-btn-icon' icon={faArrowRight} /></button>  
                    </Link>
                </Cart>

            </div>


        </div>
    );
};

export default Shop;