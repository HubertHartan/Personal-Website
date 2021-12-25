import React from 'react';
import './Hero.css'

const Hero = () =>{
	return(
		<>

			<div className="hero-container">
			
				<h1><span className="name-color">Hubert Hartan</span></h1>
				<h2>Software {String.fromCharCode(38)} Web Developer</h2>
				<a href="/projects" className="view-work">Previous Projects</a>
				<a href="/contacts" className="contact-me">Contact Me</a>
				
				<div className="tagline">I'm a developer who is self-driven and motivated to continuously improve. I aim to master and learn new concepts in the tech industry.</div>

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