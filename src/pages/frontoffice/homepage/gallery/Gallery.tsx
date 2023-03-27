import React, { useRef, useState } from "react";
import PhotoGrid from "./photoGrid/PhotoGrid";

export default function Gallery() {
  const [extendedGallery, setExtendedGallery] = useState<boolean>(false);
  const childRef = useRef<any>(null);
  const handleClick = () => {
    setExtendedGallery(!extendedGallery);
    childRef!.current!.handleExtendGallery();
  };
  return (
    <div className="container mx-auto ">
      <div className=" max-h-fit py-4 md:py-12 flex flex-col items-center justify-center prose max-w-none">
        <h2 className="text-5xl mt-0 mx-5 mb-6 md:mb-6">
          Rétractable, souple et résistant.
        </h2>
        <button
          id="gallery-btn"
          type="button"
          className="rounded-md bg-white py-2.5 px-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleClick}
        >
          {extendedGallery ? "Voir moins" : "Voir plus"}
        </button>
        <PhotoGrid ref={childRef} />
      </div>
    </div>
  );
}
