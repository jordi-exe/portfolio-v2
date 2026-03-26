import { useState, useMemo } from "react";
import styles from "./Grid.module.css";
import Modal from "../Project Modal/Modal";
import type { projectProps } from "../../lib/types";

type gridProps = {
	data: projectProps[];
	itemsPerPage?: number;
	categories?: string[];
};

function Grid({ data, itemsPerPage = 2, categories }: gridProps) {
	//Pagination and Filter Logic start
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [currentPage, setCurrentPage] = useState(1);

	//Project with the latest category is removed from the grid
	const gridProjects = useMemo(() => {
		return data.filter((work) => work.category !== "latest");
	}, [data]);

	const availableCategories = useMemo(() => {
		if (categories) return ["all", ...categories];

		const unique = new Set(gridProjects.map((p) => p.category));
		return ["all", ...Array.from(unique)];
	}, [gridProjects, categories]);

	//Filters through the selected category
	const filteredProjects = useMemo(() => {
		if (selectedCategory === "all") return gridProjects;
		return gridProjects.filter((p) => p.category === selectedCategory);
	}, [gridProjects, selectedCategory]);

	//Sets the total pages based on the currently filtered category
	const totalPages = Math.max(
		1,
		Math.ceil(filteredProjects.length / itemsPerPage),
	);

	//Divides all items to different pages
	const paginatedProjects = useMemo(() => {
		const start = (currentPage - 1) * itemsPerPage;
		return filteredProjects.slice(start, start + itemsPerPage);
	}, [filteredProjects, currentPage, itemsPerPage]);

	//Resets the grid when the category swaps
	const handleCategoryChange = (category: string) => {
		setSelectedCategory(category);
		setCurrentPage(1);
	};
	//Pagination and Filter Logic end

	const [selectedProject, setSelectedProject] = useState<projectProps | null>(
		null,
	);

	return (
		<div className={styles.gridContainer}>
			<Modal
				project={selectedProject}
				onClose={() => setSelectedProject(null)}
			/>
			<div className={styles.pageContainer}>
				{paginatedProjects.map((project) => (
					<img
						key={project.title}
						src={project.featuredImg}
						className={styles.item}
						onClick={() => setSelectedProject(project)}
					/>
				))}
			</div>

			<div className={styles.controller}>
				<div className={styles.pagination}>
					<button
						onClick={() => setCurrentPage((p) => p - 1)}
						disabled={currentPage === 1}
					>
						Left
					</button>

					<button
						onClick={() => setCurrentPage((p) => p + 1)}
						disabled={currentPage === totalPages}
					>
						Right
					</button>
				</div>

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
