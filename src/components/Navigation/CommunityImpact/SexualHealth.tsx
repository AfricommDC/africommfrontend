import Navbar from "@/components/Navbar";
import image1 from "@/assets/Africomm/image 4.png";
import image2 from "@/assets/Africomm/image 5 (2).png";

import kagisImage from "@/assets/Africomm/image 30.png";
import vibesImage from "@/assets/Africomm/image 8.png";


import maternalHealthImage from "@/assets/Africomm/image 6.png";
import genderRightsImage from "@/assets/Africomm/image 7.png";

import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

const programmes = [
  {
    number: "01",
    title: "Keeping A Girl In School (KAGIS)",
    description:
      "Keeping A Girl In School (KAGIS) is a menstrual health and hygiene programme that provides menstrual wellness education, sanitary products, and mentorship to vulnerable school-going girls.",
    whoWeServe:
      "School-going girls in primary and secondary schools, vulnerable and underserved communities, and girls facing barriers caused by period poverty.",
    activities: [
      "Menstrual Health and Hygiene Education",
      "Distribution of sanitary pads and menstrual products",
      "Menstrual and life skills sessions",
      "Community sensitization on menstrual dignity and period poverty",
    ],
    change:
      "We are working to eliminate period poverty and ensure that no girl misses school, loses confidence, or falls behind in her education because of menstruation.",
    color: "bg-[#ff7900]",
    image: kagisImage,
    reverse: false,
  },
  {
    number: "02",
    title: "Vijana Imarika Bonga Elimika Stawika (VIBES)",
    description:
      "VIBES provides safe spaces where young people can learn, engage, share experiences, and build the skills necessary to make informed life choices.",
    whoWeServe:
      "Adolescents, youth, and survivors of Sexual and Gender-Based Violence (SGBV).",
    activities: [
      "Life skills training",
      "Comprehensive sexuality education",
      "Youth mentorship and empowerment",
      "Story-sharing and peer support sessions",
      "Advocacy and awareness campaigns",
    ],
    change:
      "We seek to empower young people with knowledge, confidence, and life skills that enable them to make informed decisions, advocate for their rights, and contribute positively to their communities.",
    color: "bg-[#07862f]",
    image: maternalHealthImage,
    reverse: true,
  },
  {
    number: "03",
    title: "Protect, Educate and Empower Women Against Violence (PEEWAV)",
    description:
      "PEEWAV is a comprehensive programme dedicated to protyecting children, women and girls from violence, harmful practices, and discrimination",
    whoWeServe:
      "Children, women, girls, surviors of Violence, teen/student mothers and communities affected by harmful cultural and social practices.",
    activities: [
      "Prevention of Female Genital Mutilation (FGM) and harmful practices",
      "Prevention of child marriage and teenage pregnancies",
      "Survivor support and referral pathways",
      "Youth and community advocacy",
      "Engagement with families and community leaders",
    ],
    change:
      "We are building safer communities where children, women and girls can live free from violence, exploitation, and harmful practices. Through advocacy, empowerment and protect initiative, we champion the rights, dignity and wellbeing of vulnerable populations while promoting gender equality and social justice.",
    color: "bg-[#ff7900]",
    image: genderRightsImage,
    reverse: false,
  },
 {
  number: "04",
  title: "Mental Health & Nutrition Empowerment Program (MhNEP)",
  description:
    "The Mental Health & Nutrition Empowerment Program seeks to engage mothers and student mothers by addressing the challenges that often prevent them from completing their education and achieving their full potential.",
  whoWeServe:
    "Teenage mothers, young mothers, and student mothers in secondary schools, colleges, and other learning institutions.",
  activities: [
    "Mental health and psychosocial support",
    "Nutrition education and support",
    "Mentorship and peer support groups",
    "Advocacy for the rights of young mothers",
    "Referral to support services",
  ],
  change:
    "We are working to ensure that teenage and student mothers are not left behind in education. By providing support, mentorship, and advocacy, we help young mothers continue their education, improve their wellbeing, and build brighter futures for themselves and their children.",
  color: "bg-[#07862f]",
  image: vibesImage,
  reverse: true,
 },
];

