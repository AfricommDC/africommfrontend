import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Our Model", href: "#our-model" },
  {
    label: "Our Services",
    href: "#our-services",
    children: [
      { label: "Training", href: "#training" },
      { label: "Consultancy", href: "#consultancy" },
    ],
  },
  {
    label: "Community Impact",
    href: "#community-impact",
    children: [
      { label: "Sexual Health and Reproductive Rights", href: "#sexual-health-reproductive-rights" },
      { label: "Children's Online Safety", href: "#childrens-online-safety" },
      { label: "Leadership and Governance", href: "#leadership-governance" },
      { label: "Climate Change Action", href: "#climate-change-action" },
    ],
  },
  { label: "Contact Us", href: "#contact-us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState<string | null>(null);
  const [desktopSubOpen, setDesktopSubOpen] = useState<string | null>(null);

  return (
    <header className="absolute inset-x-0 top-0 z-50 font-[Manrope,sans-serif]">
      {/* Contact strip */}
      <div className="hidden md:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-end gap-2 px-8 pt-3 text-[11px] tracking-wide text-[#E7EFE3]/90">
          <span>africommdc@gmail.com</span>
          <span className="text-white">|</span>
          <span>+254 723 507 577</span>
          <span className="text-white">|</span>
          <span>+254 714 477 743</span>
          <span className="text-white">|</span>
          <span>Chuka Town, Abdenego House, Room 1</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="#home" className="flex items-center gap-2.5 shrink-0">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18.5" stroke="#F2801E" strokeWidth="1.4" />
            <path
              d="M20 9c-2.6 2-6.5 3-6.5 8 0 3.6 2.4 6.3 6.5 8.7 4.1-2.4 6.5-5.1 6.5-8.7 0-5-3.9-6-6.5-8Z"
              stroke="#F2801E"
              strokeWidth="1.2"
              fill="none"
            />
            <circle cx="16.5" cy="16" r="1.4" fill="#F2801E" />
            <circle cx="23.5" cy="16" r="1.4" fill="#F2801E" />
          </svg>
          <span className="font-[Manrope,sans-serif] text-[10px] font-bold uppercase leading-tight tracking-wide">
            <span className="text-[#F2801E]">African Community</span>
            <br />
            <span className="text-[#F8F4EA]">Development Centre</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setDesktopSubOpen(link.label)}
              onMouseLeave={() => link.children && setDesktopSubOpen(null)}
            >
              <Link
                to={link.href}
                className="flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide text-[#F3F6F1] transition-colors hover:text-[#F2801E]"
                aria-haspopup={link.children ? "true" : undefined}
                aria-expanded={link.children ? desktopSubOpen === link.label : undefined}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform ${
                      desktopSubOpen === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>

              {link.children && (
                <div
                  className={`absolute left-0 top-full w-max min-w-[220px] max-w-xs pt-3 transition-all duration-150 ${
                    desktopSubOpen === link.label
                      ? "pointer-events-auto translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <ul className="bg-[#F2801E] shadow-xl">
                    {link.children.map((child) => (
                      <li
                        key={child.label}
                        className="border-b border-white/25 last:border-none"
                      >
                        <Link
                          to={child.href}
                          className="block px-5 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-[#0B2A1B]/10"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            className="h-9 rounded-[6px] border-[#F8F4EA]/70 bg-transparent px-5 text-[12px] font-bold uppercase tracking-wide text-[#F8F4EA] hover:bg-[#F8F4EA]/10 hover:text-[#F8F4EA]"
          >
            Hire Us
          </Button>
          <Button className="h-9 rounded-[6px] bg-[#F2801E] px-5 text-[12px] font-bold uppercase tracking-wide text-[#0B2A1B] hover:bg-[#FFA552]">
            Donate
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-[#F8F4EA] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="mx-4 rounded-lg bg-[#0B2A1B] px-6 pb-6 shadow-xl lg:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="border-b border-white/5 py-2 last:border-none">
                <div className="flex items-center justify-between">
                  <Link
                    to={link.href}
                    onClick={() => !link.children && setOpen(false)}
                    className="text-sm font-semibold uppercase tracking-wide text-[#F3F6F1] hover:text-[#F2801E]"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <button
                      onClick={() =>
                        setMobileSubOpen((cur) => (cur === link.label ? null : link.label))
                      }
                      aria-label={`Toggle ${link.label} submenu`}
                      className="p-1 text-[#F8F4EA]"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileSubOpen === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {link.children && mobileSubOpen === link.label && (
                  <ul className="mt-2 bg-[#F2801E]">
                    {link.children.map((child) => (
                      <li key={child.label} className="border-b border-white/25 last:border-none">
                        <Link
                          to={child.href}
                          onClick={() => setOpen(false)}
                          className="block px-4 py-3 text-[13px] font-semibold text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-5 flex gap-3">
            <Button
              variant="outline"
              className="flex-1 rounded-[6px] border-[#F8F4EA]/70 bg-transparent text-[#F8F4EA]"
            >
              Hire Us
            </Button>
            <Button className="flex-1 rounded-[6px] bg-[#F2801E] font-bold text-[#0B2A1B] hover:bg-[#FFA552]">
              Donate
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}