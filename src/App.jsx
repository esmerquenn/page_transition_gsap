import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { animatePageIn, animatePageOut } from "./animatePageIn";
import About from "./About";
import Home from "./Home";
import Nav from "./Nav";
import Bars from "./Bars";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    animatePageIn();
  }, [location]);


  const handleClick = (href) => {
    if (location.pathname !== href) {
      animatePageOut(href, navigate);
    }
  };
  return (
    <div>
      <Nav handleClick={handleClick} />
      <Bars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
