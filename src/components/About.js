import React from 'react';
import '../CSS/About.css'


const About = () =>{
	return(
		<div id="about">
			
			<div className="about-container">
				
				<div className="description">
					<p className='about-title'>About Me</p>
					<div className="about-body">
						<p>
							A diligent Software {String.fromCharCode(38)} Web Developer,
							who completed a Bachelor of Science, majoring in Software Technology at Macquarie University.
							I'm experienced with FullStack Development, with my specialty being Front-End Development. 
						</p>
						<p>
							I’m actively searching for experience and knowledge, 
							and I’m driven by a desire to understand and learn new concepts. 
							I approach problems with a positive attitude and with deep appreciation 
							for teamwork and efficient collaboration. 
						</p>
					</div>
					<ul className="skill-list" 
                		style={{
                  		display: "grid",
                  		gridTemplateColumns: "repeat(2, minmax(140px, 200px))",

                  		overflow: "hidden",
                  		gridGap: "5px",
                	}}>
							<li>HTML {String.fromCharCode(38)} CSS</li>
							<li>JavaScript</li>
							<li>React.js</li>
							<li>Node.js</li>
							<li>Java</li>
							<li>Git</li>
					</ul>
					
				</div>
				<div className="profile-pic-container">
					<img  className="profile-pic" src="images/profile-pic.jpg" alt="" />
				</div>
				
			</div>
		</div>
	)

}
export default About