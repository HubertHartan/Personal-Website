import React from 'react'
import ReactPlayer from "react-player"



const IBM = () =>{

	return(
		<div className="IBM-container">
			<div className="IBM-info">
				<div className="IBM-title">IBM Sankofa Healthcare Vaccination UI</div>
				<div className="fuel-body">
					<p>Created using React.js and <a href="https://www.carbondesignsystem.com/" target="_blank" rel="noreferrer">Carbon Design Systems</a></p>
					<p>A user interface created for the Sankofa Healthcare Project </p>
					<p>More information for the project can be found on IBM's Center for Advanced Studies website</p>
					<p>Developed in collaboration with IBM and fellow students: </p>

					<p>Development Team:</p>
					<ul className="team">
						<li className="teammate"><a href="https://www.linkedin.com/in/christopher-stedman/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>Christopher Stedman</a> </li>
						<li className="teammate"><a href="https://www.linkedin.com/in/tldas/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>Trideep Lal Das</a> </li>
						<li className="teammate"><a href="https://www.linkedin.com/in/hubert-hartan-988867189/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>Hubert Hartan</a></li>
					</ul>
					<p>Document Team:</p>
					<ul className="team">
						<li className="teammate"><a href="https://www.linkedin.com/in/matthew-de-masi-768111198/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>Matthew De Masi</a> </li>
						<li className="teammate"><a href="https://www.linkedin.com/in/william-abson-602954190/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>William Abson</a> </li>
						<li><a href="https://www.linkedin.com/in/shengyu-wang-4279a7207/" target="_blank" rel="noreferrer" className="teammate-link"><i className="fab fa-linkedin"/>Shengyu Wang</a></li>
					</ul>
					
					<br></br>
				</div>
				<a href="https://github.com/HubertHartan/Sankofa-Healthcare-Project-Vaccination-UI" target="_blank" rel="noreferrer">
					<i className="fab fa-github"/>
				</a>
			</div>
			<ReactPlayer url="https://www.youtube.com/watch?v=7Q6wFk3w7cE"/>
		</div>
	)
}
export default IBM

