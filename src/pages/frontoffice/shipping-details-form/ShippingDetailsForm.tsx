import React from "react";

export default function ShippingDetailsForm() {
  return (
    <div className="flex justify-center items-cente h-fit my-5 ">
      <div className="flex flex-col md:flex-row gap-4 bg-slate-50  md:gap-0 h-fit w-11/12 rounded-md">
        <div className="flex-1 flex flex-col gap-7 prose max-w-none justify-center items-start px-4 py-4 md:px-16">
          <h3>
            <span className="text-black">
              <span className="text-d-green">Panier {">"} Livraison </span>
              <span> {">"} Paiement </span>
            </span>
          </h3>
          <h1>Détails de la livraison </h1>
          <form
            id="shipping-form"
            action="{{ route('order.set-shipping') }}"
            method="POST"
          >
            @csrf
            {/* {{-- name --}} */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="firstname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Nom{" "}
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="firstname"
                    id="firstname"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email-description"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="lastname"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Prénom
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="lastname"
                    id="lastname"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email-description"
                  />
                </div>
              </div>
            </div>
            <br />
            {/* {{-- contact --}} */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Adresse email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email-description"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Numéro de téléphone
                </label>
                <div className="mt-2">
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      <img
                        src="{{ asset('images/france.png') }}"
                        className="my-0"
                        height="15px"
                        width="50px"
                        alt=""
                        srcSet=""
                      />
                    </span>
                    <input
                      type="tel"
                      required
                      name="phone"
                      id="phone"
                      placeholder="+33"
                      className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                      aria-describedby="email-description"
                    />
                  </div>
                  <div id="phonenumber-error"></div>
                </div>
              </div>
            </div>
            <br />
            {/* {{-- shipping address --}} */}
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                {" "}
                Adresse de la livraison
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="shipping_address"
                  id="shipping_address"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  aria-describedby="email-description"
                />
              </div>
            </div>
            <br />
            {/* {{--  --}} */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Ville
                </label>
                <div className="mt-2">
                  <input
                    type="town"
                    required
                    name="town"
                    id="town"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email-description"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Code Zip
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="zip_code"
                    id="zip_code"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Département
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    required
                    name="province"
                    id="province"
                    className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                    aria-describedby="email-description"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 hidden absolute top-0 left-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              ></label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  name="carts"
                  id="carts"
                  className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  aria-describedby="email-description"
                  value="{{ json_encode(Cart::content()) }}"
                />
              </div>
            </div>
            <br />
            <div className="flex justify-center items-start md:items-center gap-2 text-zinc-900">
              {/* <x-akar-shipping-box-v2 class="w-7 m-0 md:ml-4" /> */}
              <p className="m-0 sm:m-5 text-xs">
                Expédition en 24h et livraison sous 48h/72h
              </p>
            </div>
            <br />
            <button
              type="submit"
              className="float-right rounded-md bg-d-green py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-900-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Suivant
            </button>
          </form>
        </div>
        <div className="flex-1 bg-slate-100 px-5 sm:px-10  prose max-w-none rounded-md">
          <h1 className="text-center mx-auto mt-4 mb-0">Récapitulatif</h1>
          <div className="flow-root">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y my-0 divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Produits
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                      >
                        Prix
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* {{-- main data --}} */}
                    {/* @foreach (Cart::content() as $cart_item) */}
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
                    {/* @endforeach
                                    {{-- bottom --}} */}
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
                          </span>
                          €{" "}
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