import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./constant/header";
import Footer from "./constant/footer"
import Home from "./components/home";
import Blog from "./components/blog/blog";
import Event from "./components/events/event";
import ContactUs from "./components/contact-us/contact";
import Login from "./components/login-signup/login";
import SignUp from "./components/login-signup/signup";


function App() {
  return (
    <Router>
      <div>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event" element={<Event/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        
     
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;






//https://www.youtube.com/watch?v=gXdHvoWvViQ//
//https://www.figma.com/file/C0uRkPaQZqDesCaNFZm6fY/Event-Reservation-System-team-library?type=design&node-id=0-1&t=YqNjQk08bYJbazGz-0//
