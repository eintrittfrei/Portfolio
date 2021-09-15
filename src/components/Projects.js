import React from 'react'


const Projects = () => {

  return (
    <>
    <div className="row">
        <div className="col-sm">
          <div><h3 className="allerta">General Assembly Software Engineering Immersive</h3></div>
          <div><p>This is a three month intensive Software Engineering course teaching fullstack software development using current technologies including JavaScript, React, Mongoose, Python SQL and noSQL. During the course I completed a total of four independent projects. The course was delivered via Zoom and Slack.
          Two of the projects were done as a group and two were individual projects.
 </p></div>
        </div>
        
        <div className="col-sm">
          <a rel="noreferrer" target="_blank" href="https://generalassemb.ly/education/software-engineering-immersive/london">GA website</a>
          <img
            class="img-fluid"
            src="./assets/GA.png"
            alt="general assembly website screenshot"
           />
        </div>
      </div>
      <div className="section-heading"><h2 className="allerta">Projects</h2></div>
      <div className="row">
        <div className="col-sm">
          <div><h3 className="allerta">Furniture App</h3></div>
          <div><p>This was my final project for the Software Engineering Immersive Course at General Assembly. I built a full stack application using React and React Bootstrap for the frontend, Python/ Django for the back end and SQL database. I was responsible for idea generation, planning and execution of the project. The SQL database included five apps with two ‘many to many’ and two ‘many to one’ relationships and was based on the CRUD methodology. </p></div>
        </div>
        <div className="col-sm">
          <a rel="noreferrer" target="_blank" href="https://furnitureideas.herokuapp.com/furniture/">Go to project</a>
          <img
            class="img-fluid"
            src="./assets/furniture.png"
            alt="project4"
           />
        </div>
      </div>

      <div className="row">
        
        <div className="col-sm">
        
          <div><h3 className="allerta"><span>Heiss e-commerce site</span></h3></div>
          <div><p>We built a full stack application using React and React Bootstrap for the frontend and Mongoose and MongoDB for the backend. We pair-coded the backend as a team. The tasks for the frontend were split across the team members. I was responsible for the Drinks show page, the user profile page and the edit/delete functionality of the user profile. Styling was done collectively as a group.
 </p></div>
        </div>
        <div className="col-sm">
        <a rel="noreferrer" target="_blank" href="https://sei56-3.herokuapp.com/">Go to project</a>
          <img
            class="img-fluid"
            src="./assets/heiss.png"
            alt="project4"
             />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <div><h3 className="allerta">Weather App</h3></div>
          <div><p>This was a pair coded hackathon. The task was to build a front end application using weatherapi.com. This basic weather app was built using React and Bulma.</p></div>
        </div>
        <div className="col-sm">
        <a  rel="noreferrer" target="_blank" href="https://oleproject2.netlify.app/">Go to project</a>
          <img
            class="img-fluid"
            src="./assets/weather.png"
            alt="project4"
             />
        </div>
      </div>
      <div className="row">
        
        <div className="col-sm">
          <div><h3 className="allerta">Space Invaders</h3></div>
          <div><p>This was a solo project built over 1 week. This is a grid based game based on the classic Space Invaders game. I used Vanilla JavaScript, HTML and CSS to build it. 
 </p></div>
        </div>
        
        <div className="col-sm">
        <a rel="noreferrer" target="_blank" href="https://eintrittfrei.github.io/sei-project_1/">Go to project</a>
          <img
          class="img-fluid"
            src="./assets/space.png"
            alt="project4"
             />
        </div>
        
      </div>

    </>
  )
}

export default Projects