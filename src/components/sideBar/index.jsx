import React from "react";
import "./sideBar.scss";

const SideBar = ({ isOpen, onClose, onInput, searchTerm, onUnit, unit }) => {
	return (
		<div className={`sidebar ${isOpen && "open"}`}>
			<button onClick={onClose} className="btn mb-10">
				<i className="fa-solid fa-xl fa-xmark"></i>
			</button>
			<div className="mx-8">
				<div className="row justify-content-start align-items-center text-white mb-5">
					<p className="m-0 pe-0">Unit :</p>
					<label>
						<input
							type="radio"
							className="ms-2"
							value="metric"
							onClick={onUnit}
							checked={unit === "metric"}
						/>
						Metric
					</label>
					<label>
						<input
							type="radio"
							className="ms-2"
							value="imperial"
							onClick={onUnit}
							checked={unit === "imperial"}
						/>
						Imperial
					</label>
				</div>
				<div className="form-group row justify-content-between align-items-center">
					<input
						className="col-10 py-4 fs-5"
						placeholder="Search for cities..."
						onChange={onInput}
						value={searchTerm}
					/>
					<i className="fa-solid fa-xl fa-magnifying-glass col-1"></i>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
