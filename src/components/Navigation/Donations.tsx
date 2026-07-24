import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 2-6.png";
import impactImage from "@/assets/Africomm/image 4-1.png";
import Footer from "@/components/Footer";


export default function Donations() {
    
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
                 Donations
                </h1>
            </div>
            </div>
        </section>
        
        </main>

        <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="max-w-xl text-3xl font-medium italic leading-tight text-[#ff6b00] md:text-5xl">
              Your donation goes where it is needed most, and where you intend
              it to go.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-700">
              Every contribution directly supports meaningful community
              interventions, creating measurable impact and transforming lives
              through transparent, accountable, and community-led action.
            </p>
          </div>

          {/* Donation Card */}
          <div className="justify-self-center lg:justify-self-end">
            <div className="w-full max-w-md bg-[#009933] p-10 text-white shadow-xl">
              <h3 className="mb-8 text-3xl font-bold">To Donate</h3>

              <div className="space-y-6 text-sm">
                <div>
                  <p className="uppercase tracking-wide text-green-100">
                    MPESA PAYBILL NUMBER
                  </p>
                  <p className="mt-1 font-semibold">222111</p>

                  <p className="mt-2 uppercase tracking-wide text-green-100">
                    ACCOUNT NUMBER
                  </p>
                  <p className="mt-1 font-semibold">2083566</p>
                </div>

                <div>
                  <p className="uppercase tracking-wide text-green-100">
                    MPESA BUY GOODS (TILL NUMBER)
                  </p>
                  <p className="mt-1 font-semibold">9078177</p>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between gap-8">
                    <span>Account title:</span>
                    <span className="font-medium text-right">
                      Africomm Development Centre
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Account Number:</span>
                    <span>05400009960</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Bank Name:</span>
                    <span>Family Bank</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Branch:</span>
                    <span>Chuka</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Swift Code:</span>
                    <span>FABLKENA</span>
                  </div>
                </div>

                <div className="flex justify-between border-t border-white/20 pt-4">
                  <span>PIN No:</span>
                  <span>P052256002Q</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-gray-700">
            <p className="leading-8">
              At Africomm Development Centre, we are committed to ensuring that
              every donation entrusted to us is used responsibly,
              transparently, and for its intended purpose. While our training
              and consultancy services generate income that supports our
              operations and core community programmes, direct donations enable
              us to respond to critical community needs and implement
              specialized interventions that require additional resources.
            </p>

            <p className="leading-8">
              <strong><em>Donations are allocated directly to the specific programme or activity</em></strong>{" "}
              they are intended to support. For example, a donation designated
              for the prevention of Female Genital Mutilation (FGM) may fund
              community sensitization forums, survivor support services, rescue
              and referral interventions, advocacy campaigns, mentorship
              programmes, or capacity-building initiatives aimed at protecting
              girls and women from harmful practices.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <p className="leading-8">
              Similarly, donations may support menstrual health initiatives,
              child protection programmes, children's online safety campaigns,
              climate action projects, civic education activities, emergency
              community interventions, or other targeted community needs
              identified by donors and beneficiaries.
            </p>

            <p className="leading-8">
              We believe in accountability and transparency. For this reason,
              <strong><em> donor funds are tracked and utilized exclusively for
              their designated purpose</em></strong>, ensuring that contributions
              create measurable impact in the lives of the individuals and
              communities we serve.
            </p>

            <p className="leading-8">
              By supporting Africomm Development Centre, donors become partners
              in creating lasting change, empowering vulnerable populations, and
              advancing community-led solutions that transform lives and
              strengthen communities.
            </p>
          </div>
        </div>
      </div>
    </section>

         <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] shadow-lg">
          <div className="relative">
            {/* Background Image */}
            <img
              src={impactImage}
              alt="Community Impact"
              className="h-[650px] w-full object-cover brightness-75"
            />

            {/* Light Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-black/20" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-14">
              <div>
                <h2 className="mb-8 text-xl font-bold text-[#009933] md:text-2xl">
                  What Does a Donation of KES 50,000 Fund?
                </h2>

                <p className="max-w-5xl text-sm leading-8 text-white md:text-base">
                  A donation of KES 50,000 has the power to create significant
                  and lasting impact across an entire community. At Africomm
                  Development Centre, such a contribution enables us to
                  implement comprehensive interventions that reach larger
                  numbers of beneficiaries, address critical community
                  challenges, and create sustainable change. The donation can
                  further support civic education and leadership training for
                  youth and community leaders, empowering them to participate
                  effectively in governance and accountability processes.
                </p>
              </div>

              {/* Impact Cards */}
              <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                <div className="bg-[#009933] p-6">
                  <p className="text-sm leading-6 text-white">
                    For example, KES 50,000 can support a full-scale Keeping A
                    Girl In School (KAGS) intervention by providing menstrual
                    wellness education, sanitary products, mentorship, and life
                    skills training to over 100 vulnerable girls, helping them
                    remain in school and achieve their educational goals.
                  </p>
                </div>

                <div className="bg-[#009933] p-6">
                  <p className="text-sm leading-6 text-white">
                    It can also fund a series of community dialogues and
                    advocacy forums aimed at preventing Female Genital
                    Mutilation (FGM), child marriage, and Sexual and
                    Gender-Based Violence (SGBV), reaching hundreds of
                    community members with life-saving information and support.
                  </p>
                </div>

                <div className="bg-[#009933] p-6">
                  <p className="text-sm leading-6 text-white">
                    In our Climate Change Action Programme, KES 50,000 can
                    facilitate community tree-growing campaigns, environmental
                    awareness activities, and the distribution of tree seedlings
                    to households, schools, and youth groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

         <section className="bg-white py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-[32px]">
                {/* Background Image */}
                <img
                    src={impactImage}
                    alt="Community Impact"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/30" />

                {/* Content */}
                <div className="relative z-10 px-8 py-10 md:px-14 md:py-16">
                    <h2 className="mb-8 text-lg font-bold text-[#ff7a00] md:text-2xl">
                    What Does a Donation of KES 5,000 Fund?
                    </h2>

                    <p className="max-w-5xl text-sm leading-8 text-white md:text-base">
                    At Africomm Development Centre, KES 5,000 is more than a
                    donation; it is an investment in dignity, opportunity, and
                    lasting community transformation. Because we work directly with
                    grassroots communities, even modest contributions create
                    meaningful and measurable impact. At the grassroots level,
                    every contribution matters. What may seem like a small amount
                    can protect a girl's education, restore hope to a young mother,
                    empower future leaders, or strengthen an entire community.
                    Through your support, we are able to reach those who are often
                    overlooked and provide practical, community-led solutions that
                    create lasting impact.
                    </p>

                    {/* Cards */}
                    <div className="mt-12 grid grid-cols-1 gap-1 md:grid-cols-3">
                    <div className="bg-[#ff7a00] p-6 text-white">
                        <p className="text-sm leading-6">
                        A donation of KES 5,000 can provide sanitary products and
                        menstrual wellness support to five vulnerable girls for an
                        entire school term, helping them stay in school and learn
                        with confidence.
                        </p>
                    </div>

                    <div className="bg-[#ff7a00] p-6 text-white">
                        <p className="text-sm leading-6">
                        It can support nutrition, mental health, and wellbeing
                        interventions for three teenage or student mothers for up
                        to two weeks, enabling them to continue their education and
                        pursue a better future for themselves and their children.
                        </p>
                    </div>

                    <div className="bg-[#ff7a00] p-6 text-white">
                        <p className="text-sm leading-6">
                        It can also facilitate a civic education and leadership
                        session for ten youth leaders, equipping them with the
                        knowledge and skills to actively participate in governance,
                        champion accountability, and drive positive change within
                        their communities.
                        </p>
                    </div>
                    </div>
                </div>
                </div>

                {/* Quote */}
                <div className="mt-12 text-center">
                <h3 className="text-3xl font-bold text-gray-900">
                    "Small Gift. Lasting Impact. Real Change."
                </h3>
                </div>
            </div>
         </section>

        <Footer />
        </>
    )
}