import React from 'react';

const Numbers = ({ mainText, sign, subText }) => {
    return (
        <div className='text-center'>
            <h1 className='text-5xl font-bold text-primary-cyan'>{mainText}<span className='opacity-60'>{sign}</span></h1>
            <p className='text-2xl font-bold'>{subText}</p>
        </div>
    );
};

export default Numbers;