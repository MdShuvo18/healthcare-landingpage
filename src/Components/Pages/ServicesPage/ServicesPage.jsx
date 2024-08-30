import React from 'react';
import ServicePageBaner from './ServicePageBaner';
import ServicePageFindDoctor from './ServicePageFindDoctor';

const ServicesPage = () => {
    return (
        <div>
            <ServicePageBaner></ServicePageBaner>,
            <ServicePageFindDoctor></ServicePageFindDoctor>
        </div>
    );
};

export default ServicesPage;