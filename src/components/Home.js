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
      <section className="skills" id="abouty">
      <div className="section-heading"><h2 className="allerta">About Me</h2></div>
        <Skills />
      </section>
      <div className="break" fluid></div>
      <section className="about" id="skilly" fluid>
      <div className="section-heading"><h3 className="allerta">Skills</h3></div>
        <About />
      </section>
      <section className="experience" id="exp">
      <div className="section-heading"><h2 className="allerta">Experience</h2></div>
        <Experience />
      </section>
      <section className="previous-experience" id="prev">
        <div className="section-heading"><h2 className="allerta">Previous Experience</h2></div>
        <Previous />
      </section>
      <section className="interests" id="inter">
      <div className="section-heading"><h2 className="allerta">Interests</h2></div>
        <Interests />
      </section>
      <section className="contact" id="con">
        <div className="section-heading"><h2 className="allerta">Contact</h2></div>
        <Contact />
      </section>
    </>
  )
}
export default Home