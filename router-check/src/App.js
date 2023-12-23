// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/movie/:movieId" element={<MovieDetails />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
