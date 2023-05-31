import { getShoppingCart } from "../utilities/fakedb";

const CartProductsLoader= async()=>{


     // if cart data is in database, you have to use async 
     const storedCart = getShoppingCart();
 const ids=Object.keys(storedCart);

     // const loadedProducts = await fetch(`http://localhost:5000/products?page=0&limit=10000`);
     const loadedProducts = await fetch(`http://localhost:5000/productByIds`,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(ids)
     });
   const  products = await loadedProducts.json();
   console.log('products ', products)
    // console.log(products);

   
    const savedCart = [];
    // console.log(storedCart);
    for(const id in storedCart){
        const addedProduct=products.find(pd => pd._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart
}
export default CartProductsLoader;