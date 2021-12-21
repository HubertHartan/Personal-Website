import React from 'react';
import { Button } from 'react-bootstrap';
import './Hero.css'

const Hero = () =>{
	return(
		<>

			<div className="hero-container">
			
				<h1>Hello, <span className="name-color"> Hubert Hartan</span> Here!</h1>
				<h2>Software {String.fromCharCode(38)} Web Developer</h2>
				<Button className="view-work">Previous Projects</Button>
				<Button className="contact-me">Contact Me</Button>
		

			</div>

			<div className="animation-area">
				<ul class="box-area">
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</>

	)


}

export default Hero