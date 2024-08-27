import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Order = () => {
    const cart = useLoaderData();
    console.log(cart);
    return (
        <div className='shope-container'>
            <div className='product-container'>
              <h1 className=''>This is Order:{cart.length}</h1>
            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>
            </div>
         
            
        </div>
    );
};

export default Order;