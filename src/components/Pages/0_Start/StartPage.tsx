import styles from "./StartPage.module.css";

function StartPage() {
	return (
		<div className={styles.welcomeDiv}>
			<h2>Hello there! I'm Jordi!</h2>
			<h1>Welcome to my Portfolio!</h1>

			<br />
			<button>Let's Go!</button>
		</div>
	);
}

export default StartPage;
