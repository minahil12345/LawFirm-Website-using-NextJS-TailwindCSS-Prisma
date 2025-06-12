import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const RightsSuccess = () => {
    const router = useRouter();
  return (
    <div className="bg-[#f7f7f7] text-[#222] font-sans p-5 sm:p-10">
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-2.5">
      {/* Main Content */}
      <div className="flex-[3] bg-white p-8 rounded-xl shadow-md">
        <button
            onClick={() => router.back()}
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
            >
            ← Go Back
        </button>

        <h1 className="text-[30px] mb-2 font-bold">Landmark Victory in High-Profile Civil Rights Case</h1>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>June 1, 2024</span>
          <span>Reported by: Alicia Brown</span>
        </div>
        <div className="my-6 rounded-[10px] overflow-hidden">
            <Image
                src="/images/civil_rights_victory.jpg"
                alt="Courtroom celebration after civil rights win"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
            />
        </div>
        

        <p className="leading-[1.8] mb-4">
          <strong>Prestige Law Firm</strong> has achieved a groundbreaking legal victory in a nationally watched civil rights lawsuit, setting a powerful precedent for future litigation surrounding equal treatment and constitutional rights.
        </p>
        <p className="leading-[1.8] mb-4">
          The case involved a class-action lawsuit filed on behalf of multiple individuals alleging systemic discrimination by a major city agency. After a lengthy trial and intense public scrutiny, the court ruled in favor of the plaintiffs—represented by Prestige’s top litigation team.
        </p>
        <p className="leading-[1.8] mb-4">
          “This isn’t just a win for our clients,” said <strong>Lead Attorney David Lin</strong>, “it’s a win for civil liberties across the country. We hope this decision sends a message that no institution is above the law when it comes to human rights.”
        </p>
        <p className="leading-[1.8] mb-4">
          The case drew national media attention, with civil rights advocates praising the firm’s handling of complex legal strategy, witness protection, and community engagement during proceedings. The ruling mandates sweeping policy reforms within the agency and financial compensation for affected parties.
        </p>
        <p className="leading-[1.8] mb-4">
          The firm’s commitment to justice has earned it commendations from several advocacy groups and legal institutions. Analysts believe this decision will be cited in future civil rights claims involving systemic bias and institutional reform.
        </p>
        <p className="leading-[1.8] mb-4">
          “We’re proud to have played a part in making the justice system work for everyone,” added Lin. “But the work continues—we will keep fighting for equity, accountability, and dignity for all citizens.”
        </p>

        <button
            onClick={() => router.back()}
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
            >
            ← Go Back
        </button>
      </div>

      {/* Sidebar */}
      <aside className="flex-1 w-[200px] flex flex-col gap-3 mt-10 lg:mt-0">
        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Related Legal News</h3>
          {[
            { img: 'landmark_data_privacy.jpeg', title: 'Landmark Data Privacy Law Passed by Senate', date: 'May 25, 2024' },
            { img: 'environmental_case.jpg', title: 'Environmental Group Wins Major Legal Battle', date: 'May 20, 2024' },
            { img: 'police_reform.jpg', title: 'Court Orders Sweeping Police Reform After Misconduct Case', date: 'May 15, 2024' },
            { img: 'immigration_win.jpg', title: 'Immigrant Rights Case Ends in Favorable Ruling', date: 'April 22, 2024' },
          ].map(({ img, title, date }, i) => (
            <div key={i} className="flex gap-2 mb-2 items-start">
              <img src={`/images/${img}`} alt={title} className="w-[90px] h-[90px] object-cover rounded-md" />
              <div className="text-sm">
                <a href="#" className="text-blue-700 font-semibold hover:underline block">{title}</a>
                <small className="text-gray-500 text-xs">{date}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-xl shadow-md">
          <h3 className="text-xl font-bold border-b border-gray-200 pb-2 mb-4">Sponsored Ads</h3>
          {[
            {
              img: 'legal_software_ad.jpg',
              title: 'Streamline Your Legal Practice',
              desc: 'Discover the #1 software solution for modern law firms. Stay organized, compliant, and connected.',
              btn: 'Try It Free',
            },
            {
              img: 'law_school_ad.jpg',
              title: 'Advance Your Legal Career',
              desc: 'Enroll in a top-ranked online law program and gain the credentials to lead in justice reform.',
              btn: 'Apply Now',
            },
          ].map(({ img, title, desc, btn }, i) => (
            <div key={i} className="bg-[#f7f7f7] border border-gray-300 rounded-xl overflow-hidden mb-3 hover:shadow-md transition-shadow duration-300">
              <img src={`/images/${img}`} alt={title} className="w-full h-auto" />
              <div className="p-4">
                <h4 className="text-sm font-semibold text-black mb-1">{title}</h4>
                <p className="text-sm text-gray-600 mb-2">{desc}</p>
                <a href="#" className="inline-block bg-[#333] text-white text-sm px-4 py-2 rounded hover:bg-black">{btn}</a>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
    </div>
  );
};

export default RightsSuccess;
