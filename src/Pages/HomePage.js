import { Facebook, Instagram } from "@material-ui/icons";
import { Link } from "react-router-dom";
import img1 from "./images/img-homepage.png";
import "./css/mainPage.css";


function HomePage({ setPageCurrent }) {
	return (
		<div>
			<div className="bg-circles">
				<div className="circle-1"></div>
				<div className="circle-2"></div>
				<div className="circle-3"></div>
				<div className="circle-4"></div>
				<div className="circle-5"></div>
				<div className="circle-6"></div>
			</div>
			<section className="home-section">
				<div className="container">
					<div className="row align-items-center">
						<div className="home-text">
							<p>Hello, I'm</p>
							<h1>Joi Berberi</h1>
							<h2>Junior Full-Stack developer</h2>

							<Link to="/about-me">
								<button className="p-btn">More over me</button>
							</Link>


							<Link to="/my-works">
								<button className="p-btn">Portfolio</button>
							</Link>
                            {/* <span className="tooltiptext"> [to Complete..]</span>  */}
						</div>
						<div className="home_img">
							<div className="img_box">
								<img className="img" src={img1} alt="" />
							</div>
							<div className="social_links">
								<a href="https://www.facebook.com/joi.berberi/">
									{/* <i class="fab fa-facebook" /> */}
									<Facebook />
								</a>
								<a href="https://www.instagram.com/imjoi_/">
									<Instagram />
									{/* <i class="fab fa-instagram" /> */}
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default HomePage;
