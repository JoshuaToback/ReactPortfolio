import React from 'react'
import github from "../images/github.png"
import linked from "../images/linkedin.png"
import email from "../images/eMail.png"

function footer() {
  return (
<footer>
        <div className="footer">
          <h2>Developed by Joshua Toback</h2>
          <ul className="socials">
            <li>
              <a href="https://github.com/JoshuaToback">
                <img className="appIcon" src={github} alt="github"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-toback/">
                <img className="appIcon" src={linked} alt="linkedin"></img>
              </a>
            </li>
            <li>
              <a href="mailto:joshuatobackdev@gmail.com">
                <img className="appIcon" src={email} alt="email"></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default footer
