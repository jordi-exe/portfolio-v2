import styles from "./Navbar.module.css";

type NavbarProps = {
	onNav: (index: number) => void;
};

function Navbar({ onNav }: NavbarProps) {
	return (
		<div className={styles.navContainer}>
			<div className={styles.navHeader}>
				<h1>Jordi Jordi</h1>
				<h3>Frontend Developer</h3>
			</div>

			<div className={styles.navBody}>
				<div className={styles.circle}></div>

				<div className={styles.navButtons}>
					<button onClick={() => onNav(0)}>About</button>
					<button onClick={() => onNav(1)}>Experience</button>
					<button onClick={() => onNav(2)}>Projects</button>
					<button>Contact Info</button>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
