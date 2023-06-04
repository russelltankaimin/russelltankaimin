import React from 'react';
import NavHeader from './components/NavHeader';
import './App.css';
import { router } from './router';

function App() {
  return (
    <>
    <NavHeader />
    {router}
    </>
  );
}

export default App;