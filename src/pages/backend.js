import tb from '../images/techBlog.png'
import jate from '../images/JATE.png'

export default function backEnd() {
  return (
    <>
      <div className="pageTitle">
        <h1>Back End</h1>
      </div>
      <div id="grid">
        <div className="left">
          <h2 className="programTitle">Tech Blog</h2>
          <div className="tb">
            <div className="techImage">
              <img src={tb} alt="TechBlog"></img>
            </div>
            <div className="techInfo">
              <p>
                Using Express and Handlebars, this application is a fully functional blogsite
                that also features a login system, post editing and comments. 
              </p>
            </div>

            <div className="siteButtons">
              <a
                id="github"
                href="https://github.com/JoshuaToback/TechBlog"
              >
                Github
              </a>
              <a
                id="live"
                href="https://polar-cliffs-01056.herokuapp.com/"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <h2 className="programTitle">Just Another Text Editor</h2>
          <div className="jate">
            <div className="techImage">
              <img src={jate} alt="JATE"></img>
            </div>
            <div className="techInfo">
              <p>
                This is a Progressive Web Application that allows users to edit text within either
                their browser or offline. 
              </p>
            </div>

            <div className="siteButtons">
              <a id="github" href="https://github.com/JoshuaToback/TextAdjuster">
                Github
              </a>
              <a id="live" href="https://salty-temple-45216.herokuapp.com/">
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
