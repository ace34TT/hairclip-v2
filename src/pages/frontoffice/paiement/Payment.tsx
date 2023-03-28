import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CheckoutForm from "./payment-form/CheckoutForm";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { imgHelper } from "../../../helpers/assets.helper";

const stripePromise = loadStripe(process.env.REACT_APP_PK_STRIPE!);
export default function Payment() {
  const cart = useSelector((state: RootState) => state.shoppingCart);
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(process.env.REACT_APP_GENERATE_CLIENT_URL!, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ total: cart.total }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClientSecret(data.clientSecret);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div className="flex justify-center items-cente h-fit ">
      <div className="flex flex-col md:flex-row h-fit min-h-screen w-11/12">
        <div className="flex-1 flex flex-col justify-center items-center prose max-w-none">
          <h2>Mode de paiement</h2>
          <br />
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
        <div className="flex-1 my-4 bg-slate-100 px-5 sm:px-10 prose max-w-none">
          <h1 className="text-center mx-auto mt-4 mb-0">Récapitulatif</h1>
          <div className="mt-8\0 flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full mt-0 divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      ></th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* {{-- main data --}} */}
                    {cart.products.map((item) => {
                      return (
                        <tr
                          className="cart-item-row"
                          data-quantity="{{ $cart_item->qty }}"
                          data-row-id="{{ $cart_item->rowId }}"
                        >
                          <td
                            colSpan={2}
                            className="table-cell sm:hidden whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                          >
                            <div className="flex gap-10 items-center">
                              <div className="w-fit sm:w-56">
                                <div
                                  className="relative"
                                  style={{ height: "150px", width: "150px;" }}
                                >
                                  <img
                                    className="m-0 rounded-md"
                                    style={{ height: "150px", width: "150px" }}
                                    src="{{ asset('images/scranchies/' . $cart_item->options['top_view']) }}"
                                    alt=""
                                  />
                                  <span className="absolute top-0 right-0 px-2 py-1 bg-[#03524C] text-white text-xs font-bold rounded">
                                    {/* {{ $cart_item-> qty}} */}
                                    {item.quantity}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-[#03524C]">
                                  {/* {{ $cart_item->model->name }} */}
                                  {item.name}
                                  <span
                                    data-id="{{ $cart_item->id }}"
                                    className="product_id hidden"
                                  ></span>
                                </p>
                                <br />
                                <span>
                                  <span
                                    data-price=""
                                    id="{{ 'product_' . $cart_item->id . '_price' }}"
                                  >
                                    {/* {{ $cart_item-> price}} */}
                                    {cart.unitPrice}
                                  </span>
                                  €
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                            <div className="flex gap-10 items-center">
                              <div className="w-fit sm:w-56">
                                <div
                                  className="relative"
                                  style={{ height: "150px", width: "150px" }}
                                >
                                  <img
                                    className="m-0 rounded-md"
                                    style={{ height: "150px", width: "150px" }}
                                    src={imgHelper(item.preview)}
                                    alt=""
                                  />
                                  <span className="absolute top-0 right-0 px-2 py-1 bg-[#03524C] text-white text-xs font-bold rounded">
                                    {/* {{ $cart_item-> qty}} */}
                                    {item.quantity}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <p className="text-2xl font-bold text-[#03524C]">
                                  {/* {{ $cart_item->model->name }} */}
                                  {item.name}
                                  <span
                                    data-id="{{ $cart_item->id }}"
                                    className="product_id hidden"
                                  ></span>
                                </p>
                                <br />
                                <span>
                                  <span
                                    data-price=""
                                    id="{{ 'product_' . $cart_item->id . '_price' }}"
                                  >
                                    {/* {{ $cart_item-> price}} */}
                                    {cart.unitPrice}
                                  </span>
                                  €
                                </span>
                              </div>
                            </div>
                          </td>
                          <td className="hidden sm:table-cell whitespace-nowrap py-4 px-3 text-lg font-bold text-black align-middle text-end">
                            <span
                              data-subtotal=""
                              id="{{ 'product_' . $cart_item->id . '_total' }}"
                              className="sub_total_price"
                            >
                              {/* {{ $cart_item-> price * $cart_item -> qty}} */}
                              {cart.unitPrice * cart.quantity}
                            </span>{" "}
                            €
                          </td>
                        </tr>
                      );
                    })}

                    {/* @endforeach
                                    {{-- bottom --}} */}
                    <tr>
                      <td className="whitespace-nowrap py-4 px-3 text-sml align-middle text-xl">
                        <span data-total="" className="text-black font-bold ">
                          {/* Sous-total : {{ Cart::total() }} € */}
                          Sous-total : {cart.subTotal.toFixed(2)} €
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 px-3 text-sml align-middle text-xl">
                        <span data-total="" className="text-black font-bold ">
                          Livraison : {cart.shipping} €
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 px-3 text-sml align-middle text-xl">
                        <span className="text-black font-bold underline">
                          Montant total
                        </span>
                        <span data-total="" className="text-black font-bold ">
                          <span id="total_price">
                            : {" " + cart.total.toFixed(2) + " "}
                          </span>
                          €
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
