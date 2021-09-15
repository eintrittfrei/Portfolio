import React from 'react'
import About from './About.js'
import Experience from './Projects.js'
import Previous from './Previous.js'
import Interests from './Interests.js'
import Contact from './Contact.js'
import Navbar from './Nav.js'
import Skills from './Skills.js'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="home" id="homy">
      <div className="allerta home mx-auto">
        <p>Ole Nascimento</p>
        <p>Software Developer</p>
      </div>
      </section>
      <section className="about" id="abouty">
      <div><h3 className="allerta">About Me</h3></div>
        <Skills />
      </section>
      <section className="about" id="skilly" fluid>
      <div><h3 className="allerta">Skills</h3></div>
        <About />
      </section>
      <section className="experience" id="exp">
      <div><h2 className="allerta">Experience</h2></div>
        <Experience />
      </section>
      <section className="previous-experience" id="prev">
        <div><h2 className="allerta">Previous Experience</h2></div>
        <Previous />
      </section>
      <section className="interests" id="inter">
      <div><h2 className="allerta">Interests</h2></div>
        <Interests />
      </section>
      <section className="contact" id="con">
        <div><h2 className="allerta">Contact</h2></div>
        <Contact />
      </section>
    </>
  )
}
export default Home