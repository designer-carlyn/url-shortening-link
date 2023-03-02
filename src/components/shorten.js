import React from "react";
import { Link } from "gatsby";

const Shorten = () => {
  return (
    <section className="shorten">
      <div className="container">
        <div className="shorten__container">
          <div className="shorten__container-holder">
            <form className="shorten__container-form">
              <div className="input-group">
                <input
                  type="text"
                  className="input-link"
                  placeholder="Shorten a link here..."
                />
                <small className="link-validation">Please add a link</small>
              </div>
              <button className="btn btn--lg">Shorten It</button>
            </form>
            <div className="shorten__container-list">
              <div className="list-item">
                <div className="item-original-link">
                  https://www.frontendmentor.io
                </div>
                <div className="item-shorten-link">
                  <Link to="shrtco.de/KCveN">shrtco.de/KCveN</Link>
                </div>
                <button className="btn btn--sm">Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
