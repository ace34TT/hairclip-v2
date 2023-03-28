import React from "react";

export default function Payment() {
  return (
    <div className="flex justify-center items-cente h-fit ">
      <div className="flex flex-col md:flex-row h-fit min-h-screen w-11/12">
        <div className="flex-1 flex flex-col justify-center items-center prose max-w-none">
          <h2>Mode de paiement</h2>
          <br />
          <form id="payment-form" className="py-4">
            <div id="link-authentication-element">
              {/* <!--Stripe.js injects the Link Authentication Element--> */}
            </div>
            <div id="payment-element">
              {/* <!--Stripe.js injects the Payment Element--> */}
            </div>
            <button id="submit">
              <div className="spinner hidden" id="spinner"></div>
              <span id="button-text">Payer maintenant</span>
            </button>
            <div id="payment-message" className="hidden"></div>
          </form>
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
                    @foreach (Cart::content() as $cart_item)
                    <tr
                      className="cart-item-row"
                      data-quantity="{{ $cart_item->qty }}"
                      data-row-id="{{ $cart_item->rowId }}"
                    >
                      <td
                        colSpan={2}
                        className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                      >
                        <div className="flex gap-10 items-center">
                          <div className="w-fit sm:w-56">
                            <div
                              className="relative"
                              style={{ height: "150px", width: "150px" }}
                            >
                              <img
                                className="m-0 rounded-md"
                                style={{ height: "150px", width: "150px" }}
                                src="{{ asset('images/scranchies/' . $cart_item->options['top_view']) }}"
                                alt=""
                              />
                              <span className="absolute top-0 right-0 px-2 py-1 bg-[#03524C] text-white text-xs font-bold rounded">
                                {/* {{ $cart_item-> qty}} */}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-[#03524C]">
                              {/* {{ $cart_item->model->name }} */}
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
                              style={{ height: "150px", width: "150" }}
                            >
                              <img
                                className="m-0"
                                style={{ height: "150", width: "150" }}
                                src="{{ asset('images/scranchies/' . $cart_item->options['top_view']) }}"
                                alt=""
                              />
                              <span className="absolute top-0 right-0 px-2 py-1 bg-[#03524C] text-white text-xs font-bold rounded">
                                {/* {{ $cart_item-> qty}} */}
                              </span>
                            </div>
                          </div>
                          <div>
                            <p className="text-2xl font-bold text-[#03524C]">
                              {/* {{ $cart_item->model->name }} */}
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
                        </span>{" "}
                        €
                      </td>
                    </tr>
                    @endforeach
                    {/* {{-- bottom --}} */}
                    <tr>
                      <td className="whitespace-nowrap py-4 px-3 text-sml align-middle text-xl">
                        <span data-total="" className="text-black font-bold ">
                          {/* Sous-total : {{ Cart::total() }} € */}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 px-3 text-sml align-middle text-xl">
                        <span data-total="" className="text-black font-bold ">
                          {/* Livraison : {{ Cart::count(true) < 3 ? 1.99 : 4.99 }} € */}
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
                            {" "}
                            :
                            {/* {{ Cart::total() + (Cart::count(true) < 3 ? 1.99 : 4.99) }} */}
                          </span>{" "}
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
