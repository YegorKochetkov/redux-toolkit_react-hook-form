import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import { useAppSelector } from "../../app/hooks";
import styles from "./Form.module.css";
import { selectCountries, selectCountriesStatus } from "../countries/countriesSlice";

type Props = {
  register: UseFormRegister<{
    [x: string]: string;
  }>,
  errors: {
    [x: string]: FieldError;
  },
};

export const InvoiceAddress: FC<Props> = ({ register, errors}) => {
  const countries = useAppSelector(selectCountries);
  const countriesLoadingStatus = useAppSelector(selectCountriesStatus);

  return (
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
  );
};
