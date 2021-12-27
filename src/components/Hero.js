import React from 'react';
import './Hero.css'

const Hero = () =>{
	return(
		<>

			<div className="hero-container">
			
				<div className="name">Hubert Hartan</div>
				<div className="title">Software {String.fromCharCode(38)} Web Developer</div>
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