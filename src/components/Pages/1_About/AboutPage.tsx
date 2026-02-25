import styles from "./About.module.css";
import Picture from "../../Picture/Picture";

function About() {
	return (
		<div className={styles.pageContainer}>
			<h1>About Me</h1>

			<div className={styles.pageBody}>
				<div className={styles.pageRow}>
					<div className={styles.pageColumn}>
						<p>
							A proactive, creative and ambitious Junior Front End Developer who
							is fully committed to take on new opportunities to gain new skills
							within the development world. Capable of working in high pressure
							environments while maintaining an organized work schedule. Capable
							of programming in C#, HTML/CSS/JS.
						</p>

						<div>
							<h2>Qualifications</h2>
							<ul>
								<li>Bachelor's of Arts in Interactive Design</li>
								<li>Associate's Degree in Computer Science</li>
							</ul>
						</div>
					</div>

					<div className={styles.pageColumn}>
						<div className={styles.shields}>
							<Picture src="/logos/HTML5.svg" className="logo" />
							<Picture src="/logos/CSS.svg" className="logo" />
							<Picture src="/logos/JS.svg" className="logo" />
							<Picture src="/logos/React.svg" className="logo" />
							<Picture src="/logos/TS.svg" className="logo" />
						</div>
					</div>
				</div>

				<div className={styles.pageRow}>
					<div className={styles.pageColumn}>
						<div className={styles.shields}>Filler App Icons</div>
					</div>

					<div className={styles.pageColumn}>
						<div>
							<h2>Skills</h2>
							<ul>
								<li>Code - HTML5, CSS, Javascript, C#, C++, VueJS</li>
								<li>Libraries - Bootstrap 5, jQuery, OnsenUI</li>
								<li>Game Engines - Unity, Godot</li>
								<li>
									Design - Adobe Suite Proficiency, Video Editing, Photo
									Editing, Application Design, Poster Design, 3D Modeling
								</li>
								<li>Spoken/Written Languages - English, Spanish</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
