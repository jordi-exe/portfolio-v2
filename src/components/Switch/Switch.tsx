import styles from "./Switch.module.css";

type SwitchProps<T extends string> = {
	leftValue: T;
	rightValue: T;
	value: T;
	onChange: (value: T) => void;
};

function Switch<T extends string>({
	leftValue,
	rightValue,
	value,
	onChange,
}: SwitchProps<T>) {
	return (
		<div className={`no-select ${styles.switchContainer}`}>
			<button
				className={`${styles.left} ${value === leftValue ? styles.active : ""}`}
				onClick={() => onChange(leftValue)}
			>
				<b>{leftValue}</b>
			</button>

			<button
				className={`${styles.right} ${value === rightValue ? styles.active : ""}`}
				onClick={() => onChange(rightValue)}
			>
				<b>{rightValue}</b>
			</button>
		</div>
	);
}

export default Switch;
