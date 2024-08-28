import Banner from "../Banner/Banner";
import ChooseUsSection from "../ChooseUsSection/ChooseUsSection";
import Find from "../FindADoctor/Find";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import OurResultSection from "../OurResultSection/OurResultSection";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Find></Find>
            <OurResultSection></OurResultSection>
            <ChooseUsSection></ChooseUsSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;