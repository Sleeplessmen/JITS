import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Section01 from "./components/Section01/Section01";
import Section02 from "./components/Section02/Section02";
import Section03 from "./components/Section03/Section03";
import './App.css';

function Header() {
  return (
    <header className="header">
      JITS INNOVATION LABS Tasks
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      © 2025 Sleeplessmen
    </footer>
  );
}

function Home() {
  const sections = Array.from({ length: 10 }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return (
      <li key={num}>
        <Link to={`/section${num}`}>Section {num}</Link>
      </li>
    );
  });

  return (
    <div className="main">
      <div className="homeContent">
        <h2>Table of Contents</h2>
        <ol>{sections}</ol>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="appContainer">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/section01" element={<Section01 />} />
          <Route path="/section02" element={<Section02 />} />
          <Route path="/section03" element={<Section03 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
