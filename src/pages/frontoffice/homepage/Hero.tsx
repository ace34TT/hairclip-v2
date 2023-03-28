import moment from "moment";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
const scrunchies = {
  image_1: require("./../../../assets/scrunchies/HairClip PackS HD-19-min.webp"),
  image_2: require("./../../../assets/scrunchies/HairClip PackS HD-20-min.webp"),
  image_3: require("./../../../assets/scrunchies/HairClip PackS HD-21-min.webp"),
  image_4: require("./../../../assets/scrunchies/HairClip PackS HD-22-min.webp"),
  image_5: require("./../../../assets/scrunchies/HairClip PackS HD-23-min.webp"),
  image_6: require("./../../../assets/scrunchies/HairClip PackS HD-24-min.webp"),
  image_7: require("./../../../assets/scrunchies/HairClip PackS HD-25-min.webp"),
};
function Hero() {
  const [currentDate, setCurrentDate] = useState<string>("");
  useEffect(() => {
    // moment.locale("fr");
    const futureDateFr = moment().locale("fr").add(3, "days").format("LL");
    setCurrentDate(futureDateFr);
  }, []);
  useEffect(() => {
    window.onload = () => {
      let scrunchiesAnimation = gsap.timeline();
      scrunchiesAnimation
        .to(
          "#scrunchie-1",
          {
            duration: 1,
            rotate: "150deg",
            x: 300,
            y: -150,
          },
          "animation-1"
        )
        .to(
          "#scrunchie-2",
          {
            rotate: "150deg",
            x: 400,
            y: -200,
          },
          "animation-1"
        )
        .to(
          "#scrunchie-3",
          {
            duration: 1,
            rotate: "150deg",
            x: 200,
            y: -250,
          },
          "animation-1"
        )
        .to(
          "#scrunchie-4",
          {
            duration: 1,
            rotate: "150deg",
            x: 150,
            y: -100,
          },
          "animation-1"
        )
        .to(
          "#scrunchie-5",
          {
            duration: 1,
            rotate: "150deg",
            x: 15,
            y: -50,
          },
          "animation-1"
        )
        .to(
          "#scrunchie-6",
          {
            duration: 1,
            rotate: "150deg",
            x: 300,
            y: 250,
          },
          "animation-1"
        );
    };
  }, []);

  return (
    <div className="container mb-10 md:-mt-24 mx-auto h-fit md:min-h-screen flex justify-center items-center">
      <div className="w-full h-fit flex flex-col lg:flex-row items-start justify-around gap-4 px-4 md:px-4">
        <div className="sr-only lg:not-sr-only flex-1 mb-5 :mb-0 relative">
          <img
            id="scrunchie-1"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_1}
            alt=""
          />
          <img
            id="scrunchie-2"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_2}
            alt=""
          />
          <img
            id="scrunchie-3"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_3}
            alt=""
          />
          <img
            id="scrunchie-4"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_4}
            alt=""
          />
          <img
            id="scrunchie-5"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_5}
            alt=""
          />
          <img
            id="scrunchie-6"
            className="object-contain absolute w-64 h-64"
            src={scrunchies.image_6}
            alt=""
          />
          <img
            id="scrunchie-7"
            className="object-contain absolute  w-64 h-64"
            src={scrunchies.image_7}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-end gap-4 md:items-start prose max-w-none md:pr-10">
          <h2 className="text-right my-1 md:mt-0 text-5xl font-bold">
            Une <span className="text-d-green"> nouvelle génération </span> de
            chouchous
          </h2>
          <p className="text-right mb-0 leading-6 sm:leading-normal">
            Simple, rapide, facile d'utilisation, et tellement léger qu'une fois
            mis en place,on l'oublie. <br /> Tient très bien pour tout type de
            coiffure, chignon, queue de cheval, demie queue etc.. Hair Clip
            permet de rassembler les cheveux d'un simple clip afin de dégager le
            contour du visage.
          </p>
          <div className="flex gap-5 justify-end items-center w-full">
            <div className="flex justify-center items-center gap-2 text-zinc-900">
              {/* <x-akar-shipping-box-v2 class="w-7 m-0 md:ml-4" /> */}
              <p className="m-0  text-xs md:text-base">
                Recevez-le {currentDate}
              </p>
            </div>
            <button
              type="button"
              className="md:w-44 rounded-md bg-d-green py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-d-green-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d-green-100"
            >
              Acheter{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
