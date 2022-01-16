import React from 'react';
import '../CSS/Footer.css'

const Footer = () =>{
	return(
		<div id="contact">
			<div className="footer-container">
				<p className="contact-title">Contact Me</p>
				<p className="contact-body">If you are interested in getting in touch with me,
					please message me on LinkedIn
				</p>
				<p className="contact-body">
					If you are interested in checking my work,
					feel free to check my GitHub
				</p>
			
				
				<div className="links">
					<a href="https://github.com/HubertHartan" target="_blank" rel="noreferrer">
						<i className="fab fa-github-square"/>
					</a>
					<a href="https://www.linkedin.com/in/hubert-hartan-988867189/" target="_blank" rel="noreferrer">
						<i className="fab fa-linkedin-in"/> 
					</a>
				</div>
				
			</div>
		</div>
	)
}

export default Footer