import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel() {
  const images = [
    "/carouselPhotos/IMG_0063.jpeg",
    "/carouselPhotos/IMG_0068.jpeg",
    "/carouselPhotos/IMG_0187.jpeg",
    "/carouselPhotos/IMG_0192.jpeg",
    "/carouselPhotos/IMG_3276.jpeg",
    "/carouselPhotos/IMG_3042.jpeg",
  ];

  const desktopSlides = [];

  for (let i = 0; i < images.length; i += 2) {
    desktopSlides.push([images[i], images[i + 1]]);
  }

  return (
    <div className="w-full bg-black">
      <h1 className="pt-8 pb-12 text-center text-3xl font-bold text-[#00b2e3]">
        Gallery
      </h1>

      {/* Mobile: one photo per slide */}
      <div className="md:hidden">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={600}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex h-[70vh] w-full items-center justify-center bg-black"
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Desktop: two photos per slide */}
      <div className="hidden md:block">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
          transitionTime={600}
        >
          {desktopSlides.map((pair, i) => (
            <div
              key={i}
              className="flex h-[80vh] w-full items-center justify-center bg-black"
            >
              <img
                src={pair[0]}
                alt={`Gallery image ${i * 2 + 1}`}
                className="h-full w-1/2 object-cover"
              />

              {pair[1] && (
                <img
                  src={pair[1]}
                  alt={`Gallery image ${i * 2 + 2}`}
                  className="h-full w-1/2 object-cover"
                />
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}