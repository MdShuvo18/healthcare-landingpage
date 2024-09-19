import React from 'react';
import chooseUs from '../../assets/images/choose-us.png'

const ChooseUsSection = () => {
    return (

        <div className='container mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-32 md:pt-32'>

            <div className='space-y-12 flex flex-col justify-center'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>You have lots of reasons to choose us</h1>
                    <p className='text-secondary-gray md:w-2/3'>At Healthcare Website Name, we go beyond the basics to offer you a wide range of services tailored to your needs. From personalized care plans to state-of-the-art facilities, we are dedicated to providing you with the best healthcare experience possible. Choose us for more options, more care, and more reasons to trust your health with us.</p>
                </div>
                <div className='flex gap-4'>
                    <button className='px-5 py-3 md:px-9 md:py-6 bg-primary-cyan text-white rounded-full font-bold md:text-lg'>Get started</button>
                    <button className='px-5 py-3 md:px-9 md:py-6 border-2 rounded-full bg-white text-lg text-primary-cyan'>Talk to sales</button>
                </div>
            </div>
            <div className='mt-6 md:mt-0'>
                <img src={chooseUs} alt="" />
            </div>
        </div>
    );
};

export default ChooseUsSection;