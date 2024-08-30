import React from 'react';
import Headings from '../SharedComponent/Headings';
import dental from '../../assets/images/services/dental.jpeg'
import diagnosis from '../../assets/images/services/diagnosis.jpeg'
import bone from '../../assets/images/services/bone.jpeg'
import cardiology from '../../assets/images/services/cardiology.jpeg'
import surgery from '../../assets/images/services/surgery.jpeg'
import eye from '../../assets/images/services/eye.jpeg'
import ServiceCard from './ServiceCard';

const ServicesSection = () => {

    const services = [
        {
            "image": `${dental}`,
            "title": "Dental treatments",
            "description": "Comprehensive care for oral health, including preventive, restorative, and cosmetic procedures."
        },
        {
            "image": `${bone}`,
            "title": "Bones treatments",
            "description": "Specialized treatments for bone-related conditions, including fractures, osteoporosis, and joint disorders."
        },
        {
            "image": `${diagnosis}`,
            "title": "Diagnosis",
            "description": "Accurate and timely identification of medical conditions through advanced diagnostic techniques."
        },
        {
            "image": `${cardiology}`,
            "title": "Cardiology",
            "description": "Heart care services focusing on the prevention, diagnosis, and treatment of cardiovascular diseases."
        },
        {
            "image": `${surgery}`,
            "title": "Surgery",
            "description": "A range of surgical procedures performed by skilled surgeons to treat various medical conditions."
        },
        {
            "image": `${eye}`,
            "title": "Eye care",
            "description": "Comprehensive eye care services, including vision correction, disease management, and surgery."
        }
    ]

    return (
        <div>
            <div>
                <Headings
                    mainText={"Services we provide"}
                    subText={"Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan."}
                ></Headings>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-16 gap-6 justify-items-center'>
                {
                    services.map((service) => 
                    <ServiceCard
                    image={service.image}
                    title={service.title}
                    description={service.description} 
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServicesSection;