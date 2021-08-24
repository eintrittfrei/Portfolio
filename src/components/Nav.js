import React from 'react'


const Navbar = () => {
  return (
    <div className="container">
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">ON Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Contact</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  )





}

export default Navbar