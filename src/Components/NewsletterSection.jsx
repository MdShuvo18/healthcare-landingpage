import React from 'react';

const NewsletterSection = () => {
    return (
        <div className='text-center pt-8 md:pt-12'>
            <div>
                <h1 className='text-3xl font-bold'>Subscribe to our newsletter</h1>
            </div>
            <div className='mt-3 space-x-6'>
                <input type="text" className='w-96 px-6 py-4 rounded-full placeholder-black' placeholder='Enter your email' />
                <button className='text-white font-bold bg-primary-cyan px-6 py-4 rounded-full'>Subscribe</button>
            </div>
        </div>
    );
};

export default NewsletterSection;