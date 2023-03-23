import React from "react";
import { useGetAllProduct } from "../../../hooks/useProduct";

function Colors() {
  const { data, isLoading, isSuccess, isError } = useGetAllProduct();
  return (
    <div className="h-fit w-screen  py-4 md:py-12 bg-stone-200 flex flex-col items-center justify-center prose max-w-none overflow-x-hidden">
      <h2 className="text-5xl mb-4 md:mb-12 ">Nos coloris</h2>
      <div className="flex justify-center items-center gap-8">
        <div className="flex items-center h-44 cursor-pointer">
          {/* <x-gmdi-arrow-back-ios-new-r class="h-10 w-10 opacity-100" /> */}
        </div>
        <div
          id="products"
          className="products flex gap-3 md:gap-11 overflow-x-auto p-5"
        >
          @foreach ($products as $product)
          {/* <x-hair-clip-card
            id="{{ $product->id }}"
            name="{{ $product->name }}"
            colorValue="{{ $product->value }}"
            price="{{ $product->price }}"
            preview="{{ $product->file_name }}"
            description="Pour une couleur qui se marie avec tout."
          /> */}
          @endforeach
        </div>
        <div className="flex items-center h-44 cursor-pointer">
          {/* <x-gmdi-arrow-back-ios-new-r
            style="transform: scaleX(-1);"
            class="h-10 w-10"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Colors;
