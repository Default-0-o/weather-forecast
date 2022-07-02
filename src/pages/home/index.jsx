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
	const [cityInfo, setCityInfo] = useState([]);
	const [weatherInfo, setWeatherInfo] = useState([]);
	const [searchTerm, setSearchTerm] = useState("Tabriz");
	const [sideBarStatus, setSideBarStatus] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			axios
				.get(Endpoints.searchLocation, {
					params: {
						q: searchTerm,
					},
				})
				.then((res) => {
					if (res.data.length === 0) return;
					setCityInfo(res.data[0]);
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

	useEffect(() => {
		cityInfo.Key &&
			axios
				.get(Endpoints.getWeatherHourly + "/" + cityInfo.Key, {
					params: {
						metric: true,
					},
				})
				.then((res) => {
					if (res.data.length === 0) return;
					else setWeatherInfo(res.data[0]);
				})
				.catch((err) => {
					if (!err) return;
					error("No data was returned!");
					console.log(err);
				});
	}, [cityInfo]);

	return (
		<div className="home">
			<SideBar
				isOpen={sideBarStatus}
				onClose={() => setSideBarStatus(false)}
				onInput={(e) => setSearchTerm(e.target.value)}
				searchTerm={searchTerm}
			/>
			<AnimatedView />
			<DotsMenu onClick={() => setSideBarStatus(true)} />
			<Status cityInfo={cityInfo} weatherInfo={weatherInfo} />
		</div>
	);
};

export default Home;
