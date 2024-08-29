import React from 'react';
import Headings from './SharedComponent/Headings';
import companies from '../assets/images/companies.png';

const TrustedCompanySection = () => {
    return (
        <div>
            <div>
                <Headings 
                    mainText={"Trusted by 10,000+ companies around the world"}
                ></Headings>
            </div>
            <div>
                <img src={companies} alt="" className='mt-8 md:mt-12'/>
            </div>
        </div>
    );
};

export default TrustedCompanySection;