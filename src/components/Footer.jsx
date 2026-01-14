import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ABOUT */}
        <div>
          <h4 className="text-lg font-serif mb-4 tracking-wide">
            Elegantize Weddings
          </h4>
          <p className="text-sm leading-7 text-gray-400">
            Elegantize is where weddings become legends. Serving New York and
            New Jersey, we specialize in luxury floral design, ceiling décor,
            and bespoke wedding environments.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-lg font-serif mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {["About", "Services", "Gallery", "Portfolio", "Blog", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-[#c9a96a] cursor-pointer transition"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 className="text-lg font-serif mb-4 tracking-wide">
            Policies
          </h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookies Policy",
              "Website Sitemap",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-[#c9a96a] cursor-pointer transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-serif mb-4 tracking-wide">
            Get in Touch
          </h4>

          {/* PARTNER LOGOS */}
          <div className="flex gap-4 mb-6">
            <Image src="/wedding/mahndi.png" alt="Maharani" width={60} height={60} />
            <Image src="/wedding/platinum.png" alt="Platinum" width={60} height={60} />
            <Image src="/wedding/logo.jpg" alt="Partner" width={60} height={60} />
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-4 text-sm text-gray-300">
            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined">call</span>
              +1 (347) 686-4562
            </p>

            <p className="flex items-center gap-3">
              <span className="material-symbols-outlined">mail</span>
              info@elegantize.com
            </p>

            <p className="flex items-start gap-3">
              <span className="material-symbols-outlined">location_on</span>
              10 Millers Lane, New Hyde Park, NY 11040
            </p>
          </div>

          {/* SOCIAL ICONS (SVG FROM public/wedding) */}
          <div className="flex gap-3 pt-6">
            {[
              { name: "Facebook", icon: "/facebook.svg", link: "https://facebook.com" },
              { name: "Instagram", icon: "/instagram.svg", link: "https://instagram.com" },
              { name: "YouTube", icon: "/youtube.svg", link: "https://youtube.com" },
              { name: "Google", icon: "/google.svg", link: "https://google.com" },
              { name: "Website", icon: "/globe.svg", link: "https://elegantize.com" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gray-400 rounded-full flex items-center justify-center hover:bg-[#c9a96a] hover:border-[#c9a96a] transition"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={16}
                  height={16}
                  className="invert"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Elegantize Weddings. All rights reserved.
      </div>
    </footer>
  );
}
