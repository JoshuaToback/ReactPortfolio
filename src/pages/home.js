import React from "react"
import headshot from '../images/headshot.jpg'

export default function home() {
    return (
        <>
        <h1>Full Stack Web Developer</h1>
        <div className="intro-container">
            <div className="aboutMe">
                <h2>About Me</h2>
                <p>I am a Full Stack Web Developer who specializes in making sure your website looks and functions how you want it to! 
                    I specialize in designing and building your projects with a collaborative and inspired mindset!
                </p>

                <p>Click the links above to check out my projects!</p>
            </div>

            <div className="headshot">
                <img src={headshot} alt="headshot" />
                <div className="hide">
                    <p>I am also a voice actor, screenwriter, streamer, and musician!</p>
                </div>
            </div>

            <div className="technology">
                <h2>Skills</h2>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
        </>
    )
}