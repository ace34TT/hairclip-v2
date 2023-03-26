import React from "react";
import Hero from "./Hero";
import About from "./About";
import { Helmet } from "react-helmet";
import Colors from "./colors/Colors";
import Commitment from "./Commitment";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Hairclip - Accueil</title>
      </Helmet>
      <Hero />
      <Colors />
      <About />
      <Commitment />
    </>
  );
}

export default Homepage;
