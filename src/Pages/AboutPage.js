import React, { useState, useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import fotoProfilo from "../../src/foto-profilo-sfondo.jpg";
import { Link } from "react-router-dom";
import JsonData from "./experience_data.json";
import { Paginator } from "primereact/paginator";
import "./mainPage.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { LocalGasStation } from "@material-ui/icons";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

function Experience({ experienceData }) {
	return (
		<div className="tab-content">
			<div className="timeline">
				{experienceData.map((item) => {
					return (
						<div key={item.id} className="timeline-item">
							<span className="date">
								{item.firstDate}{" "}
								<strong>{item.firstNumb}</strong> –{" "}
								{item.secondDate}{" "}
								<strong>{item.secondNumb}</strong>
							</span>
							<h4>{item.profession}</h4>
							<div>
								{item.place} <small>{item.secondPlace} </small>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

function Education() {
	return (
		<div className="tab-content">
			<div className="timeline">
				<div className="timeline-item">
					<span className="date">
						October <strong>2020</strong> – ???
					</span>
					<h4>Master Degree in Data Science</h4>
					<div>
						University of Padua - <small>Padua, Italy - </small>
						<span style={{ fontVariant: "diagonal-fractions" }}>
							??/110
						</span>
					</div>
				</div>

				<div className="timeline-item">
					<span className="date">
						October <strong>2016</strong> – March{" "}
						<strong>2020</strong>
					</span>
					<h4>Bachelor's Degree in Computer Science</h4>
					<div>
						University of Verona - <small>Verona, Italy - </small>
						<span style={{ fontVariant: "diagonal-fractions" }}>
							93/110
						</span>
					</div>
				</div>

				<div className="timeline-item">
					<span className="date">
						September <strong>2011</strong> – July{" "}
						<strong>2016</strong>
					</span>
					<h4>High School Diploma in Information Technology</h4>
					<div>
						Technical Institute “Silvio Ceccato” -{" "}
						<small>Montecchio Maggiore, Italy - </small>
						<span style={{ fontVariant: "diagonal-fractions" }}>
							83/100
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

const Container = styled(animated.div)``;

// display: inline-block;
// padding: 3em;
// background: #c7d2fe66;
// border-radius: 10px;
// z-index: 1;
// position: relative;
// backdrop-filter: blur(10px);
// border: 2px solid transparent;
// background-clip: border-box;
// cursor: pointer;
const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 20,
	(x - window.innerWidth / 2) / 20,
	1,
];
const trans = (x, y, s) =>
	`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function AboutPage(setPageCurrent, HomePage) {
	const [showEducation, setShowEducation] = useState(true);
	const [experienceData, setExperienceData] = useState(JsonData.slice(0, 3));
	let btn_name1,
		btn_name2 = "";

	if (experienceData[0].id === 1) {
		btn_name1 = "pi pi-chevron-left active";
		btn_name2 = "pi pi-chevron-right disabled";
	} else {
		btn_name1 = "pi pi-chevron-left disabled";
		btn_name2 = "pi pi-chevron-right active";
	}

	// const [props, set] = useSpring(()=>({xys: [0,0,1], config: {mass: 10, tension: 200, friction: 50}}))

	const [props, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 10, tension: 200, friction: 50 },
	}));

	return (
		<section className="about-section sec-padding">
			<Link to="/">
				<HomeIcon />
			</Link>
			<div className="container">
				<div className="row">
					<div className="section-title">
						<h2>about me</h2>
					</div>
				</div>
				<div className="row">
					<div className="about-img-button">
						<animated.div
							className="about-img"
							onMouseMove={({ clientX: x, clientY: y }) =>
								set({ xys: calc(x, y) })
							}
							onMouseLeave={() => set({ xys: [0, 0, 1] })}
							style={{
								transform: props.xys.interpolate(trans),
							}}
						>
							
							{/* <div className="div-overme">over me</div> */}
							<img src={fotoProfilo} />
						</animated.div>

						<button className="p-btn" style={{ margin: "20px" }}>
							Download CV
						</button>
					</div>

					<div className="about-text">
						<p>
							I have a degree in Computer Science at the
							University of Verona and I am currently continuing
							my training course with the aim of obtaining a
							master's degree in Data Science at the University of
							Padua. I am very attracted to new technologies
							especially in the use of Machine Learning in the way
							it analyzes data to get results. Even during my
							studies I have always worked to be able to support
							myself and not make me miss anything. I love playing
							sports and learning new things.
						</p>
						<h3 style={{ textAlignLast: "center" }}>skills</h3>
						<div className="skills">
							<div className="skill-item">Html</div>
							<div className="skill-item">CSS</div>
							<div className="skill-item">Javascript</div>
							<div className="skill-item">React</div>
							<div className="skill-item">Python</div>
							<div className="skill-item">C++</div>
							<div className="skill-item">C#</div>
							<div className="skill-item">Java</div>
							<div className="skill-item">SQL</div>
							<div className="skill-item">Wordpress</div>
							<div className="skill-item">Photoshop</div>
						</div>

						<div className="about-tabs">
							<button
								type="button"
								id="firstButton"
								className="tab-item active"
								data-target="#education"
								onClick={() => {
									setShowEducation(true);
									if (
										!document
											.getElementById("firstButton")
											.classList.contains("active")
									) {
										document
											.getElementById("firstButton")
											.classList.add("active");
										document
											.getElementById("secondButton")
											.classList.remove("active");
									}
								}}
							>
								education
							</button>
							<button
								type="button"
								id="secondButton"
								className="tab-item"
								data-target="#experience"
								onClick={() => {
									setShowEducation(false);
									if (
										!document
											.getElementById("secondButton")
											.classList.contains("active")
									) {
										document
											.getElementById("secondButton")
											.classList.add("active");
										document
											.getElementById("firstButton")
											.classList.remove("active");
									}
								}}
							>
								experience
							</button>

							{!showEducation && (
								<>
									<i
										className={btn_name1}
										onClick={() => {
											setExperienceData(
												JsonData.slice(0, 3)
											);
										}}
									></i>

									<i
										className={btn_name2}
										onClick={() => {
											setExperienceData(
												JsonData.slice(3, 6)
											);
										}}
									></i>
								</>
							)}
						</div>
						{showEducation ? (
							<Education />
						) : (
							<Experience experienceData={experienceData} />
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
