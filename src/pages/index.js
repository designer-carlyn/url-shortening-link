import React from "react";
// import axios from "axios";

/* Import Components */
import Header from "../components/header";
import HeroBanner from "../components/hero-banner";
import Shorten from "../components/shorten";
import Features from "../components/features";

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
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>URL Shortening Link</title>;
