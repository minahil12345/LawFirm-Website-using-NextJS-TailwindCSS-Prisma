import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Corporate Law Consulting & Transactions",
      href: "/services/CorporateLaw",
    },
    {
      title: "Family Law & Mediation",
      href: "/services/FamilyLaw",
    },
    {
      title: "Criminal Defense Representation",
      href: "/services/CriminalLaw",
    },
    {
      title: "Intellectual Property Protection",
      href: "/services/IntellectualProperty",
    },
    {
      title: "Estate Planning & Wills",
      href: "/services/PlanningWills",
    },
    {
      title: "Real Estate Law",
      href: "/services/RealEstateLaw",
    },
    {
      title: "Contract Drafting & Review",
      href: "/services/ContractsReview",
    },
    {
      title: "Compliance & Regulatory Advice",
      href: "/services/ComplianceAdvice"
    },
  ];

  return (
    <main className="max-w-[1080px] mx-auto px-[15px]" role="main">
      <section id="services" aria-labelledby="services-title">
        <h2 className="text-lg font-bold border-l-4 border-black pl-2 mb-4" id="services-title">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-400 rounded-lg p-4 relative shadow-[0_3px_10px_rgba(0,0,0,0.1)] hover:bg-white hover:text-grey transition"
            >
              <h3 className="font-semibold text-black mb-2">{service.title}</h3>
              <Link
                href={service.href}
                className="absolute bottom-2 right-2 text-xs font-semibold text-black hover:text-blue-500"
              >
                Read More &gt;&gt;
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
