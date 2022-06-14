import { FC, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { withModal } from "../modal/withModalHOC";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import { resetData, selectCompany, setData } from "../Companies/companiesSlice";
import { selectSteps } from "../modal/modalSlice";
import { addCompany } from "../Companies/companiesSlice";
import { getCountries, selectCountries, selectCountriesStatus } from "../countries/countriesSlice";

const FormModalContent: FC = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useAppDispatch();
	const steps = useAppSelector(selectSteps);
	const company = useAppSelector(selectCompany);
	const countries = useAppSelector(selectCountries);
	const countriesLoadingStatus = useAppSelector(selectCountriesStatus);

	const {
		register,
		formState: {
			errors,
		},
		handleSubmit,
	} = useForm({
		defaultValues: {...company},
		mode: "all",
	});

	const currStep = useMemo(() => {
		return steps.indexOf(location.pathname.slice(1));
	}, [location.pathname, steps]);
		
	const onSubmit = (data: any) => {  
		dispatch(setData(data));

		if (location.pathname !== `/${steps[steps.length - 1]}`) {
			navigate(`/${steps[currStep + 1]}`);
		}
		
		if (location.pathname === `/${steps[steps.length - 1]}`) {
			dispatch(addCompany());
			dispatch(resetData());
			navigate(`/`);
		}
	};

	useEffect(() => {
		dispatch(getCountries());
	}, [dispatch]);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			id="form"
		>
			{location.pathname === `/${steps[0]}` && (
				<section className={styles.form}>
					<h2 className={styles.form__title}>Invoice Address</h2>
					<label className={styles.form__label}>
		
						<span className={styles.form__label_title}>
							Company&nbsp;*
						</span>
						<input
							className={styles.form__input}
							{
								...register("Company", {
									required: "required",
								})				
							}
							type="text"
							name="Company"
						/>
		
						<div className={styles.form__error}>
							<p>{errors?.Company?.message}</p>
						</div>
					</label>
		
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Name&nbsp;*
						</span>
						
						<input
							className={styles.form__input}
							{
								...register("Name", {
									required: "required",
								})				
							}
							type="text"
							name="Name"
						/>
		
						<div className={styles.form__error}>
							<p>{errors?.Name?.message}</p>
						</div>
					</label>
		
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Additional
						</span>
						<input
							className={styles.form__input}
							{...register("Additional")}
							type="text"
							name="Additional"
						/>
					</label>
		
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Street
						</span>
						<input
							className={styles.form__input}
							{...register("Street")}
							type="text"
							name="Street"
						/>
					</label>
		
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Postal Code
						</span>
						<input
							className={styles.form__input}
							{...register("Postal Code")}
							type="text"
							name="Postal Code"
						/>
					</label>
		
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Country
						</span>
						<select
							className={styles.form__input}
							{...register("Country")}
						>
							{countriesLoadingStatus !== "success" && 
								<option>{countriesLoadingStatus}</option>
							}

							{countries.map((country) => (
								<option>
									{countriesLoadingStatus === "success" && (
										country.name
									)}
								</option>
							))}
						</select>
					</label>
				</section>
			)}

			{location.pathname === `/${steps[1]}` && (
				<section className={styles.form}>
					<h2 className={styles.form__title}>Bank Data</h2>
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							IBAN&nbsp;*
						</span>

						<input
							className={styles.form__input}
							{...register("IBAN", {
									required: "Field is required",
								})				
							}
							type="text"
							name="IBAN"
						/>

					<div className={styles.form__error}>
						<p>{errors?.IBAN?.message}</p>
					</div>
					</label>

					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							BIC&nbsp;*
						</span>

						<input
							className={styles.form__input}
							{...register("BIC", {
									required: "Field is required",
								})				
							}
							type="text"
							name="BIC"
						/>

						<div className={styles.form__error}>
							<p>{errors?.BIC?.message}</p>
						</div>
					</label>

					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Bank:&nbsp;name:&nbsp;*
						</span>

						<input
							className={styles.form__input}
							{...register("Bank name", {
									required: "Field is required",
								})				
							}
							type="text"
							name="Bank name"
						/>

						<div className={styles.form__error}>
							<p>{errors?.["Bank name"]?.message}</p>
						</div>
					</label>
				</section>
			)}

			{location.pathname === `/${steps[2]}` && (
				<section className={styles.form}>
					<h2 className={styles.form__title}>Contact</h2>
					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Fax
						</span>

						<input
							className={styles.form__input}
							{...register("Fax")}
							type="tel"
							name="Fax"
						/>
					</label>

					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							E-mail
						</span>

						<input
							className={styles.form__input}
							{
								...register("Mail", {
									required: "required",
									pattern: {
										value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
										message: 'invalid',
									}
								})				
							}
							type="text"
							name="Mail"
						/>
								
						<div className={styles.form__error}>
							<p>{errors?.Mail?.message}</p>
						</div>
					</label>

					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Birthday
						</span>

						<input
							className={styles.form__input}
							{...register("Birthday")}
							type="date"
							name="Birthday"
						/>
					</label>

					<label className={styles.form__label}>
						<span className={styles.form__label_title}>
							Homepage
						</span>

						<input
							className={styles.form__input}
							{...register("Homepage")}
							type="text"
							name="Homepage"
						/>
					</label>
				</section>
			)}
		</form>
	);
}

export const FormModal = withModal(FormModalContent);