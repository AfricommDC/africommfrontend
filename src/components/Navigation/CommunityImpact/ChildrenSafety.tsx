import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-8.png";
import imageTop from "@/assets/Africomm/image 2.png";
import imageBottom from "@/assets/Africomm/image 9 (2).png";
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
   
        {/* Children's Online Safety Introduction */}
        <section className="w-full bg-white py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
              
              {/* Main Statement */}
              <div>
                <h2 className="max-w-[680px] text-2xl font-semibold leading-[1.3] text-[#1f2933] sm:text-3xl md:text-4xl">
                  We envision a future where every child can safely explore, learn,
                  create, and connect online without fear of exploitation, abuse, or
                  harm. By equipping children and the adults around them with the
                  knowledge, skills, and tools to navigate the digital world safely, we
                  are contributing to a safer, more inclusive, and more resilient
                  digital future for all.
                </h2>
              </div>

              {/* Description */}
              <div className="flex flex-col justify-center gap-8 lg:pt-24">
                <p className="max-w-[620px] text-sm leading-relaxed text-black sm:text-base">
                  As digital technologies continue to transform how children learn,
                  communicate, and interact with the world, they also face increasing
                  risks in online spaces. At Africomm Development Centre, we are
                  committed to ensuring that children online have access and benefit
                  from the opportunities presented by the digital world while being
                  protected from online harm.
                </p>

                <p className="max-w-[620px] text-sm leading-relaxed text-black sm:text-base">
                  Our Children's Online Safety Programme works with children, parents,
                  caregivers, teachers, schools, community leaders, and other
                  stakeholders to promote safe, responsible, and positive digital
                  engagement. We recognize that protecting children online requires a
                  collective effort involving families, schools, communities, technology
                  providers, and policymakers.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Children's Online Safety Programme Section */}
        <section className="w-full bg-white py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <div className="relative mx-auto max-w-[1120px]">
              
              {/* Orange Background */}
              <div className="absolute inset-x-0 top-0 h-full bg-[#ff7900] lg:left-[24px]" />

              <div className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_1fr]">
                
                {/* Images */}
                <div className="relative z-10 flex flex-col pt-8 lg:pt-12">
                  {/* Top Image */}
                  <div className="relative ml-0 w-[88%] lg:-ml-6">
                    <img
                      src={imageTop}
                      alt="Children's online safety programme"
                      className="h-[230px] w-full object-cover sm:h-[280px] lg:h-[260px]"
                    />
                  </div>

                  {/* Bottom Image */}
                  <div className="relative ml-0 mt-0 w-full">
                    <img
                      src={imageBottom}
                      alt="Community members participating in the programme"
                      className="h-[230px] w-full object-cover sm:h-[280px] lg:h-[260px]"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-12">
                  <div className="max-w-[460px] text-black">
                    
                    <h3 className="text-base font-bold sm:text-lg">
                      Who We Serve
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed sm:text-sm">
                      We work with:
                    </p>

                    <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-relaxed sm:text-sm">
                      <li>Children and adolescents</li>
                      <li>Parents and caregivers</li>
                      <li>Teachers and school administrators</li>
                      <li>Community leaders and child protection actors</li>
                      <li>Youth groups and community-based organizations</li>
                      <li>Government departments and agencies involved in child protection</li>
                    </ul>

                    <h3 className="mt-7 text-base font-bold sm:text-lg">
                      What the Programme Involves
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed sm:text-sm">
                      Our Children's Online Safety Programme focuses on awareness
                      creation, capacity building, advocacy, and digital literacy to
                      help children navigate online spaces safely and responsibly.
                    </p>

                    <p className="mt-3 text-xs leading-relaxed sm:text-sm">
                      Key intervention areas include:
                    </p>

                    <ul className="mt-1 list-disc space-y-1 pl-5 text-xs leading-relaxed sm:text-sm">
                      <li>Digital literacy and online safety education for children and adolescents</li>
                      <li>Training for parents and caregivers on digital parenting and online supervision</li>
                      <li>Capacity building for teachers and school leaders on child online protection</li>
                      <li>Awareness campaigns on cyberbullying, online exploitation, online grooming, misinformation, and digital privacy</li>
                      <li>Community dialogues and stakeholder engagement forums</li>
                      <li>Development and dissemination of information, education, and communication materials</li>
                      <li>Advocacy for stronger child protection mechanisms in digital spaces</li>
                      <li>Referral and support pathways for children affected by online harm</li>
                    </ul>

                  </div>
                </div>
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