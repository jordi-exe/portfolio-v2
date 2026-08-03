export type MediaItem =
	| {
			type: "image";
			src: string;
	  }
	| {
			type: "youtube";
			videoId: string;
			thumbnail: string;
	  };

export type projectProps = {
	category: string;
	title: string;
	featuredImg: string;
	modalLogo?: string;
	featuredSummary?: string;
	summary?: string;
	childImg?: MediaItem[];
	owner?: string;
	progress?: string;
	link?: string;
};
