import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Makasih from "./components/OrderPage/makasih.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import OrderPage from "./components/OrderPage/Order.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={
          <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
            <Navbar />
            <Hero />
            <Services />
            <Banner />
            <Testimonials />
            <Footer /> 
          </div>
        } />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thanks" element={<Makasih />} />
      
    </Routes>
    </BrowserRouter>
    // <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
    //   <Navbar />
    //   <Hero />
    //   <Services />
    //   <Banner />

    //   <Testimonials />
    //   <Footer /> 
    //   {/* <OrderPage /> */}
    // </div>
  );
};

export default App;
