import React from 'react';
import ServicePageBaner from './ServicePageBaner';
import ServicePageFindDoctor from './ServicePageFindDoctor';
import ServicesSection from '../../ServicesSection/ServicesSection';
import CustomerSaysPage from './CustomerSaysPage';

const ServicesPage = () => {
    return (
        <div>
            <ServicePageBaner></ServicePageBaner>
            <ServicePageFindDoctor></ServicePageFindDoctor>
            <ServicesSection></ServicesSection>
            <CustomerSaysPage></CustomerSaysPage>
        </div>
    );
};

export default ServicesPage;