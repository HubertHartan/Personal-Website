import React from 'react'

import Tax from './Tax'
import Fuel from './Fuel'
import Poem from './Poem'
import IBM from './IBM';
import '../CSS/Projects.css';


const Project = () =>{
	return(
		<div id="project">
			<p className='project-title'>My Projects</p>
			<Tax/>
			<Fuel/>
			<Poem/>
			<IBM/>
		</div>
	)
}

export default Project