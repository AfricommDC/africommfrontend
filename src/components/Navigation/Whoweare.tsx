import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2.png";
import image2 from "@/assets/Africomm/image 3.png";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export default function WhoWeAre() {
  const heroImage =
    image1;
  const philosophyImage =
    image2;

  return (

    <>
        <main className="w-full">
        {/* Section 1: Hero */}
        <section className="relative h-[520px] w-full overflow-hidden md:h-[600px]">
            <img
            src={heroImage}
            alt="Africomm Development Centre team and community members at an event"
            className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            <Navbar />

            <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1400px] px-8 pb-12">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                Who we are
                </h1>
            </div>
            </div>
        </section>

        {/* Section 2: About / Philosophy / Vision / Mission */}
        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1400px] px-8 py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_200px] lg:items-start lg:gap-12">
                <p className="max-w-2xl text-sm leading-relaxed text-black">
                Africomm—meaning African Communities—was established to promote
                participatory, transformative, and sustainable development by
                strengthening how communities manage and utilize their own
                resources. We work in collaboration with government agencies,
                NGOs, CSOs, CBOs, faith-based organizations, community groups,
                and the private sector to advance locally driven solutions to
                community challenges.
                </p>

                <div className="relative flex flex-col items-start overflow-hidden rounded-sm bg-[#1E7A4C] px-5 py-4 text-white">
                <span className="text-xs font-bold uppercase tracking-wide">
                    Founded in
                </span>
                <span className="-mt-1 text-6xl font-extrabold leading-none text-white/40">
                    2017
                </span>
                </div>
            </div>
            </div>

            {/* Orange philosophy / vision / mission panel */}
            <div className="w-full bg-[#FF7802]">
            <div className="mx-auto max-w-[1400px] px-8 py-16">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
                <div className="-mx-8 lg:-mx-0 lg:-ml-8">
                    <img
                    src={philosophyImage}
                    alt="Community members gathered outdoors for a Get Involved workshop"
                    className="h-64 w-full object-cover shadow-xl sm:h-80 lg:h-full lg:min-h-[420px]"
                    />
                </div>

                <div className="flex flex-col gap-8 lg:py-2">
                    <div>
                    <h3 className="mb-2 text-xl font-bold text-black">
                        Our Philosophy
                    </h3>
                    <p className="text-sm leading-relaxed text-black">
                        At the heart of Africomm is a strong belief in the
                        potential, creativity, and resilience of community
                        members. We empower individuals and groups to take charge
                        of their development journey and lead dignified lives by
                        identifying and applying grassroots solutions to their own
                        challenges. Our life skills coaching approach equips young
                        people to actively participate in education,
                        entrepreneurship, and leadership processes as change
                        agents rather than passive recipients.
                    </p>
                    </div>

                    <div>
                    <h3 className="mb-2 text-xl font-bold text-black">
                        Our Vision
                    </h3>
                    <p className="text-sm leading-relaxed text-black">
                        To inspire meaningful participatory community
                        transformation.
                    </p>
                    </div>

                    <div>
                    <h3 className="mb-2 text-xl font-bold text-black">
                        Our Mission
                    </h3>
                    <p className="text-sm leading-relaxed text-black">
                        To champion the rights of women, children, and youth
                        through socio-economic interventions aimed at restoring
                        human dignity.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        </main>

        <GetInvolved />
        <Footer />
    </>
  );
}