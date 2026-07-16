import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2.png";
import image2 from "@/assets/Africomm/image 3.png";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";
import {
  Scale,
  Users,
  HeartHandshake,
  BadgeHelp,
} from "lucide-react";

const values = [
  {
    title: "Integrity",
    icon: Scale,
  },
  {
    title: "Team spirit",
    icon: Users,
  },
  {
    title: "Respect and openness",
    icon: HeartHandshake,
  },
  {
    title: "Diversity and inclusivity",
    icon: BadgeHelp,
  },
];

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

        <section className="bg-white py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                {/* Left Content */}
                <div>
                    <h2 className="mb-6 text-4xl font-bold text-gray-900">
                    Our Core Values
                    </h2>

                    <p className="mb-8 text-gray-700 leading-8">
                    We are committed to teamwork, partnership, inclusivity,
                    transparency, and genuine participation as the foundation of all
                    our programmes and engagements. These principles define not only
                    what we do, but also how and why we do it.
                    </p>

                    <p className="text-gray-700 leading-8">
                    At Africomm Development Centre, we believe sustainable
                    development is only possible when communities are fully engaged,
                    empowered, and supported to lead their own transformation.
                    </p>
                </div>

                {/* Right Cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {values.map(({ title, icon: Icon }) => (
                    <div
                        key={title}
                        className="flex min-h-[170px] flex-col items-center justify-center border border-gray-300 bg-white p-6 transition hover:border-green-600 hover:shadow-md"
                    >
                        <Icon className="mb-5 h-12 w-12 text-green-600" />

                        <h3 className="text-center text-sm font-medium text-gray-800">
                        {title}
                        </h3>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </section>


        <GetInvolved />
        <Footer />
    </>
  );
}