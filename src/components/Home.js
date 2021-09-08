import React from 'react'
import About from './About.js'
import Experience from './Projects.js'
import Previous from './Previous.js'
import Interests from './Interests.js'
import Contact from './Contact.js'
import Navbar from './Nav.js'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="homy">
      <div className="allerta home mx-auto">
      
        <p>Ole Nascimento</p>
        <p>Developer</p>
      </div>
      </section>
      <section className="about" id="abouty" fluid>
        <About />
      </section>
      <section className="experience" id="exp">
        <Experience />
      </section>
      <section className="previous-experience" id="prev">
        <Previous />
      </section>
      <section className="interests" id="inter">
        <Interests />
      </section>
      <section className="contact" id="con">
        <Contact />
      </section>
    </>
  )
}
export default Home