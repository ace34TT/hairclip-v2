import React from "react";
import videoPreview from "./../../../assets/video-preview/video-preview-1.png";

function About() {
  return (
    <div
      id="about"
      className="h-fit container mx-auto py-4 md:py-12 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-8 "
    >
      <div className="flex-1 flex justify-center">
        <div style={{ maxWidth: "95%", height: "auto" }}>
          <div className="cursor-pointer " id="video-preview-1">
            <img src={videoPreview} alt="" />
          </div>
        </div>
      </div>
      <div className="flex-1 prose h-full max-w-none flex flex-col justify-center items-center">
        <div className="w-11/12 h-full flex flex-col justify-center">
          <h2 className="text-5xl mt-0 mb-4 md:mb-12 text-left">
            Rétractable, souple <br />
            et résistant.
          </h2>
          <h2 className="text-cyan-900 mb-0 md:mb-6">
            Créer pour vous simplifier la vie{" "}
          </h2>
          <ul className="mb-0 md:mb-7">
            <li className="leading-5">
              Pratique pour maintenir les cheveux en place pendant les activités
              physiques.
            </li>
            <li className="leading-5">
              Évite la casse des cheveux et préserve la santé capillaire.
            </li>
            <li className="leading-5">
              Accessoire polyvalent pour créer des coiffures simples et
              élégantes.
            </li>
            <li className="leading-5">
              Peut être utilisé pour ajouter une touche de couleur ou d'élément
              décoratif aux cheveux.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
