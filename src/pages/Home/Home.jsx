import React from "react";
import HeroSvg from "../../assets/images/pockeSVG.svg";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <main style={{ minHeight: "82vh", display: "flex" }}>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ margin: "1.5rem 0" }}
      >
        <Grid
          item
          width={{ xs: 200, sm: 300, md: 400, lg: 600 }}
          order={{ xs: 1, md: 2 }}
        >
          <img style={{ maxWidth: "100%" }} src={HeroSvg} alt="HeroSvg" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          order={{ xs: 2, md: 1 }}
          alignSelf="center"
        >
          <ul>
            <Typography
              variant="h2"
              fontWeight={700}
              // sx={{ fontSize: "2rem" }}
              fontSize={{ xs: "2rem", md: "2.5", lg: "3rem" }}
            >
              Cutting-Edge
            </Typography>
            <Typography
              variant="h2"
              fontWeight={700}
              // sx={{ fontSize: "2rem" }}
              fontSize={{ xs: "2rem", md: "2.5", lg: "3rem" }}
              gutterBottom
            >
              Pokémon Trading Card App
            </Typography>

            <li style={{ marginLeft: "2rem" }}>
              {" "}
              <Typography sx={{ fontSize: "1.25rem" }} variant="body2">
                search with us
              </Typography>
            </li>
            <li style={{ marginLeft: "2rem" }}>
              <Typography sx={{ fontSize: "1.25rem" }} variant="body2">
                find with us
              </Typography>
            </li>
            <li style={{ marginLeft: "2rem" }}>
              <Typography sx={{ fontSize: "1.25rem" }} variant="body2">
                own with us
              </Typography>
            </li>
          </ul>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              marginTop: "2rem",
              // justifyContent: "center",
            }}
          >
            <Button
              onClick={() => navigate("/search")}
              sx={{
                color: "#fff",
                background: "#000",
                "&:hover": {
                  bgcolor: "#000",
                  opacity: 0.8,
                },
              }}
              variant="contained"
            >
              Search Card
            </Button>
            <Button
              onClick={() => navigate("/set-search")}
              sx={{
                color: "#000",
                borderColor: "#000",
                "&:hover": {
                  borderColor: "#000",
                  opacity: 0.5,
                },
              }}
              variant="outlined"
            >
              Search Set
            </Button>
          </Box>
        </Grid>
      </Grid>
    </main>
  );
}

export default Home;
