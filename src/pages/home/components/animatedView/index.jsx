import React from "react";
import SVG from "react-inlinesvg";
import Turbine from "./components/turbine";

const AnimatedView = () => {
	return (
		<div className="animated-view">
			<img src="assets/images/cloud-1.png" alt="cloud-1" className="cloud-1" />
			<img src="assets/images/cloud-3.png" alt="cloud-2" className="cloud-2" />
			<SVG
				src="assets/svg/city-background.svg"
				opacity="40%"
				className="city-svg"
			/>
			<Turbine />
		</div>
	);
};

export default AnimatedView;
