import React from "react";
// import axios from "axios";

import "../scss/layout/index.scss";

const IndexPage = () => {
  // const [originalLink, setOriginalLink] = useState("");
  // const [url, setUrl] = useState("");
  // const [shortenLink, setShortLink] = useState("");
  // const [linkList, setLinkList] = useState([]);

  // const API_LINK = "https://api.shrtco.de/v2/shorten?url=";

  // function handleChange(event) {
  //   let value = event.target.value;
  //   setOriginalLink(value);
  //   setUrl(API_LINK + value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   getShortLink();
  // }

  // const copyLink = (value) => {
  //   navigator.clipboard.writeText(value);
  // };

  // const deleteLink = (id) => {
  //   setLinkList((prevList) => {
  //     return prevList.filter((linkItem, index) => {
  //       return index != id;
  //     });
  //   });
  // };

  // async function getShortLink() {
  //   try {
  //     const response = await axios.get(url);
  //     setShortLink(response.data.result["full_short_link"]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   if (shortenLink !== "") {
  //     setLinkList([
  //       ...linkList,
  //       {
  //         fullLink: originalLink,
  //         shortLink: shortenLink,
  //       },
  //     ]);
  //     setOriginalLink("");
  //     setUrl("");
  //     setShortLink("");
  //   }
  // }, [shortenLink, linkList, originalLink]);

  return (
    <main>
      <h1>THIS IS HOMEPAGE</h1>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Shorten It!</button>
      </form>
      {linkList.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.fullLink}</h1>
            <h2>{item.shortLink}</h2>
            <button onClick={() => copyLink(item.shortLink)}>Copy</button>
            <button onClick={() => deleteLink(index)}>Delete</button>
          </div>
        );
      })} */}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>URL Shortening Link</title>;
