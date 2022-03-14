import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./pages/Inscription";
import Listing from "./pages/Listing";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inscription />} />
        <Route exact path="/list" element={<Listing />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
