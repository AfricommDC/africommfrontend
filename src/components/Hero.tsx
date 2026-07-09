import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&h=1000&fit=crop",
    alt: "A community member smiling among the trees",
    position: "object-[26%_42%]",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=1000&fit=crop",
    alt: "Community members working together in the field",
    position: "object-[50%_40%]",
  },
  {
    src: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&h=1000&fit=crop",
    alt: "Children in a rural community smiling",
    position: "object-[50%_35%]",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&h=1000&fit=crop",
    alt: "Farmers tending to crops together",
    position: "object-[50%_45%]",
  },
];

const SLIDE_DURATION = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((cur) => (cur + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#0F2B1C] font-[Manrope,sans-serif]"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover ${slide.position} transition-opacity duration-[1500ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Forest-green wash, strongest on the right where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B1C]/25 via-[#0F2B1C]/70 to-[#0F2B1C]/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B1C]/70 via-transparent to-[#0F2B1C]/60" />
      </div>

      <Navbar />

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2 md:left-8 md:translate-x-0">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-8 bg-[#F2801E]" : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Copy */}
      <div className="relative mx-auto flex min-h-screen max-w-[1400px] items-center px-8">
        <div className="ml-auto w-full max-w-[480px] pt-24 pb-16 text-left">
          <h1 className="font-[Manrope,sans-serif] text-[2.6rem] font-extrabold leading-[1.15] text-[#F8F4EA] sm:text-[3rem] lg:text-[3.4rem]">
            When you hire us
            <br />
            <span className="font-[Fraunces,serif] text-[2.8rem] italic text-[#F2801E] sm:text-[3.2rem] lg:text-[3.6rem]">
              communities thrive
            </span>
          </h1>

          <p className="mt-6 max-w-[420px] text-[15px] leading-relaxed text-[#DCE8D8]">
            We believe sustainable development is only possible when communities
            are fully engaged, empowered, and supported to lead their own
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}