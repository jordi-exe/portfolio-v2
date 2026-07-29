import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import type { projectProps } from "../../lib/types";

type ModalProps = {
	project: projectProps | null;
	onClose: () => void;
};

function Project({ project, onClose }: ModalProps) {
	if (!project) return null;

	//Controls which image is currently on the main image container
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
						<div>{project.owner}</div>
						<div>{project.progress}</div>
						<a href={project.link}>View Project</a>
					</div>
				</div>

				<div className={styles.column}>
					<h2 className={styles.title}>{project.title}</h2>
					<p className={styles.summary}>
						{project.summary || project.featuredSummary}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Project;
