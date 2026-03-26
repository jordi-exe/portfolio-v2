export type projectProps = {
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
