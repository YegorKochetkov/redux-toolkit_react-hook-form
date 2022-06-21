import { FC } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";
import styles from "./Form.module.css";

type Props = {
  register: UseFormRegister<{
    [x: string]: string;
  }>,
  errors: {
    [x: string]: FieldError;
  },
};

export const BankData: FC<Props> = ({ register, errors}) => {
  return (
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
  );
};
