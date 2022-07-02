import React, { useState } from "react";
import SVG from "react-inlinesvg";
import Loader from "../../../../components/ui/loader";

const Status = ({ cityInfo, weatherInfo }) => {
	const [unit, setUnit] = useState("metric");
	const [weather, setWeather] = useState("sunny");

	return (
		<div className="status">
			<div className="container h-100">
				<div className="row justify-content-center align-items-center h-100">
					{cityInfo.EnglishName && weatherInfo.Temperature ? (
						<>
							<div className="col-5">
								<h1 className="my-0 fs-2hx text-white">
									{cityInfo && cityInfo.EnglishName}
								</h1>
								<h5 className="mb-2 text-muted">
									{weatherInfo && weatherInfo.IconPhrase}
								</h5>
								<SVG
									src={`assets/svg/weather-conditions/${
										weatherInfo && weatherInfo.IconPhrase
									}.svg`}
									width="100%"
								/>
							</div>
							<div className="col-4">
								<h2 className="my-0 text-white fs-5tx">
									{weatherInfo.Temperature && weatherInfo.Temperature.Value}
									<span className="fs-4qx">
										{weatherInfo && weatherInfo.Temperature === "C"
											? "\u2109"
											: "\u2103"}{" "}
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
