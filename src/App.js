import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Firstpage from './components/Firstpage';
import Places from './components/Places';
import Participants from './components/Participants';
import Schedule from './components/Schedule';
import Games from './components/Games';
import Campfire from './components/Campfire';
import { useEffect, useRef, useState } from 'react';

function App() {


  return (
    <div className="container">
        <Header/>
        <Firstpage/>
        <Places/>
        <Participants/>
        <Schedule/>
        <Games/>
        <Campfire/>
    </div>
  );
}

export default App;
