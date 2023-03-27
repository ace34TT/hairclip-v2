import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { HiChevronRight, HiOutlineChevronLeft } from "react-icons/hi";
import "./style.css";
const mainGrid = [
  require("./../../../../../assets/gallery-images/HairClip-01.webp"),
  require("./../../../../../assets/gallery-images/HairClip-02.webp"),
  require("./../../../../../assets/gallery-images/HairClip-03.webp"),
  require("./../../../../../assets/gallery-images/HairClip-04.webp"),
  require("./../../../../../assets/gallery-images/HairClip-05.webp"),
  require("./../../../../../assets/gallery-images/HairClip-06.webp"),
  require("./../../../../../assets/gallery-images/HairClip-07.webp"),
  require("./../../../../../assets/gallery-images/HairClip-08.webp"),
  require("./../../../../../assets/gallery-images/HairClip-09.webp"),
  require("./../../../../../assets/gallery-images/HairClip-10.webp"),
  require("./../../../../../assets/gallery-images/HairClip-11.webp"),
  require("./../../../../../assets/gallery-images/HairClip-12.webp"),
  require("./../../../../../assets/gallery-images/HairClip-13.webp"),
  require("./../../../../../assets/gallery-images/HairClip-14.webp"),
  require("./../../../../../assets/gallery-images/HairClip-15.webp"),
  require("./../../../../../assets/gallery-images/HairClip-16.webp"),
  require("./../../../../../assets/gallery-images/HairClip-17.webp"),
  require("./../../../../../assets/gallery-images/HairClip-18.webp"),
  require("./../../../../../assets/gallery-images/HairClip-19.webp"),
  require("./../../../../../assets/gallery-images/HairClip-20.webp"),
  require("./../../../../../assets/gallery-images/HairClip-21.webp"),
  require("./../../../../../assets/gallery-images/HairClip-22.webp"),
];
const PhotoGrid = forwardRef((props, ref) => {
  const [activeImage, setActiveImage] = useState<number>();
  const [extendedGallery, setExtendedGallery] = useState<boolean>(false);
  const [showImagePreviewer, setShowImagePreviewer] = useState(false);
  const extendedFirstItemRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    handleExtendGallery() {
      setExtendedGallery(!extendedGallery);
      console.log(extendedFirstItemRef.current);
      if (extendedFirstItemRef.current && extendedGallery === false)
        extendedFirstItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    },
  }));
  //
  const imageViewerContainerRef = useRef<HTMLDivElement>(null);
  const imageViewerRef = useRef<HTMLImageElement>(null);
  const handleShowImagePreview = (imageIndex: number) => {
    setActiveImage(imageIndex);
    setShowImagePreviewer(true);
  };

  useEffect(() => {
    if (showImagePreviewer === true) {
      lockScroll();
      if (imageViewerContainerRef.current)
        imageViewerContainerRef.current.style.top =
          document.documentElement.scrollTop + "px";
      if (imageViewerRef.current) {
        imageViewerRef.current.src = mainGrid[activeImage!];
      }
    } else {
    }
  }, [activeImage]);

  const lockScroll = () => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    };
  };

  return (
    <>
      {showImagePreviewer ? (
        <div
          id="photo-viewer"
          className="flex items-center justify-between md:justify-around gap-2 sm:gap-10"
          ref={imageViewerContainerRef}
          onClick={() => {
            window.onscroll = function () {};
            setShowImagePreviewer(false);
          }}
        >
          <div
            className="left-arrow h-96 flex items-center hover:bg-white hover:bg-opacity-10 transition ease-in-out"
            onClick={(event) => {
              event.stopPropagation();
              if (activeImage === 0) {
                setActiveImage(mainGrid.length - 1);
              } else {
                setActiveImage(activeImage! - 1);
              }
            }}
          >
            <HiOutlineChevronLeft size={70} color="#fff" />
          </div>
          <div
            id="main-gallery-item"
            className="w-[500px] h-[300px] md:w-[50vw] md:h-[80vh] rounded-lg"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <img
              ref={imageViewerRef}
              src={mainGrid[activeImage!]}
              className="w-full h-full object-cover rounded-md"
              alt=""
            />
          </div>
          <div
            className="right-arrow h-96 flex items-center hover:bg-white hover:bg-opacity-10 transition ease-in-out"
            onClick={(event) => {
              event.stopPropagation();
              if (activeImage === mainGrid.length - 1) {
                setActiveImage(0);
              } else {
                setActiveImage(activeImage! + 1);
              }
            }}
          >
            <HiChevronRight size={70} color="#fff" />
          </div>
        </div>
      ) : (
        <></>
      )}
      {/*  */}
      <section className="overflow-hidden mt-4 text-neutral-700">
        <div className="rounded-b-md container mx-auto px-5 py-2">
          <div className="gallery -m-1 flex flex-wrap md:-m-2 rounded-sm">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                <img
                  onClick={() => {
                    handleShowImagePreview(0);
                  }}
                  alt="gallery"
                  className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[0]}
                />
              </div>
              <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                <img
                  alt="gallery"
                  className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[1]}
                />
              </div>
              <div
                className="w-full p-1 cursor-pointer md:p-2 max-h-96"
                ref={extendedFirstItemRef}
              >
                <img
                  alt="gallery"
                  className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[2]}
                />
              </div>
              {extendedGallery ? (
                <>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[3]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[4]}
                    />
                  </div>
                  <div className="w-full p-1 cursor-pointer md:p-2 max-h-96">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[5]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[6]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[7]}
                    />
                  </div>
                  <div className="w-full p-1 cursor-pointer md:p-2 max-h-96">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[8]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[9]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[10]}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 cursor-pointer md:p-2 max-h-96">
                <img
                  id="video-preview-2"
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[11]}
                />
              </div>
              <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                <img
                  alt="gallery"
                  className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[12]}
                />
              </div>
              <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                <img
                  alt="gallery"
                  className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                  src={mainGrid[13]}
                />
              </div>
              {extendedGallery ? (
                <>
                  <div className="w-full p-1 cursor-pointer md:p-2 max-h-96">
                    <img
                      id="video-preview-2"
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[14]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[15]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[16]}
                    />
                  </div>
                  <div className="w-full p-1 cursor-pointer md:p-2 max-h-96">
                    <img
                      id="video-preview-2"
                      alt="gallery"
                      className="block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[17]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[18]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[19]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[20]}
                    />
                  </div>
                  <div className="w-1/2 p-1 cursor-pointer md:p-2 max-h-80">
                    <img
                      alt="gallery"
                      className="transition ease-in-out hover:scale-[1.025] hover:shadow-sm gallery-item block h-full w-full rounded-lg object-cover object-center "
                      src={mainGrid[21]}
                    />
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default PhotoGrid;
