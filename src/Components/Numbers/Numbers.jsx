import React from 'react';

const Numbers = ({mainText, subText}) => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold text-primary-cyan'>{mainText}</h1>
            <p className='text-2xl font-bold'>{subText}</p>
        </div>
    );
};

export default Numbers;