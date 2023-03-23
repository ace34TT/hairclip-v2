import React from "react";

function FrontendHeader() {
  return (
    <header className="flex my-4 justify-between items-center w-full md:h-24 bg-white">
      <div className="ml-4 md:ml-1 flex cursor-pointer gap-2 lg:gap-5 items-center pl-0 lg:pl-16">
        <img
          src="{{ asset('images/logo/1_transparent_logo_black_scroped.png') }}"
          className="h-14 md:h-20"
          alt=""
        />
        <h2 className="uppercase text-xl md:4xl font-bold">HairClip</h2>
      </div>
      <ul className="flex gap-10 md:pr-40 items-center ">
        <li className="invisible absolute md:static md:visible">
          <a href="#about">A propos</a>
        </li>
        <li className="invisible absolute md:static md:visible">
          <a href="#footer">Contact</a>
        </li>
        <li className="mr-6 md:mr-0">
          <a href="{{ route('shopping-cart.index') }}" className="flex gap-4">
            <div className="relative p-4">
              {/* <x-bx-cart class="h-9 w-9" /> */}
              <div className="absolute top-2 right-1 md:top-0 md:-right-3">
                <span
                  id="total-cart-items"
                  className="inline-flex items-center rounded-full bg-white md:bg-gray-100 md:px-3 py-0.5 text-sm font-medium text-gray-800"
                ></span>
              </div>
            </div>
          </a>
        </li>
        <li className="invisible absolute md:static md:visible">
          <button
            type="button"
            className="md:w-44 rounded-md bg-d-green py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-d-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-green-100"
          >
            Acheter
          </button>
        </li>
      </ul>
    </header>
  );
}

export default FrontendHeader;
