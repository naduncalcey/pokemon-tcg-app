import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import HoverRating from "../../components/Rating/HoverRating";

const features = [
  {
    title: "Comprehensive Card Collection",
    desc: `Discover a vast collection of Pokémon trading cards from various sets and series. Our app offers a comprehensive library, featuring cards from different generations, each meticulously designed to capture the essence of the Pokémon universe.`,
  },
  {
    title: "Set Exploration",
    desc: "Delve into the expansive world of Pokémon sets, each with its own unique theme, artwork, and strategy. Uncover the stories behind each set and uncover the cards that hold the key to your deck's success.",
  },
  {
    title: "Set Details and Visualization",
    desc: `Ever wondered about the intricacies of a Pokémon set? Our app provides in-depth set details, including set name, series, release date, and card count. Visualize the stunning artwork of each set and bring the magic of Pokémon to life on your device.`,
  },

  {
    title: "Search and Filter",
    desc: `Effortlessly search and filter through the vast card collection. Find cards based on name, type, rarity, and more. Our user-friendly search and filter options ensure that you locate your desired cards with ease.`,
  },
  {
    title: "Card Details and Types",
    desc: `Get up close and personal with your favorite cards. Explore detailed card information, including attack points, weaknesses, and abilities. Immerse yourself in the strategic aspects of the game by analyzing the card types, strengths, and interactions.`,
  },
  {
    title: "User-Friendly Interface",
    desc: `Our app boasts a sleek and intuitive user interface that guides you seamlessly through your Pokémon journey. Whether you're a beginner or a seasoned player, you'll feel right at home navigating our app's features.`,
  },
  {
    title: "Continuous Updates",
    desc: `Stay on the cutting edge of the Pokémon trading card world with regular updates. New sets, cards, and features are introduced to keep the experience fresh and exciting.`,
  },
  {
    title: "Community Engagement",
    desc: `Connect with fellow trainers, share strategies, and participate in discussions within our vibrant community. Forge new friendships and discover tips and tricks to enhance your Pokémon experience.`,
  },
];

export default function FeatureCards() {
  return (
    <Grid container spacing={2}>
      {features.map((feature) => (
        <Grid item key={feature.title} xs={12} sm={6} md={4} lg={3}>
          <Card
            sx={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "space-between",
              minWidth: 275,
              padding: "1rem 0 1.5rem 0",
              minHeight: 260,
            }}
          >
            <CardContent>
              <Typography
                variant="h3"
                component="div"
                textAlign="center"
                fontWeight={700}
                sx={{ fontSize: "1.5rem", marginBottom: "0.85rem" }}
              >
                {feature.title}
              </Typography>

              <Typography
                sx={{ mb: 1.5 }}
                color="text.secondary"
                textAlign="center"
              >
                {feature.desc}
              </Typography>
              {/* <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography> */}
            </CardContent>
            <HoverRating />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
