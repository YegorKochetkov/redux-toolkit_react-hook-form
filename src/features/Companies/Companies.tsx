import { FC } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCompanies, selectCompany } from "./companiesSlice";
import styles from "./Companies.module.css";
import { Company } from "../Company/Company";

export const Companies: FC = () => {
  const companiesList = useAppSelector(selectCompanies);
  const company = useAppSelector(selectCompany);

  return (
    <table className={styles.companies}>
      <thead className={styles.companies_head}>
        <tr className={styles.companies_row}>
          <th className={styles.companies_cell}></th>
            {Object.keys(company).map((field) => (
              <th key={field} className={styles.companies_cell}>
                {field}
              </th>
            ))}
        </tr>   
      </thead>
      <tbody>
        {companiesList?.map((company, index) => (
          <tr key={company.BIC + index.toString()}>
            <Company company={company} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
