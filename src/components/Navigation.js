import React, {useState, useEffect} from 'react'
import '../CSS/Navigation.css'

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
				<a href="#top" className="navigation-logo">
					<img  className="logo-pic" src="images/logo.png" alt="Hubert Hartan" />
				</a>
				{!displayItems && <div className="menu-icon" onClick={handleClick}>
					<i className={click ? "fas fa-times":"fas fa-bars"}/>
				</div>}

				<ul className={click ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<a href="#top" className="nav-link" onClick={closeMenu}>
							Home 
						</a>
					</li>

					<li className="nav-item">
						<a href="#about" className="nav-link" onClick={closeMenu}>
							About
						</a>
					</li>

					<li className="nav-item">
						<a href="#project" className="nav-link" onClick={closeMenu}>
							Projects
						</a>
					</li>

					<li className="nav-item">
						<a href="#contact" className="nav-link" onClick={closeMenu}>
							Contacts
						</a>
					</li>

				</ul>

			</div>
		</nav>

	)

}

export default Navigation