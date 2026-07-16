import { ArrowRight } from "lucide-react";
import image1 from "@/assets/Africomm/image 21.png";
import image2 from "@/assets/Africomm/image 22.png";
import image3 from "@/assets/Africomm/image 23.png";
import image4 from "@/assets/Africomm/image 16.png";
import image5 from "@/assets/Africomm/image 24.png";
import image6 from "@/assets/Africomm/image 18.png";
import image7 from "@/assets/Africomm/image 19.png";
import image8 from "@/assets/Africomm/image 20.png";
import GetInvolved from "@/components/GetInvolved";




interface LogoEntry {
  name: string;
  logo: string;
}

export default function PartnersAndGetInvolved() {
  const strategicPartners: LogoEntry[] = [
    { name: "Plan International", logo: image1},
    { name: "Rights & Governance Org", logo: image2 },
    { name: "Watoto Watch Network", logo: image4 },
    { name: "GRADIF-K", logo: image3 },
    { name: "Love Your Menses", logo: image5 },
  ];

  const clientsServed: LogoEntry[] = [
    { name: "University", logo: image6 },
    { name: "Esterita", logo: image7 },
    { name: "Wake & Shine", logo: image8 },
  ];


  return (
    <main className="w-full">
      {/* Section 1: Our Partners and Clients */}
      <section className="w-full bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:px-10 lg:grid-cols-[minmax(0,260px)_1fr] lg:gap-16 lg:px-16 lg:py-20">
          {/* Left: copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-black">
              Our Partners
              <br />
              and Clients
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-black">
              Together, we are inspiring transformation through
              community-led solutions.
            </p>

            <a
              href="#"
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-900"
            >
              Find out more
              <ArrowRight className="h-4 w-4 text-[#E8792C]" />
            </a>
          </div>

          {/* Right: logo groups */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-black">
                Strategic &amp; Development Partners
              </p>
              <div className="grid grid-cols-3 gap-x-8 gap-y-6">
                {strategicPartners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex h-16 w-32 items-center justify-center px-2"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium text-black">
                Clients &amp; Institutions Served
              </p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-6">
                {clientsServed.map((client) => (
                  <div
                    key={client.name}
                    className="flex h-16 w-32 flex-none items-center justify-center px-2"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetInvolved />
    </main>
  );
}