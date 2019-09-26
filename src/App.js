import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import LearningWords from './components/LearningWords';
import Settings from './components/Statistics';
import Statistics from './components/Statistics';
import WordCategories from './components/WordsCategories';

function App() {
  return (
    <div className="App">
        <Router>
            <div className="container">
                <Route path="/" exact component={LearningWords} />
                <Route path="/categories/" component={WordCategories} />
                <Route path="/statistics/" component={Statistics} />
                <Route path="/settings/" component={Settings} />
            </div>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
