import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ChevronLeft, ChevronRight, ArrowRight, Check } from "lucide-react";


/* ------------------------------------------------------------------ */
/*  Hero Data                                                         */
/* ------------------------------------------------------------------ */


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

/* ------------------------------------------------------------------ */
/*  What We Do data                                                    */
/* ------------------------------------------------------------------ */

type Service = {
  number: string;
  title: string;
  theme: "green" | "orange";
  description: string;
  bullets: string[];
  href: string;
};

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Training Services",
    theme: "green",
    description:
      "Africomm Development Centre provides high-quality training, coaching, and capacity-building services designed to strengthen individuals, institutions, and communities. Our training programmes are practical, interactive, and tailored to meet the unique needs of our clients while fostering personal growth, organizational excellence, and sustainable development.",
    bullets: [
      "Life Skills Development",
      "Personal Development and Leadership Coaching",
      "Business Excellence and Entrepreneurship",
      "Proposal Writing and Resource Mobilization",
      "Team Building and Organizational Effectiveness",
      "Career Development and Progression",
      "Digital Skills and Professional Networking",
      "Community-Based Organization (CBO) Development and Capacity Building",
    ],
    href: "#training-services",
  },
  {
    number: "02",
    title: "Consultancy Services",
    theme: "orange",
    description:
      "Africomm Development Centre provides professional consultancy services that help organizations strengthen their systems, improve performance, and achieve sustainable growth. We work with corporate organizations, educational institutions, businesses, community organizations, and private firms to develop practical solutions that address organizational challenges and unlock opportunities for growth and excellence.",
    bullets: [
      "Strategic Planning",
      "Human Resource Management",
      "Facilities Management",
      "Staff Capacity Building",
      "Customer Excellence Achieves Results (CESAR)",
    ],
    href: "#consultancy-services",
  },
];

const THEME = {
  green: {
    bg: "bg-gradient-to-br from-[#1B5E32] via-[#0F3D20] to-[#0B2A1B]",
  },
  orange: {
    bg: "bg-gradient-to-br from-[#F2801E] via-[#E06A0E] to-[#C9550A]",
  },
} as const;



export default function Hero() {
  const [active, setActive] = useState(0);
  
  // Hero Durations
  useEffect(() => {
    const id = setInterval(() => {
      setActive((cur) => (cur + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, []);

  // what we do

  const [activeService, setActiveService] = useState(0);

  const goService = (dir: 1 | -1) => {
    setActiveService((cur) => (cur + dir + SERVICES.length) % SERVICES.length);
  };

  return (
    <>
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

    {/* ============================ WHAT WE DO ============================ */}
      <section id="our-services" className="bg-white px-8 py-20">
        <div className="mx-auto max-w-[1400px]">
          {/* Section */}
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <h2 className="font-[Manrope,sans-serif] text-5xl font-semibold leading-[1.05] text-[#111]">
              What
              <br />
              We do
            </h2>
            <div className="flex max-w-xl flex-col items-start gap-6">
              <p className="text-[14px] leading-relaxed text-[#555]">
                At Africomm, we combine professional expertise with practical
                experience to deliver solutions that are tailored, sustainable,
                and results-driven. We work closely with our clients to
                understand their needs and provide actionable recommendations
                that lead to measurable improvements in organizational
                performance and impact.
              </p>
              <div className="flex shrink-0 gap-2">
                <button
                  onClick={() => goService(-1)}
                  aria-label="Previous service"
                  className="flex h-10 w-10 items-center justify-center bg-[#1FA24A] text-white transition-colors hover:bg-[#178A3D]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => goService(1)}
                  aria-label="Next service"
                  className="flex h-10 w-10 items-center justify-center bg-[#1FA24A] text-white transition-colors hover:bg-[#178A3D]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="mt-12 flex flex-col items-stretch gap-3 md:flex-row">
            {SERVICES.map((service, i) => {
              const isActive = i === activeService;
              const theme = THEME[service.theme];
              return (
                <button
                  key={service.number}
                  onClick={() => setActiveService(i)}
                  className={`relative overflow-hidden text-left transition-all duration-500 ease-in-out ${theme.bg} ${
                    isActive
                      ? "flex-[1000] p-8 md:p-10"
                      : "flex-[140] p-6 hover:brightness-110"
                  }`}
                  style={{ minWidth: isActive ? undefined : 160 }}
                >
                  {/* subtle geometric texture */}
                  <svg
                    className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
                    preserveAspectRatio="none"
                    viewBox="0 0 400 400"
                  >
                    <polygon points="0,0 400,80 250,400 0,300" fill="white" />
                    <polygon points="400,0 400,220 180,120" fill="white" />
                  </svg>

                  {isActive ? (
                    <div className="relative flex h-full flex-col">
                      <span className="font-[Manrope,sans-serif] text-3xl font-bold text-white/90">
                        {service.number}
                      </span>

                      <div className="mt-5 grid gap-x-10 gap-y-6 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                        <div>
                          <h3 className="mb-3 font-[Manrope,sans-serif] text-2xl font-bold text-white">
                            {service.title}
                          </h3>
                          <p className="max-w-md text-[13px] leading-relaxed text-white/90">
                            {service.description}
                          </p>
                          <a
                            href={service.href}
                            className="mt-5 inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-wide text-[#FFA552]"
                          >
                            Find out more
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>

                        <ul className="flex flex-col gap-2.5">
                          {service.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-2.5">
                              <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[2px] border border-[#F2801E] bg-white/95">
                                <Check className="h-3 w-3 text-[#F2801E]" strokeWidth={3.5} />
                              </span>
                              <span className="text-[12.5px] leading-snug text-white">
                                {bullet}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <div className="relative flex h-full min-h-[280px] flex-col justify-between">
                      <span className="font-[Manrope,sans-serif] text-3xl font-bold text-white/90">
                        {service.number}
                      </span>
                      <h3 className="font-[Manrope,sans-serif] text-lg font-bold leading-tight text-white">
                        {service.title}
                      </h3>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}