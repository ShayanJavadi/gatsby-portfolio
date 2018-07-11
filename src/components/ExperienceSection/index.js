import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import sabreLogo from '../../assets/images/experience/sabre-logo.png'
import githubLogo from '../../assets/images/experience/github-logo.png'
import kayakoLogo from '../../assets/images/experience/kayako-logo-2.jpg'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={sabreLogo}
            colour='#E60000'
            title='Sabre'
            role='Frontend Developer Intern'
            link='https://www.sabre.com/'
            timeperiod='May 2017 - Aug 2017'
            subtitle="Worked as a frontend dev Sabre's SabreSonic Booking/Check-in software (used by 50+ airlines). I learned the ins and outs of React and Redux during the internship, and the challenges that you face while developing at scale."
          />
          <ExperienceUnit
            logo={githubLogo}
            colour='#FFFFFF'
            title='Open Source Contributer'
            link='https://github.com/ShayanJavadi'
            timeperiod='Feb 2018 - Present'
            subtitle={
              <span>Made several contributions to open source projects within the React Native ecosystem.
                <span className="github-project-links">
                  <br />
                  <br />
                  Contributions: 
                  <br /><a href="https://github.com/ascoders/react-native-image-viewer/pull/153" className="repo-name">react-native-image-viewer:</a> <a href="https://github.com/ascoders/react-native-image-viewer/pull/153">#153</a> <a href="https://github.com/ascoders/react-native-image-viewer/pull/154">#154</a>
                  <br /><a href="https://github.com/ascoders/react-native-image-viewer/pull/153" className="repo-name">react-native-material-ui:</a> <a href="https://github.com/xotahal/react-native-material-ui/pull/316">#316</a>
                  <br /><a href="https://github.com/ascoders/react-native-image-viewer/pull/153" className="repo-name">react-native-material-bottom-navigation:</a> <a href="https://github.com/timomeh/react-native-material-bottom-navigation/pull/70">#70</a> <a href="https://github.com/timomeh/react-native-material-bottom-navigation/pull/71">#71</a> 
                </span>
              </span>
            }
          />
          <ExperienceUnit
            logo={sabreLogo}
            colour='#E60000'
            title='Sabre'
            role='Software Developer Intern'
            link='https://www.sabre.com/'
            timeperiod='May 2018 - Present'
            subtitle="Currently working on creating microservice APIs for Sabre's Ticketing team using Java (8+), and Spring Boot."
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
