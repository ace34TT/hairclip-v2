import { Route, Routes } from "react-router-dom";
import "./App.css";
import Frontoffice from "./pages/frontoffice/layouts/Frontoffice";
import Homepage from "./pages/frontoffice/homepage/Homepage";
import ShoppingPage from "./pages/frontoffice/shopping-page/ShoppingPage";
import ShoppingCart from "./pages/frontoffice/shopping-cart/ShoppingCart";
import ShippingDetailsForm from "./pages/frontoffice/shipping-details-form/ShippingDetailsForm";
import Payment from "./pages/frontoffice/paiement/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontoffice />}>
        <Route index element={<Homepage />} />
        <Route path="produits/:id" element={<ShoppingPage />} />
        <Route path="panier" element={<ShoppingCart />} />
        <Route path="details-livraison" element={<ShippingDetailsForm />} />
        <Route path="paiement" element={<Payment />} />
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
