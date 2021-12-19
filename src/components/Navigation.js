import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navigation = () =>{
	const [click, setClick] = useState(false);

	const handleClick = () =>{
		setClick(!click)
	}
	
	const closeMenu = () =>{
		setClick(false)
 	}
	return(
		<nav className="navigation">
			<div className="navigation-container">
				<Link to="/" className="navigation-logo">
					Logo
				</Link>
				<div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times":"fas fa-bars"}/>
				</div>

				<ul className={click ? "nav-menu active" : "nav-menu inactive"}>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMenu}>
							Home
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/projects" className="nav-link" onClick={closeMenu}>
							Projects
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contacts" className="nav-link" onClick={closeMenu}>
							Contacts
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/misc" className="nav-link" onClick={closeMenu}>
							Misc
						</Link>
					</li>

				</ul>

			</div>
		</nav>

	)

}

export default Navigation