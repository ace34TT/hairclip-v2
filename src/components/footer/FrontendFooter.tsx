import logo from "./../../assets/logos/2_transparent_logo_white 1.png";
import { TbBoxSeam } from "react-icons/tb";
function FrontendFooter() {
  return (
    <footer
      id="footer"
      className="mt-auto w-full h-fit p-5 gap-5 md:p-10 bg-d-green"
    >
      <div className="h-fit flex flex-col sm:flex-row justify-center items-center gap-12 ">
        <div className="">
          <img src={logo} height="100px" width="100px" alt="" />
        </div>
        <div className="md:h-5/6 flex gap-4 md:gap-12">
          <div className="w-1/2">
            <div className="text-white">
              <ul className="mx-4 mb-0 pl-4">
                <li className="flex justify-start items-start gap-2">
                  <TbBoxSeam className={"w-8 h-8"} />
                  <p className=" m-0">
                    Expédition en 24h et livraison sous 48h/72h
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2">
            <h6 className="text-white font-bold">Nous contacter</h6>
            <br />
            <div className="text-gray-400">
              <a href="#">8 Place de Geneve. 7300 Chambery</a> <br />
              <a href="#">contact@hairclip-boutique.fr</a> <br />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-9 flex items-center justify-center">
        <div className="text-white">Full Created by miarajoris.com</div>
      </div>
    </footer>
  );
}

export default FrontendFooter;
