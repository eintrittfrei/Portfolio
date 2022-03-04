import React from 'react'

const Contact = () => {

  return (
    <>
      <div className="row">
        <div className="col-sm">
        <img src="./assets/ole.jpg" alt="headshot" className="img-fluid" />
        </div>
        <div className="col-sm">
        <ul>
          <li><a rel="noreferrer" target="_blank" href="https://github.com/eintrittfrei"><i className="fab fa-github fa-4x" alt="GitHub Link"></i>GitHub</a></li>
          
          <li><a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/olenascimento/"><i className="fab fa-linkedin fa-4x" alt="LinkedIn Link"></i>LinkedIn</a></li>
          
          <li><a href="mailto: olenascimento@gmail.com"><i className="fas fa-envelope fa-4x" alt="Email Link"></i>Email</a></li>
        </ul>
        </div>
      </div>
    </>
  )

}

export default Contact