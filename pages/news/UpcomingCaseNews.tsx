import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function UpcomingCaseNews() {
  const router = useRouter();
  return (
    <div className="bg-[#f7f7f7] text-[#222] font-sans p-5 sm:p-10">
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-2.5">
      {/* Main Content */}
      <div className="max-w-[1200px] flex-[3] bg-white p-8 rounded-[10px] shadow-md">
        <button
          onClick={() => router.back()}
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
        >
          ← Go Back
        </button>
        <h1 className="text-[30px] mb-2.5">Upcoming Case: State vs. Reynolds - Experts Insights</h1>
        <div className="flex justify-between text-sm text-[#777] mb-4">
          <span>June 15, 2024</span>
          <span>Reported by: Legal Desk</span>
        </div>
        <div className="my-6 rounded-[10px] overflow-hidden">
          <Image
            src="/images/courtroom_reynolds_case.jpg"
            alt="Courtroom sketch related to Reynolds case"
            width={800}
            height={450}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="space-y-4 leading-[1.8]">
          <p><strong>State vs. Reynolds</strong> is a high-stakes trial that may reshape interpretations of state law in future proceedings.</p>
          <p>At the heart of the case is digital surveillance data used by prosecutors. Defense lawyers claim this violates constitutional protections. Legal scholars are watching closely.</p>
          <p><strong>Professor Laura Jenkins</strong> of the University of Capital Law says, “This case will test the boundaries of what’s permissible under current law.”</p>
          <p>Marcus Reynolds was charged with conspiracy and digital fraud. His team argues the evidence was unlawfully obtained through data brokers.</p>
          <p>Groups like the <em>Privacy Justice Alliance</em> submitted amicus briefs defending privacy. State officials insist they followed legal procedures.</p>
          <p>Prestige Law will provide updates on this developing case.</p>
        </div>
        <button
          onClick={() => router.back()}
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
        >
          ← Go Back
        </button>
      </div>

      {/* Sidebar */}
      <aside className="flex-1 w-[200px] flex flex-col gap-2.5">
        <div className="bg-white p-5 rounded-[10px] shadow-md">
          <h3 className="text-[1.5rem] mb-4 pb-2 border-b border-[#eee]">Related Legal News</h3>
          {[
            { img: 'Tenant rights seminar.png', title: 'Smith & Co Hosts Free Tenant Rights Seminar', date: 'May 25, 2024' },
            { img: 'Gig_workers.png', title: 'New Law Grants Protections to Gig Workers', date: 'May 30, 2024' },
            { img: 'governance_talk.jpg', title: 'Global Governance Summit Highlights Compliance Challenges', date: 'May 29, 2024' },
            { img: 'Legal_clinics_reopening.jpeg', title: 'Legal Clinics Reopen Across State', date: 'April 28, 2024' }
          ].map((item, i) => (
            <div key={i} className="flex gap-2 mb-2 items-start">
              <Image
                src={`/images/${item.img}`}
                alt={item.title}
                width={90}
                height={90}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-center text-sm">
                <a href="#" className="text-[#0056b3] font-semibold hover:underline">{item.title}</a>
                <small className="text-xs text-[#777]">{item.date}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-[10px] shadow-md">
          <h3 className="text-[1.5rem] mb-4 pb-2 border-b border-[#eee]">Sponsored Ads</h3>
          {[
            {
              img: 'ad_compliance_tool.jpg',
              title: 'Automate Compliance',
              desc: 'Track your legal obligations with SmartComply™ — used by 10k+ firms worldwide.',
              btn: 'Get a Demo'
            },
            {
              img: 'Law_education_ad.jpeg',
              title: 'Advance Your Legal Career',
              desc: 'Online law programs from accredited institutions. Apply today.',
              btn: 'Get Started'
            }
          ].map((ad, i) => (
            <div key={i} className="bg-[#f7f7f7] border border-[#ddd] rounded-[10px] overflow-hidden mb-2.5 hover:shadow-md transition-shadow">
              <Image
                src={`/images/${ad.img}`}
                alt={ad.title}
                width={400}
                height={250}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h4 className="text-sm text-[#222] mb-1 font-semibold">{ad.title}</h4>
                <p className="text-sm text-[#555] mb-2">{ad.desc}</p>
                <a href="#" className="inline-block bg-[#333] text-white py-1.5 px-3.5 text-sm rounded hover:bg-black">{ad.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
    </div>
  );
}
