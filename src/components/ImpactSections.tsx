import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import image1 from "@/assets/Africomm/image 25.png";
import image2 from "@/assets/Africomm/image 5.png";
import image3 from "@/assets/Africomm/image 9.png";
import image4 from "@/assets/Africomm/Rectangle 9.png";
import image5 from "@/assets/Africomm/Rectangle 10.png";


interface RevenueStat {
  percentage: string;
  label: string;
  description: string;
  accent: "primary" | "secondary";
}

interface Programme {
  title: string;
  image: string;
}

export default function AfricommSections() {
  // Placeholder imagery — swap for real assets
  const heroImage =
    image1; 

  const revenueStats: RevenueStat[] = [
    {
      percentage: "40%",
      label: "of revenue generated",
      description:
        "Supports essential organizational expenses, including office rent, electricity, internet, water, security, transport, communication, and administrative costs.",
      accent: "primary",
    },
    {
      percentage: "60%",
      label: "of revenue generated",
      description:
        "Covers implementation costs and professional fees for consultants and facilitators.",
      accent: "secondary",
    },
  ];

  const programmes: Programme[] = [
    {
      title: "Sexual Health and Reproductive Rights",
      image:
        image2,
    },
    {
      title: "Children's Online Safety",
      image:
        image3,
    },
    {
      title: "Community Empowerment",
      image:
        image4,
    },
    {
      title: "Environmental Sustainability",
      image:
        image5,
    },
  ];

  return (
    <main className="w-full">
      {/* Section 1: Why we're different */}
      <section className="w-full bg-[#0F3D2E] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col justify-center gap-8 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Why we&apos;re
              <br />
              different
            </h2>

            <p className="max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Africomm Development Centre was intentionally built as a
              self-sustaining social impact organization in response to the
              growing challenge of donor funding fatigue and the uncertainty
              that often comes with relying solely on external grants. This
              model ensures that we remain mission-driven, financially
              resilient, and accountable to the communities we serve, while
              creating lasting impact beyond donor funding cycles.
            </p>

            <Button
              variant="link"
              className="w-fit gap-2 px-0 text-sm font-semibold uppercase tracking-wide text-[#E8792C] hover:text-[#E8792C]"
            >
              Find out more
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Right: image with stat overlay cards */}
          <div className="relative min-h-[420px] lg:min-h-full">
            <img
              src={heroImage}
              alt="Children from the community supported by Africomm Development Centre"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-6 sm:p-8">
              {revenueStats.map((stat) => (
                <div
                  key={stat.label + stat.percentage}
                  className={`flex flex-col gap-3 rounded-md p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5 ${
                    stat.accent === "primary" ? "bg-[#1E7A4C]" : "bg-[#E8792C]"
                  }`}
                >
                  <div className="flex shrink-0 flex-col leading-none">
                    <span className="text-3xl font-bold sm:text-4xl">
                      {stat.percentage}
                    </span>
                    <span className="mt-1 text-xs font-medium text-white/85">
                      {stat.label}
                    </span>
                  </div>
                  <p className="text-xs leading-snug text-white/90 sm:text-sm">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Programmes */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mb-10 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
              Our
              <br />
              Programmes
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-neutral-600 sm:text-base">
              When you hire Africomm Development Centre for training,
              consultancy, research, or capacity building services, you are
              investing in more than a professional service, you are investing
              in community transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {programmes.map((programme) => (
              <div
                key={programme.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <img
                  src={programme.image}
                  alt={programme.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold text-white sm:text-xl">
                  {programme.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}