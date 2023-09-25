import React from 'react';
import './Project.css'

export const Project = (props) => {
  return (
    <div className='block'>
     
<img className='imgClass' src={props.image} alt={props.alt}></img>
<div>{props.name}</div>
<a href={props.github} target='_blank' rel='noreferrer'> GITHUB </a>
<div>{props.description}</div>
    </div>
  )
}

export default Project

// name 
// github