import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Product/Products';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10); // pagination
    const [cart, setCart] = useState([]);
    // pagination 
    const { totalProducts } = useLoaderData();
    // const itemsPerPage=10; // todo: make it dynamic
    const totalPage = Math.ceil(totalProducts / itemsPerPage);
    const pageNumbers = [...Array(totalPage).keys()];
    const options = [5, 10, 20]


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
    const option = [5, 10, 20]
    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0)
    }
    return (
        <>
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
                                <FontAwesomeIcon className='clear-cart-btn-icon' icon={faArrowRight} /></button>
                        </Link>
                    </Cart>

                </div>


            </div>
            {/* pagination */}
            <div className='pagination'>
                <p> Current Page <spen className='text-color'>{currentPage}</spen> Item Per Page <spen className='text-color'>{itemsPerPage}</spen></p>
                {
                    pageNumbers.map(number => <button
                        key={number}
                        className={currentPage === number ? 'selected' : ''}
                        onClick={() => setCurrentPage(number)}
                    >{number}</button>)
                }
               <select value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Shop;