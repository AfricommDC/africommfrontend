import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-2.png";
import image2 from "@/assets/Africomm/image1.jpg";
import GetInvolved from '@/components/GetInvolved';
import Footer from "@/components/Footer";


export default function ClimateChange() {
   
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
                Climate Change Action
              </h1>
            </div>
          </div>
        </section>

       <section className="w-full bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16" aria-labelledby="vision-heading">
        <div className="mx-auto max-w-6xl">
            {/* Top: headline + green card */}
            <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
            <h2
                id="vision-heading"
                className="text-xl font-bold leading-snug text-neutral-900 sm:text-2xl md:w-3/5 md:text-[1.65rem] md:leading-[1.4]"
            >
                We envision communities where people live in harmony with nature,
                where environmental conservation and sustainable development go
                hand in hand, and where young people lead transformative climate
                action efforts. Through the Green Space Movement, we are creating
                greener, healthier, and more resilient communities while addressing
                the root causes and impacts of climate change.
            </h2>

            <div className="flex w-full flex-col justify-center bg-[#159641] p-6 sm:p-7 md:w-2/5 md:p-8">
                <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                Green Space Movement (GSM)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                The Green Space Movement (GSM) is Africomm's flagship climate
                action initiative designed to promote environmental conservation,
                climate resilience, and sustainable livelihoods through
                community-led action.
                </p>
            </div>
            </div>

            {/* Supporting copy */}
            <div className="mt-8 space-y-4 sm:mt-10 md:pl-16 lg:pl-24">
            <p className="text-sm leading-relaxed text-black sm:text-base">
                At Africomm Development Centre, we recognize that many of the
                social and economic challenges affecting communities today,
                including food insecurity, water scarcity, poverty, loss of
                livelihoods, health risks, and environmental degradation are
                directly or indirectly linked to the effects of climate change.
                These challenges disproportionately affect vulnerable populations,
                particularly women, youth, children, and rural households who
                depend on natural resources for their livelihoods.
            </p>
            <p className="text-sm leading-relaxed text-black sm:text-base">
                Through our Climate Change Action Programme, we work with
                communities to build resilience, promote environmental
                conservation, and encourage sustainable practices that protect the
                environment while improving livelihoods. We believe that
                communities must be at the center of climate solutions and that
                young people have a critical role to play in driving environmental
                stewardship and sustainable development.
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
                    alt="Community members gathered for a Green Space Movement climate discussion"
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
                    We work with:
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    <li>Youth/youth groups, Women and community-based organizations</li>
                    <li>Schools and learning institutions</li>
                    <li>Smallholder farmers and rural households</li>
                    <li>Community leaders and environmental champions</li>
                    <li>Grassroots communities affected by climate-related challenges</li>
                    </ul>

                    {/* What the Programme Involves */}
                    <h2 className="mt-5 text-base font-bold text-neutral-900 sm:mt-6 sm:text-lg">
                    What the Programme Involves
                    </h2>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    Through the Green Space Movement, we promote practical and
                    sustainable climate solutions by:
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                    <li>Supporting reforestation and afforestation initiatives</li>
                    <li>Organizing community and school tree-growing campaigns</li>
                    <li>Promoting climate-smart and organic farming practices at the household level</li>
                    <li>Encouraging environmental conservation and ecosystem restoration</li>
                    <li>Raising awareness on climate change adaptation and mitigation</li>
                    <li>Supporting community-led environmental action initiatives</li>
                    <li>Promoting sustainable waste management practices</li>
                    <li>Encouraging youth leadership and participation in climate action</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        
       

        <section  className="w-full bg-white px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12"  aria-labelledby="change-we-are-creating-heading">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:gap-10">
                <h2
                    id="change-we-are-creating-heading"
                    className="text-xl font-bold leading-snug text-neutral-900 sm:text-2xl md:w-[260px] md:flex-shrink-0"
                >
                    The Change We Are Creating
                </h2>
                <p className="text-sm leading-relaxed text-neutral-800 sm:text-base">
                    Our goal is to build informed, empowered, and active citizens who can
                    effectively participate in governance processes and demand
                    transparency, accountability, and equitable service delivery.
                    Through this programme, we aim to:
                </p>
                </div>

                {/* Cards grid */}
                <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Increase meaningful public participation in decision-making
                    processes
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Strengthen citizen oversight of public resources and development
                    projects
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Promote transparency and accountability among elected leaders and
                    public institutions
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Enhance public understanding of budgets, planning processes, and
                    resource allocation
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Advance the protection and respect of human rights
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Strengthen youth and women's leadership and civic engagement
                    </p>
                </div>

                <div className="flex min-h-[120px] items-center bg-[#159641] p-5 sm:min-h-[130px] sm:p-6">
                    <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                    Foster constructive dialogue and collaboration between communities
                    and duty bearers
                    </p>
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