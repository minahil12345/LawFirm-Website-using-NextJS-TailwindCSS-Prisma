// src/components/Partners.tsx
'use client';
export default function Partners() {
  const partners = [
    {
      name: "Jessica Thornton",
      title: "Managing Partner – Corporate Law Strategist & M&A Expert (20+ yrs)",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Michael Grant",
      title: "Senior Partner – Family Law Authority & Custody Litigation Specialist (18 yrs)",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      name: "Ayesha Rahman",
      title: "Equity Partner – Global Trade Compliance Advisor & Cross-Border Legal Consultant (15 yrs)",
      image: "https://randomuser.me/api/portraits/women/91.jpg",
    },
    {
      name: "Daniel Osei",
      title: "Lead Partner – Arbitration Veteran & Complex Dispute Resolution Strategist (15 yrs)",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sophia Almeida",
      title: "Non-Equity Partner – Consulting & Business Transactions (12 yrs)",
      image: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      name: "Omar Siddiqui",
      title: "Equity Partner – Litigation Strategy & Risk Advisory (12 yrs)",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
    },
  ];

  return (
    <section
      id="partners"
      aria-labelledby="partners-title"
      className="max-w-[1080px] mx-auto px-[15px]"
    >
      <h2
        id="partners-title"
        className="text-xl font-bold border-l-4 border-black pl-3 mb-8"
      >
        Our Partners
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-18 pt-0 pb-0 pl-18 pr-18">
        {partners.map((partner, index) => (
          <article
            key={index}
            className="bg-white border border-black rounded-2xl p-5 shadow-[0_3px_10px_rgba(0,0,0,0.1)] flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:bg-black hover:text-white"
            aria-label={`Partner: ${partner.name}`}
          >
            <img
              src={partner.image}
              alt={partner.name}
              className="w-[100px] h-[100px] rounded-full object-cover mb-4 border-2 border-black grayscale"
            />
            <h3 className="text-lg font-semibold">{partner.name}</h3>
            <p className="text-sm mt-2">{partner.title}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
