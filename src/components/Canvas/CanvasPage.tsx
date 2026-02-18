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
	props: AnimatedProps<{ style: CSSProperties }>,
) => React.ReactElement)[] = [
	({ style }) => (
		<animated.div style={{ ...style, fontSize: 30 }}>
			<About />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, fontSize: 30 }}>
			<Experience />
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, fontSize: 30 }}>
			<Projects />
		</animated.div>
	),
];

function Canvas() {
	const [index, set] = useState(0);
	const onClick = () => set((state) => (state + 1) % 3);
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
	return (
		<Layout>
			<div className={styles.container} onClick={onClick}>
				{transitions((style, i) => {
					const Page = pages[i];
					return <Page style={style} />;
				})}
			</div>
		</Layout>
	);
}

export default Canvas;
