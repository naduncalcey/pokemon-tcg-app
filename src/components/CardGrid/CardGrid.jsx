import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import CardDetailView from "../CardDetailedView/CardDetailedView";
import { CardGridDiv, ChangeView, LayoutCardGrid } from "./CardGrid.Styled";
import ViewListRoundedIcon from "@mui/icons-material/ViewListRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";

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

function CardGrid({ pokemonCards }) {
  const [selectedCard, setSelectedCard] = useState(null);
  const [isListView, setIsListView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const cardsPerPage = 15;
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const displayedCards = pokemonCards.slice(startIndex, endIndex);

  const handleViewClick = (card) => {
    setSelectedCard(card);
  };

  const handleClose = () => {
    setSelectedCard(null);
  };

  const handleListViewClick = () => {
    setIsListView(!isListView);
    setCurrentPage(1); // Reset to the first page
  };

  useEffect(() => {
    setCurrentPage(1); // Reset to the first page when data changes
  }, [pokemonCards]);

  return (
    <>
      <ChangeView>
        <Button onClick={handleListViewClick}>
          {isListView ? <GridViewRoundedIcon /> : <ViewListRoundedIcon />}
        </Button>
      </ChangeView>
      <CardGridDiv>
        {pokemonCards.length === 0 ? (
          <p>No data available.</p>
        ) : isListView ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Hp</TableCell>
                  <TableCell>Subtypes</TableCell>
                  <TableCell>Rarity</TableCell>
                  <TableCell>Supertype</TableCell>
                  <TableCell>View</TableCell>
                  {/* Add more table headers if needed */}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedCards.map((card) => (
                  <TableRow key={card.id} onClick={() => handleViewClick(card)}>
                    <TableCell>{card.name}</TableCell>
                    <TableCell>{card.types}</TableCell>
                    <TableCell>{card.hp}</TableCell>
                    <TableCell>{card.subtypes}</TableCell>
                    <TableCell>{card.rarity}</TableCell>
                    <TableCell>{card.supertype}</TableCell>
                    <TableCell>
                      <Button onClick={() => handleViewClick(card)}>
                        View Details
                      </Button>
                    </TableCell>
                    {/* Add more table cells with card information */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <LayoutCardGrid>
            {displayedCards.map((card) => (
              <Paper elevation={3} key={card.id} className="pk">
                <div className="pk-card">
                  <div className="pk-card-title">
                    <h4 title="card name">{card.name}</h4>
                    {card.types && card.types[0] && (
                      <p
                        className="type-pill"
                        title="type"
                        style={{
                          fontSize: "0.85rem",
                          color: `${typeToImage[card.types[0].toLowerCase()]}`,
                        }}
                      >
                        {card.types[0]}
                      </p>
                    )}
                  </div>
                  <div className="image-container">
                    <img
                      loading="lazy"
                      src={card.images.small}
                      alt={card.name}
                    />
                  </div>
                  <div className="bottom-bar">
                    <Button onClick={() => handleViewClick(card)}>
                      View Details
                    </Button>
                  </div>
                </div>
              </Paper>
            ))}
          </LayoutCardGrid>
        )}
        {pokemonCards.length === 0 ? (
          null
        ) : (
          <div className="pagination-container">
            <Button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            {Array.from({ length: Math.ceil(pokemonCards.length / cardsPerPage) }).map(
              (_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </Button>
              )
            )}
            <Button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={endIndex >= pokemonCards.length}
            >
              Next
            </Button>
          </div>
        )}

        {/* Render the CardDetailView component */}
        <CardDetailView selectedCard={selectedCard} onClose={handleClose} />
      </CardGridDiv>
    </>
  );
}

export default CardGrid;
