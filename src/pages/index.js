import React from "react";
// import axios from "axios";

/* Import Components */
import Header from "../components/header";
import HeroBanner from "../components/hero-banner";
import Shorten from "../components/shorten";
import Features from "../components/features";
import Advertisement from "../components/advertisement";
import Footer from "../components/footer";

/* Import Style */
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "../scss/layout/index.scss";
import "../scss/pages/home.scss";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <HeroBanner />
      <Shorten />
      <Features />
      <Advertisement />
      <Footer />
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>URL Shortening Link</title>
    <meta property="og:title" content="URL Shortening Link" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Try this url shortening to make your link short."
    />
    <meta
      property="og:image"
      content="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/url-shortening-link_zlomdqUydS.webp?updatedAt=1678074115351"
    />
  </>
);
