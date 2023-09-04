import React from "react";
import HeroSvg from "../../assets/images/pockeSVG.svg";
import { Box, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main style={{ minHeight: "82vh", display: "flex", backgroundColor: '#D0BFFF' }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "1.5rem 0" }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img style={{ maxWidth: "100%" }} src={HeroSvg} alt="HeroSvg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            className="font"
            variant="h2"
            fontWeight={700}
            fontFamily={'Poppins'}
            fontSize={{ xs: "2rem", md: "2.5", lg: "3rem" }}
            textAlign="center" // Center-align the text
          >
            Cutting-Edge <span><span className="my-special-element magic"><span className="magic-text">Pokémon</span></span></span> Trading Card App
          </Typography>
          {/* <div className="properties">
            <div className="point">search with us</div>
            <div className="point">find with us</div>
            <div className="point">own with us</div>
          </div> */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Stack buttons vertically
              alignItems: "center", // Center-align the buttons
              marginTop: "2rem",
            }}
          >
            <div className="btn-container">
              <button
                  className="btn"
                  onClick={() => navigate("/search")}
                  fontFamily={'Poppins'}
                >
                  Search Card
                </button>
              <button
                onClick={() => navigate("/set-search")}
                className="btn"
              >
                Search Set
              </button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}

export default Home;
