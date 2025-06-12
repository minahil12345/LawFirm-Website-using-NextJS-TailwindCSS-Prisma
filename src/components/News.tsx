// src/components/News.tsx
'use client'; // if you're using Next.js App Router (for button interactivity)

import { useState } from "react";

export default function News() {
  const allNews = [
    {
      title: "Stonebridge Legal Law Firm Launches Pro Bono Community Initiative",
      date: "June 10, 2024",
      desc: "Our firm is proud to support the local community by providing free legal consultations for low-income families.",
      link: "/news/CommunityNews",
    },
    {
      title: "Upcoming Seminar: Navigating Compliance in 2024",
      date: "June 5, 2024",
      desc: "Join us for a free seminar covering new regulations affecting corporate governance and compliance.",
      link: "/news/ComplianceSeminar",
    },
    {
      title: "Landmark Victory in High-Profile Civil Rights Case",
      date: "June 1, 2024",
      desc: "Prestige Law Firm successfully defended a pivotal civil rights case, earning national recognition for the outcome.",
      link: "/news/RightsSuccess",
    },
    {
      title: "Upcoming Case: State vs. Reynolds - Legal Experts Weigh In",
      date: "June 15, 2024",
      desc: "Legal circles are abuzz over the high-stakes criminal trial expected to reshape interpretations of state law.",
      link: "/news/UpcomingCaseNews",
    },
    {
      title: "New Environmental Law Passed in State Legislature",
      date: "June 12, 2024",
      desc: "The newly passed act introduces stricter compliance norms for commercial waste disposal, starting July 2024.",
      link: "/news/NewLaw",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const visibleNews = expanded ? allNews : allNews.slice(0, 3);

  return (
    <section id="news" aria-labelledby="news-title" className="max-w-[1080px] mx-auto">
      <h2 id="news-title" className="text-lg font-bold border-l-4 border-black pl-2 mb-4">Today's News</h2>

      <div className="flex flex-col gap-[14px]" aria-live="polite" aria-relevant="additions">
        {visibleNews.map((item, i) => (
          <article key={i} className="bg-[#FAFAFA] border border-[#ccc] border-[1.5px] rounded-md p-[10px_14px] shadow-[0_3px_10px_rgba(0,0,0,0.1)]" aria-label={item.title}>
            <h3 className="text-base font-bold text-[#111] mb-[6px]">
              <a href={item.link} className="hover:underline">{item.title}</a>
            </h3>
            <time className="block text-xs text-[#666] mb-1">{item.date}</time>
            <p className="text-[0.87rem] text-[#333] mb-[8px]">{item.desc}</p>
          </article>
        ))}
      </div>

      <div className="text-center mt-5">
        {!expanded ? (
          <button
            onClick={() => setExpanded(true)}
            className="bg-black text-white px-10 py-[10px] text-[0.9rem] rounded cursor-pointer transition-colors duration-300 hover:bg-[#333]"
          >
            Read More
          </button>
        ) : (
          <button
            onClick={() => setExpanded(false)}
            className="bg-black text-white px-10 py-[10px] text-[0.9rem] rounded cursor-pointer transition-colors duration-300 hover:bg-[#333]"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}
