import React from 'react'
import './AboutMe.css'
import me from '../../images/handsomeMan.jpg'
import lilith from '../../images/lilith.jpg'
import ivy from '../../images/ivyMay.JPG'


const AboutMe = () => {
  return (
    <div className='hero content is-justified'>
      <div className='content is-medium'>
        <p>About me</p>
        <div className='block columns'>
          <div className='column is-half'>
            <img src={me} alt="self" />
          </div>
          <div className='block column is-half'>
            <p>Hiya my name is MayaJ0yce. I was born and raised in Utah, currently located in Bluffdale. My previous work experience has been in health care, I am now transitioning into the tech world to experience less trauma and shit (literally). My house is full of art, mostly my own, and cat hair from my two cats, Ivy and Lilith</p>
          </div>
        </div>
        <div className='block columns'>
          <div className='column is-half'>
            <img src={ivy} alt="Ivy May" />
            <p>IvyMay</p>
            </div>
          <div className='column is-half'>
            <img src={lilith} alt="lil Devil" />
          <p> demon child Lilith </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe