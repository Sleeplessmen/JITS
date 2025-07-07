import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import React, { Suspense, lazy, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

// Lazy load all dynamic pages
const Section01 = lazy(() => import('./pages/section01/Section01'));
const Section02 = lazy(() => import('./pages/section02/Section02'));
const Section03 = lazy(() => import('./pages/section03/Section03'));
const Section04 = lazy(() => import('./pages/section04/Section04'));
const Section05 = lazy(() => import('./pages/section05/Section05'));
const Section06 = lazy(() => import('./pages/section06/Section06'));
const Section07 = lazy(() => import('./pages/section07/Section07'));
const Section08 = lazy(() => import('./pages/section08/Section08'));
const Section09 = lazy(() => import('./pages/section09/Section09'));
const Products = lazy(() => import('./pages/section07/Products'));
const Add = lazy(() => import('./pages/section07/Add'));
const About = lazy(() => import('./pages/section07/About'));

function LoadingIndicator() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "40vh",
      fontSize: "1.5rem"
    }}>
      <CircularProgress style={{ marginRight: 16 }} />
      Đang tải nội dung...
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <Router>
      <Suspense fallback={<LoadingIndicator />}>
        <Routes>
          <Route element={<Layout theme={theme} toggleTheme={toggleTheme} />}>
            <Route path="/" element={<Home />} />
            <Route path="/section01" element={<Section01 />} />
            <Route path="/section02" element={<Section02 />} />
            <Route path="/section03" element={<Section03 />} />
            <Route path="/section04" element={<Section04 />} />
            <Route path="/section05" element={<Section05 />} />
            <Route path="/section06" element={<Section06 />} />
            <Route path="/section07" element={<Section07 />} />
            <Route path="/section08" element={<Section08 />} />
            <Route path="/section09" element={<Section09 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add" element={<Add />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;