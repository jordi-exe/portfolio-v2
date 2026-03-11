import { useState } from "react";
import { useSpring, a } from "@react-spring/web";
import styles from "./Experience.module.css";
import ExpDetail from "./ExpDetail/ExpDetail";
import Switch from "../../Switch/Switch";

function Experience() {
	const [view, setView] = useState<"Work" | "Personal">("Work");

	const flipped = view === "Personal";
	const { transform, opacity } = useSpring({
		transform: `perspective(150rem) rotateY(${flipped ? 180 : 0}deg)`,
		opacity: flipped ? 1 : 0,
		config: { mass: 5, tension: 500, friction: 80 },
	});

	return (
		<div className="pageContainer">
			<h1>Experience</h1>

			<Switch
				leftValue="Work"
				rightValue="Personal"
				value={view}
				onChange={setView}
			/>

			<div className={styles.flipContainer}>
				<a.div className={styles.flipper} style={{ transform }}>
					<a.div
						className={styles.front}
						style={{ opacity: opacity.to((o) => 1 - o) }}
					>
						<ExpDetail switchValue="Work" />
					</a.div>

					<a.div className={styles.back} style={{ opacity: opacity }}>
						<ExpDetail switchValue="Personal" />
					</a.div>
				</a.div>
			</div>
		</div>
	);
}

export default Experience;
