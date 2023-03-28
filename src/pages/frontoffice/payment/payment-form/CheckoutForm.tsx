import {
  LinkAuthenticationElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useSaveOrder } from "../../../../hooks/useOrder";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { useNavigate } from "react-router-dom";
interface IProps {
  clientSecret: string;
}

export default function CheckoutForm({ clientSecret }: IProps) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }
    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );
    if (!clientSecret) {
      return;
    }
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent!.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setMessage("Err:1 il'y a eu une erreur");
      return;
    }
    setIsLoading(true);
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // return_url: "",
      },
      redirect: "if_required",
    });
    if (error) {
      if (error!.type === "card_error" || error!.type === "validation_error") {
        setMessage(error!.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
      setIsLoading(false);
      return;
    }
    handleOnSuccess();
  };
  //
  const { data, mutate, isLoading: isPosting, isSuccess } = useSaveOrder();
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.shoppingCart);
  const shippingInformation = useSelector(
    (state: RootState) => state.shippingInformation
  );
  const handleOnSuccess = async (): Promise<void> => {
    const data = { cart, shippingInformation, client_secret: clientSecret };
    mutate(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate("/paiement-effectue/" + data.data.order_id);
    }
  }, [isSuccess]);

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.value.email)}
      />
      <PaymentElement id="payment-element" />
      <button
        disabled={isLoading || isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading || isPosting ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Payer maintenant"
          )}
        </span>
      </button>
      {message && (
        <div className="text-red-600" id="payment-message">
          {message}
        </div>
      )}
    </form>
  );
}
