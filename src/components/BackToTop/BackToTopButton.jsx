import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const BackToTopButton = ({ showBackToTop, scrollToTop }) => {
  return (
    showBackToTop && (
      <div className="back-to-top" onClick={scrollToTop}>
        <ArrowUpwardIcon />
      </div>
    )
  );
};

export default BackToTopButton;
