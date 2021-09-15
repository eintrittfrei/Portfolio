import React from 'react'


const Navbar = () => {
  return (
    <div className="container">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/"><span className="o">O</span>N <span className="o">Portfolio</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#homy">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#abouty">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#skilly">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#exp">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#inter">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#con">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )





}

export default Navbar