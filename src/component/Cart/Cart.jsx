import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
// const Cart = ({cart}) => {//option:1
// const {cart} = props;//option:2
// const cart = props.cart;//option:3
let totalPrice = 0;
let totalShipping = 0;
let quantity = 0;
for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
    quantity = quantity + product.quantity;
}
 const totalTax = totalPrice*7/100;
 const grandTotal = totalPrice + totalShipping + totalTax;
    
    return (
        <div>
            <h5 className='order-summary-bar'> Order Summary</h5>
            <p className='p-tag'> Selected Item:{quantity}</p>
            <p className='p-tag'>Total Price:${totalPrice}</p>
            <p className='p-tag'>Total Shipping Charge: ${totalShipping}</p>
            <p className='p-tag'>Tax: ${totalTax.toFixed(2)}</p>
            <h6 className='grand-total'>Grand Total: ${grandTotal.toFixed(2)}</h6>
            <div className='button-container'>
                <button className='btn-red'>
                    Clear Cart 
                    <FontAwesomeIcon className='icon' icon={faTrash}/>
                </button>
                <button className='btn-yellow'>
                    Proceed Check
                    <FontAwesomeIcon className='icon' icon={faArrowRight}/>
                    </button>
            </div>
        </div>  
    );
};

export default Cart;