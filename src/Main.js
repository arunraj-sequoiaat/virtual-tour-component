import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "../src/Layout/Footer";
import Navbar from "../src/Layout/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Process from "./Components/Process";
import Products from "./Components/Products";
import VirtualTour from './VirtualTour';
import { tourSteps } from './tourStep';

function Main() {
  
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to={"/home"} replace />}  />
        </Routes>
        <Footer />
        <VirtualTour customSteps={tourSteps} />
      </BrowserRouter>
    </>
  );
}
export default Main;
