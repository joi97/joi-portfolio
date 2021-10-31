import "./mainPage.css";
import React from "react";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import MyWorks from "./MyWorks";

export default function MainPage() {
	return (
		<>
			{/* <div className="bg-circles">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
				<div className="circle-3"></div>
				<div className="circle-4"></div> */}
			
			<Router>
				<Switch>
					<Route path="/about-me">
						<AboutPage />
					</Route>
					<Route path="/my-works">
						<MyWorks />
					</Route>
					<Route path="/">
						<HomePage />
					</Route>
				</Switch>
			</Router>
            {/* </div> */}
		</>
	);
}
