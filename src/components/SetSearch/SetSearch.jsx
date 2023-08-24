import React, { useState, useEffect } from "react";
import CardGrid from "../CardGrid/CardGrid";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CircularProgress,
  Card,
} from "@mui/material";
import axios from "axios";
import { SetSearchLayout, SetDetailsCard, SetDetailsCardHolder } from "./SetSearch.Styled";
import CardDetailView from "../CardDetailedView/CardDetailedView";
import NoData from "../NoData/NoData";

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
          <NoData text="No Set Data Available" />
        ) : (
          selectedSet && (
            <div className="selected-set-details">
              {selectedSetDetails ? (
                <SetDetailsCardHolder>
                  <Card variant="outlined">
                    <SetDetailsCard>
                      <div className="logo-img-div">
                        <img
                          className="logo-img"
                          src={selectedSetDetails.images.logo}
                          alt="logo"
                        />
                      </div>
                      <div className="details-holder">
                        <div className="details-grid">
                          <p>
                            Name: <b>{selectedSetDetails.name}</b>
                          </p>
                          <p>
                            Series: <b>{selectedSetDetails.series}</b>
                          </p>
                          <p>
                            Release Date:{" "}
                            <b>{selectedSetDetails.releaseDate}</b>
                          </p>
                          <p>
                            Updated At: <b>{selectedSetDetails.updatedAt}</b>
                          </p>
                          <p>
                            Total Cards: <b>{selectedSetDetails.total}</b>
                          </p>
                        </div>
                        <img
                          className="symbol-img"
                          src={selectedSetDetails.images.symbol}
                          alt="symbol"
                        />
                      </div>
                    </SetDetailsCard>
                  </Card>
                </SetDetailsCardHolder>
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
