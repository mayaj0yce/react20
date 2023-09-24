import React from 'react';
import './Project.css'

export const Project = (props) => {
  return (
    <div className='block'>
    
<img className='imgClass' src={props.image} alt=''></img>
<div>{props.name}</div>
<a href={props.github} target='_blank'> GITHUB </a>
<div>{props.description}</div>
    </div>
  )
}

export default Project

// name 
// github