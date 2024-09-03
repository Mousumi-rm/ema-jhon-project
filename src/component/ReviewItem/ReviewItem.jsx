import React from 'react';
import './ReviewItem.css'
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = ({product, handelRemoveFromCart}) => {
    console.log(product);
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item flex items-center justify-between'>
            <div className=' flex'>
                <img src={img} alt="" />
                <div className='ml-10'>
                    <p className='font-bold'>{name}</p>
                    <p>{price}</p>
                    <p>{quantity}</p>
               </div>                 
            </div>   

            <button onClick={() => handelRemoveFromCart(id)} className='mr-10 bg-white hover:bg-slate-300 p-5 rounded-full'>
                  <TrashIcon className="size-6 text-red-400" /> 
            </button> 
        </div>
    );
};

export default ReviewItem;