import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import sabreLogo from '../../assets/images/experience/sabre-logo.png'
import githubLogo from '../../assets/images/experience/github-logo.png'
import bookeaseLogo from '../../assets/images/projects/bookease-logo.png'
import sevenElevenLogo from "../../assets/images/experience/7-eleven-logo.png";

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={sevenElevenLogo}
            colour='#fff'
            title='7-Eleven'
            role='Software Developer'
            link='https://www.7-eleven.com/'
            timeperiod='Oct 2018 - Present'
            subtitle="Worked on 7-Eleven mobile self-checkout web experience using React/Redux. Currently working on migrating 7-eleven.com from Drupal to Next.js + headless CMS (Contentstack)"
          />
          <ExperienceUnit
            logo={sabreLogo}
            colour='#E60000'
            title='Sabre'
            role='Software Developer Intern/Associate Software Developer'
            link='https://www.sabre.com/'
            timeperiod='May 2018 - Oct 2018'
            subtitle="Worked on creating microservice APIs for Sabre's Ticketing team using Java (8+), and Spring Boot."
          />
          <ExperienceUnit
            logo={bookeaseLogo}
            colour="#fff"
            title="Bookease"
            role='Co-founder/Lead React Native Developer'
            link="https://github.com/ShayanJavadi/bookease-frontend"
            timeperiod="2017 - Present"
            subtitle="Bookease is an upcoming React Native mobile app that allows students to seamlessly sell/trade their textbooks
with their peers. Developed using React Native, Redux, Node.js,
Express, Sequalize, GraphQL, Heroku, and Firebase."
          />
          <ExperienceUnit
            logo={sabreLogo}
            colour='#E60000'
            title='Sabre'
            role='Frontend Developer Intern'
            link='https://www.sabre.com/'
            timeperiod='May 2017 - Aug 2017'
            subtitle="Worked as a frontend dev Sabre's SabreSonic Booking/Check-in software (used by 50+ airlines). I learned the ins and outs of React and Redux during the internship, and the challenges that you face while developing at scale."
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
