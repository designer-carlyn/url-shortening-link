import React from "react";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="container">
        <div className="hero-banner__container">
          <div className="hero-banner__container-image-mobile">
            <img
              src="https://ik.imagekit.io/csdesigner/url_shortening_link/illustration-working_C0jfjmFgWi.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662848279"
              alt=""
            />
          </div>
          <div className="hero-banner__container-text">
            <h1>More than just shorter links</h1>
            <h2>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </h2>
            <button className="btn btn--lg btn--radius">Get Started</button>
          </div>
          <div className="hero-banner__container-image">
            <img
              src="https://ik.imagekit.io/csdesigner/url_shortening_link/illustration-working_C0jfjmFgWi.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662848279"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
