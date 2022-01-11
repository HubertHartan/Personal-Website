import React from 'react';
import '../CSS/Tax.css';

const Tax = () =>{
	return(
		<div className="tax-container">
			<div className="tax-info">
				<div className="tax-title">Tax-o-tron</div>
				<div className="tax-body">
					<p>Created using React.js</p>
					<p>A Front-End application to help calculate the amount of tax an individual should pay.</p>
					<p>The region is set to Australia by default. While the income year is set to 2020-2021.</p>
					<p>Current future plans for the application is to expand the income year.</p>
					<br></br>
				</div>
				<a href="https://github.com/HubertHartan/Tax-o-tron" target="_blank" rel="noreferrer">
					<i className="fab fa-github"/>
				</a>

				<a href="https://taxotron-calculator.netlify.app/" target="_blank" rel="noreferrer">
					<i className="fas fa-external-link-alt"/>
				</a>
			</div>
			
			<img  className="tax-pic" src="images/tax-tron.jpg" alt="" />
		</div>
	)
}

export default Tax