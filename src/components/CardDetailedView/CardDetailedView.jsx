import React from "react";
import { DialogTitle, DialogContent, Button } from "@mui/material";
import { DialogContainer } from "./CardDetailed.Styled";
import { CardDetailsDiv } from "./CardDetailed.Styled";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from '@mui/icons-material/Close';

function CardDetailView({ selectedCard, onClose }) {
  return (
    <DialogContainer open={selectedCard !== null} onClose={onClose}>
      <div className="card-header">
        <DialogTitle>{selectedCard ? selectedCard.name : ""}</DialogTitle>
        <Button onClick={onClose}><CloseIcon /></Button> {/* Close button */}
      </div>
      <DialogContent>
        {selectedCard && (
          <CardDetailsDiv>
            <div className="img-div">
              <img src={selectedCard.images.large} alt={selectedCard.name} />
              {/* Display other detailed information here */}
            </div>
            <div className="details-div">
              <div className="detail-row">
                <h6>Name:</h6>
                <p>{selectedCard.name}</p>
              </div>
              <div className="detail-row">
                <h6>Set:</h6>
                <p>{selectedCard.set.name}</p>
              </div>
              <div className="detail-row">
                <h6>Artist:</h6>
                <p>{selectedCard.artist}</p>
              </div>
              <div className="detail-row">
                <h6>Rarity:</h6>
                <p>{selectedCard.rarity}</p>
              </div>
              <div className="detail-row">
                <h6>Release Date:</h6>
                <p>{selectedCard.set.releaseDate}</p>
              </div>
              <div className="price">
                <div className="price-title">
                  <h4>Cardmarket.io Price</h4>
                  <a
                    className="open-card"
                    href={selectedCard.cardmarket.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LaunchIcon />
                  </a>
                </div>
                <div className="price-box">
                    <p>Average Price</p>
                    <p>$ {selectedCard.cardmarket.prices.averageSellPrice}</p>
                </div>
              </div>
            </div>
          </CardDetailsDiv>
        )}
      </DialogContent>
    </DialogContainer>
  );
}

export default CardDetailView;
