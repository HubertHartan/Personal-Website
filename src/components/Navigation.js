import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navigation.css'

const Navigation = () =>{
	const [click, setClick] = useState(false);
	const [displayItems, setDisplay] = useState(true);


	const handleClick = () =>{
		setClick(!click)
	}
	
	const closeMenu = () =>{
		setClick(false)
 	}

	const handleDisplay = () =>{
		if(window.innerWidth<=960){
			setDisplay(false)
		}else{
			setDisplay(true)
		}
	}

	useEffect(() => {
		handleDisplay()
	}, [])

	window.addEventListener('resize', handleDisplay);

	return(
		<nav className="navigation">
			<div className="navigation-container">
				<Link to="/" className="navigation-logo">
					Logo
				</Link>
				{!displayItems && <div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times":"fas fa-bars"}/>
				</div>}

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-link" onClick={closeMenu}>
							1. Home
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/projects" className="nav-link" onClick={closeMenu}>
							2. Projects
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/contacts" className="nav-link" onClick={closeMenu}>
							3. Contacts
						</Link>
					</li>

					<li className="nav-item">
						<Link to="/misc" className="nav-link" onClick={closeMenu}>
							4. Misc
						</Link>
					</li>

				</ul>

			</div>
		</nav>

	)

}

export default Navigation