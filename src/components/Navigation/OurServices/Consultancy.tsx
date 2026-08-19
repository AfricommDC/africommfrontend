import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image4.jpg";
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
        
        </main>

        
        <Footer />
        </>
    )
}