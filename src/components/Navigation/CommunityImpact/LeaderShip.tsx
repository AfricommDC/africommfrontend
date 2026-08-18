import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/leadership.jpg";
import image2 from "@/assets/Africomm/image 3-1.png";
import GetInvolved from '@/components/GetInvolved';
import Footer from "@/components/Footer";


export default function LeaderShip() {
   
    const heroImage =
     image1;
    
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

           <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-8 md:pb-12 lg:px-12">
              <span className="inline-flex rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white">
                Our Programmes
              </span>

              <h1 className="mt-3 max-w-[700px] text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl">
                Leadership and Governance
              </h1>
            </div>
          </div>
        </section>

        <section className="w-full bg-white"   aria-labelledby="mission-headline"  >
            <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20">
                {/* Headline */}
                <h2
                id="mission-headline"
                className="text-xl font-bold leading-snug tracking-tight text-neutral-900 sm:text-2xl md:text-3xl lg:text-[2rem] md:leading-[1.35]"
                >
                We envision communities where citizens are informed, engaged, and
                empowered to shape their own development; where leaders are
                accountable and responsive; and where governance systems uphold
                transparency, participation, equity, and human rights.
                </h2>

                {/* Supporting copy */}
                <div className="mt-8 max-w-2xl space-y-4 sm:mt-10 sm:pl-16 md:pl-24 lg:pl-32">
                <p className="text-base  font-medium leading-relaxed text-black">
                    At Africomm Development Centre, we believe that effective
                    governance, accountable leadership, and active citizen
                    participation are essential for sustainable development and
                    social transformation. Through our Leadership and Governance
                    Programme, we empower citizens particularly young people,
                    women, and marginalized communities to actively engage in
                    decision-making processes, hold leaders accountable, and
                    contribute meaningfully to the governance of public resources
                    and community development.
                </p>
                <p className="text-base font-medium leading-relaxed text-black">
                    We recognize that communities thrive when citizens understand
                    their rights, responsibilities, and opportunities to
                    participate in governance. Our work seeks to bridge the gap
                    between citizens and duty bearers by creating platforms for
                    dialogue, engagement, and collective action.
                </p>
                </div>
            </div>
        </section>
        
        <section className="w-full bg-white px-4 py-8 sm:px-8 sm:py-12 md:px-12 md:py-16"  aria-labelledby="who-we-serve-heading" >
            <div className="mx-auto max-w-6xl rounded-md bg-[#F26B1D] p-6 sm:p-8 md:p-10">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
                {/* Image */}
                <div className="w-full flex-shrink-0 md:w-[38%]">
                    <img
                    src={image2}
                    alt="Community leader attending a governance event"
                    className="h-64 w-full rounded-sm object-cover sm:h-80 md:h-[420px]"
                    />
                </div>

                {/* Content */}
                <div className="w-full md:w-[62%]">
                    {/* Who We Serve */}
                    <h2
                    id="who-we-serve-heading"
                    className="text-base font-bold text-neutral-900 sm:text-lg"
                    >
                    Who We Serve
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    Our Leadership and Governance Programme work with:
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    <li>Youths, Women and grassroots community leaders</li>
                    <li>Community-based organizations and civil society actors</li>
                    <li>Elected leaders and public institutions</li>
                    <li>Human rights defenders and governance champions</li>
                    </ul>

                    {/* What the Programme Involves */}
                    <h2 className="mt-5 text-base font-bold text-neutral-900 sm:mt-6 sm:text-lg">
                    What the Programme Involves
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    Through our flagship HATUA NoW (Harnessing Accountability,
                    Transparency, Unity and Action Now) Programme and other
                    governance initiatives, we create safe and inclusive spaces
                    where citizens can learn, engage, and influence decisions
                    that affect their lives.
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    Our interventions include:
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    <li>Civic education and citizen awareness</li>
                    <li>Public participation and community engagement forums</li>
                    <li>Public budget literacy, analysis, and advocacy</li>
                    <li>Social accountability and governance monitoring</li>
                    <li>Leadership development and capacity building</li>
                    <li>Human rights awareness and advocacy</li>
                    <li>Community dialogues between citizens and leaders</li>
                    <li>Policy advocacy and stakeholder engagement</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        
        </main>

        <GetInvolved />
        <Footer />
        </>
    )
}