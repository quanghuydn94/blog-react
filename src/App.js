import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Fab } from "@material-ui/core";
import Navbar from "./components/projectResponsive/Navbar";
import { Footer } from "./components/projectResponsive/Footer";
import { HomePage } from "./components/projectResponsive/HomePage";
import { Blog } from "./components/projectResponsive/Blog";
import { DetailBlogFashion } from "./components/projectResponsive/DetailBlogFashion";
import { DetailBlogTravel } from "./components/projectResponsive/DetailBlogTravels";
import { DetailBlogFood } from "./components/projectResponsive/DetailBlogFood";

const App = () => {
  // const [showToTop, setShowToTop] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setShowToTop(window.scrollY >= 200);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  // const handleClickToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs*" element={<Blog />} />
        <Route path="/blogs/travels/:id" element={<DetailBlogTravel />} />
        <Route path="/blogs/fashions/:id" element={<DetailBlogFashion />} />
        <Route path="/blogs/foods/:id" element={<DetailBlogFood />} />
      </Routes>
      {/* {showToTop && (
        <Fab
          size="small"
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            background: "#2468a2",
            color: "white",
            borderRadius: "50%",
            transition: "opacity 0.5s ease",
          }}
          onClick={handleClickToTop}
        >
          <ExpandLessIcon />
        </Fab>
      )} */}
      <Footer />
    </div>
  );
};

export default App;
