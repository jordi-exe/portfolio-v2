import "./App.css";
import Canvas from "./components/Canvas/CanvasPage";
import aboutData from "./assets/Data/About.json";
import { AboutContext } from "./lib/context/dataContext";

function App() {
	return (
		<AboutContext.Provider value={aboutData}>
			<Canvas />
		</AboutContext.Provider>
	);
}

export default App;
