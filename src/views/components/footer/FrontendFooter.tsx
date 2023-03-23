import React from "react";

function FrontendFooter() {
  return (
    <footer id="footer" className="h-fit p-5 gap-5 md:p-10 bg-d-green">
      <div className="h-fit flex flex-col sm:flex-row justify-center items-center ">
        <div className="justify-self-start">
          <img
            src="{{ asset('images/logo/2_transparent_logo_white.png') }}"
            height="150px"
            width="150px"
            alt=""
          />
        </div>
        <div className="md:h-5/6 flex gap-4 md:gap-12">
          <div className="w-1/2">
            <div className="text-gray-400">
              <div className="flex justify-center items-start sm:items-center gap-2">
                <p className="text-white">
                  Expédition en 24h et livraison sous 48h/72h
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <h6 className="text-white font-bold">Nous contacter</h6>
            <br />
            <div className="text-gray-400">
              <a href="">8 Place de Geneve. 7300 Chambery</a> <br />
              <a href="">contact@hairclip-boutique.fr</a> <br />
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
