'use client';
import Image from 'next/image';
import React from 'react';

const attorneys = [
  { name: "John Doe", title: "Senior Associate - Corporate Law", desc: "Over 20 years guiding businesses with legal excellence.", image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Mary Smith", title: "Associate - Family Law", desc: "Committed to compassionate support in family law cases.", image: "https://randomuser.me/api/portraits/women/47.jpg" },
  { name: "David Lee", title: "Junior Associate - Criminal Defense", desc: "Passionate advocate protecting clients' rights aggressively.", image: "https://randomuser.me/api/portraits/men/50.jpg" },
  { name: "Susan Clark", title: "Partner - Intellectual Property", desc: "Excellent at protecting your creative innovations.", image: "https://randomuser.me/api/portraits/women/52.jpg" },
  { name: "James Bennett", title: "Senior Counsel - Employment Law", desc: "Excellent at resolving complex workplace disputes.", image: "https://randomuser.me/api/portraits/men/53.jpg" },
  { name: "Linda Garcia", title: "Associate - Immigration Law", desc: "Excellent at navigating intricate immigration processes.", image: "https://randomuser.me/api/portraits/women/54.jpg" },
  { name: "Robert Kim", title: "Counsel - Real Estate Law", desc: "Excellent at managing complex property transactions.", image: "https://randomuser.me/api/portraits/men/55.jpg" },
  { name: "Angela Moore", title: "Junior Associate - Environmental Law", desc: "Excellent at promoting sustainable legal solutions.", image: "https://randomuser.me/api/portraits/women/56.jpg" },
];

const extendedList = [...attorneys, ...attorneys];

export default function Attorneys() {
  return (
    <section id="attorneys" className="max-w-[1080px] mx-auto px-[15px] bg-white">
      <h2 className="text-xl font-bold border-l-4 border-black pl-2 mb-6">Our Attorneys</h2>

      <div className="overflow-hidden relative h-[220px] bg-white">
        <div className="flex gap-[10px] animate-scroll-attorneys w-max ">
          {extendedList.map((a, i) => (
            <article
              key={`${a.name}-${i}`}
              className="flex-none w-[260px] bg-white rounded-[12px] px-5 py-4 shadow-[0_3px_10px_rgba(0,0,0,0.1)] text-center flex items-center gap-[12px] border border-black"
              aria-label={`Attorney ${a.name}`}
            >
              <Image
                src={a.image}
                alt={a.name}
                width={64}
                height={64}
                className="w-[64px] h-[64px] rounded-full object-cover grayscale border-2 border-black"
              />
              <div className="flex flex-col text-left text-[#222] text-[0.9rem] font-medium">
                <h3 className="attorney-name font-bold text-[1.1rem] mb-[4px] text-black">
                  {a.name}
                </h3>
                <p className="attorney-title italic text-[0.85rem] text-gray-600 mb-[5px]">
                  {a.title}
                </p>
                <p className="text-[0.9rem] text-[#444]">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
