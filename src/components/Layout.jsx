import Navigation from "./Navigation.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => (
    <div className="bg-[url('/images/bg.jpg')] bg-center bg-cover">
        <div className="min-h-screen backdrop-blur-lg w-screen px-28 py-5 min-h-screen relative">
            <Navigation />
            <Outlet />
        </div>
    </div>
);

export default Layout;