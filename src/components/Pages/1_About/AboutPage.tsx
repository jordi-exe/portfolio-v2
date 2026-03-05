import styles from "./About.module.css";
import RenderLogos from "./RenderLogos/RenderLogos";
import { useContext } from "react";
import { AboutContext } from "../../../lib/context/dataContext";

function About() {
	const about = useContext(AboutContext);

	return (
		<div className="pageContainer">
			<h1>About Me</h1>

			<div className={styles.pageBody}>
				<div className={styles.pageRow}>
					<div className={styles.pageColumn}>
						<p>{about.summary}</p>

						<div>
							<h2>Qualifications</h2>
							<ul>
								{about.qualification?.map((item, index) => (
									<li key={index}>{item.degree}</li>
								))}
							</ul>
						</div>
					</div>

					<div className={styles.pageColumn}>
						<div className={styles.shields}>
							<RenderLogos logos={about.logoTech} />
						</div>
					</div>
				</div>

				<div className={styles.pageRow}>
					<div className={styles.pageColumn}>
						<div className={styles.shields}>
							<RenderLogos logos={about.logoApp} />
						</div>
					</div>

					<div className={styles.pageColumn}>
						<div>
							<h2>Skills</h2>
							<ul>
								{about.skills?.map((item, index) => (
									<li key={index}>{item.point}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
