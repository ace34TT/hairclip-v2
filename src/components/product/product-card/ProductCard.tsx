import React from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  id: string;
  name: string;
  color: string;
  price: number;
  preview: string;
}

export default function ProductCard({
  id,
  color,
  name,
  price,
  preview,
}: IProps) {
  const navigate = useNavigate();
  return (
    <div className="inline-block prose max-w-none">
      <div
        style={{ backgroundColor: color, minWidth: "384px" }}
        className="flex w-80 md:w-96 py-6 flex-col items-center rounded-3xl prose hover:scale-105 hover:shadow-md transition ease-in-out cursor-pointer break-words"
      >
        <h2 className="text-white">{name}</h2>
        <img src={preview} className="rounded-3xl" alt="" />
        <div className="text-slate-50 w-10/12 text-center  inline-block">
          <div className="flex justify-center ">
            <div className="text-2xl">{price} €</div>
          </div>
          <div className="">et 5€ à partir de 3 chouchous acheté</div>
        </div>
        <br />
        <button
          onClick={() => {
            navigate("/produits/" + id);
          }}
          type="button"
          className="hover:filter hover:brightness-120 rounded-md bg-white bg-opacity-0 hover:bg-opacity-50 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:shadow-lg transition ease-in-out"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
