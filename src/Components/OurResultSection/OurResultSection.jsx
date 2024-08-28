import React from 'react';
import Headings from '../SharedComponent/Headings';
import Numbers from '../Numbers/Numbers';

const OurResultSection = () => {
    return (
        <div className='container mx-auto'>
            <Headings mainText={"Our results in numbers"}></Headings>
            <div className='mt-16 grid grid-cols-1 md:grid-cols-4'>
                <Numbers mainText={"99%"} subText={"Customer Satisfaction"}></Numbers>
                <Numbers mainText={"15k"} subText={"Online Patients"}></Numbers>
                <Numbers mainText={"12k"} subText={"Patients Recoverd"}></Numbers>
                <Numbers mainText={"240%"} subText={"Company Growth"}></Numbers>
            </div>
        </div>
    );
};

export default OurResultSection;