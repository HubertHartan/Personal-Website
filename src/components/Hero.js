import React from 'react';
import { Button } from 'react-bootstrap';
import './Hero.css'

const Hero = () =>{
	return(
		<div className="hero-container">
			<video src="/videos/hero-bg-2.mp4" autoPlay muted loop/>
			<h1>Hubert Hartan</h1>
			<h2>Software {String.fromCharCode(38)} Web Developer</h2>
			<Button className="view-work">View my Work</Button>
			<Button className="contant-me">Contact Me</Button>
			
		</div>

	)


}

export default Hero