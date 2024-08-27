import React from 'react';

const Login = () => {
    return (
        <div className='lg'>
           <h1 className='lg text-center text-blue-500 mt-52'>This page is login page</h1> 
           <div className='text-center bg-white'>
                <div className='flex justify-center items-center mb-10 mt-10'>
                    <input className='bg-white border-2 border-blue-500 rounded-lg px-2' type="text" placeholder='User Id'/>
                    <input className='bg-white border-2 border-blue-500 rounded-lg px-2 ml-2' type="password" placeholder='password' />
                </div>
                <button className='bg-blue-500'>Login</button>
           </div>
        </div>
    );
};

export default Login;