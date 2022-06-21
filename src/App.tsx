import { FC } from "react";
import { useAppSelector } from "./app/hooks";
import { Outlet, useNavigate } from "react-router-dom";
import { Companies } from "./features/Companies/Companies";
import { selectSteps } from "./features/modal/modalSlice";
import "./App.css";

const App: FC = () => {
  const navigate = useNavigate();
  const steps = useAppSelector(selectSteps);

  return (
    <>
      <main className="app">       
        <button
          className="button_prime app__add-button"
          onClick={() => navigate(`/${steps[0]}`)}
        >
          Add
        </button>
        
        <Companies />
      </main>
      <Outlet />
    </>
  );
}

export default App;
