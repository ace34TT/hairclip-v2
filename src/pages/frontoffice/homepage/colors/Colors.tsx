import React, { useRef } from "react";
import { useGetAllProduct } from "../../../../hooks/useProduct";
import ProductCard from "../../../../components/product/product-card/ProductCard";
import { imgHelper } from "../../../../helpers/assets.helper";
import { HiChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import "./style.css";
import { PuffLoader } from "react-spinners";
function Colors() {
  const { data, isLoading } = useGetAllProduct();
  const productContainer = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: any) => {
    if (productContainer.current)
      productContainer.current.scrollTo({
        left: productContainer.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
  };
  return (
    <div className="h-fit w-screen  py-4 md:py-12 bg-stone-200 flex flex-col items-center justify-center prose max-w-none overflow-x-hidden">
      <h2 className="text-5xl mb-4 md:mb-12 ">Nos coloris</h2>
      <div className="flex justify-center items-center gap-8">
        <div className="flex items-center h-44 cursor-pointer">
          <HiOutlineChevronLeft size={56} onClick={() => handleScroll(-700)} />
        </div>
        <div
          id="products"
          className="products flex gap-3 md:gap-11 overflow-x-auto p-5 min-w-[300px]"
          ref={productContainer}
        >
          {isLoading ? (
            <div className="h-96 w-full flex justify-center items-center">
              <PuffLoader
                color={"#03524C"}
                loading={isLoading}
                size={150}
                aria-label="Loading Spinner"
              />
            </div>
          ) : (
            data.map((product: any, key: React.Key | null | undefined) => {
              return (
                <ProductCard
                  key={key}
                  id={product.id}
                  name={product.name}
                  color={product.value}
                  price={product.price}
                  preview={imgHelper(product.file_name)}
                ></ProductCard>
              );
            })
          )}
        </div>
        <div className="flex items-center h-44 cursor-pointer">
          <HiChevronRight size={56} onClick={() => handleScroll(700)} />
        </div>
      </div>
    </div>
  );
}

export default Colors;
