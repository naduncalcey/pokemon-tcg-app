import React, {useState, useEffect} from "react";
import { HomeContainer } from "./Home.Styles";
import { motion } from "framer-motion";
import { pokemons } from "../../assets/images";
import { Link } from "react-router-dom";

function Home() {
  const textFadeInVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 1.25 } },
  };

  const imageFadeInVariant = {
    hidden: { opacity: 0, y: -50 }, // Initially hidden and moved up
    show: { opacity: 1, y: 0, transition: { duration: 1.25 } }, // Fade in and move down to its original position
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let randomIndex = currentImageIndex;
      while(randomIndex === currentImageIndex)
      {
        randomIndex = Math.floor(Math.random() * pokemons.length);
      }
      setCurrentImageIndex(randomIndex);
    }, 3000)
    // will change every 3 seconds

    return () => {
      clearInterval(timer);
    };
  }, [currentImageIndex])
  
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
              Pokemon TCG Search - Ultimate <p className="text-gradient">Trading Card</p> Experience.
            </h1>
            <p className="subtext">
              Built specifically to help collectors who are building Pokemon TCG
              master sets.
            </p>
            <div className="btn-layout">
              <Link to='/set-search'>
                <button className="btn-layout--secondary">
                  Search Pokemon Cards
                </button>
              </Link>
              <Link to="/search">
                <button className="btn-layout--secondary">Set Search</button>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={imageFadeInVariant}
          className="image"
        >
          <img src={pokemons[currentImageIndex]} alt="pokemon" />
        </motion.div>
      </div>
    </HomeContainer>
  );
}

export default Home;
