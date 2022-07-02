import axios from "axios";
import { error } from "./services/toastService";

const newAxios = axios.create();

newAxios.interceptors.request.use(
	(config) => {
		config.params.apikey = "5VY2Uw4CzkDVV5XDzAMUpcxGVhhzdRuP";
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
