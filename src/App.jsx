import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <Navbar/>
            <Hero/>
            <About/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </main>
    )
}
export default App
