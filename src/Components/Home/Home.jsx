import Banner from "../Banner/Banner";
import ChooseUsSection from "../ChooseUsSection/ChooseUsSection";
import Find from "../FindADoctor/Find";
import NewsletterSection from "../NewsletterSection";
import OurResultSection from "../OurResultSection/OurResultSection";

import ServicesSection from "../ServicesSection/ServicesSection";
import Testimonial from "../Testimonial/Testimonial";
import TrustedCompanySection from "../TrustedCompanySection";
import TeamMembers from "../TeamMembers/TeamMembers";



const Home = () => {
    return (
        <div className="space-y-10">
            <div>
                <Banner></Banner>
                <Find></Find>
                <OurResultSection></OurResultSection>
                <ChooseUsSection></ChooseUsSection>

                <ServicesSection></ServicesSection>
                <TeamMembers></TeamMembers>
                <Testimonial></Testimonial>
                <TrustedCompanySection></TrustedCompanySection>
                <NewsletterSection></NewsletterSection>
            </div>
            
        </div>
    );
};

export default Home;