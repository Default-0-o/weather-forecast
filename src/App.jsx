import Home from "./pages/home";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import "./assets/css/customBootstrapRtl.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<ToastContainer />
			<Home />
		</div>
	);
}

export default App;
