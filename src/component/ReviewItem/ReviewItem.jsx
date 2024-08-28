import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    console.log(product);
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item flex'>
            <img src={img} alt="" />
            <div className='ml-5 '>
                <div className='flax'>
                    <p className='font-bold'>{name}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ReviewItem;