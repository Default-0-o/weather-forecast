import axios from "axios";
import { error } from "./services/toastService";

const newAxios = axios.create();

newAxios.interceptors.request.use(
	(config) => {
		config.params.key = "6849689f80164c1eab052736220307";
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

newAxios.interceptors.response.use(
	(response) => response,
	(err) => {
		if (err.status >= 500) error("Something went wrong !");
	}
);

export default newAxios;
