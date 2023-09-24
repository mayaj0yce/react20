import React from 'react'
import 'bulma/css/bulma.min.css';
import Project from '../../components/Project/Project';
// import portfolioImg from '../../img/portfolio.jpg';
// import { useHref } from 'react-router-dom';

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project
const projects = [
{
  image:  'http://localhost:3000/img/portfolio.jpg' ,
  name: 'Portfolio',
  github: 'https://github.com/mayaj0yce/professional-portfolio.git',
  description: 'My first portfolio created from scratch',
},
{
  image:  'http://localhost:3000/img/mockUp.jpg',
  name: 'Horiseon',
  github: 'https://github.com/mayaj0yce/Horiseon-work-up-.git',
  description: 'HTML and CSS work up for a fake company demo',
},
{
  image: 'http://localhost:3000/img/ReadMe.jpg',
  name: 'Read Me Application',
  github: 'https://github.com/mayaj0yce/readMeRights.git',
  description: 'Creates a Readme based on a users input',
},
{
  image:  'http://localhost:3000/img/artData.jpg',
  name: 'ArtGallorey',
  github: 'https://github.com/mayaj0yce/artGallorey.git',
  description: 'class project 2. I was alone and did the back end for an art gallery site',
},
{
  image:  'http://localhost:3000/img/workDay.jpg',
  name: 'Work Day Scheduler',
  github: 'https://github.com/mayaj0yce/workDay.git',
  description: 'A hectic work day can be easily solved by using this day planner app that tracks by the hour and updates as time passes through the day.',
}

]
// * A link to the deployed application

// * A link to the corresponding GitHub repository

const MyWork = () => {
  return (
    <div>{projects.map((p)=>{
      return <Project 
      image={p.image}
      name={p.name}
      github={p.github}
      description={p.description}
      >
         
      </Project>
    } 
    ) }

</div>

  )
}

export default MyWork;
