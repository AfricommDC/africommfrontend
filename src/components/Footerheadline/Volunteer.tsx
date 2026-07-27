import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-7.png";
// import image2 from "@/assets/Africomm/image 4.png";
import { Users } from "lucide-react";
import volunteerImage from "@/assets/Africomm/image 8.png";


import Footer from "@/components/Footer";


export default function Volunteer() {
   
    const heroImage =
     image1;
    // const photo =
    //  image2;
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
                 Volunteer
                </h1>
            </div>
            </div>
        </section>

              
        </main>
         <section className="bg-white py-20">
            <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:px-8">
                {/* Left Content */}
                <div className="lg:col-span-2">
                <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
                    From Volunteer to Changemaker: Building Leaders Who Transform
                    Communities
                </h2>

                <p className="mt-8 max-w-3xl text-gray-600 leading-8">
                    At Africomm Development Centre, volunteering is more than giving
                    your time; it is a journey of personal growth, professional
                    development, and community transformation. We provide young people
                    with practical experience, mentorship, and opportunities to gain
                    hands-on experience while contributing to impactful grassroots
                    programmes.
                </p>
                </div>

                {/* Statistics Card */}
                <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-xs bg-[#009933] p-8 text-white shadow-lg">
                    <Users className="mb-5 h-12 w-12" />

                    <p className="text-sm uppercase tracking-widest text-green-100">
                    Volunteers typically
                    </p>

                    <h3 className="mt-2 text-5xl font-bold">6</h3>

                    <p className="mt-2 text-lg font-medium">
                    months
                    </p>

                    <p className="mt-6 text-sm leading-7 text-green-100">
                    with many returning engaged to both the field work and larger
                    programmes.
                    </p>
                </div>
                </div>
            </div>
        </section>

         <section className="bg-white pb-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="bg-[#F58220] p-6 md:p-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                    {/* Image */}
                    <div>
                    <img
                        src={volunteerImage}
                        alt="Volunteer distributing supplies"
                        className="h-full w-full rounded-md object-cover shadow-lg"
                    />
                    </div>

                    {/* Content */}
                    <div className="space-y-6 text-white">
                    <p className="leading-7">
                        Our volunteers played a leading role in efforts to assist
                        vulnerable communities by organizing the sorting and
                        distribution of humanitarian supplies. Working alongside
                        community stakeholders, partners, and humanitarian teams, they
                        demonstrated commitment, compassion, and professionalism.
                    </p>

                    <p className="leading-7">
                        They worked tirelessly to sort donated food parcels,
                        educational materials, medical supplies, sanitary products,
                        clothing, and other essential resources before ensuring they
                        reached the individuals and families who needed them most.
                        Volunteers participated in inventory management, packaging,
                        record-keeping, beneficiary registration, logistics, and
                        coordinated distribution activities while maintaining dignity,
                        transparency, and accountability throughout the process.
                    </p>

                    <p className="leading-7">
                        Beyond delivering supplies, volunteers interacted with
                        beneficiaries, listened to their experiences, and offered hope
                        through their presence and service. Their efforts reflected the
                        values of compassion, integrity, teamwork, and community
                        empowerment that define Africomm Development Centre.
                    </p>

                    <p className="leading-7 font-semibold">
                        At Africomm, every act of service strengthens communities and
                        inspires positive change. Through volunteering, individuals gain
                        valuable experience while creating lasting impact in the lives
                        of others.
                    </p>
                    </div>
                </div>
                </div>
            </div>
        </section>

          
        <Footer />
        </>
    )
}