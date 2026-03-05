import "./App.css";
import Canvas from "./components/Canvas/CanvasPage";
import aboutData from "./assets/Data/About.json";
import expData from "./assets/Data/Experience.json";
import { AboutContext, ExpContext } from "./lib/context/dataContext";

function App() {
	return (
		<AboutContext.Provider value={aboutData}>
			<ExpContext.Provider value={expData}>
				<Canvas />
			</ExpContext.Provider>
		</AboutContext.Provider>
	);
}

export default App;
