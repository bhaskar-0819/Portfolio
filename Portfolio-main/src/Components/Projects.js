import React from 'react';
import ProjectBox from './ProjectBox';
import NewsletterImage from '../images/Social.png';
import RogfreeImage from '../images/Event.png';
import TindogImage from '../images/sql.jpeg';
import WigglesImage from '../images/Pizza.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Online Pizza Ordering System" />
        <ProjectBox projectPhoto={NewsletterImage} projectName="Social Media Manager Platform" />
        <ProjectBox projectPhoto={RogfreeImage} projectName="Event Management Website" />
        <ProjectBox projectPhoto={TindogImage} projectName="Sqler" />
      </div>

    </div>
  )
}

export default Projects