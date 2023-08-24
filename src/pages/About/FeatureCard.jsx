import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { features } from "./FeaturesData";
import HoverRating from "../../components/Rating/HoverRating";

export default function FeatureCard({ title, desc }) {
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
