import React from 'react';
import ServicePageBaner from './ServicePageBaner';
import ServicePageFindDoctor from './ServicePageFindDoctor';
import ServicesSection from '../../ServicesSection/ServicesSection';
import CustomerSaysPage from './CustomerSaysPage';
import FAQ from './FAQ';
import NewsletterSection from '../../NewsletterSection';

const ServicesPage = () => {
    return (
        <div>
            <ServicePageBaner></ServicePageBaner>
            <ServicePageFindDoctor></ServicePageFindDoctor>
            <ServicesSection></ServicesSection>
            <CustomerSaysPage></CustomerSaysPage>
            <FAQ></FAQ>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default ServicesPage;