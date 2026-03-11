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
		<div className={styles.switchContainer}>
			<button
				className={`${styles.left} ${value === leftValue ? styles.active : ""}`}
				onClick={() => onChange(leftValue)}
			>
				{leftValue}
			</button>

			<button
				className={`${styles.right} ${value === rightValue ? styles.active : ""}`}
				onClick={() => onChange(rightValue)}
			>
				{rightValue}
			</button>
		</div>
	);
}

export default Switch;
