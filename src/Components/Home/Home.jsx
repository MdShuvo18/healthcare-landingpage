import Banner from "../Banner/Banner";
import Find from "../FindADoctor/Find";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
          
                <Find></Find>
          
            <Footer></Footer>
        </div>
    );
};

export default Home;