function ProgrammeCard({
  programme,
}: {
  programme: (typeof programmes)[number];
}) {
  return (
    <section className="grid w-full grid-cols-1 md:grid-cols-2">
      {/* Coloured Content Section */}
      <div
        className={`relative flex min-h-[520px] flex-col justify-between px-6 py-10 text-white sm:min-h-[560px] sm:px-10 sm:py-12 md:min-h-[620px] md:px-12 lg:min-h-[650px] lg:px-16 lg:py-16 ${programme.color} ${
          programme.reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Programme Number */}
        <span className="text-4xl font-medium text-transparent [-webkit-text-stroke:1px_#111] sm:text-5xl">
          {programme.number}
        </span>

        {/* Programme Title and Description */}
        <div className="mt-16 max-w-[550px] sm:mt-20 md:mt-auto">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {programme.title}
          </h2>

          <p className="mt-5 max-w-[500px] text-sm leading-relaxed text-white/90 sm:text-base">
            {programme.description}
          </p>
        </div>
      </div>

    
      {/* Image and Programme Details */}
  <div
    className={`relative min-h-[560px] overflow-hidden sm:min-h-[600px] md:min-h-[620px] lg:min-h-[650px] ${
        programme.reverse ? "md:order-1" : "md:order-2"
    }`}
     >
        {/* Background Image */}
        <img
            src={programme.image}
            alt={programme.title}
            className="absolute inset-0 h-full w-full object-cover"
        />

  {/* Lighter overlay - keeps text readable without hiding image */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/20" />

        {/* Programme Information */}
        <div className="relative z-10 flex h-full items-center px-6 py-10 text-white sm:px-10 sm:py-12 md:px-12 lg:px-16">
            <div className="max-w-[550px]">
            <h3 className="mb-2 text-sm font-bold sm:text-base">
                Who We Serve
            </h3>

            <p className="mb-6 text-xs leading-relaxed text-white/95 sm:text-sm">
                {programme.whoWeServe}
            </p>

            <h3 className="mb-2 text-sm font-bold sm:text-base">
                What We Do
            </h3>

            <ul className="mb-6 list-disc space-y-1 pl-5 text-xs leading-relaxed text-white/95 sm:text-sm">
                {programme.activities.map((activity) => (
                <li key={activity}>{activity}</li>
                ))}
            </ul>

            <h3 className="mb-2 text-sm font-bold sm:text-base">
                The Change We Are Creating
            </h3>

            <p className="text-xs leading-relaxed text-white/95 sm:text-sm">
                {programme.change}
            </p>
            </div>
        </div> 
   </div>
    </section>
  );
}

function SexualHealth() {
  const heroImage = image1;

  return (
    <>
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-[520px] w-full overflow-hidden md:h-[600px]">
          <img
            src={heroImage}
            alt="Sexual health and reproductive rights programme"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <Navbar />

          {/* Hero Content */}
          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="mx-auto max-w-[1400px] px-6 pb-10 sm:px-8 md:pb-12 lg:px-12">
              <span className="inline-flex rounded-full bg-orange-500 px-4 py-1.5 text-xs font-semibold text-white">
                Our Programmes
              </span>

              <h1 className="mt-3 max-w-[700px] text-4xl font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl">
                Sexual Health and Reproductive Rights
              </h1>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="w-full bg-[#f7f7f7] py-16 sm:py-20 md:py-24">
          <div className="mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-12">
            <h2 className="max-w-[900px] text-2xl font-semibold leading-[1.3] text-[#1f2933] sm:text-3xl md:text-4xl">
              Our goal is to create communities where girls stay in school,
              young people are empowered with accurate information, women and
              girls are protected from violence and harmful practices, and
              vulnerable mothers receive the support they need to thrive.
            </h2>

            <div className="mt-10 grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className="w-full">
                <img
                  src={image2}
                  alt="Africomm community members"
                  className="h-[240px] w-full object-cover sm:h-[320px] md:h-[300px]"
                />
              </div>

              <div className="max-w-[600px]">
                <p className="text-sm leading-relaxed text-[#3f4650] sm:text-base">
                  At Africomm Development Centre, we believe that every girl,
                  woman, and young person deserves the knowledge, support,
                  protection, and opportunities to reach their full potential.
                  Through our Sexual Health and Reproductive Rights (SHRR)
                  programmes, we work with children, adolescents, youth, women,
                  couples, families, and communities to address barriers that
                  limit access to education, health information, safety, and
                  dignity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programmes */}
        <section className="w-full">
          {programmes.map((programme) => (
            <ProgrammeCard
              key={programme.number}
              programme={programme}
            />
          ))}
        </section>
      </main>

      <GetInvolved />
      <Footer />
    </>
  );
}

export default SexualHealth;