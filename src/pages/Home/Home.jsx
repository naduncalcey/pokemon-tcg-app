import React from "react";
import { HomeContainer } from "./Home.Styles";
import { motion } from "framer-motion";
import pokemon from "../../assets/images/charizard.png";

function Home() {
  const textFadeInVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageFadeInVariant = {
    hidden: { opacity: 0, y: -50 }, // Initially hidden and moved up
    show: { opacity: 1, y: 0, transition: { duration: 1 } }, // Fade in and move down to its original position
  };

  return (
    <HomeContainer>
      <div className="box-container">
        <div className="content">
          <motion.div
            initial="hidden"
            animate="show"
            variants={textFadeInVariant}
          >
            <h1 className="heading">
              Pokemon TCG Search - Ultimate Trading Card Experience.
            </h1>
            <p className="subtext">
              Built specifically to help collectors who are building Pokemon TCG
              master sets.
            </p>
            <div className="btn-layout">
              <button className="btn-layout--primary">
                Search Pokemon Cards
              </button>
              <button className="btn-layout--secondary">Set Search</button>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={imageFadeInVariant}
          className="image"
        >
          <img src={pokemon} alt="charizard" />
        </motion.div>
      </div>
    </HomeContainer>
  );
}

export default Home;
