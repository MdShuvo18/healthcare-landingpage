import React from 'react';

const Headings = ({ mainText, subText }) => {
    return (
        <div>
            <div>
                {
                    mainText && <h1 className='text-center text-4xl font-bold text-primary-cyan mt-32'>{mainText}</h1>
                }
            </div>
            <div>
                {
                    subText && <h3>{subText}</h3>
                }
            </div>
        </div>
    );
};

export default Headings;