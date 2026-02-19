import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

type LayoutProps = {
	children: any;
	onNav: (index: number) => void;
};

function Layout({ children, onNav }: LayoutProps) {
	return (
		<div className={styles.layoutContainer}>
			<Navbar onNav={onNav} />
			{children}
		</div>
	);
}

export default Layout;
