import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section01 from "./components/section01/Section01";
import Section02 from "./components/section02/Section02";
import Section03 from "./components/section03/Section03";
import Section04 from "./components/section04/Section04";
import './App.css';
import Layout from "./components/layout/Layout";
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
          <Route path="/section04" element={<Section04 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
