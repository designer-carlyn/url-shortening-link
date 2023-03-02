import React from "react";

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <h3>Advanced Statistics</h3>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="features__list">
          <div className="features-item brand-recognition">
            <div className="item-icon">
              <img
                src="https://ik.imagekit.io/csdesigner/url_shortening_link/icon-brand-recognition_AqzXXRmUgi.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662849095"
                alt="Brand Recognition"
              ></img>
            </div>
            <h4>Brand Recognition</h4>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="features-item detailed-records">
            <div className="item-icon">
              <img
                src="https://ik.imagekit.io/csdesigner/url_shortening_link/icon-detailed-records_7y-JfHAwNb.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662848960"
                alt="Detailed Records"
              ></img>
            </div>
            <h4>Detailed Records</h4>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="features-item fully-customizable">
            <div className="item-icon">
              <img
                src="https://ik.imagekit.io/csdesigner/url_shortening_link/icon-fully-customizable_qHhUVYq3M.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1677662851369"
                alt="Fully Customizable"
              ></img>
            </div>
            <h4>Fully Customizable</h4>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
