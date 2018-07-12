import React, { Component } from 'react'

import './style.scss'
import 'font-awesome/css/font-awesome.min.css'

class Links extends Component {
  render() {
    return (
      <div className="links">
        <ul className="icons-list">
          <li className="icon">
            <a href="https://github.com/ShayanJavadi" target="_blank">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://www.linkedin.com/in/shayan-javadi/" target="_blank">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li className="icon">
            <a href="mailto:shayanjavadi1375@gmail.com">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
          <li className="icon">
            <a href="https://drive.google.com/open?id=1WyNuz1GzuHulrq0Jk-QmdCYpzEsSyiib" target="_blank">
              <i className="fa fa-file-text"></i>
            </a>
          </li>
        </ul>
        <div className="small">
          Built with ❤️ using <a href="https://github.com/ShayanJavadi/gatsby-portfolio" target="_blank">GatsbyJS</a>
        </div>
      </div>
    )
  }
}

export default Links
