import { createContext } from "react";
import aboutData from "../../assets/Data/About.json";
import expData from "../../assets/Data/Experience.json";

export const AboutContext = createContext(aboutData);
export const ExpContext = createContext(expData);
