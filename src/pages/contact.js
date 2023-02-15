import React from "react";
import ContactForm from "../components/contactForm.js";

const resumePDF = "http://localhost:3000/JoshuaToback_Resume.pdf";


export default function Contact() {
  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  
  return (
    <>
      <div className="pageTitle">
        <h1>Contact Me!</h1>
      </div>

      <div className="contactContainer">
        <div className="contactBox">
          <p>
            If you have any questions or concerns, please feel free to reach out
            via email or social media!
          </p>

          <p>Let's work together to design something great!</p>
        </div>

        <div className="contactBox">
          <div id="Resume">
            <button onClick={() => downloadFileAtURL(resumePDF)}>
              Download Resume
            </button>
          </div>
          <div>
            <h2>Email me @ joshuatobackdev@gmail.com!</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
