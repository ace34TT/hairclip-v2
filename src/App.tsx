import { Route, Routes } from "react-router-dom";
import "./App.css";
import Frontoffice from "./Main/Frontoffice";
import Homepage from "./pages/frontoffice/homepage/Homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontoffice />}>
        <Route index element={<Homepage />} />
      </Route>
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
