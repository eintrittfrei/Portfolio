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
      <section className="home">
      <div className="allerta home mx-auto" style={{ width: '500px' }}>
      
        <p>Ole Nascimento</p>
        <p>Developer</p>
      </div>
      </section>
      <section className="about" fluid>
        <About />
      </section>
      <section className="experience">
        <Experience />
      </section>
      <section className="previous-experience">
        <Previous />
      </section>
      <section className="interests">
        <Interests />
      </section>
      <section className="contact">
        <Contact />
      </section>
    </>
  )
}
export default Home