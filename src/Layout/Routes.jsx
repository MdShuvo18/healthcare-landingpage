import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../Components/Home/Home";
import ServicesPage from "../Components/Pages/ServicesPage/ServicesPage";
import ContactPage from "../Components/Pages/ContactPage/ContactPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <ServicesPage></ServicesPage>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            }
        ]
    },
]);
export default router;