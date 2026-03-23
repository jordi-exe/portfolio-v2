import { useState, useEffect } from "react";
import styles from "./Modal.module.css";

type projectProps = {
	category: string;
	title: string;
	featuredImg: string;
	featuredSummary: string;
	summary?: string;
	childImg?: { img: string }[];
	owner?: string;
	progress?: string;
	link?: string;
};

type ModalProps = {
	project: projectProps | null;
	onClose: () => void;
};

function Project({ project, onClose }: ModalProps) {
	if (!project) return null;

	const [activeImg, setActiveImg] = useState(project.featuredImg);

	useEffect(() => {
		if (project) {
			setActiveImg(project.featuredImg);
		}
	}, [project]);

	return (
		<div className={styles.modalBackdrop}>
			<button onClick={onClose} className={styles.closeBtn}>
				Close
			</button>
			<div className={styles.modalContainer}>
				<div className={styles.column}>
					<div className={styles.imgContainer}>
						<div className={styles.mainImg}>
							<img src={activeImg} alt="Main preview" />
						</div>

						<div className={styles.imgScroller}>
							{project.childImg?.map((img, i) => (
								<img
									key={i}
									src={img.img}
									className={activeImg === img.img ? styles.activeThumb : ""}
									onClick={() => setActiveImg(img.img)}
								/>
							))}
						</div>
					</div>

					<div className={styles.statusContainer}>
						<h3>{project.owner}</h3>
						<h3>{project.progress}</h3>
						<a href={project.link}>View Project</a>
					</div>
				</div>

				<div className={styles.column}>
					<div className={styles.title}>{project.title}</div>
					<p className={styles.summary}>
						{project.summary || project.featuredSummary}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Project;
