import React from 'react';
import NavHeader from './components/NavHeader';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Consulting from './components/pages/Consulting';

function App() {
  return (
    <Router>
      <NavHeader />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/consulting' component={Consulting} />
      </Routes>
    </Router>
  );
}

export default App;