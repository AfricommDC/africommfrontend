import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type QuickLink = {
  label: string;
  href: string;
};

type LinkSection = {
  title: string;
  links: QuickLink[];
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const QUICK_LINKS: LinkSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Our Model", href: "/our-model" },
        { label: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Training", href: "/training" },
        { label: "Consultancy", href: "/consultancy" },
      ],
    },
    {
      title: "Community Impact",
      links: [
        { label: "Sexual Health & Reproductive Rights", href: "/sexual-health-reproductive-rights" },
        { label: "Children's Online Safety", href: "/childrens-online-safety" },
        { label: "Leadership & Governance", href: "/leadership-governance" },
        { label: "Climate Change Action", href: "/climate-change-action" },
      ],
    },
  ];

  const SOCIAL_LINKS = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const CONTACT_INFO = [
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: Mail,
      text: "info@africomm.org",
      href: "mailto:info@africomm.org",
    },
    {
      icon: MapPin,
      text: "123 Main Street, Nairobi, Kenya",
      href: "#",
    },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const LEGAL_LINKS = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Top Section: Company Info & Links */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-2xl font-bold text-white">Africomm</h3>
              <p className="mt-2 text-sm text-gray-400">
                Empowering African communities through digital innovation and sustainable development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {CONTACT_INFO.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.text}
                    href={info.href}
                    className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon size={18} />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center rounded-full bg-gray-800 p-2 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Columns 2-4: Link Sections */}
          {QUICK_LINKS.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold uppercase text-white">
                {section.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 border-t border-gray-800" />

        {/* Newsletter Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-lg font-semibold text-white">
              Stay Updated
            </h4>
            <p className="mt-2 text-sm text-gray-400">
              Subscribe to our newsletter for the latest news and updates.
            </p>
          </div>

          <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-lg bg-gray-800 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {subscribed ? "✓ Subscribed" : "Subscribe"}
            </Button>
          </form>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-800" />

        {/* Bottom: Copyright & Legal Links */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Africomm. All rights reserved.
          </p>
          <div className="flex gap-6">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}