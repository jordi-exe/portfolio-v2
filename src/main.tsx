import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/fonts/Gontserrat/Gontserrat-Regular.ttf";
import "./assets/fonts/Gontserrat/Gontserrat-Italic.ttf";
import "./assets/fonts/Gontserrat/Gontserrat-Bold.ttf";
import "./assets/fonts/Gontserrat/Gontserrat-BoldItalic.ttf";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
