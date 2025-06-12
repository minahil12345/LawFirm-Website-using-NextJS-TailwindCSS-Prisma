import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black text-white px-[12px] py-[10px] sm:px-[10px] sm:py-[12px] flex items-center justify-between shadow-[0_2px_10px_rgba(0,0,0,0.4)] h-[120px] font-bold tracking-[1px] text-[1.3rem] sm:text-[2.5rem]">
      <h1 className="whitespace-nowrap">Stonebridge Legal</h1>
      
      <nav
        aria-label="Primary navigation"
        className="flex flex-wrap justify-end gap-[10px] sm:gap-[8px] text-[0.9rem] sm:text-[1.0rem] font-semibold"
      >
        {[
          { href: "#office", label: "Our Office" },
          { href: "#practice-areas", label: "Our Specialization" },
          { href: "#partners", label: "Partners" },
          { href: "#attorneys", label: "Attorneys" },
          { href: "#news", label: "Today's News" },
          { href: "#contact", label: "Contact" },
          { href: "#client-portal", label: "Login" },
        ].map(({ href, label }) => (
          <Link key={href} href={href} passHref legacyBehavior>
            <a className="text-[#ddd] px-[9px] py-[6px] rounded-[2px] hover:bg-[#444] focus:bg-[#444]">
              {label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
