import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';
import {removeFromDb } from '../DataBase/FackData'
import { useState } from 'react';

const Order = () => {
    const cart2 = useLoaderData();
    const[cart, setCart] = useState(cart2)
    const handelRemoveFromCart = (id)=>{
      console.log(id);
      const remaining = cart.filter(product => product.id!==id)
      setCart(remaining);
      removeFromDb(id)
    }
    console.log(cart);
    return (
        <div className='shope-container mr-40'>
            <div className='review-container'>
              {
                cart.map(product=><ReviewItem
                 key = {product.id}
                 product = {product}
                 handelRemoveFromCart = {handelRemoveFromCart}
                ></ReviewItem>)
              }
            </div>
            <div className='cart2-container'>
                <Cart cart = {cart}></Cart>
            </div>
         
            
        </div>
    );
};

export default Order;