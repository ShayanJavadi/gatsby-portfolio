import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import stoneSpringLogo from '../../assets/images/projects/stonespring-logo.png'
import githubLogo from '../../assets/images/experience/github-logo.png'
import animationGuildLogo from '../../assets/images/projects/animation-guild.png'
import uxutdLogo from '../../assets/images/projects/uxutd-logo.png'
import chord from '../../assets/images/projects/chords.png'
import solfej from '../../assets/images/projects/solfej.png'
import scale from '../../assets/images/projects/sacle.png'
class ProjectsSection extends React.Component {
  // TODO: make these use md or json files for the data
  render() {
    return (
      <Section title="Projects">
        <div className="row">
                <ExperienceUnit
                    logo={solfej}
                    colour='#FFFFFF'
                    title='Solfej Mobile App'
                    link='https://www.solfej.io/'
                    timeperiod='August 2019 - Present'
                    subtitle="I'm currently working on the best new way to learn music theory and ear training."
                />
                <ExperienceUnit
                    logo={chord}
                    colour='#FFFFFF'
                    title='Chord Search'
                    link='https://www.solfej.io/chords'
                    timeperiod='Jan 2020 - Present'
                    subtitle="I'm currently working on creating a chord search engine."
                /> <ExperienceUnit
                    logo={scale}
                    colour='#FFFFFF'
                    title='Scale Search'
                    link='https://www.solfej.io/scales'
                    timeperiod='Jan 2020 - Present'
                    subtitle="I'm currently working on creating a scale search engine."
                />
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