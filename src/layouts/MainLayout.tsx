import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "./shared/navbars/Navbar";
import Footer from "./shared/footers/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins flex flex-col min-h-screen bg-bgprimary001 text-white">
      <ScrollRestoration />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
