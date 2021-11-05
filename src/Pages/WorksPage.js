import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import work1 from "./images/img-first-project.png";
import work2 from "./images/img-amazon.png";

function MyWorks() {
	return (
		<section className="portfolio-section sec-padding">
			<Link to="/">
				<HomeIcon />
			</Link>
			<div className="container">
				<div className="row">
					<div className="section-title">
						<h2>recent Work</h2>
					</div>
				</div>

				<div className="row" style={{textAlignLast: "center", justifyContent: "center"}}>
					{/* portofolio start */}
					<div className="portfolio-item">
						<div className="portfolio-item-thumbnail">
							<img src={work1} alt="portfolio"></img>
						</div>
						<h3 className="portfolio-item-title">
							Kubera-108 webSite
						</h3>
						<a
							href="https://www.kubera-108.com/"
							type="button"
							className="p-btn view-project-btn"
						>
							view project
						</a>
						<div className="portfolio-item-details">
							<div className="description">
								<ul>
									<li>
										I created the site in wordpress and css
										for kubera: a brand of pants
									</li>
								</ul>
							</div>
							<div className="general-info">
								<ul>
									<li>
										Created - <span>4 Dec 2020</span>
									</li>
									<li>
										Technologies used <span>html, Css</span>
									</li>
									<li>
										Role <span>FrontEnd</span>
									</li>
									<li>view online</li>
								</ul>
							</div>
						</div>
					</div>


				<div className="portfolio-item">
					<div className="portfolio-item-thumbnail">
							<img src={work2} alt="portfolio"></img>
						</div>
						<h3 className="portfolio-item-title">
							Amazon-Clone Application
						</h3>
						<a
							href="https://clone-165ad.web.app/"
							type="button"
							className="p-btn view-project-btn"
						>
							view project
						</a>
						<div className="portfolio-item-details">
							<div className="description">
								<ul>
									<li>
										I created the site in wordpress and css
										for kubera: a brand of pants
									</li>
								</ul>
							</div>
							<div className="general-info">
								<ul>
									<li>
										Created - <span>4 Dec 2020</span>
									</li>
									<li>
										Technologies used <span>html, Css</span>
									</li>
									<li>
										Role <span>FrontEnd</span>
									</li>
									<li>view online</li>
								</ul>
							</div>
						</div>
					</div>
					{/* portfolio end */}

					{/* nuova modifica */}
					{/* portofolio start */}
					{/* <div className="portfolio-item">
						<div className="portfolio-item-thumbnail">
							<img src="" alt="portfolio"></img>
						</div>
						<h3 className="portfolio-item-title">
							education course website
						</h3>
						<button type="button" className="btn view-project-btn">
							view project
						</button>
						<div className="portfolio-item-details">
							<div className="description">
								<p>
									ASDADS ASDADSASDASD ASDADSASDASD
									ASDADSASDASD
								</p>
							</div>
							<div className="general-info">
								<ul>
									<li>
										Created - <span>4 Dec 2020</span>
									</li>
									<li>
										Technologies used <span>html, Css</span>
									</li>
									<li>
										Role <span>FrontEnd</span>
									</li>
									<li>view online</li>
								</ul>
							</div>
						</div>
					</div> */}
					{/* portfolio end */}
				</div>
			</div>
		</section>
	);
}

export default MyWorks;
