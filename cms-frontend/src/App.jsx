import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section01 from "./components/Section01/Section01";
import Section02 from "./components/Section02/Section02";
import Section03 from "./components/Section03/Section03";
import './App.css';
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/section01" element={<Section01 />} />
          <Route path="/section02" element={<Section02 />} />
          <Route path="/section03" element={<Section03 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
