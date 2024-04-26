import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/HomePage/Home';
import Services from './components/Services';
import Blog from './components/BlogPage/Blog';
import BlogPost from './components/BlogPage/BlogPost';
import { Route, Routes } from 'react-router-dom';
import ContactSection from './components/HomePage/ContactSection';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/post/:id" element={<BlogPost />} />
                <Route path="/#contact" element={<ContactSection/>}/>
            </Routes>
        </>
    );
}

export default App;