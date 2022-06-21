import { FC, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { withModal } from "../modal/withModalHOC";
import { useLocation, useNavigate } from "react-router-dom";
import { resetData, selectCompany, setData } from "../Companies/companiesSlice";
import { selectSteps } from "../modal/modalSlice";
import { addCompany } from "../Companies/companiesSlice";
import { getCountries } from "../countries/countriesSlice";
import { Company } from "../../types/Company";
import { InvoiceAddress } from "./InvoiceAddress";
import { BankData } from "./BankData";
import { Contact } from "./Contact";

const FormModalContent: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const steps = useAppSelector(selectSteps);
  const company = useAppSelector(selectCompany);

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
    
  const onSubmit = (data: Company) => {  
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
        <InvoiceAddress register={register} errors={errors} />
      )}

      {location.pathname === `/${steps[1]}` && (
        <BankData register={register} errors={errors} />
      )}

      {location.pathname === `/${steps[2]}` && (
        <Contact register={register} errors={errors} />
      )}
    </form>
  );
}

export const FormModal = withModal(FormModalContent);