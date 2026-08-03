import styles from "./Navbar.module.css";
import Profile from "../Picture/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareLinkedin } from "@fortawesome/free-brands-svg-icons";

type NavbarProps = {
	onNav: (index: number) => void;
};

function Navbar({ onNav }: NavbarProps) {
	return (
		<div className={styles.navContainer}>
			<div className={styles.navHeader}>
				<h1>Jorge Romero</h1>
				<h3>Frontend Developer</h3>
			</div>

			<div className={styles.navBody}>
				<div className={styles.avatar}>
					<Profile src="/images/profile.webp" className="Default" />
				</div>

				<div className={styles.navButtons}>
					<button onClick={() => onNav(0)}>About</button>
					<button onClick={() => onNav(1)}>Experience</button>
					<button onClick={() => onNav(2)}>Projects</button>
				</div>
			</div>

			<div className={styles.navFooter}>
				<a href="https://github.com/jordi-exe" target="_blank">
					<FontAwesomeIcon
						icon={faGithub}
						size="2xl"
						className={styles.faIcon}
					/>
				</a>
				<a href="https://www.linkedin.com/in/jorge-romero3219/" target="_blank">
					<FontAwesomeIcon
						icon={faSquareLinkedin}
						size="2xl"
						className={styles.faIcon}
					/>
				</a>
			</div>
		</div>
	);
}

export default Navbar;
