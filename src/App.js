import React, { useState, useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Footer from "./components/Footer/Footer";
import PerfectScrollbar from "react-perfect-scrollbar";
import BackToTopButton from "./components/BackToTop/BackToTopButton";
import "react-perfect-scrollbar/dist/css/styles.css";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import SetSearch from "./components/SetSearch/SetSearch";
import Home from "./pages/Home/Home";
import Contributors from "./pages/Contributors/Contributors";

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
    <section role="application" className="App">
      <Header />
      <PerfectScrollbar
        containerRef={(ref) => (scrollContainerRef.current = ref)}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/set-search" element={<SetSearch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contributors" element={<Contributors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PerfectScrollbar>
      <BackToTopButton
        showBackToTop={showBackToTop}
        scrollToTop={scrollToTop}
      />
      <Footer />
    </section>
  );
}

export default App;
