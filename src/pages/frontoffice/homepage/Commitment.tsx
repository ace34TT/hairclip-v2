import React from "react";
import { AiOutlineCheckCircle, AiOutlineCreditCard } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function Commitment() {
  return (
    <div className="pb-10 pt-8 sm:pb-28 sm:pt-24 container mx-auto prose max-w-none flex pl-4 flex-col md:flex-row items-start md:justify-between md:w-11/12 gap-4 md:gap-8">
      <div className="flex items-center gap-5">
        <div>
          <AiOutlineCreditCard size={56} />
        </div>
        <div className="">
          <h4 className="m-0 font-bold text-d-green">Paiement Sécurisé</h4>
          <h5 className="m-0 font-bold text-gray-400">
            Toutes cartes accéptées
          </h5>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <TbTruckDelivery size={56} />
        </div>
        <div className="">
          <h4 className="m-0 font-bold text-d-green">Livraison Rapide</h4>
          <h5 className="m-0 font-bold text-gray-400">Recevez sous 72h</h5>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <AiOutlineCheckCircle size={56} />
        </div>
        <div className="">
          <h4 className="m-0 font-bold text-d-green">Qualité Garantie</h4>
          <h5 className="m-0 font-bold text-gray-400">Un produit garantie</h5>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div>
          <BiSupport size={56} />
        </div>
        <div className="">
          <h4 className="m-0 font-bold text-d-green">Support Client</h4>
          <h5 className="m-0 font-bold text-gray-400">Support mail 24h/24h</h5>
        </div>
      </div>
    </div>
  );
}

export default Commitment;
