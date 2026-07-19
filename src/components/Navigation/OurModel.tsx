import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-3.png";
import image2 from "@/assets/Africomm/image 4.png";

import GetInvolved from '@/components/GetInvolved';
import Footer from "@/components/Footer";


export default function OurModel() {
    const dotColumns = 40;
    const heroImage =
     image1;
    const photo =
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
                 Our Model
                </h1>
            </div>
            </div>
        </section>

       <section className="w-full bg-white">
        <div className="mx-auto max-w-[1400px] px-8 py-16">
            {/* Heading + stat badge */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_260px] lg:items-start lg:gap-12">
            <h2 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl">
                Africomm Development Centre was intentionally built as a
                self-sustaining social impact organization in response to the
                growing challenge of donor funding fatigue and the uncertainty
                that often comes with relying solely on external grants.
            </h2>
    
            <div className="flex flex-col items-start gap-1 bg-[#009933] px-6 py-5 text-white">
                <span className="text-5xl font-extrabold leading-none">70%</span>
                <p className="text-xs leading-relaxed">
                of our operational resources is through consultancy, training,
                research, and capacity-building services.
                </p>
            </div>
            </div>
    
            {/* Supporting paragraph */}
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-700">
            For many community-based organizations, critical programs and
            services are frequently delayed, scaled down, or halted while
            waiting for donor funding cycles and approvals. To address this
            challenge, Africomm adopted a social enterprise model that enables
            us to generate approximately 70%. This approach allows us to
            maintain continuity in our community impact work, respond more
            quickly to emerging needs, and reduce dependence on unpredictable
            funding streams.
            </p>
    
            {/* Photo */}
            <div className="mt-10">
            <img
                src={photo}
                alt="Community members celebrating at an Africomm Development Centre event"
                className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[580px]"
            />
            </div>
        </div>
       </section>

        
        </main>

          <section className="w-full bg-[#FF7802]">
            <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
                {/* Decorative dot-grid banner (matches reference: row 1 full white,
                    row 2 full gray, row 3 gray but only the left half filled) */}
                <div className="mb-10 flex flex-col gap-1.5 sm:mb-12 sm:gap-2">
                {[
                    { filled: 40, color: "#FFFFFF" },
                    { filled: 40, color: "#D9D9D9" },
                    { filled: 20, color: "#D9D9D9" },
                ].map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-between">
                    {Array.from({ length: dotColumns }).map((_, dotIndex) => (
                        <span
                        key={dotIndex}
                        className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"
                        style={{
                            backgroundColor: row.color,
                            opacity: dotIndex < row.filled ? 1 : 0,
                        }}
                        />
                    ))}
                    </div>
                ))}
                </div>
        
                {/* 40% / 60% stat pair */}
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                <div>
                    <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold leading-none text-white sm:text-5xl">
                        40%
                    </span>
                    <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                        Operations and programme implementation
                    </span>
                    </div>
        
                    <div className="mt-6 space-y-4 text-xs leading-relaxed text-black sm:text-sm">
                    <p>
                        The 40% allocation supports essential organizational expenses,
                        including office rent, electricity, internet, water,
                        security, transport, communication, and administrative costs.
                        More importantly, it enables the implementation of programmes
                        across our four thematic areas: Sexual and Reproductive
                        Health and Rights, Children Online Safety, Leadership and
                        Governance, and Climate Change Action.
                    </p>
                    <p>
                        These funds support activities such as Ending Period Poverty
                        through menstrual wellness education and the distribution of
                        sanitary products through the Keeping A Girl In Class
                        initiative, governance and community dialogue forums, civic
                        education programmes, child online safety awareness
                        campaigns, tree-growing initiatives, environmental
                        conservation activities, and the development and distribution
                        of information, education, and communication materials. The
                        allocation also covers facilitator and participant support
                        costs, including transport, meals, airtime, and training
                        materials.
                    </p>
                    </div>
                </div>
        
                <div>
                    <div className="flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold leading-none text-white sm:text-5xl">
                        60%
                    </span>
                    <span className="text-sm font-semibold leading-snug text-white sm:text-base">
                        Implementation costs and professional fees
                    </span>
                    </div>
        
                    <div className="mt-6 space-y-4 text-xs leading-relaxed text-black sm:text-sm">
                    <p>
                        60% covers implementation costs and professional fees for
                        facilitators and consultants. Revenue generated through our
                        commercial services enables us to retain experienced team
                        members, engage technical experts when needed, and provide
                        opportunities for young professionals and community
                        facilitators to gain meaningful employment and practical
                        experience.
                    </p>
                    <p>
                        This reduces reliance on short-term project funding and
                        allows us to maintain institutional knowledge, consistency,
                        and quality in programme delivery. Ultimately, every
                        consultancy or training engagement not only delivers value to
                        our clients but also helps sustain local jobs, strengthen
                        community leadership, and expand the reach of our mission to
                        inspire transformation through community-led solutions.
                    </p>
                    </div>
                </div>
                </div>
            </div>
          </section>

        <section className="w-full bg-white">
            <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
                <h2 className="text-2xl font-bold leading-snug text-neutral-900 sm:text-3xl lg:text-[28px]">
                    By choosing Africomm, you receive high-quality professional
                    services while creating lasting social impact.
                </h2>
        
                <p className="text-xs leading-relaxed text-neutral-700 sm:text-sm lg:pt-2">
                    When you hire Africomm Development Centre for training,
                    consultancy, research, or capacity building services, you are
                    investing in more than a professional service, you are investing
                    in community transformation. Every engagement directly
                    contributes to creating opportunities for women, youth, teen
                    mothers, and vulnerable communities. Through our self-sustaining
                    model, a portion of the revenue generated is reinvested into
                    grassroots programmes that advance Sexual and Reproductive
                    Health and Rights, Children Online Safety, Leadership and
                    Governance, and Climate Change Action.
                </p>
                </div>
            </div>
        </section>

        <GetInvolved />
        <Footer />
        </>
    )
}