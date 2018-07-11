import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import stoneSpringLogo from '../../assets/images/projects/stonespring-logo.png'
import bookeaseLogo from '../../assets/images/projects/bookease-logo.png'
import uxutdLogo from '../../assets/images/projects/uxutd-logo.png'

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={bookeaseLogo}
            colour="#fff"
            title="Bookease"
            timeperiod="2017 - Present"
            subtitle="Bookease is an upcoming React Native mobile app that allows students to seamlessly sell/trade their textbooks
with their peers. Developed using React Native, Redux, Node.js,
Express, Sequalize, GraphQL, Heroku, and Firebase."
          />
          <ExperienceUnit
            logo={uxutdLogo}
            colour="#fff"
            title="UX UTD Website"
            link="http://uxutd.com/"
            timeperiod="2017"
            subtitle="Designed and developed a website for the UX club at UTD from scratch using Javascript (ES6), SCSS, and HTML/CSS."
          /> 
          <ExperienceUnit
            logo={stoneSpringLogo}
            colour="#FFFFFF"
            title="Stone Springs Dentistry Website"
            link="https://www.stonespringsdentistry.com/"
            timeperiod="2016"
            subtitle="Designed and developed a responsive and modern website from scratch as a contractor for Dr. Nikta Marvdashti."
          />          
        </div>
      </Section>
    )
  }
}

export default ProjectsSection