import React from 'react';
import chooseUs from '../../assets/images/choose-us.png'

const ChooseUsSection = () => {
    return (

        <div className='container mx-auto flex flex-col-reverse md:flex-row gap-8 md:gap-32 md:pt-32'>

            <div className='space-y-12 flex flex-col justify-center'>
                <div className='space-y-4'>
                    <h1 className='text-4xl font-bold'>You have lots of reasons to choose us</h1>
                    <p className='text-secondary-gray'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
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