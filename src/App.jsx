import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Title from "./components/Title/Title";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Faculty from "./Pages/Faculty/Faculty";
import Student from "./Pages/Student/Student";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>

              <Navbar />
              <Title subtitle="OUR PROGRAM" title="What We Offer"/>
              <Services />
              <About />
              <Title subtitle="GALLERY" title="Campus Photos" />
              <Gallery />
              <Title subtitle="TESTIMONIALS" title="What Student Says" />
              <Testimonials />
              <Title subtitle="CONTACT US" title="Get in Touch" />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/faculty/*" element={<Faculty />} />
        <Route path="/student/*" element={<Student />} />
      </Routes>
    </Router>
  );
};

export default App;
