import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

function Layout({ children }: any) {
	return (
		<div className={styles.layoutContainer}>
			<Navbar />
			{children}
		</div>
	);
}

export default Layout;
