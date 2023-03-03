import React, { useState, useEffect } from "react";
import axios from "axios";

const Shorten = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [url, setUrl] = useState("");
  const [shortenLink, setShortLink] = useState("");
  const [linkList, setLinkList] = useState(
    JSON.parse(localStorage.getItem("linkList") || "[]")
  );

  const [counter, setCounter] = useState(0);

  const [errorStatus, setErrorStatus] = useState(null);

  const API_LINK = "https://api.shrtco.de/v2/shorten?url=";

  function handleChange(event) {
    let value = event.target.value;
    setOriginalLink(value);
    setUrl(API_LINK + value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getShortLink();
    setCounter(() => linkList.length + 1);
    document.getElementById("input-link-id").value = "";
  }

  const copyLink = (value, id) => {
    navigator.clipboard.writeText(value);
    const newState = linkList.map((link) => {
      if (link.id === id) {
        return { ...link, copyLink: "true" };
      }

      return link;
    });

    setLinkList(newState);
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
          copyLink: false,
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
  }, [shortenLink, linkList, originalLink, counter]);

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
              <button className="btn btn--lg">Shorten It</button>
            </form>
            <div className="shorten__container-list">
              {linkList.map((link) => {
                return (
                  <div className="list-item" key={link.id}>
                    <div className="item-original-link">{link.fullLink}</div>
                    <div className="item-shorten-link">
                      <a href={link.shortLink} target="__blank">
                        {link.shortLink}
                      </a>
                    </div>
                    {link.copyLink ? (
                      <button
                        className="btn btn--sm btn--copied"
                        disabled
                        onClick={() => copyLink(link.shortLink, link.id)}
                      >
                        Copied
                      </button>
                    ) : (
                      <button
                        className="btn btn--sm"
                        onClick={() => copyLink(link.shortLink, link.id)}
                      >
                        Copy
                      </button>
                    )}
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
