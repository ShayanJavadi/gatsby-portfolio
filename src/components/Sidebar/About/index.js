import React, { Component } from 'react'
import reduxLogo from '../../../assets/redux-logo.svg'
import gatsbyLogo from '../../../assets/gatsby-logo.png'
import constHeart from '../../../assets/const.png'

import './style.scss'

class About extends Component {
  render () {
    return (
      <div className="about">
        <div className="image">
        </div>
        
        <div className="bio">
          Hey, I'm Shayan Javadi
          <p>I'm a Fullstack Software Engineer, React fanatic, design enthusiast, and music theory nerd.</p>
          <p>Tools I love working with:</p>
          <div className="emoji">
            <img width="17" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/1024px-JavaScript-logo.png" className="js-logo" />&nbsp;
            <img width="34" alt="React-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" className="react-logo" />&nbsp;
            <img width="20" alt="Redux-icon" src={reduxLogo} className="redux-icon" />&nbsp;
            <img width="20" alt="GraphQL Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/512px-GraphQL_Logo.svg.png" className="graphql-icon" />
            <img width="20" alt="Gatsby Logo" src={gatsbyLogo} className="gatsby-icon" />
          </div>
        </div>

        
      </div>
    )
  }
}

export default About