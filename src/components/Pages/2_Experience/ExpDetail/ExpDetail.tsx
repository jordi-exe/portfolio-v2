import styles from "./ExpDetail.module.css";
import Picture from "../../../Picture/Picture";
import { useContext } from "react";
import { ExpContext } from "../../../../lib/context/dataContext";

function ExpDetail() {
	const exp = useContext(ExpContext);

	return exp.map((item, index) => (
		<div key={index} className={styles.slot}>
			<div className={styles.logoSlot}>
				<h4>{item.date}</h4>
				<Picture src={item.logo} className="company" />
				<div>{item.company}</div>
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
