import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import work1 from "../../src/progetto1.png";


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

				<div className="row">
                    {/* portofolio start */}
					<div className="portfolio-item">
						<div className="portfolio-item-thumbnail">
							<img src={work1} style={{width: "30%"}} alt="portfolio"></img>
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
					</div>
                    {/* portfolio end */}
                    
                    {/* portofolio start */}
					<div className="portfolio-item">
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
					</div>
                    {/* portfolio end */}
				</div>
			</div>
		</section>
	);
}

export default MyWorks;
