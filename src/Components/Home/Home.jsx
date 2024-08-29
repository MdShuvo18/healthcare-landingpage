import Banner from "../Banner/Banner";
import ChooseUsSection from "../ChooseUsSection/ChooseUsSection";
import Find from "../FindADoctor/Find";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OurResultSection from "../OurResultSection/OurResultSection";
import ServicesSection from "../ServicesSection/ServicesSection";


const Home = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <Banner></Banner>
            <Find></Find>
            <OurResultSection></OurResultSection>
            <ChooseUsSection></ChooseUsSection>
            <ServicesSection></ServicesSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;