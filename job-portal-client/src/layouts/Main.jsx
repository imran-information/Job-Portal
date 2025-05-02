import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const Main = () => {
    return (
        <div className="font-inter">
            <Navbar />
            <div className="min-h-screen container mx-auto">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;