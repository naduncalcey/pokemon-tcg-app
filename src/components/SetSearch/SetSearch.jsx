import React, { useState, useEffect } from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import { SetSearchLayout } from "./SetSearch.Styled";
import { LayoutCardGrid } from "../CardGrid/CardGrid.Styled";
import CardDetailView from "../CardDetailedView/CardDetailedView";

const typeToImage = {
  grass: "#62BC5A",
  fire: "#FF9C55",
  water: "#5090D5",
  lightning: "#F4D23B",
  fighting: "#CE426A",
  psychic: "#FA7178",
  colorless: "#929DA2",
  dragon: "#7a7560",
  metal: "#4f4f4f",
  fairy: "#f893d4",
};

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

  const handleCardView = (card) => {
    setSelectedCardDetails(card);
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
        <LayoutCardGrid>
          {cards.map((card) => (
            <div key={card.id} className="pk">
              <div className="pk-card">
                <div className="pk-card-title">
                  <h4>{card.name}</h4>
                  {card.types && card.types[0] && (
                    <p
                      className="type-pill"
                      style={{
                        background: `${
                          typeToImage[card.types[0].toLowerCase()]
                        }`,
                      }}
                    >
                      {card.types[0]}
                    </p>
                  )}
                </div>
                <div className="image-container">
                  <img src={card.images.small} alt={card.name} />
                </div>
                <div className="bottom-bar">
                  <Button onClick={() => handleCardView(card)}>
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </LayoutCardGrid>
      </SetSearchLayout>
      <CardDetailView
        selectedCard={selectedCardDetails}
        onClose={handleCloseCardView}
      />
    </>
  );
};

export default SetSearch;
