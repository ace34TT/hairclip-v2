import React, { useEffect, useState } from "react";
import { useGetAllProductForShop } from "../../../hooks/useProduct";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { imgHelper } from "../../../helpers/assets.helper";
import "./style.css";
import ConfettiExplosion from "react-confetti-explosion";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../../features/shopping-cart-slice";
import { PuffLoader } from "react-spinners";
import gsap from "gsap";
import { TbBoxSeam } from "react-icons/tb";
import { Helmet } from "react-helmet";
export default function ShoppingPage() {
  const dispatch = useDispatch();
  // * initializing data
  const { data, isLoading } = useGetAllProductForShop();
  const [quantity, setQuantity] = useState(1);
  const [activeElement, setActiveElement] = useState(-1);
  const { id } = useParams();
  useEffect(() => {
    if (!isLoading) {
      var index = data.findIndex((item: any) => item.id === parseInt(id!));
      setActiveElement(index);
    }
  }, [isLoading]);
  // * when user clicks on an item
  const handleItem = (selectedItem: string) => {
    setActiveElement(parseInt(selectedItem));
  };
  // * confetti
  const [showConfetti, setShowConfetti] = React.useState(false);
  const handleClick = () => {
    dispatch(
      addCartItem({
        id: data[activeElement].id,
        quantity: quantity,
        name: data[activeElement].name,
        color: data[activeElement].value,
        preview: data[activeElement].file_name,
      })
    );
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 3000);
  };
  // * shipping information
  const [shippingVisibility, setShippingVisibility] = useState(false);
  const handleShippingInformation = () => {
    if (shippingVisibility) {
      gsap.to("#shipping-information", {
        // position: "absolute",
        // height: "0",
        opacity: "0",
      });
      gsap.to(".horizontal", {
        opacity: "1",
        rotate: "0",
      });
      setShippingVisibility(false);
    } else {
      gsap.to("#shipping-information", {
        // position: "static",
        // height: "fit-content",
        opacity: "1",
      });
      gsap.to(".horizontal", {
        opacity: "0",
        rotate: "90",
      });
      setShippingVisibility(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Hairclip - Produits</title>
      </Helmet>
      {!isLoading && activeElement !== -1 ? (
        <>
          <div className="mx-auto max-w-2xl py-4 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-32">
              <h1
                id="main-title-mobile"
                className="md:sr-only text-3xl font-bold tracking-tight text-gray-900"
              >
                {data[activeElement].name}
              </h1>
              <div
                className="h-full w-full p-6 rounded-md relative"
                id="product-color"
                style={{ backgroundColor: data[activeElement].value }}
              >
                <h1
                  id="main-title"
                  className="sr-only md:not-sr-only mb-0 mt-8 ml-10 text-7xl text-slate-50 opacity-50 "
                >
                  {data[activeElement].name}
                </h1>
                <div className="md:absolute md:bottom-20 md:-right-12 flex justify-center">
                  <img
                    id="product-preview"
                    src={imgHelper(data[activeElement].file_name)}
                    alt=""
                    className=" m-0 h-72 w-72 object-contain object-center sm:rounded-lg"
                  />
                </div>
              </div>
              <div className="mt-4 px-4 sm:px-0 lg:mt-0">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                  <span className="sr-only md:not-sr-only" id="product-name">
                    {data[activeElement].name}
                  </span>
                  <span className="md:sr-only" id="product-price">
                    {data[activeElement].price}
                  </span>
                </h1>
                <div className="mt-3">
                  <p
                    className="text-3xl tracking-tight text-gray-900 sr-only md:not-sr-only"
                    id="product-price"
                  >
                    {data[activeElement].price} €
                  </p>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <AiOutlineMinusCircle
                    size={28}
                    onClick={() => {
                      if (quantity > 1) setQuantity(quantity - 1);
                    }}
                    className="cursor-pointer"
                  />
                  <span data-quantity="" id="quantity">
                    {quantity}
                  </span>
                  <AiOutlinePlusCircle
                    size={28}
                    onClick={() => {
                      setQuantity(quantity + 1);
                    }}
                    className="cursor-pointer"
                  />
                </div>
                <section aria-labelledby="details-heading" className="mt-4">
                  <h2 id="details-heading" className="sr-only">
                    Details
                  </h2>
                  <div className="divide-y divide-gray-200">
                    <div className="prose prose-sm " id="disclosure-1">
                      <ul>
                        <li className="leading-5">
                          Pratique pour maintenir les cheveux en place pendant
                          les activités physiques.
                        </li>
                        <li className="leading-5">
                          Évite la casse des cheveux et préserve la santé
                          capillaire.
                        </li>
                        <li className="leading-5">
                          Accessoire polyvalent pour créer des coiffures simples
                          et élégantes.
                        </li>
                        <li className="leading-5">
                          Peut être utilisé pour ajouter une touche de couleur
                          ou d'élément décoratif aux cheveux.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
                <div className="mt-6">
                  <div>
                    <h3 className="text-sm text-gray-600">Couleurs</h3>
                    <fieldset className="mt-2">
                      <legend className="sr-only">Couleurs</legend>
                      <span className="flex items-center space-x-3">
                        {data.map((product: any, key: string) => {
                          return (
                            <label
                              onClick={() => {
                                setQuantity(1);
                                handleItem(key);
                              }}
                              className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ring-gray-700"
                            >
                              <span
                                aria-hidden="true"
                                style={{ backgroundColor: product.value }}
                                className={
                                  (activeElement === parseInt(key)
                                    ? "active-selected-item"
                                    : "") +
                                  " color-picker h-8 w-8 rounded-full border border-opacity-10"
                                }
                                data-product="{{ $color->id }}"
                              ></span>
                            </label>
                          );
                        })}
                      </span>
                    </fieldset>
                  </div>
                  <div className="mt-6 py-6 border-t-2 border-b-2 h-auto min-h-full">
                    <div className="flex justify-between items-center">
                      <div className="font-bold text-lg">Livraison </div>
                      <button
                        className="mr-9 bg-slate-200"
                        onClick={() => {
                          handleShippingInformation();
                        }}
                      >
                        <div className="plus">
                          <div className="horizontal h-7 w-[2px] bg-black"></div>
                          <div className="vertical h-7 w-[2px] -mt-7 bg-black rotate-90"></div>
                        </div>
                      </button>
                    </div>
                    {shippingVisibility ? (
                      <div className="mt-2 md:mt-4" id="shipping-information">
                        <ul className="mx-4 mb-0 pl-4">
                          <li className="flex justify-start items-end gap-2">
                            <TbBoxSeam className={"w-8 h-8"} />
                            <p className=" m-0">
                              Expédition en 24h et livraison sous 48h/72h
                            </p>
                          </li>
                          <li>1.99 € pour un achat de moins de 3 chouchou</li>
                          <li>4.99 € pour un achat de plus de 3 chouchou</li>
                        </ul>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="sm:flex-1 mt-10 flex">
                    <div className="relative">
                      {showConfetti && (
                        <ConfettiExplosion
                          className=" absolute top-0 left-[50%] right-[50%]"
                          force={0.4}
                          duration={2200}
                          particleCount={30}
                          width={400}
                          colors={[
                            "#FFC300",
                            "#FF5733",
                            "#FFC0CB",
                            "#F44336",
                            "#4CAF50",
                            "#2196F3",
                            "#9C27B0",
                            "#FFD700",
                            "#00FF7F",
                            "#FF00FF",
                          ]}
                        />
                      )}
                      <button
                        type="button"
                        className="cursor-pointer md:w-44 rounded-md bg-d-green py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-d-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-green-100"
                        onClick={handleClick}
                      >
                        Ajouter au panier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-full h-screen">
          <PuffLoader
            color={"#03524C"}
            loading={isLoading}
            size={150}
            aria-label="Loading Spinner"
          />
        </div>
      )}
    </>
  );
}
