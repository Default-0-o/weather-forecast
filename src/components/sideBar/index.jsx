import React from "react";
import "./sideBar.scss";

const SideBar = ({ isOpen, onClose, onInput, searchTerm }) => {
	return (
		<div className={`sidebar ${isOpen && "open"}`}>
			<button onClick={onClose} className="btn mb-10">
				<i className="fa-solid fa-xl fa-xmark"></i>
			</button>
			<div className="form-group row justify-content-between align-items-center mx-5">
				<input
					className="col-10 py-4 fs-5"
					placeholder="Search for cities..."
					onChange={onInput}
					value={searchTerm}
				/>
				<i className="fa-solid fa-xl fa-magnifying-glass col-1"></i>
			</div>
			<ul>
				<li>heeeeeeeeeeeeey</li>
				<li>heeeeeeeeeeeeey</li>
				<li>heeeeeeeeeeeeey</li>
				<li>heeeeeeeeeeeeey</li>
				<li>heeeeeeeeeeeeey</li>
			</ul>
		</div>
	);
};

export default SideBar;
