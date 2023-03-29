import { Route, Routes } from "react-router-dom";
import "./App.css";
import Frontoffice from "./pages/frontoffice/layouts/Frontoffice";
import Homepage from "./pages/frontoffice/homepage/Homepage";
import ShoppingPage from "./pages/frontoffice/shopping-page/ShoppingPage";
import ShoppingCart from "./pages/frontoffice/shopping-cart/ShoppingCart";
import ShippingDetailsForm from "./pages/frontoffice/shipping-details-form/ShippingDetailsForm";
import PaymentSuccess from "./pages/frontoffice/payment-success/PaymentSuccess";
import Payment from "./pages/frontoffice/payment/Payment";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Frontoffice />}>
        <Route index element={<Homepage />} />
        <Route path="produits/:id" element={<ShoppingPage />} />
        <Route path="panier" element={<ShoppingCart />} />
        <Route path="details-livraison" element={<ShippingDetailsForm />} />
        <Route path="paiement" element={<Payment />} />
        <Route
          path="paiement-effectue/:id"
          element={<PaymentSuccess />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
