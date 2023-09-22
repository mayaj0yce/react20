import React from 'react'
import 'bulma/css/bulma.min.css';
import Project from '../../components/Project/Project';
import portfolioImg from '../../img/portfolio.jpg';
// import { useHref } from 'react-router-dom';

// For each project that is featured in your portfolio, include the following:

// * An image of the deployed application (either a short animated GIF or screenshot)

// * The title of the project
const projects = [
{
  image:  C:\Users\mjtha\downloads\react20\src\img\portfolio.jpg,
  name: 'professional portfolio',
  github: 'https://github.com/mayaj0yce/professional-portfolio.git',
  description: 'My first portfolio created from scratch',
},
{
  image: '',
  name: 'horrison',
  github: 'https://github.com/mayaj0yce/Horiseon-work-up-.git',
  description: 'HTML and CSS work up for a fake company demo',
},
{
  image: 'image',
  name: 'Read Me Application',
  github: 'https://github.com/mayaj0yce/readMeRights.git',
  description: 'Creates a Readme based on a users input',
},
{
  image: 'image',
  name: 'ArtGallorey',
  github: 'https://github.com/mayaj0yce/artGallorey.git',
  description: 'class project 2. I was alone and did the back end for an art gallery site',
},
{
  image: 'no img to display',
  name: 'noSQL Social Database',
  github: 'https://github.com/mayaj0yce/noSocialSQL18.git',
  description: 'This allows a user to create an account and use the site like any other social media app.',
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
