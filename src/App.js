import React from 'react';



import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import './CSS/App.css';

function App() {
  return (
    <div id="top" className="app-container">


	  <Navigation/>
	  <Hero/>
	  <About/>
	 
		
    </div>
  );
}

export default App;
