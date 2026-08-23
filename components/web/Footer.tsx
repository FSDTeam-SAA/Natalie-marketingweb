import { Camera, Mail, Music2 } from "lucide-react";

const footerLinks = [
  {
    title: "Company",
    links: ["About Elysia", "How It Works", "Companions", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Contact", "Privacy Policy", "Terms of Service"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const socials = [
  { label: "Instagram", icon: Camera },
  { label: "TikTok", icon: Music2 },
  { label: "Email", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-[#111116] text-white">
      <div className="mx-auto w-full max-w-[1640px] px-4 py-12 sm:px-8 sm:py-16 lg:px-[7.2vw]">
        <div className="grid gap-10 md:grid-cols-[1.2fr_2.8fr] lg:gap-16">
          <div>
            <a
              href="/"
              className="font-playfair text-[34px] font-semibold italic leading-none text-white"
            >
              Elysia<span className="not-italic text-[#ff3d6f]">♥</span>
            </a>
            <p className="font-inter mt-6 max-w-[250px] text-sm leading-7 text-white/58">
              Meaningful connections. Real conversations. Designed for deeper
              moments.
            </p>

            <div className="mt-7 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex size-11 items-center justify-center rounded-full border border-[#C2384F] text-white transition hover:bg-[#C2384F]"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-9 sm:grid-cols-3">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="font-inter text-sm font-medium text-[#C2384F]">
                  {group.title}
                </h3>
                <ul className="font-inter mt-6 space-y-3 text-sm text-white/58">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition hover:text-[#ff5c8f]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-8 text-center">
          <p className="font-inter text-xs text-white/45">
            © 2026 Meet Elysia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
