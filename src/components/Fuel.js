import React from 'react';
import '../CSS/Fuel.css';

const Fuel = () =>{
	return(
		<div className="fuel-container">
			<div className="fuel-info">
				<div className="fuel-title">Fuel Checker</div>
				<div className="fuel-body">
					<p>Created using React.js and Express.js</p>
					<p>A FullStack application that keeps track of Fuel Prices at New South Wales.</p>
					<p>Allows users to monitor and arrange their fuel purchases according to recent trends.</p>
					<p>Developed in collaboration with fellow students: </p>
					<ul className="team">
						<li className="teammate"><a href="https://github.com/Flynntes" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-github-square" id='git-logo'/> Flynn Tesoriero</a> </li>
						<li className="teammate"><a href="https://github.com/nipunshrestha" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-github-square" id='git-logo'/> Nipun Shrestha</a> </li>
						<li><a href="https://github.com/TrideepLD" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-github-square" id='git-logo'/> Trideep Lal Das</a></li>
					</ul>
	
					<br></br>
				</div>
				<a href="https://github.com/HubertHartan/Fuel-Checker-Web-Application" target="_blank" rel="noreferrer">
					<i className="fab fa-github"/>
				</a>

				<a href="https://fuel-checker.herokuapp.com" target="_blank" rel="noreferrer">
					<i className="fas fa-external-link-alt"/>
				</a>
			</div>
			<img  className="fuel-pic" src="images/fuel-checker.jpg" alt="" />
		</div>
	)
}

export default Fuel