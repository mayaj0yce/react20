import React from 'react'

export const Project = (props) => {
  return (
    <div class='block'>

<div>{props.image}</div>
<div>{props.name}</div>
<div>{props.github}</div>
<div>{props.description}</div>

    </div>
  )
}

export default Project

// name 
// github