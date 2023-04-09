import React, { useEffect, useState } from 'react';
import './Shop.css'
import Products from '../Product/Products';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart]=useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddYoCart = (product) =>{
        const newCart =[...cart, product]
        setCart(newCart)
     }

    return (
        <div className='shop-contaneir'>
            <div className='products-container'>
                {
                    products.map(product => <Products
                        key={product.id} product={product}
                        handleAddYoCart={handleAddYoCart}

                    ></Products>)
                }

            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Item {cart.length}</p>

            </div>


        </div>
    );
};

export default Shop;