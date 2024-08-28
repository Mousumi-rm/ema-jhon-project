import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css';

const Order = () => {
    const cart2 = useLoaderData();
    console.log(cart2);
    return (
        <div className='shope-container'>
            <div className='review-container'>
              {
                cart2.map(product=><ReviewItem
                 key = {product.id}
                 product = {product}
                ></ReviewItem>)
              }
            </div>
            <div className='cart-container'>
                <Cart cart = {cart2}></Cart>
            </div>
         
            
        </div>
    );
};

export default Order;