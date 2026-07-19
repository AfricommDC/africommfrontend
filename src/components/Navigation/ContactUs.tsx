import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-8.png";
import GetInvolved from '@/components/GetInvolved';
import Footer from "@/components/Footer";


export default function ContactUs() {
   
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

            <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-[1400px] px-8 pb-12">
                <h1 className="text-4xl font-bold text-white sm:text-5xl">
                  Contact us
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