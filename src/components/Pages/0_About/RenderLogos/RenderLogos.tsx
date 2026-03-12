import Picture from "../../../Picture/Picture";

type Logo = {
	src: string;
	className: string;
};

type RenderLogosProps = {
	logos: Logo[];
};

function RenderLogos({ logos }: RenderLogosProps) {
	return logos.map((logos, index) => (
		<Picture key={index} src={logos.src} className={logos.className} />
	));
}

export default RenderLogos;
