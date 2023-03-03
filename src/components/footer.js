import React from "react";

import "../scss/layout/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__container-logo">
            <img
              src="https://ik.imagekit.io/csdesigner/url_shortening_link/logo_footer_l0MAN-SvG.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677808782292"
              alt="logo"
            />
          </div>
          <div className="footer__container-link">
            <h6>Features</h6>
            <ul>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div className="footer__container-link">
            <h6>Resources</h6>
            <ul>
              <li>Blog</li>
              <li>Developer</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer__container-link">
            <h6>Company</h6>
            <ul>
              <li>About</li>
              <li>Our Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__container-social">
            <ul>
              <li>
                <a
                  href="https://github.com/designer-carlyn/url-shortening-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ik.imagekit.io/csdesigner/url_shortening_link/github_1xwmYr6XC.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677814278071"
                    alt="github"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/carlo-arlyn-segovia-a25b33158"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ik.imagekit.io/csdesigner/url_shortening_link/linkedin_59KFbKtyI.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677814278604"
                    alt="linkedin"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://designer-carlyn.github.io/my-porfolio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ik.imagekit.io/csdesigner/url_shortening_link/website_2svk36FRl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677814279214"
                    alt="website"
                  ></img>
                </a>
              </li>
              <li>
                <a
                  href="https://www.frontendmentor.io/profile/designer-carlyn"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="https://ik.imagekit.io/csdesigner/url_shortening_link/frontend_mentor_suIS0vO68.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677814278473"
                    alt="frontend"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
