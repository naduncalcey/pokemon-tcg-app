import React, { useState, useEffect } from "react";
import CardGrid from "../CardGrid/CardGrid";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { SetSearchLayout } from "./SetSearch.Styled";
import CardDetailView from "../CardDetailedView/CardDetailedView";

const LoadingSpinner = () => (
  <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <CircularProgress />
  </div>
);

const SetSearch = () => {
  const [sets, setSets] = useState([]);
  const [selectedSet, setSelectedSet] = useState("");
  const [selectedSetDetails, setSelectedSetDetails] = useState(null);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCardDetails, setSelectedCardDetails] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.pokemontcg.io/v2/sets")
      .then((response) => {
        const { data } = response.data;
        setSets(data);
      })
      .catch((error) => {
        console.error("Error fetching sets:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    if (selectedSet) {
      setSelectedSetDetails(null); // Reset selected set details
      setCards([]); // Clear previously loaded cards
      axios
        .all([
          axios.get(`https://api.pokemontcg.io/v2/sets/${selectedSet}`),
          axios.get(
            `https://api.pokemontcg.io/v2/cards?q=set.id:${selectedSet}`
          ),
        ])
        .then(
          axios.spread((setResponse, cardsResponse) => {
            const { data: setDetails } = setResponse.data;
            const { data: cardData } = cardsResponse.data;
            setSelectedSetDetails(setDetails);
            setCards(cardData);
          })
        )
        .catch((error) => {
          console.error("Error fetching set and/or cards:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setSelectedSetDetails(null);
      setCards([]);
      setLoading(false);
    }
  }, [selectedSet]);

  const handleSetChange = (event) => {
    setSelectedSet(event.target.value);
  };

  const handleCloseCardView = () => {
    setSelectedCardDetails(null);
  };

  return (
    <>
      <SetSearchLayout>
        <div className="set-search-container">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Search all sets
            </InputLabel>
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
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : cards.length === 0 ? (
          <p>No data available</p>
        ) : (
          selectedSet && (
            <div className="selected-set-details">
              <h2>Selected Set Details</h2>
              {selectedSetDetails ? (
                <div>
                  <p>Name: {selectedSetDetails.name}</p>
                  <p>Series: {selectedSetDetails.series}</p>
                  {/* Display other set details as needed */}
                </div>
              ) : (
                <LoadingSpinner />
              )}
            </div>
          )
        )}
        <CardGrid pokemonCards={cards} />
      </SetSearchLayout>
      <CardDetailView
        selectedCard={selectedCardDetails}
        onClose={handleCloseCardView}
      />
    </>
  );
};

export default SetSearch;
