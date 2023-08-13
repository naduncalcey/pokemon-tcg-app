import React, { useState, useEffect, useRef } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        if (scrollTop > 300) {
          setShowBackToTop(true);
        } else {
          setShowBackToTop(false);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <PerfectScrollbar containerRef={(ref) => (scrollContainerRef.current = ref)}>
        <Search />
      </PerfectScrollbar>
      {showBackToTop && (
        <div className="back-to-top" onClick={scrollToTop}>
          Back to Top
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
