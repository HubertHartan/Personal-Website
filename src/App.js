import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
	<Router>

	  <Navigation/>
	  <Routes>
		<Route path='/' exact/>
	  </Routes>
	</Router>
		
    </>
  );
}

export default App;
