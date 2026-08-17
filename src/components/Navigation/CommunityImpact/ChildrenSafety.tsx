import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-8.png";
import GetInvolved from '@/components/GetInvolved';
import Footer from "@/components/Footer";


export default function ChildrenSafety() {
   
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
                Children's Online Safety
              </h1>
            </div>
          </div>
        </section>
        
        </main>

        <GetInvolved />
        <Footer />
        </>
    )
}