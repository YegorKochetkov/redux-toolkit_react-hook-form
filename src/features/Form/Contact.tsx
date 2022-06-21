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

export const Contact: FC<Props> = ({ register, errors}) => {
  return (
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
  );
};
