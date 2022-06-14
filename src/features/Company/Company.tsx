import { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { Company as CompanyType } from "../../types/Company";
import { removeCompany } from "../Companies/companiesSlice";
import styles from "./Company.module.css";

type Props = { company: CompanyType };

export const Company: FC<Props> = ({ company }) => {
const dispatch = useAppDispatch();

  return (
    <>
			<td className={styles.company__cell}>
				<button
					className={styles.company__delete_button}
					type="button"
					onClick={() => dispatch(removeCompany(company.BIC))}
				/>
			</td>

    	{Object.entries(company)?.map((field, index) => (
				<td
					key={field[0] + index.toString()}
					className={styles.company__cell}
				>
					{field[1]}
				</td>
			))}
    </>
  );
};
