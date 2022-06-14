import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { selectSteps } from "../modal/modalSlice";
import styles from "./FormNavigateButtons.module.css";
import { resetData } from "../Companies/companiesSlice";

export const FormNavigationButtons: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();

	const steps = useAppSelector(selectSteps);

	return (
		<section className={styles.buttons}>	
			<button
				className={styles.button}
				type="button"
				onClick={() => {
					dispatch(resetData());
					navigate("/");
				}}
			>
				Cancel
			</button>
			
			{location.pathname !== `/${steps[0]}` && (
				<button
					className={styles.button}
					type="button"
					onClick={() => {
						navigate(-1);
					}}
				>
					Previous
				</button>
			)}

			{location.pathname !== `/${steps[steps.length - 1]}` && (
				<input
					className={styles.button}
					type="submit"
					value="Next"
					form="form"
				/>
			)}
			
			{location.pathname === `/${steps[steps.length - 1]}` && (
				<input
					className={styles.button}
					type="submit"
					value="Save"
					form="form"
				/>
			)}
		</section>
	);
};
