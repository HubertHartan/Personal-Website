import React from 'react'
import '../CSS/Poem.css';

const Poem = () =>{
	return(
		<div className="poem-container">
			<div className="poem-info">
				<div className="poem-title">Pompous Poems</div>
				<div className="poem-body">
					<p>Created using React.js and Express.js</p>
					<p>A website that displays poems in markdown form.</p>
					<p>Users can add new poems and 'like' existing poems.</p>
					<p>The poems are displayed in order of likes.</p>
					<br></br>
				</div>
				<a href="https://github.com/HubertHartan/Pompous-Poems" target="_blank" rel="noreferrer">
					<i className="fab fa-github"/>
				</a>

				<a href="https://nameless-tundra-58038.herokuapp.com/" target="_blank" rel="noreferrer">
					<i className="fas fa-external-link-alt"/>
				</a>
			</div>
			
			<img  className="poem-pic" src="images/pompous-poems.jpg" alt="" />
		</div>
	)
}

export default Poem