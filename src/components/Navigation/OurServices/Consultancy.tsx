import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image4.jpg";
import impactImage from "@/assets/Africomm/image 4-1.png";
import Footer from "@/components/Footer";


export default function Consultancy() {
   
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
              <span className="inline-flex rounded-full bg-green-500 px-4 py-1.5 text-xs font-semibold text-white">
                Our Programmes
              </span>

              <h1 className="mt-3 max-w-[700px] text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl">
                Consultancy Services
              </h1>
            </div>
          </div>
        </section>

        <section  className="w-full bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16" aria-labelledby="partner-heading">
            <div className="mx-auto max-w-6xl">
                {/* Top: headline + green card */}
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
                <h2
                    id="partner-heading"
                    className="text-xl font-bold leading-snug text-neutral-900 sm:text-2xl md:w-3/5 md:text-[1.65rem] md:leading-[1.4]"
                >
                    Partner with Africomm Development Centre to strengthen your
                    organization, enhance performance, and achieve lasting results
                    while contributing to sustainable community transformation.
                </h2>

                <div className="flex w-full flex-col justify-center bg-[#159641] p-6 sm:p-7 md:w-2/5 md:p-8">
                    <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                    Who We Serve
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/90 sm:text-base">
                    Our consultancy services are tailored for:
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90 sm:text-base">
                    <li>Corporate organizations</li>
                    <li>Educational institutions</li>
                    <li>Businesses and private enterprises</li>
                    <li>Government agencies and public institutions</li>
                    <li>Community-based Organizations (CBOs)</li>
                    <li>Non-Governmental Organizations (NGOs)</li>
                    <li>Professional firms and associations</li>
                    </ul>
                </div>
                </div>

                {/* Supporting copy */}
                <div className="mt-8 space-y-4 sm:mt-10 md:pl-16 lg:pl-24">
                <p className="text-sm leading-relaxed text-black sm:text-base">
                    Africomm Development Centre provides professional consultancy
                    services that help organizations strengthen their systems, improve
                    performance, and achieve sustainable growth. We work with corporate
                    organizations, educational institutions, businesses, community
                    organizations, and private firms to develop practical solutions
                    that address organizational challenges and unlock opportunities
                    for growth and excellence.
                </p>
                </div>
            </div>
        </section>

        <section className="w-full bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16"  aria-labelledby="consultancy-services-heading">
            <div className="mx-auto max-w-6xl">
                <h2
                id="consultancy-services-heading"
                className="text-xl font-bold text-neutral-900 sm:text-2xl"
                >
                Our Consultancy Services
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-[#FBD9B8] p-6 sm:p-7">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    Strategic Planning
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-800 sm:text-sm">
                    We support organizations to develop clear, results-oriented
                    strategic plans that align their vision, mission, goals, and
                    operational priorities. Our approach ensures that organizations
                    have a practical roadmap for growth, sustainability, and impact.
                    </p>
                </div>

                <div className="bg-[#FBD9B8] p-6 sm:p-7">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    Human Resource Management
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-800 sm:text-sm">
                    We assist organizations in strengthening their human resource
                    systems through policy development, performance management
                    frameworks, staff engagement strategies, recruitment support,
                    and workplace culture enhancement.
                    </p>
                </div>

                <div className="bg-[#FBD9B8] p-6 sm:p-7">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    Facilities Management
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-800 sm:text-sm">
                    We provide advisory services on the effective management,
                    utilization, and maintenance of organizational facilities to
                    improve operational efficiency, safety, and service delivery.
                    </p>
                </div>

                <div className="bg-[#FBD9B8] p-6 sm:p-7">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    Staff Capacity Building
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-800 sm:text-sm">
                    We design and deliver customized staff development programmes
                    that strengthen leadership, communication, teamwork,
                    productivity, customer relations, and professional competencies
                    across all levels of an organization.
                    </p>
                </div>

                <div className="bg-[#FBD9B8] p-6 sm:p-7">
                    <h3 className="text-base font-bold leading-snug text-neutral-900 sm:text-lg">
                    Customer Excellence Achieves Results (CESAR)
                    </h3>
                    <p className="mt-4 text-xs leading-relaxed text-neutral-800 sm:text-sm">
                    Our CESAR programme equips organizations with practical
                    strategies for delivering exceptional customer experiences. We
                    help teams build customer-centered cultures, improve service
                    delivery standards, strengthen client relationships, and enhance
                    organizational reputation and performance.
                    </p>
                </div>
                </div>
            </div>
        </section>
        
       <section className="relative w-full overflow-hidden" aria-labelledby="why-choose-heading">
        {/* Background image */}
        <img
            src={impactImage}
            alt="Africomm consultant smiling during a client meeting"
            className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Lighter overlay for text contrast */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[600px] max-w-6xl flex-col justify-between px-5 py-10 xs:min-h-[650px] sm:min-h-[700px] sm:px-10 sm:py-16 md:min-h-[600px] md:px-14 md:py-20">
            <h2
            id="why-choose-heading"
            className="text-xl font-bold text-white xs:text-2xl sm:text-3xl md:text-4xl"
            >
            Why Choose Africomm?
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:mt-10 md:flex-row md:items-end md:justify-between md:gap-8">
            {/* Left: supporting copy */}
            <div className="max-w-xl space-y-3 sm:space-y-4 md:w-3/5">
                <p className="text-xs leading-relaxed text-white sm:text-sm">
                At Africomm, we combine professional expertise with practical
                experience to deliver solutions that are tailored, sustainable,
                and results-driven. We work closely with our clients to understand
                their needs and provide actionable recommendations that lead to
                measurable improvements in organizational performance and impact.
                </p>

                <p className="text-xs leading-relaxed text-white sm:text-sm">
                In addition, every consultancy engagement contributes to our
                community development mission, helping support programmes that
                advance Sexual and Reproductive Health and Rights, Children's
                Online Safety, Leadership and Governance, and Climate Change Action.
                </p>
            </div>

            {/* Right: orange card */}
            <div className="w-full bg-[#F26B1D] p-5 sm:w-[320px] sm:p-7 md:w-[300px] lg:w-[320px]">
                <h3 className="text-base font-bold text-neutral-900 sm:text-lg md:text-xl">
                How to Hire Us
                </h3>

                <p className="mt-3 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                Whether you require a one-time consultancy assignment, a long-term
                organizational development partner, or customized staff training and
                capacity-building support, our team is ready to work with you.
                </p>

                <p className="mt-4 text-xs font-bold leading-relaxed text-neutral-900 sm:text-sm">
                Contact Us
                </p>

                <p className="text-xs leading-relaxed text-neutral-900 sm:text-sm">
                Email: africommdc@gmail.com
                </p>

                <p className="break-words text-xs leading-relaxed text-neutral-900 sm:text-sm">
                Phone: +254 723 507 577 
                </p>

                <p className="mt-4 text-xs leading-relaxed text-neutral-900 sm:text-sm">
                Office Location: Chuka Town, Abdenego House, Room 1, next to Chuka
                Boys High School, along Kaanwa-Kajuki Road.
                </p>
            </div>
            </div>
        </div>
       </section>
        
        </main>

        
        <Footer />
        </>
    )
}