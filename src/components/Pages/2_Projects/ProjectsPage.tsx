import styles from "./Projects.module.css";
import projects from "../../../assets/Data/Projects.json";
import Picture from "../../Picture/Picture";
import Grid from "../../Grid/Grid";

function Projects() {
	const latestProject = projects.find((latest) => latest.category === "latest");

	return (
		<div className="pageContainer">
			<div className={styles.layoutContainer}>
				<div className={styles.latestColumn}>
					<h1>Latest Project</h1>

					<div className={styles.latestProject}>
						<Picture
							src={latestProject?.featuredImg as string}
							className="latest"
						/>
					</div>

					<div className={styles.latestDesc}>
						<h2>{latestProject?.title}</h2>
						<h4>{latestProject?.featuredSummary}</h4>
						<p>{latestProject?.summary}</p>
					</div>
				</div>

				<div className={styles.projectsColumn}>
					<h1>Projects</h1>

					<Grid
						data={projects}
						itemsPerPage={6}
						categories={["code", "modeling", "game dev", "design"]}
					/>
				</div>
			</div>
		</div>
	);
}

export default Projects;
