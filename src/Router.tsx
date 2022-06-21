import { FC } from "react";
import { Provider } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import { FormModal } from "./features/Form/Form";

const Router: FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="invoiceAdressModal" element={<FormModal />} />
            <Route path="bankDataModal" element={<FormModal />} />
            <Route path="contactModal" element={<FormModal />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  );
}

export default Router;
