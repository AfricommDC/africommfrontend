import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image5.jpg";
import Footer from "@/components/Footer";


export default function Training() {
   
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
                Training Services
              </h1>
            </div>
          </div>
        </section>


        <section className="w-full bg-white px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16" aria-labelledby="partner-training-heading">
            <div className="mx-auto max-w-6xl">
                {/* Top: headline + paragraph (left) and green card (right) */}
                <div className="flex flex-col gap-6 md:flex-row md:items-stretch md:gap-8">
                <div className="md:w-3/5">
                    <h2
                    id="partner-training-heading"
                    className="text-xl font-bold leading-snug text-neutral-900 sm:text-2xl md:text-[1.65rem] md:leading-[1.4]"
                    >
                    Partner with Africomm Development Centre to build skills,
                    strengthen teams, and create lasting impact.
                    </h2>

                    <p className="mt-4 max-w-xl text-xs leading-relaxed text-black sm:mt-5 sm:text-sm">
                    Africomm Development Centre provides high-quality training,
                    coaching, and capacity-building services designed to strengthen
                    individuals, institutions, and communities. Our training
                    programmes are practical, interactive, and tailored to meet the
                    unique needs of our clients while fostering personal growth,
                    organizational excellence, and sustainable development.
                    </p>
                </div>

                <div className="flex w-full flex-col justify-center bg-[#159641] p-6 sm:p-7 md:w-2/5 md:p-8">
                    <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                    Who We Serve
                    </h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-white/90 sm:text-base">
                    <li>Schools and educational institutions</li>
                    <li>Corporate organizations and businesses</li>
                    <li>Government and non-governmental institutions</li>
                    <li>Community-Based Organizations (CBOs) and civil society organizations</li>
                    <li>Youth groups and community groups</li>
                    <li>Individuals seeking personal and professional growth</li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
        
     
        
        </main>

        
        <Footer />
        </>
    )
}