import { toast } from "react-toastify";

const options = {
	theme: "dark",
	position: "top-right",
	autoClose: 5000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
};
export const error = (message) => toast.error(message, options);
export const info = (message) => toast.info(message, options);
