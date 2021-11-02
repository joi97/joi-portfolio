import "./css/mainPage.css";
import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import WorksPages from "./WorksPage";
import CurriculumVitae from "./CurriculumVitae";

export default function MainPage() {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/about-me">
						<AboutPage />
					</Route>
					<Route path="/curriculum-vitae">
						<CurriculumVitae />
					</Route>
					<Route path="/my-works">
						<WorksPages />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}
