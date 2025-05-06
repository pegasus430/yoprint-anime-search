import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import SearchPage from "./pages/SearchPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="header">Anime Search App</div>
      <div className="container">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/anime/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
