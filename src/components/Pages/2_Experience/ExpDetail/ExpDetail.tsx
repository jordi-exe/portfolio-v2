import styles from "./ExpDetail.module.css";
import Picture from "../../../Picture/Picture";
import { useContext } from "react";
import { ExpContext } from "../../../../lib/context/dataContext";

type ExpProps = {
	switchValue: string;
};

function ExpDetail({ switchValue }: ExpProps) {
	const exp = useContext(ExpContext);

	const experience = exp.filter((exp) => exp.exp === switchValue);

	return experience.map((item, index) => (
		<div key={index} className={styles.slot}>
			<div className={styles.logoSlot}>
				<h4>{item.date}</h4>
				<Picture src={item.logo} className="company" />
				<h3>{item.company}</h3>
			</div>
			<div className={styles.detailSlot}>
				<h3>{item.role}</h3>
				<p>{item.summary}</p>
				<div className={styles.techShields}>
					{item.badges?.map((badge, i) => (
						<Picture key={i} src={badge.src} className="badge" />
					))}
				</div>
			</div>
			<div className={styles.sampleSlot}>
				<Picture src={item.sample} className="sample" />
			</div>
		</div>
	));
}

export default ExpDetail;
