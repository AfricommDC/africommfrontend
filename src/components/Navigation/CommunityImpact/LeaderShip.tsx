import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/leadership.jpg";
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
        
        </main>

        <GetInvolved />
        <Footer />
        </>
    )
}