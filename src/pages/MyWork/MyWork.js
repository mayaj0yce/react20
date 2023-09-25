import React from 'react'
import 'bulma/css/bulma.min.css';
import Project from '../../components/Project/Project';
//pull and console.log all the images so the props can have the info. then the link is used to display the image on the webpage
import portfolio from '../../images/portfolio.jpg';
import horiseon from '../../images/mockUp.jpg';
import artData from '../../images/artData.jpg';
import ReadMe from '../../images/ReadMe.jpg';
import workDay from '../../images/workDay.jpg';

const projects = [
{
  image: '/react20/static/media/portfolio.3f7fd98c5f6af95eedad.jpg',
  alt: 'portfolio Img',
  name: 'Portfolio',
  github: 'https://github.com/mayaj0yce/professional-portfolio.git',
  description: 'My first portfolio created from scratch',
},
{
  image:  '/react20/static/media/mockUp.669fbc3edddfd683ca9f.jpg',
  alt: 'Horiseon Mock Img',
  name: 'Horiseon',
  github: 'https://github.com/mayaj0yce/Horiseon-work-up-.git',
  description: 'HTML and CSS work up for a fake company demo',
},
{
  image: '/react20/static/media/ReadMe.ef3f4372d7eaa40f5419.jpg',
  alt: 'Read Me Img',
  name: 'Read Me Application',
  github: 'https://github.com/mayaj0yce/readMeRights.git',
  description: 'Creates a Readme based on a users input',
},
{
  image:  '/react20/static/media/artData.2e31616c098043d2f0da.jpg',
  alt: 'Art Data Img',
  name: 'ArtGallorey',
  github: 'https://github.com/mayaj0yce/artGallorey.git',
  description: 'class project 2. I was alone and did the back end for an art gallery site',
},
{
  image:  '/react20/static/media/workDay.3da2e7465df5682892d3.jpg',
  alt: 'Work Day Img',
  name: 'Work Day Scheduler',
  github: 'https://github.com/mayaj0yce/workDay.git',
  description: 'A hectic work day can be easily solved by using this day planner app that tracks by the hour and updates as time passes through the day.',
}

]
// * A link to the deployed application
console.log(portfolio)
console.log(horiseon)
console.log(ReadMe)
console.log(artData)
console.log(workDay)


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
