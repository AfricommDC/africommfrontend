import { FaFacebook } from "react-icons/fa";




function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.47 14.38c-.29-.15-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.15-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.6-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.5-.65-.5-.17-.01-.36-.01-.56-.01s-.51.07-.78.36c-.26.29-1.02 1-1.02 2.43s1.04 2.82 1.19 3.01c.15.19 2.05 3.13 4.96 4.39.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34z" />
      <path d="M12.02 2C6.5 2 2.02 6.48 2.02 12c0 1.85.5 3.58 1.36 5.07L2 22l5.08-1.33A9.96 9.96 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.2a8.17 8.17 0 0 1-4.17-1.14l-.3-.18-3.02.79.81-2.95-.2-.31A8.18 8.18 0 1 1 20.2 12a8.19 8.19 0 0 1-8.18 8.2z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer data                                                        */
/* ------------------------------------------------------------------ */

const QUICK_LINKS = ["About Us", "Our Programs", "Our Services", "Our Model"];
const SUPPORT_LINKS = ["Donate", "Work with Us", "Volunteer", "Partner in a program"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#009933] px-6 py-14 text-white sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        {/* Brand block */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <img 
            src="/src/assets/Africomm/africomlogo.jpg" 
            alt="Africomm Logo" 
            className="h-32 w-32 object-contain rounded-lg sm:h-36 sm:w-36"
          />
          <p className="mt-4 font-[Manrope,sans-serif] text-lg font-extrabold tracking-wide">
            AFRICOMM DEVELOPMENT CENTRE
          </p>
          <p className="text-sm text-white/85">Inspirational Transformation</p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left lg:flex lg:flex-1 lg:justify-end lg:gap-16">
          {/* Contact us */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-[Manrope,sans-serif] text-sm font-bold tracking-wide">
              CONTACT US
            </h3>
            <div className="mt-4 space-y-1 text-sm leading-relaxed text-white/90">
              <p>Email: africommdc@gmail.com</p>
              <p>Mobile: +254 723 507 577</p>
              <p>
                Location: Chuka Town, Abdenego House, Room 1, next to Chuka
                Boys High School, along Kaanwa-Kajuki Road.
              </p>
            </div>

            <p className="mt-6 flex items-center gap-3 text-sm font-medium">
              Connect with Us:
              <span className="flex items-center gap-2">
                <a
                  href="https://www.facebook.com/share/1EuM4yuqC8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#009933] transition-transform hover:scale-105"
                >
                  <FaFacebook className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/254723507577"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#009933] transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                </a>
              </span>
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-[Manrope,sans-serif] text-sm font-bold tracking-wide">
              QUICK LINKS
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {QUICK_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support us */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-[Manrope,sans-serif] text-sm font-bold tracking-wide">
              SUPPORT US
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              {SUPPORT_LINKS.map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider + bottom bar */}
      <div className="mx-auto mt-12 max-w-[1400px] border-t border-white/30 pt-6">
        <div className="flex flex-col items-center gap-3 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Africomm Development Centre</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Accessibility Statement
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
