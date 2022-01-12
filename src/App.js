import React from 'react';



import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import PageBreak from './components/PageBreak';
import Tax from './components/Tax'
import Fuel from './components/Fuel'
import './CSS/App.css';


function App() {
  return (
    <div id="top" className="app-container">


	  <Navigation/>
	  <Hero/>
	  <About/>
	  <PageBreak/>
	  <Tax/>
	  <Fuel/>
	 
		
    </div>
  );
}

export default App;
