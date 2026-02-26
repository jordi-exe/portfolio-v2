import React, { useState, useEffect } from "react";
import { useTransition, animated, useSpringRef } from "@react-spring/web";
import type { CSSProperties } from "react";
import type { AnimatedProps } from "@react-spring/web";

import styles from "./Canvas.module.css";
import Layout from "../Layout/Layout";
import About from "../Pages/1_About/AboutPage";
import Experience from "../Pages/2_Experience/ExperiencePage";
import Projects from "../Pages/3_Projects/ProjectsPage";

const pages: ((
	//Page array for the different pages available
	props: AnimatedProps<{ style: CSSProperties }>,
) => React.ReactElement)[] = [
	({ style }) => (
		<animated.div style={style}>
			<About />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={style}>
			<Experience />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={style}>
			<Projects />
		</animated.div>
	),
];

function Canvas() {
	//Animation Code Begins
	const [index, setIndex] = useState(0);

	const transRef = useSpringRef();

	const transitions = useTransition(index, {
		ref: transRef,
		keys: null,
		from: { opacity: 0, transform: "translate3d(0,100%,0)" },
		enter: { opacity: 1, transform: "translate3d(0,0%,0)" },
		leave: { opacity: 0, transform: "translate3d(0,-50%,0)" },
	});

	useEffect(() => {
		transRef.start();
	}, [index]);
	//Animation Code Ends

	return (
		<Layout onNav={setIndex}>
			<div className={styles.container}>
				{transitions((style, i) => {
					const Page = pages[i];
					return <Page style={style} />;
				})}
			</div>
		</Layout>
	);
}

export default Canvas;
