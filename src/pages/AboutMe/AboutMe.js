import React from 'react'
// import Me from '../../../public/img/ReadMe.jpg'
import './AboutMe.css'


const AboutMe = () => {
  return (
    <div className='hero content is-justified'>
      <div className='content is-medium'>
        <p>About me</p>
        <div className='block columns'>
          <div className='column is-half'>
            <img src='http://localhost:3000/img/handsomeMan.jpg' alt="self" />
          </div>
          <div className='block column is-half'>
            <p>Hiya my name is MayaJ0yce. I was born and raised in Utah, currently located in Bluffdale. My previous work experience has been in health care, I am now transitioning into the tech world to experience less trauma and shit (literally). My house is full of art, mostly my own, and cat hair from my two cats, Ivy and Lilith</p>
          </div>
        </div>
        <div className='block columns'>
          <div className='column is-half'>
            <img src='http://localhost:3000/img/ivyMay.jpg' alt="Ivy May" />
            <p>IvyMay</p>
            </div>
          <div className='column is-half'>
            <img src='http://localhost:3000/img/lilith.jpg' alt="lil Devil" />
          <p> demon child Lilith </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe