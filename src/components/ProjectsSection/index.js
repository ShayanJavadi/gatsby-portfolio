import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import stoneSpringLogo from '../../assets/images/projects/stonespring-logo.png'
import githubLogo from '../../assets/images/experience/github-logo.png'
import animationGuildLogo from '../../assets/images/projects/animation-guild.png'
import uxutdLogo from '../../assets/images/projects/uxutd-logo.png'

class ProjectsSection extends React.Component {
  // TODO: make these use md or json files for the data
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={animationGuildLogo}
            colour='#FFFFFF'
            title='Animation Guild Website'
            link='https://github.com/ShayanJavadi/animation-utd'
            timeperiod='May 2018 - Present'
            subtitle="I'm currently making the Animation Guild at UTD a brand new website using Gatsby.js."
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
                  <br /><a href="https://github.com/ascoders/react-native-image-viewer" className="repo-name">react-native-image-viewer:</a> <a href="https://github.com/ascoders/react-native-image-viewer/pull/153">#153</a> <a href="https://github.com/ascoders/react-native-image-viewer/pull/154">#154</a>
                  <br /><a href="https://github.com/xotahal/react-native-material-ui" className="repo-name">react-native-material-ui:</a> <a href="https://github.com/xotahal/react-native-material-ui/pull/316">#316</a>
                  <br /><a href="https://github.com/timomeh/react-native-material-bottom-navigation" className="repo-name">react-native-material-bottom-navigation:</a> <a href="https://github.com/timomeh/react-native-material-bottom-navigation/pull/70">#70</a> <a href="https://github.com/timomeh/react-native-material-bottom-navigation/pull/71">#71</a>
                </span>
              </span>
            }
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