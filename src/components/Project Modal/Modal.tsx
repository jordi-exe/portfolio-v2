import { useState, useEffect } from "react";
import styles from "./Modal.module.css";
import type { projectProps } from "../../lib/types";
import { motion } from "framer-motion";
import Picture from "../Picture/Picture";
import type { MediaItem } from "../../lib/types";

type ModalProps = {
	project: projectProps | null;
	onClose: () => void;
};

function Project({ project, onClose }: ModalProps) {
	if (!project) return null;

	const getInitialMedia = (project: projectProps): MediaItem => {
		const media =
			project.childImg?.find((img) => img.type === "image") ??
			project.childImg?.find((img) => img.type === "youtube");

		return media
			? media
			: {
					type: "image",
					src: project.featuredImg,
				};
	};

	//Controls which image is currently on the main image container
	const [activeMedia, setActiveMedia] = useState<MediaItem>(
		getInitialMedia(project),
	);

	const isActiveMedia = (a: MediaItem, b: MediaItem) => {
		if (a.type === "image" && b.type === "image") {
			return a.src === b.src;
		}

		if (a.type === "youtube" && b.type === "youtube") {
			return a.videoId === b.videoId;
		}

		return false;
	};

	useEffect(() => {
		if (project) {
			setActiveMedia(getInitialMedia(project));
		}
	}, [project]);

	return (
		<motion.div
			className={styles.modalBackdrop}
			initial={{ x: "100%" }}
			animate={{ x: 0 }}
			exit={{ x: "100%" }}
			transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
		>
			<button
				onClick={() => {
					setActiveMedia(getInitialMedia(project));
					onClose();
				}}
				className={styles.closeBtn}
			>
				{String.fromCharCode(10148)}
			</button>
			<div className={styles.modalContainer}>
				<div className={styles.column}>
					<div className={styles.imgContainer}>
						<div className={styles.mainImg}>
							{activeMedia?.type === "image" ? (
								<img src={activeMedia.src} alt="Main preview" />
							) : (
								<iframe
									src={`https://www.youtube.com/embed/${activeMedia.videoId}`}
									title="Project video"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowFullScreen
								/>
							)}
						</div>

						<div className={styles.imgScroller}>
							{project.childImg?.map((media, i) => (
								<img
									key={i}
									src={media.type === "image" ? media.src : media.thumbnail}
									className={
										isActiveMedia(activeMedia, media) ? styles.activeThumb : ""
									}
									onClick={() => setActiveMedia(media)}
								/>
							))}
						</div>
					</div>

					<div className={styles.statusContainer}>
						<div>{project.progress}</div>
						<div>{project.owner}</div>

						{project.link ? (
							<a href={project.link} target="_blank">
								View Project
							</a>
						) : null}
					</div>
				</div>

				<div className={styles.column}>
					<div className={styles.description}>
						<h2 className={styles.title}>{project.title}</h2>
						<p className={styles.summary}>
							{project.summary || project.featuredSummary}
						</p>
					</div>

					<div className={styles.modalLogo}>
						<Picture src={project.modalLogo as string} className="modalLogo" />
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Project;
