import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/HeroSection/Hero.jsx'
import About from './Components/AboutSection/About.jsx'
import Skills from './Components/SkillSection/Skill.jsx'
import Service from './Components/Service/Service.jsx'
import Projects from './Components/ProjectSection/Project.jsx'
import Education  from './Components/Education/Education.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <a href="#main-content" className="skipLink">Skip to content</a>
      <Navbar/>
      <main id="main-content">
        <Hero/>
        <About/>
        <Skills/>
        <Service/>
        <Projects/>
        <Education/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
