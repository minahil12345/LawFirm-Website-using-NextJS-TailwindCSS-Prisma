import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';

import { useRouter } from 'next/router';
export default function ComplianceSeminar() {
     const router = useRouter();
  return (
    <div className="bg-[#f7f7f7] text-[#222] font-sans">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-2.5 p-[40px_20px]">
        
        {/* Main Content */}
        <main className="flex-1 lg:flex-[3] bg-white p-6 lg:p-8 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <button
          onClick={() => router.back()}
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
        >
          ← Go Back
        </button>

          <h1 className="text-[30px] mb-2.5 font-semibold">
            Upcoming Seminar: Navigating Compliance in 2024
          </h1>

          <div className="flex justify-between text-sm text-gray-600 mb-4">
            <span>June 5, 2024</span>
            <span>Reported by: Ms. Natalia Gomez</span>
          </div>

          <div className="my-6 rounded-[10px] overflow-hidden">
            <Image
              src="/images/compliance_seminar.png"
              alt="Law professionals at compliance seminar"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-4 text-base leading-[1.8]">
            <p><strong>Stonebridge Law Firm</strong> invites professionals, business owners, and legal practitioners to attend a <strong>free public seminar</strong> focused on the major regulatory changes expected in 2024.</p>
            <p>The seminar, titled <em>"Navigating Compliance in 2024"</em>, will offer insights into new legal standards affecting corporate governance, environmental regulations, labor law, and data privacy compliance.</p>
            <p>“With evolving regulations and increased scrutiny on ethical practices, companies need clear guidance,” said <strong>Legal Analyst Priya Menon</strong>. “This event aims to prepare organizations for the changes ahead.”</p>
            <p>The event will take place on <strong>June 18, 2024</strong> at the Grand Convention Center, featuring keynote speakers including senior legal officers, compliance experts, and government advisors.</p>
            <p>Attendees can expect interactive Q&A sessions, handouts summarizing new policies, and networking opportunities. Participation is free, but <strong>pre‑registration is required</strong> due to limited seating.</p>
            <p>Interested participants may register at{' '}
              <a href="https://www.prestigelawfirm.com/seminar2024" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                prestigelawfirm.com/seminar2024
              </a>.
            </p>
          </div>

          <button
            onClick={() => router.back()}
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
            >
            ← Go Back
          </button>
        </main>

        {/* Sidebar */}
        <aside className="flex-1 flex flex-col gap-2.5 w-full lg:w-[200px]">
          {/* Related Legal News */}
          <div className="bg-white p-5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <h3 className="text-[1.5rem] mb-4 border-b border-gray-200 pb-2 font-semibold">
              Related Legal News
            </h3>
            {[
              { img: '/images/data_privacy.jpeg', title: 'Data Privacy Law Passed in Senate', date: 'May 20, 2024' },
              { img: '/images/governance_talk.jpg', title: 'Global Governance Summit Highlights Compliance Challenges', date: 'May 29, 2024' },
              { img: '/images/legal_update_briefing.png', title: 'Quarterly Briefing: Legal Updates for Corporations', date: 'June 3, 2024' },
              { img: '/images/sme_webinar.jpg', title: 'SME Webinar: Keeping Up With Regulatory Demands', date: 'April 22, 2024' },
            ].map((item, i) => (
              <div key={i} className="flex gap-2 mb-2.5 items-start">
                <Image
                  src={item.img}
                  width={90}
                  height={90}
                  alt={item.title}
                  className="rounded-md object-cover"
                />
                <div className="flex flex-col justify-center text-sm">
                  <a href="#" className="text-blue-600 font-semibold hover:underline block">
                    {item.title}
                  </a>
                  <small className="text-gray-500 text-xs">{item.date}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Sponsored Ads */}
          <div className="bg-white p-5 rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <h3 className="text-[1.5rem] mb-4 border-b border-gray-200 pb-2 font-semibold">Sponsored Ads</h3>

            {[
              {
                img: '/images/ad_legal_insurance.jpeg',
                heading: 'LegalShield Business Plans',
                text: 'Affordable legal insurance for startups and entrepreneurs. Stay protected in 2024.',
                btn: 'Explore Plans',
              },
              {
                img: '/images/compliance_tool_ad.jpeg',
                heading: 'Compliance Tracker Pro',
                text: 'Automate your 2024 compliance deadlines. Try our 14-day free trial.',
                btn: 'Start Trial',
              },
              
            ].map((ad, idx) => (
                <div
                key={idx}
                className="bg-[#f7f7f7] border border-gray-300 rounded-lg overflow-hidden mb-2.5 hover:shadow-md transition-shadow flex flex-col"
                style={{ height: '300px' }} // You can adjust the total height here
              >
                <div className="flex-[3] relative w-full">
                  <Image
                    src={ad.img}
                    alt={ad.heading}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-[3] p-4 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm text-[#222] font-semibold mb-1">{ad.heading}</h4>
                    <p className="text-sm text-[#555] mb-2">{ad.text}</p>
                  </div>
                  <a
                    href="#"
                    className="inline-block bg-[#333] text-white px-3 py-2 text-xs rounded hover:bg-black self-start"
                  >
                    {ad.btn}
                  </a>
                </div>
              </div>
              
            ))}

          </div>
        </aside>
      </div>
    </div>
  );
}
