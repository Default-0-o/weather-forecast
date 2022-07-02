import React from "react";
import "./style.css";

const DotsMenu = ({ onClick }) => {
	return (
		<button onClick={onClick} className="dots-menu">
			<div className="dot mb-1"></div>
			<div className="dot mb-1"></div>
			<div className="dot"></div>
		</button>
	);
};

export default DotsMenu;
