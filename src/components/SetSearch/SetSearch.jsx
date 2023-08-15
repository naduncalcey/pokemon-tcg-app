// SetSearch.js
import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Card,
} from "@mui/material";
import axios from "axios";
import { SetSearchLayout } from "./SetSearch.Styled";

const SetSearch = () => {
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Fetch sets from API
    axios
      .get("https://api.pokemontcg.io/v2/sets")
      .then((response) => {
        const { data } = response.data;
        setSets(data);
      })
      .catch((error) => {
        console.error("Error fetching sets:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch cards when selectedSet changes
    if (selectedSet) {
      axios
        .get(`https://api.pokemontcg.io/v2/cards?q=set.id:${selectedSet}`)
        .then((response) => {
          const { data } = response.data;
          setCards(data);
        })
        .catch((error) => {
          console.error("Error fetching cards:", error);
        });
    }
  }, [selectedSet]);

  const handleSetChange = (event) => {
    setSelectedSet(event.target.value);
  };

  return (
    <SetSearchLayout>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Search all sets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedSet}
          onChange={handleSetChange}
          label="Search all sets"
        >
          {sets.map((set) => (
            <MenuItem key={set.id} value={set.id}>
              {set.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        {/* Render cards in a grid */}
        <Grid container spacing={2}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={6} sm={4} md={3}>
              <Card>{card.name}</Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </SetSearchLayout>
  );
};

export default SetSearch;
