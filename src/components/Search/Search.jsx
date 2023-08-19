import React, { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  Autocomplete,
  Box,
  CircularProgress,
} from "@mui/material";
import CardGrid from "../CardGrid/CardGrid";
import SearchIcon from "@mui/icons-material/Search";
import { SearchContainer } from "./Search.Styled";

function Search() {
  const [jsonResults, setJsonResults] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [pokemonCards, setPokemonCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1004")
      .then((response) => response.json())
      .then((json) => {
        const names = json.results.map((pokemon) => pokemon.name);
        setJsonResults(names);
      });
  }, []);

  useEffect(() => {
    if (selectedPokemon && jsonResults.includes(selectedPokemon)) {
      setIsLoading(true); // Set loading to true when fetching starts

      fetch(`https://api.pokemontcg.io/v2/cards?q=name:${selectedPokemon}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((json) => {
          if (json.data) {
            setPokemonCards(json.data);
          } else {
            setPokemonCards([]); // No valid data found
          }
          setIsLoading(false); // Set loading to false when fetching is complete
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setIsLoading(false); // Set loading to false even in case of error
        });
    } else {
      setPokemonCards([]); // Clear the results when no search term is entered or no valid term
    }
  }, [selectedPokemon, jsonResults]);

  return (
    <>
      <SearchContainer>
        <Stack style={{ background: "#fff" }}>
          <Autocomplete
            id="pokemon-card-search"
            getOptionLabel={(option) => option} // Use the option parameter directly
            options={jsonResults}
            sx={{ width: "100%" }}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            noOptionsText={"No Card Found"}
            renderOption={(props, option) => (
              <Box component="li" {...props} key={option}>
                {option}
              </Box>
            )}
            onInputChange={(event, newValue) => {
              setSelectedPokemon(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Pokemon Card"
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <>
                      <SearchIcon
                        color="action"
                        style={{ margin: "0.5rem 2rem" }}
                      />
                      {params.InputProps.startAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        </Stack>
      </SearchContainer>
      {/* Render Results Below */}
      {isLoading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <CardGrid pokemonCards={pokemonCards} />
        </>
      )}
    </>
  );
}

export default Search;
