import React, { useRef } from "react";
import OpinionCard from "./OpinionCard";
import { HiOutlineChevronLeft, HiChevronRight } from "react-icons/hi";
import "./style.css";
export default function Opinions() {
  const opinionsContainer = useRef<HTMLDivElement>(null);
  const handleScroll = (scrollOffset: any) => {
    if (opinionsContainer.current)
      opinionsContainer.current.scrollTo({
        left: opinionsContainer.current.scrollLeft + scrollOffset,
        behavior: "smooth",
      });
  };
  return (
    <div className="h-fit px-4 md:px-12 py-4 md:py-12 bg-stone-200 flex flex-col justify-center items-center prose max-w-none overflow-x-hidden">
      <h2 className="text-5xl text-left md:text-center mb-4 md:mb-4 tracking-tighter md:tracking-normal">
        Ce que vous pensez de nos chouchous.
      </h2>
      <p className="text-center text-cyan-800 mb-0 md:mb-5">
        Nos clients sont ravis, c’est à votre tour !
      </p>
      <div className="flex justify-center items-center gap-8">
        <div className="flex items-center h-44 cursor-pointer">
          <HiOutlineChevronLeft size={56} onClick={() => handleScroll(-700)} />
        </div>
        <div
          id="opinions"
          className="opinions flex items-stretch  gap-2 md:gap-11 overflow-x-auto p-5"
          ref={opinionsContainer}
        >
          <OpinionCard
            customer={"Sarah"}
            message={
              "J'aime tellement mes nouveaux chouchous pour cheveux, je les recommande à tous mes amis !"
            }
          />
          <OpinionCard
            customer={"Anne"}
            message={
              "Les chouchous pour cheveux que j'ai achetés sont exactement ce que je cherchais, merci !"
            }
          />
          <OpinionCard
            customer={"Emma"}
            message={
              "Ce chouchou pour cheveux est si doux et confortable, je ne peux plus m'en passer!"
            }
          />
          <OpinionCard
            customer={"Zoé"}
            message={
              "Je recommande vivement ce chouchou pour cheveux, il est facile à utiliser et très résistant."
            }
          />
          <OpinionCard
            customer={"Anaïs"}
            message={
              "Je suis très contente de mon achat de chouchou, ils sont frais et pratiques."
            }
          />
          <OpinionCard
            customer={"Léa"}
            message={
              "Ces chouchous sont une excellente achat, je suis heureuse de les avoir achetés."
            }
          />
          <OpinionCard
            customer={"Camille"}
            message={
              "Je suis comblée par la qualité de ces chouchous, ils sont vraiment top."
            }
          />
          <OpinionCard
            customer={"Luisa"}
            message={
              "J'ai craqué pour toutes les couleurs , ma fille est ravie."
            }
          />
        </div>
        <div className="flex items-center h-44 cursor-pointer">
          <HiChevronRight size={56} onClick={() => handleScroll(700)} />
        </div>
      </div>
    </div>
  );
}
