import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import GamePage from './GamePage';
// import BookPage from './BookPage';  
// import ArticlesPage from './ArticlesPage'; 
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GamePage />} />
        {/* <Route path="/book" element={<BookPage />} />
        <Route path="/articles" element={<ArticlesPage />} /> */}
      </Routes>
    </div>
  );
};

export default App;