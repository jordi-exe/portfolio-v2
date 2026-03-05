import styles from "./Experience.module.css";
import ExpDetail from "./ExpDetail/ExpDetail";

function Experience() {
	return (
		<div className="pageContainer">
			<h1>Experience</h1>

			<button className={styles.switch}>Dummy Switch</button>
			<button className={styles.switch}>Dummy Switch</button>

			<div className={styles.expContainer}>
				<ExpDetail />
			</div>
		</div>
	);
}

export default Experience;
