import React, { useState } from "react";
import SVG from "react-inlinesvg";
import Loader from "../../../../components/ui/loader";

const Status = ({ cityInfo, weatherInfo, unit }) => {
	return (
		<div className="status">
			<div className="container h-100">
				<div className="row justify-content-center align-items-center h-100">
					{cityInfo.name && weatherInfo.temp_c ? (
						<>
							<div className="col-5">
								<h1 className="my-0 fs-2hx text-white">
									{cityInfo && cityInfo.name}
								</h1>
								<h5 className="mb-5 text-muted">
									{weatherInfo && weatherInfo.condition.text}
								</h5>
								<SVG
									src={`assets/svg/weather-conditions/${
										weatherInfo && weatherInfo.condition.code
									}.svg`}
									width="100%"
								/>
							</div>
							<div className="col-4">
								<h2 className="my-0 text-white fs-5tx">
									{weatherInfo &&
										weatherInfo[unit === "metric" ? "temp_c" : "temp_f"]}
									<span className="fs-4qx">
										{unit === "metric" ? "\u2103" : "\u2109"}{" "}
									</span>
								</h2>
							</div>
						</>
					) : (
						<Loader />
					)}
				</div>
			</div>
		</div>
	);
};

export default Status;
