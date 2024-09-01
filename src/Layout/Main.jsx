import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar/Navbar'
import Footer from "../Components/Footer/Footer";

const Main = () => {
    return (
        <div>
            <main>
                <Navbar></Navbar>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}; 

export default Main;