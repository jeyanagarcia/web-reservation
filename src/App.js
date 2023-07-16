import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from "./components/context/authContext";
import { ShopContextProvider } from "./components/context/shopContext";
import Header from "./constant/header";
import Footer from "./constant/footer"
import Home from "./components/home";
import Article from "./components/blog/blog";
import Event from "./components/events/event";
import ContactUs from "./components/contact-us/contact";
import Login from "./components/login-signup/login";
import SignUp from "./components/login-signup/signup";
import EventDetails from './components/events/eventDetails';
import BlogDetails from "./components/blog/blogDetails";
import UserProfile from "./components/user/userProfile";
import ProtectedRoute from "./components/context/protectedRoute";
import Wishlist from "./components/events/wishlist";
import './index.css'



function App() {
  return (
    <Router>
        
        <AuthContextProvider>
        <ShopContextProvider>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article" element={<Article />} />
          <Route path="/event" element={<Event />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/event/:eventKey" element={<EventDetails />} />
          <Route path="/article/:articleKey" element={<BlogDetails /> }/>
          <Route path="/user-profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/wishlist" element={<Wishlist />} />
         
          
        </Routes>
        </ShopContextProvider>
        </AuthContextProvider>
        
        
        <Footer />
      
    </Router>
  );
}

export default App;


//https://www.figma.com/file/C0uRkPaQZqDesCaNFZm6fY/Event-Reservation-System-team-library?type=design&node-id=0-1&t=YqNjQk08bYJbazGz-0//