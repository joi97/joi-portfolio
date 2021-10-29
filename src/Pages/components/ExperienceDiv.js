import React from "react";

function ExperienceDiv({experienceData}) {
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

export default ExperienceDiv;
