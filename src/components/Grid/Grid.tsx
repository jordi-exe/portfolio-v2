import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Grid.module.css";
import Modal from "../Project Modal/Modal";
import type { projectProps } from "../../lib/types";

type gridProps = {
	data: projectProps[];
	itemsPerPage?: number;
	categories?: string[];
};

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

function Grid({ data, itemsPerPage = 2, categories }: gridProps) {
	const [shouldRender, setShouldRender] = useState(false);
	const [shouldAnimate, setShouldAnimate] = useState(false);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShouldRender(true);

			setTimeout(() => {
				setShouldAnimate(true);
			}, 50);
		}, 120);

		return () => clearTimeout(timeout);
	}, []);

	const [selectedCategory, setSelectedCategory] = useState("all");
	const [visibleCount, setVisibleCount] = useState(itemsPerPage);

	const gridProjects = useMemo(() => {
		return data.filter((work) => work.category !== "latest");
	}, [data]);

	const availableCategories = useMemo(() => {
		if (categories) return ["all", ...categories];

		const unique = new Set(gridProjects.map((p) => p.category));
		return ["all", ...Array.from(unique)];
	}, [gridProjects, categories]);

	const filteredProjects = useMemo(() => {
		if (selectedCategory === "all") return gridProjects;
		return gridProjects.filter((p) => p.category === selectedCategory);
	}, [gridProjects, selectedCategory]);

	const visibleProjects = useMemo(() => {
		return filteredProjects.slice(0, visibleCount);
	}, [filteredProjects, visibleCount]);

	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setVisibleCount(itemsPerPage);
	};

	const [selectedProject, setSelectedProject] = useState<projectProps | null>(
		null,
	);

	const loadMoreRef = useRef<HTMLDivElement | null>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		if (!shouldRender) return;
		if (!loadMoreRef.current) return;

		const id = requestAnimationFrame(() => {
			if (observerRef.current) observerRef.current.disconnect();

			const node = loadMoreRef.current;

			observerRef.current = new IntersectionObserver(
				(entries) => {
					const first = entries[0];

					if (first.isIntersecting) {
						setVisibleCount((prev) => {
							if (prev >= filteredProjects.length) return prev;

							return Math.min(prev + itemsPerPage, filteredProjects.length);
						});
					}
				},
				{
					rootMargin: "200px",
					threshold: 0,
				},
			);

			observerRef.current.observe(node);
		});

		return () => {
			cancelAnimationFrame(id);
			observerRef.current?.disconnect();
		};
	}, [
		shouldRender,
		selectedCategory,
		visibleCount,
		filteredProjects.length,
		itemsPerPage,
	]);

	return (
		<div className={styles.gridContainer}>
			<Modal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>

			{shouldRender && (
				<motion.div
					className={styles.pageContainer}
					variants={containerVariants}
					initial="hidden"
					animate={shouldAnimate ? "show" : "hidden"}
					layout
				>
					<AnimatePresence mode="popLayout">
						{visibleProjects.map((project) => (
							<motion.img
								key={project.title}
								layout
								src={project.featuredImg}
								className={styles.item}
								onClick={() => setSelectedProject(project)}
								initial={{ opacity: 0, y: 40 }}
								animate={
									shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
								}
								exit={{ opacity: 0, scale: 0.95 }}
								whileHover={{ scale: 1.03 }}
								whileTap={{ scale: 0.97 }}
								transition={{
									duration: 0.3,
									layout: { duration: 0.4, ease: "easeInOut" },
								}}
								loading="lazy"
								decoding="async"
							/>
						))}
					</AnimatePresence>

					<div ref={loadMoreRef} className={styles.loadMoreTrigger} />
				</motion.div>
			)}

			<div className={styles.controller}>
				<div className={styles.filter}>
					{availableCategories.map((category) => (
						<button
							key={category}
							onClick={() => handleCategoryChange(category)}
							className={selectedCategory === category ? styles.active : ""}
						>
							{category}
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export default Grid;
