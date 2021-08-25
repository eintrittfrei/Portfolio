import React from 'react'


const Interests = () => {

  return (

    <>
    
      <h2 className="allerta">Interests</h2>
      <div className="row-run">
        <div className="col-sm">
          <p>
            I love running to destress and clear my mind but also just for fun. I try to sign up to a race at least once a year which helps me to keep focused and train towards a goal. My proudest moment so far was finishing the Athens Marathon which is said to be one of the hardest due to its steep hills.
          </p>
        </div>
        <div className="col-sm">
          <img 
          className="img-fluid"
          src="./assets/run.jpg" 
          alt="running" />
        </div>
      </div>
      <div className="row-dog">
      <div className="col-sm">
          <p>Dogs,
            I just got a new puppy. His name is Hugo. He is a little CockaPoo.

          </p>
        </div>
        <div className="col-sm">
          <img 
          className="img-fluid"
          src="./assets/dog.jpg" 
          alt="puppy" />
        </div>
        
      </div>
    </>

  )

}

export default Interests