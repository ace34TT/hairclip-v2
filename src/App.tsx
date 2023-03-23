import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./views/pages/frontoffice/homepage/Homepage";
import Frontoffice from "./views/layouts/frontoffice/Main/Frontoffice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontoffice />}></Route>
      {/* <Route path="applicant" element={<Template />}>
        <Route path="application-form" element={<RegistrationForm />}></Route>
        <Route
          path="confirm-application/:candidateId/:token"
          element={<ApplicationConfirmation />}
        ></Route>
      </Route> */}
    </Routes>
  );
}

export default App;
