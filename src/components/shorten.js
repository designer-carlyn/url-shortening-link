import React, { useState, useEffect } from "react";
import axios from "axios";

const Shorten = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [url, setUrl] = useState("");
  const [shortenLink, setShortLink] = useState("");
  const [linkList, setLinkList] = useState([]);

  const [counter, setCounter] = useState(0);

  const API_LINK = "https://api.shrtco.de/v2/shorten?url=";

  function handleChange(event) {
    let value = event.target.value;
    setOriginalLink(value);
    setUrl(API_LINK + value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getShortLink();
    setCounter((count) => count + 1);
  }

  const copyLink = (value, index) => {
    navigator.clipboard.writeText(value);
    console.log(index);
  };

  // const deleteLink = (id) => {
  //   setLinkList((prevList) => {
  //     return prevList.filter((linkItem, index) => {
  //       return index != id;
  //     });
  //   });
  // };

  async function getShortLink() {
    try {
      const response = await axios.get(url);
      setShortLink(response.data.result["full_short_link"]);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (shortenLink !== "") {
      setLinkList([
        ...linkList,
        {
          fullLink: originalLink,
          shortLink: shortenLink,
          copyLink: false,
          id: counter,
        },
      ]);
      setOriginalLink("");
      setUrl("");
      setShortLink("");
    }
  }, [shortenLink, linkList, originalLink, counter]);

  return (
    <section className="shorten">
      <div className="container">
        <div className="shorten__container">
          <div className="shorten__container-holder">
            <form onSubmit={handleSubmit} className="shorten__container-form">
              <div className="input-group">
                <input
                  onChange={handleChange}
                  type="text"
                  className="input-link"
                  placeholder="Shorten a link here..."
                />
                <small className="link-validation">Please add a link</small>
              </div>
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
                    <button
                      className="btn btn--sm"
                      onClick={() => copyLink(link.shortLink)}
                    >
                      Copy
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shorten;
