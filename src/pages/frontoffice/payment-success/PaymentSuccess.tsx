import { useNavigate, useParams } from "react-router-dom";
import bg from "./../../../assets/gallery-images/HairClip-04.webp";
export default function PaymentSuccess() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex my-4 justify-center items-cente h-fit md:h-[80vh] md:min-h-[600px]">
      <div className="flex flex-col md:flex-row w-11/12">
        <div className="flex-1 flex flex-col gap-4 justify-center items-center prose max-w-none md:px-16">
          {/* <x-gmdi-check-circle-outline-r class="h-28" style="color: #03524C" /> */}
          <p className="text-xl font-bold m-0 text-center sm:text-left">
            Paiement effectué
          </p>
          {/* {{-- <p class="text-xl font-bold m-0">Commande : 123456</p> --}} */}
          <p className="text-left m-0">
            Nous avons bien reçu votre commande et sommes heureux de vous
            confirmer que votre achat a été effectué avec succès.
            <br />
            <span className="font-extrabold">Numéro de commande : #{id}</span>
            <br />
            <br />
            Nous sommes en train de préparer votre colis et vous tiendrons
            informé(e) de son expédition.
            <br />
            Nous vous remercions de votre confiance et espérons que vous
            apprécierez votre achat. <br />
          </p>
          <button
            onClick={() => {
              navigate("/");
            }}
            type="button"
            className="rounded-md bg-[#03524C] py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg--500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Retour sur la page d'accueil
          </button>
        </div>
        <div className="flex-1 invisible top-0 left-0 absolute md:visible md:static">
          <img
            className="rounded-md object-cover"
            src={bg}
            style={{ height: "100%", width: "100%" }}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
