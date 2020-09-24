import React from "react";
import linkedIn from "../components/img/linkedin_logo.png";
import github from "../components/img/github_logo.png";
import ig from "../components/img/ig_logo.png";

function Footer() {
  return (
    <div className="row center">
      <div className="col s12">
        <footer className="footer" sticky="bottom">
          <container>
            <div className="row center">
              <div className="col s12">
                <p>Find me online</p>
                <a href="https://www.linkedin.com/in/jessicamenius/">
                  <img className="contact-icon" src={linkedIn} alt="linkedIn" />
                </a>
                &nbsp;
                <a href="https://github.com/jessicamenius">
                  <img className="contact-icon" src={github} alt="GitHub" />
                </a>
                &nbsp;
                <a href="https://www.instagram.com/jmonkey1283/">
                  <img className="contact-icon" src={ig} alt="Instagram" />
                </a>
              </div>
            </div>
          </container>
        </footer>
      </div>
    </div>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <div className="row center">
//       <div className="col s12">
//         <p>Find me on the internet</p>
//         <a href="https://www.linkedin.com/in/mathew-wilmot-937738174/">
//           <img className="contact-icon" src={LILogo} alt="linkedIn Logo" />
//         </a>
//         &nbsp;
//         <a href="https://github.com/MatWilmot">
//           <img className="contact-icon" src={GHLogo} alt="GitHub Logo" />
//         </a>
//         &nbsp;
//         <a href="https://www.facebook.com/matwilmot">
//           <img className="contact-icon" src={FBLogo} alt="Facebook Logo" />
//         </a>
//         &nbsp;
//         <a href="https://medium.com/@matwilmot90">
//           <img className="contact-icon" src={MLogo} alt="Medium Logo" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Footer;
