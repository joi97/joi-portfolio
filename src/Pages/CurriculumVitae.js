import React from 'react'
import joiPhoto from './img_portfolio.jpg';

import './curriculumVitae.css';

export default function CurriculumVitae() {
	return (
		<div className="App">
			<div className="container">


				<div className="left_side">

					<div className="profileText">
						<div className="imgBox">
							<img src={joiPhoto} className="img_profile" alt="logo" />
						</div>
						<h2>Joi Berberi</h2>
					</div>

					<div className="contactInfo">
						<h3 className="title">Contacts</h3>
						<ul>
							<li>
								<span className="icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
								<span className="text"> +39 3927670647 </span>
							</li>
							<li>
								<span className="icon"><i className="fa fa-envelope" aria-hidden="true"></i> </span>
								<span className="text"> joi9719@hotmail.it </span>
							</li>
							<li>
								<span className="icon"><i className="fa fa-map-marker" aria-hidden="true"></i> </span>
								<span className="text"> Montecchio Maggiore, <small>  Vicenza </small></span>
							</li>
						</ul>
					</div>

					<div className="contactInfo education">
						<h3 className="title">instruction</h3>
						<ul>
							<li>
								<h5>October 2020 – ???</h5>
								<h4>Master Degree In Data Science</h4>
								<h4>University of Padua</h4>
							</li>
							<li>
								<h5>October 2016 – March 2020</h5>
								<h4>Bachelor's Degree In Computer Science</h4>
								<h4>University of Verona</h4>
							</li>
							<li>
								<h5>September 2011 – July 2016</h5>
								<h4>High School Diploma In Information Technology</h4>
								<h4>Technical Institute “Silvio Ceccato”</h4>
							</li>
						</ul>
					</div>


					<div className="contactInfo language">
						<h3 className="title">languages</h3>
						<ul>

							<li>
								<span className="text">Italian</span>
								<span className="percent">
									<div style={{ width: "100%" }}></div>
								</span>
							</li>
							<li>
								<span className="text">English</span>
								<span className="percent">
									<div style={{ width: "70%" }}></div>
								</span>
							</li>
							<li>
								<span className="text">Spanish</span>
								<span className="percent">
									<div style={{ width: "75%" }}></div>
								</span>
							</li>
						</ul>

					</div>
				</div>




				<div className="right_side">
					<div className="about">
						<h2 className="title2"> Skills </h2>
						<p>
						During my studies I have always done manual work, but the impact that the software developer had in the last experience was fundamental.
						I discovered the true power of frameworks like ReactJS in the development of applications for industries, from which I have always been more interested continuing with the development of personal applications.
						</p>
					</div>

					<div className="about">
						<h2 className="title2"> goals </h2>
						<p>
						I am continuing the Master's degree in Data Science which fascinates me a lot how combining multiple fields you can extract value from data.
						to be able to keep up with the studies I'm looking for a part-time as a front-end developer
						</p>
					</div>

					<div className="about">
						<h2 className="title2"> Experiences </h2>
						<div className="box">
							<div className="year_company">
								<h5>Jun 2015 - Jul 2015</h5>
								<h5>Erasmus (Stage), Enectivia<small><br/> Prague, Czech Republic </small></h5>
							</div>
							<div className="text">
								<h4>Developer</h4>
								<p>
								First approach using virtual machines with Ubuntu as operating system; First use of github; Development of company websites;
								Installation of dependencies. 

								</p>
							</div>
						</div>


						<div className="box">
							<div className="year_company">
								<h5>Oct 2017 – Jan 2019</h5>
								<h5>Top Pizza <br /><small>(MONTECCHIO MAGGIORE)</small></h5>
							</div>
							<div className="text">
								<h4>Pizza Maker</h4>
								<p>Seasoning and cooking of pizzas; Conservation and quality control ingredients; Worktop cleaning; Stock check; Waste disposal.</p>
							</div>
						</div>


						<div className="box">
							<div className="year_company">
								<h5>Jan 2018 – Jul 2018</h5>
								<h5>Erasmus, <br/> Universidad De Las Palmas De Gran Canaria <br/><small>(LAS PALMAS OF GRAN CANARIA, SPAIN)</small></h5>
							</div>
							<div className="text">
								<h4>Student</h4>
								<p>Matemáticas Computacionales; Servicios Y Seguridad En Red; Fundamentos De Los Sistemas Inteligentes; Español Lengua Extranjera B1.</p>
							</div>
						</div>

						
						<div className="box">
							<div className="year_company">
								<h5>Aug 2019 – Jul 2020</h5>
								<h5>Green Pizza <br /><small>(THIENE)</small></h5>
							</div>
							<div className="text">
								<h4>Pizza Maker</h4>
								<p>Seasoning and cooking of pizzas; Conservation and quality control ingredients; Worktop cleaning; Stock check; Waste disposal.</p>
							</div>
						</div>


						<div className="box">
							<div className="year_company">
								<h5>Aug 2020 – Oct 2020</h5>
								<h5>Cantine Vitevis <br /><small>(MONTECCHIO MAGGIORE)</small></h5>
							</div>
							<div className="text">
								<h4>Employee</h4>
								<p>carried out various tasks in the grape pressing department</p>
							</div>
						</div>

						
						<div className="box">
							<div className="year_company">
								<h5>Feb 2021 – Jul 2021</h5>
								<h5>Startel Solutions<br /><small>(Torri di Quartesolo)</small></h5>
							</div>
							<div className="text">
								<h4>Junior Full-Stack Developer</h4>
								<p>Developed complete ReactJS Web Applications, integrated with backend Java API; Using of SQL to save and retrieve data.</p>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
}