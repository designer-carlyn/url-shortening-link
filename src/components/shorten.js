import React, { useState, useEffect } from "react";
import axios from "axios";

const Shorten = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [url, setUrl] = useState("");
  const [shortenLink, setShortLink] = useState("");
  const [linkList, setLinkList] = useState([]);

  const [counter, setCounter] = useState(0);
  const [errorStatus, setErrorStatus] = useState(null);
  const [enableShorten, setEnableShorten] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const API_LINK = "https://api.shrtco.de/v2/shorten?url=";

  function handleChange(event) {
    let value = event.target.value;
    if (value !== "") {
      setEnableShorten(true);
    } else {
      setEnableShorten(false);
    }
    setOriginalLink(value);
    setUrl(API_LINK + value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getShortLink();
    setCounter(() => linkList.length + 1);
    document.getElementById("input-link-id").value = "";
    setEnableShorten(false);
  }

  const copyLink = (value) => {
    navigator.clipboard.writeText(value);
    setShowLoader(true);
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  const deleteAllLink = () => {
    setLinkList([]);
    localStorage.removeItem("linkList");
  };

  async function getShortLink() {
    try {
      const response = await axios.get(url);
      setShortLink(response.data.result["full_short_link"]);
    } catch (error) {
      if (error.response.data.error_code === 2) {
        setErrorStatus("This is not a valid URL");
      } else if (error.response.data.error_code === 3) {
        setErrorStatus("Wait a second and try again");
      } else {
        setErrorStatus("Unexpected error occured. Please try again");
      }
    }
  }

  useEffect(() => {
    if (shortenLink !== "") {
      setLinkList([
        ...linkList,
        {
          id: counter,
          fullLink: originalLink,
          shortLink: shortenLink,
        },
      ]);
      setOriginalLink("");
      setUrl("");
      setShortLink("");
    }

    if (linkList.length > 0) {
      localStorage.setItem("linkList", JSON.stringify(linkList));
    }

    setTimeout(() => {
      setLinkList(JSON.parse(localStorage.getItem("linkList") || "[]"));
    }, 1000);
  }, [shortenLink, linkList, originalLink, counter, errorStatus]);

  return (
    <section className="shorten">
      <div className="container">
        <div className="shorten__container">
          <div className="shorten__container-holder">
            <form onSubmit={handleSubmit} className="shorten__container-form">
              <input
                onChange={handleChange}
                type="text"
                className="input-link"
                placeholder="Shorten a link here..."
                id="input-link-id"
              />
              {errorStatus !== null ? (
                <small className="link-validation">{errorStatus}</small>
              ) : null}
              {enableShorten ? (
                <button className="btn btn--lg">Shorten It</button>
              ) : (
                <button className="btn btn--lg" disabled>
                  Shorten It
                </button>
              )}
            </form>
            <div className="shorten__container-list">
              {linkList.map((link) => {
                return (
                  <div className="list-item" key={link.id}>
                    <h2 className="item-original-link">{link.fullLink}</h2>
                    <div className="item-shorten-link">
                      <a href={link.shortLink} target="__blank">
                        {link.shortLink}
                      </a>
                    </div>
                    <button
                      className={
                        showLoader ? "btn btn--sm active" : "btn btn--sm"
                      }
                      onClick={() => copyLink(link.shortLink, link.id)}
                    >
                      {showLoader ? "Copied" : "Copy"}
                    </button>
                  </div>
                );
              })}
            </div>
            {linkList >= 0 ? null : (
              <div className="shorten__container-delete">
                <button className="btn btn--lg" onClick={deleteAllLink}>
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
