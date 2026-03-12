import styles from "./Picture.module.css";

type PictureProps = {
	src: string;
	alt?: string;
	className: string;
};

function Picture({ src, alt, className }: PictureProps) {
	return (
		<img src={src} alt={alt} className={`no-select ${styles[className]}`} />
	);
}

export default Picture;
