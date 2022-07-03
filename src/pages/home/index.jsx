import React, { useState, useEffect } from "react";
import AnimatedView from "./components/animatedView";
import Status from "./components/status";
import DotsMenu from "../../components/dotsMenu";
import Endpoints from "../../constants/endpoints";
import axios from "../../httpConfig";
import { error, info } from "../../services/toastService";
import "./home.scss";
import SideBar from "../../components/sideBar";

const Home = () => {
	const [cityInfo, setCityInfo] = useState({});
	const [weatherInfo, setWeatherInfo] = useState({});
	const [searchTerm, setSearchTerm] = useState("New York");
	const [sideBarStatus, setSideBarStatus] = useState(false);
	const [unit, setUnit] = useState("imperial");

	useEffect(() => {
		const timer = setTimeout(() => {
			axios
				.get(Endpoints.getCurrentWeather, {
					params: {
						q: searchTerm,
					},
				})
				.then((res) => {
					if (res.data.length === 0) return;
					setCityInfo(res.data.location);
					setWeatherInfo(res.data.current);
				})
				.catch((err) => {
					if (!err) return;
					error(
						"There is no city with this name. Check the spelling or network connection."
					);
					console.log(err);
				});
		}, 2000);

		return () => clearTimeout(timer);
	}, [searchTerm]);

	return (
		<div className="home">
			<SideBar
				isOpen={sideBarStatus}
				onClose={() => setSideBarStatus(false)}
				onInput={(e) => setSearchTerm(e.target.value)}
				searchTerm={searchTerm}
				onUnit={(e) => setUnit(e.target.value)}
				unit={unit}
			/>
			<AnimatedView />
			<DotsMenu onClick={() => setSideBarStatus(true)} />
			<Status cityInfo={cityInfo} weatherInfo={weatherInfo} unit={unit} />
		</div>
	);
};

export default Home;
