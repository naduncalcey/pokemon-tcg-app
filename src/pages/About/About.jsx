import React from "react";
import HeroImage from "../../assets/images/pokemon.png";
import styled from "styled-components";
import FeatureCard from "./FeatureCard";
import { features } from "./FeaturesData";
import { Box, Grid, Stack, Typography } from "@mui/material";
import UserFeedback from "../../components/Rating/UserFeedback";
const AboutText = styled.div`
  padding: 26px 20px 26px 20px;
  ul {
    list-style: none;
    padding: 10px 20px;
  }
  .last-para {
    padding-top: 10px;
  }
`;

function About() {
  return (
    <AboutText>
      <Box
        sx={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Stack>
          <Typography
            fontWeight={700}
            variant="h1"
            sx={{
              fontSize: "2.25rem",
              marginBottom: "2rem",
            }}
          >
            Introducing the Pokémon Trading Card App: Unleash Your Inner
            Trainer!
          </Typography>

          <Typography
            sx={{
              marginBottom: "3rem",
              maxWidth: { lg: "70%" },
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Are you ready to embark on a thrilling journey into the captivating
            world of Pokémon? Look no further than our cutting-edge Pokémon
            Trading Card App – your one-stop destination to dive into the
            excitement of collecting, trading, and battling with iconic Pokémon
            trading cards. With a range of powerful features, our app offers an
            unparalleled experience that caters to both seasoned trainers and
            curious newcomers. Let's explore the{" "}
            <Typography
              variant="h2"
              fontWeight={600}
              sx={{ fontSize: { xs: "1rem", md: "1.2rem" }, display: "inline" }}
            >
              extraordinary features
            </Typography>{" "}
            that make our app stand out from the rest:
          </Typography>
        </Stack>
      </Box>
      <FeatureCard />

      <Box
        sx={{
          margin: "2rem 0",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          flexDirection: { xs: "column" },
        }}
      >
        <Typography
          sx={{ textAlign: { xs: "center", md: "start" } }}
          variant="h5"
        >
          What do you think about us ?
        </Typography>
        <UserFeedback />
      </Box>
    </AboutText>
  );
}

export default About;
