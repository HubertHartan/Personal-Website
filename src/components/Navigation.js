import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () =>{
	return(
		<nav className="navigation">
			<div className="navigation-container">
				<Link to="/" className="navigation-logo">
					1.Home
				</Link>
			</div>
		</nav>

	)

}

export default Navigation