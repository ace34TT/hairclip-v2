import React from "react";

export default function ShoppingCart() {
  return (
    <div className="h-fit sm:min-h-screen mb-5 flex flex-col gap-0 @if (Cart::count() === 0) justify-center @else justify-start @endif items-center prose max-w-none">
      <h2>Mon panier</h2>
      <a className="text-cyan-800" href="{{ route('homepage') }}">
        Retour sur la page d'accueil
      </a>
      <br />
      @if (count(Cart::content()) === 0)
      <div>Votre panier est vide</div>
      @else
      {/* <form className="sr-only" action="{{ route('shopping-cart.update-items') }}" method="POST">
                @csrf
            <input id="rows-json-data" style={{ border: "solid black 1px"}} type="text" name="updated_data">
                <input type="submit" id="proceed-to-payment">
            </form> */}
      <div className="leading-5 md:sr-only">
        <h3 className="mt-0 ml-4">Livraison : </h3>
        <ul className="mx-4 mb-0 pl-4">
          <li>
            <div className="flex justify-start items-start gap-2">
              {/* <x-akar-shipping-box-v2 class="w-5" /> */}
              <p className=" m-0">
                Expédition en 24h et livraison sous 48h/72h
              </p>
            </div>
          </li>
          <li>1.99 € pour un achat de moins de 3 chouchou</li>
          <li>4.99 € pour un achat de plus de 3 chouchou</li>
        </ul>
      </div>
      <div className="-mt-5 sm:-mt-0 px-4sm:px-6 lg:px-8 w-8/12 md:w-10/12 ">
        <div className="-mx-4 flow-root sm:mx-0">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Produit(s)
                </th>
                <th
                  scope="col"
                  className="hidden py-4 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Prix
                </th>
                <th
                  scope="col"
                  className="py-4 px-3 text-center text-sm font-semibold text-gray-900 sm:pr-0"
                >
                  Quantité
                </th>
                <th
                  scope="col"
                  className="hidden py-4 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0 sm:table-cell"
                >
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {/* @foreach (Cart::content() as $cart_item) */}
              <tr
                data-quantity="{{ $cart_item->qty }}"
                data-row-id="{{ $cart_item->rowId }}"
                className="border-b border-gray-200 cart-item-row"
              >
                <td className="py-4 pl-4 pr-3 text-sm sm:pl-0">
                  <div className="font-medium text-gray-900">
                    <div className=" flex gap-10 items-center">
                      <div className="sr-only md:not-sr-only w-fit md:w-fit">
                        <img
                          className="h-28 w-28 mr-0 object-contain my-0 rounded-md"
                          src="{{ asset('images/scranchies/' . $cart_item->options['top_view']) }}"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="text-2xl mb-0 mt-0 font-bold">
                          {/* {{ $cart_item->model->name }} */}
                          <span
                            data-id="{{ $cart_item->id }}"
                            className="product_id hidden"
                          ></span>
                        </p>
                        <a
                          className="underline mt-3 text-cyan-900"
                          href="{{ route('shopping-cart.remove-item', ['rowId' => $cart_item->rowId]) }}"
                        >
                          Supprimer
                        </a>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden align-middle py-4 px-3 text-right text-sm text-gray-500 sm:table-cell">
                  <span
                    className="text-center"
                    data-price=""
                    id="{{ 'product_' . $cart_item->id . '_price' }}"
                  >
                    {/* {{ $cart_item-> price}} */}
                  </span>
                  €
                </td>
                <td className="align-middle py-4 px-3 text-right text-sm text-gray-500 ">
                  <div className="flex justify-center items-center gap-4">
                    {/* <x-ei-minus
                                                class="cursor-pointer w-7 h-7 flex justify-center items-center text-3xl text-black "
                                                onclick="updateQuantity('{{ $cart_item->rowId }}', {{ $cart_item->id }} , -1)" /> */}
                    <span data-quantity="">{/* {{ $cart_item-> qty}} */}</span>
                    {/* <x-ei-plus class="cursor-pointer w-7 h-7  text-3xl text-black"
                                                onclick="updateQuantity('{{ $cart_item->rowId }}', {{ $cart_item->id }} , 1)" /> */}
                  </div>
                </td>
                <td className="hidden sm:table-cell py-4 pl-3 pr-4 align-middle text-right text-sm text-gray-500 sm:pr-0">
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
              {/* @endforeach */}
            </tbody>
            <tfoot>
              <tr>
                <th
                  scope="row"
                  colSpan={3}
                  className="hidden pl-4 pr-3 pt-4 pb-2 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
                >
                  Sous-total
                </th>
                <th
                  scope="row"
                  className="pl-6 pr-3 pt-4 pb-2 text-left text-sm font-semibold text-gray-900 sm:hidden"
                >
                  Sous-total
                </th>
                <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
                  <span id="total_price">€</span>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mx-4">
          <div className="leading-4 sr-only md:not-sr-only ">
            <h3 className="mt-0">Livraison : </h3>
            <ul className="ml-3">
              <li>
                <div className="flex justify-start items-center gap-2">
                  {/* <x-akar-shipping-box-v2 class="w-5" /> */}
                  <p className=" m-0">
                    Expédition en 24h et livraison sous 48h/72h
                  </p>
                </div>
              </li>
              <li>1.99 € pour un achat de moins de 3 chouchou</li>
              <li>4.99 € pour un achat de plus de 3 chouchou</li>
            </ul>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              className=" rounded-md bg-d-green py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <span id="is-not-loading"> Passer la commande</span>
            </button>
          </div>
        </div>
      </div>
      {/* // @endif */}
    </div>
  );
}
