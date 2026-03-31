import React from 'react';
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='bg-gray-50 text-center item-center min-h-screen mx-auto'>
           <div className='mx-auto'>
             <img className='items-center mx-auto' src="/src/assets/error.png" alt="" />
           </div>
            <p className='text-3xl font-bold text-black'>Oops, page not found!</p>
            <p className='text-gray-600'>The page you are looking for is not available.</p>
       <NavLink className="hover:underline btn gradient-bg border-none px-10 my-5" to="/">Go Back!</NavLink>
        </div>
    );
};

export default Error;