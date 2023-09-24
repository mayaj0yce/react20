import React from 'react'

const Resume = () => {
  return (
    <div>
      <h1>Thanks for your interest! I have a resume available for download via the button below :)</h1>

      <br />

      <a href='/img/resume.jpg' download='resume'>
        Click Me!! please..
        {/* <img src='http://localhost:3000/img/resume.jpg' alt="self" download /> */}
      </a>

      <br />
      
      <h1>see ya! </h1>
    </div>
  )
}

export default Resume

