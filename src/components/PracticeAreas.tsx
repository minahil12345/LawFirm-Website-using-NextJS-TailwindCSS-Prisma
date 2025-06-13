// src/components/PracticeAreas.tsx
'use client';
import Image from 'next/image';
import React from 'react';

export default function PracticeAreas() {
  const areas = [
    {
      title: "Corporate Law",
      desc: "Assisting businesses with contracts, mergers, governance, compliance, and dispute resolution.",
      href: "/services/CorporateLaw",
    },
    {
      title: "Family Law",
      desc: "Support with divorce, child custody, adoption, and family legal counseling.",
      href: "/services/FamilyLaw",
    },
    {
      title: "Criminal Defense",
      desc: "Robust legal defense strategies preserving your rights through all proceedings.",
      href: "/services/CriminalLaw",
    },
  ];

  return (
    <main className="max-w-[1080px] mx-auto px-[15px]" role="main">
      <section id="practice-areas" aria-labelledby="practice-areas-title">
        <h2
          id="practice-areas-title"
          className="text-xl font-bold border-l-4 border-black pl-2 mb-6"
        >
          Our Specialization
        </h2>
        <div className="flex flex-col lg:flex-row gap-[30px] items-start">
          <div className="flex flex-col gap-[20px] w-full lg:w-[60%]">
            {areas.map((area, index) => (
              <a href={area.href} key={index} className="practice-link">
              <article
                className="group bg-white rounded-[10px] px-[10px] py-[10px] text-[0.9rem] text-[#222] shadow-[0_3px_10px_rgba(0,0,0,0.1)] transition duration-200 hover:bg-black hover:text-white"
                aria-label={area.title}
              >
                <h3 className="text-[1.15rem] font-extrabold mb-[10px] text-black group-hover:text-white transition-colors duration-200">
                  {area.title}
                </h3>
                <p className="group-hover:text-white transition-colors duration-200">
                  {area.desc}
                </p>
              </article>
            </a>
            
            ))}
          </div>
          <div className="w-full lg:w-[40%]">
            <Image
              src="/images/Team_Specialization.jpg"
              width={600}
              height={320}
              alt="Specialization Visual"
              className="w-full h-[320px] object-cover rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] grayscale-[70%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
