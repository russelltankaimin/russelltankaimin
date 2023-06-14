import React from 'react';
import NavHeader from './components/NavHeader';
import './App.css';
import { router } from './router';

function App() {
  return (
    <>
    <NavHeader style={{marginBottom : "0px", paddingBottom : '0px'}}/>
    {router}
    </>
  );
}

export default App;