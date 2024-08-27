import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { addToDb, getShoppingCart } from '../DataBase/FackData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=  useState([]);
    const[cart,setCart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const  saveCart = [];
     //step1: ger the id of the addedProduct with the loop(for-in)
        for(const id in storedCart){
     //step2:get product from product state by using id with ((find)
     //   it give only a data for the product of so many  )  
        const addedProduct = products.find(product=>product.id === id); 
     // step3:add the quantity:(using condition (if))
    if(addedProduct){
        const quantity = storedCart[id];
         addedProduct.quantity = quantity; 
     //step4:add the addedProduct to the our saved  cart (saveCart) 
    //  it must be stay inside the loop(saveCart.push(addedProduct);) 
        saveCart.push(addedProduct);
    }
     // console.log('addedProduct',addedProduct)
     // step5: set the cart
        setCart(saveCart)
        }
        
    },[products])

    const handlerAddToCart = (product) =>{
        // console.log(product);
        let newCart = [];
        // original-one:
        // const newCart = [... cart , product];
        // if product dose't exists in the cart ,then set quantity = 1.
    //    if exist update quantity by 1:
    const exists = cart.find(pb => pb.id === product. id);
    if(!exists){
          product.quantity = 1;
          newCart =[...cart, product]; 
    }
    else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.find(pb => pb.id === product .id);
        newCart = [...remaining,exists];
    }
        setCart(newCart);
        addToDb(product.id); 
    }
    return (
        <div className='shope-container'>
            <div className="product-container">
                {/* <h2>product-UpComing:{products.length}</h2> */}
                {/* using-map */}
                {
                    products.map(product =><Product
                    key={product.id}
                    product = {product}
                    handlerAddToCart= {handlerAddToCart }
                    ></Product>)
                }
            </div>
            {/* order-summary-bar */} 
            <div className='cart-container'>
               <Cart cart ={cart}></Cart>              
            </div>
        </div>
    );
};

export default Shop;