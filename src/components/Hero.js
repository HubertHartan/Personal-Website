import React from 'react';
import '../CSS/Hero.css'

const Hero = () =>{
	return(
		<div>

			<div className="hero-container">
			
				<div className="name">Hubert Hartan</div>
				<div className="title">Software {String.fromCharCode(38)} Web Developer</div>
				<a href="#project" className="view-work">Projects</a>
				<a href="#contact" className="contact-me">Contact Me</a>
				
				<div className="tagline">An established developer, I build well functioning websites and applications</div>

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
		</div>

	)


}

export default Hero