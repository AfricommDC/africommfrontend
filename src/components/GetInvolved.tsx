import { Link } from "react-router-dom";
import {
  HandCoins,
  FileSignature,
  HeartHandshake,
} from "lucide-react";

const ctaCards = [
  {
    label: "Donate",
    icon: HandCoins,
    path: "/donations",
  },
  {
    label: "Hire Us",
    icon: FileSignature,
    path: "/contact-us",
  },
  {
    label: "Volunteer",
    icon: HeartHandshake,
    path: "/volunteer",
  },
];

function GetInvolved() {
  return (
    <section className="w-full bg-[#FFF7F0]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <h2 className="mb-8 text-3xl font-semibold tracking-tight text-neutral-900">
          Get involved
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ctaCards.map(({ label, icon: Icon, path }) => (
            <Link
              key={label}
              to={path}
              className="group relative flex h-40 flex-col justify-end overflow-hidden bg-[#FF7802] p-5 transition-colors duration-300 hover:bg-[#e86e02]"
            >
              <Icon
                className="absolute -right-2 -top-2 h-24 w-24 text-white/25 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
              />

              <span className="relative text-lg font-semibold text-white">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetInvolved;