// app/services/ComplianceAdvice/page.tsx
 import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function CommunityNews() {
     const router = useRouter();
  return (
    <div className="bg-[#f7f7f7] text-[#222] font-sans p-5 sm:p-10">
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-2.5">
      {/* Main Content */}
      <div className="flex-1 lg:flex-[3] bg-white p-6 rounded-[10px] shadow-md">
        <button
          onClick={() => router.back()}
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
        >
          ← Go Back
        </button>
        <h1 className="text-[30px] mb-2 py-2">
          Stonebridge Law Firm Launches Free Legal Help for Underserved Communities
        </h1>
        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>June 10, 2024</span>
          <span>Reported by: Mr. Yan Seng Lee</span>
        </div>
        <div className="my-6 rounded-[10px] overflow-hidden">
          <Image
            src="/images/help_news.jpg"
            alt="Lawyer offering help to elderly community member"
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
        <div className="space-y-4 text-base leading-7">
          <p><strong>Stonebridge Law Firm</strong> has announced the launch of a new community outreach initiative aimed at providing <strong>free legal consultations</strong> to low-income and marginalized families throughout the city.</p>
          <p>The program, titled <em>Justice for All</em>, will be staffed by a rotating team of experienced lawyers and legal aides who will volunteer their time weekly. The services will focus on civil issues like landlord-tenant disputes, labor rights, immigration assistance, and family law guidance.</p>
          <p>“Legal representation should not depend on how much money you make,” said <strong>Managing Partner Jane Walters</strong>. “With rising costs and limited access to public defenders for civil matters, many people are left vulnerable. Our team felt compelled to act.”</p>
          <p>The consultations will take place in designated community centers, libraries, and mobile vans equipped with secure legal workstations. The firm has also partnered with several non-profit organizations to host legal literacy workshops and distribute educational material.</p>
          <p><strong>Initial results have already been encouraging</strong>. Within the first two weeks, over 120 individuals received free legal advice. Clients have expressed gratitude for the clarity, support, and guidance provided by the lawyers during stressful legal challenges.</p>
          <p>This is part of Prestige Law’s wider mission to reinvest in the communities it serves, especially as legal complexities grow in the digital age. The firm is also exploring digital consultations via secure video platforms for rural clients in the next phase of the initiative.</p>
          <p>“It’s not about charity,” added Walters. “It’s about building equity and ensuring every citizen has a voice in the justice system.”</p>
        </div>
        <div className="mt-10">
        <button
          onClick={() => router.back()}
          className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
        >
          ← Go Back
        </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="flex-1 flex flex-col gap-2.5 w-[200px]">
        <div className="bg-white p-5 rounded-[10px] shadow-md">
          <h3 className="text-xl mb-4 border-b border-gray-200 pb-2">Related Legal News</h3>
          {[
            { src: '/images/Tenant rights seminar.png', title: 'Smith & Co Hosts Free Tenant Rights Seminar', date: 'May 25, 2024' },
            { src: '/images/Gig_workers.png', title: 'New Law Grants Protections to Gig Workers', date: 'May 30, 2024' },
            { src: '/images/class_action.jpeg', title: 'Non-Profit Coalition Files Class Action Lawsuit', date: 'June 1, 2024' },
            { src: '/images/Legal_clinics_reopening.jpeg', title: 'Legal Clinics Reopen Across State', date: 'April 28, 2024' },
          ].map((item, index) => (
            <div key={index} className="flex gap-2 mb-2.5 items-start">
              <Image
                src={item.src}
                alt={item.title}
                width={90}
                height={90}
                className="rounded-[6px] object-cover"
              />
              <div className="flex flex-col justify-center text-sm">
                <a href="#" className="text-[#0056b3] font-semibold hover:underline">{item.title}</a>
                <small className="text-gray-500 text-xs">{item.date}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-5 rounded-[10px] shadow-md">
          <h3 className="text-xl mb-4 border-b border-gray-200 pb-2">Sponsored Ads</h3>
          <div className="bg-[#f7f7f7] border border-gray-300 rounded-[10px] overflow-hidden mb-2.5 hover:shadow-md transition-shadow">
            <Image src="/images/Legal_services_ad.jpeg" alt="Ad" width={300} height={200} className="w-full h-auto" />
            <div className="p-4">
              <h4 className="text-sm text-[#222] font-semibold mb-1">Top-Rated Legal Services Online</h4>
              <p className="text-sm text-[#555] mb-2">Connect with a legal expert 24/7. First consultation is free.</p>
              <a href="#" className="inline-block bg-[#333] text-white px-3 py-2 text-xs rounded hover:bg-black">Learn More</a>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border border-gray-300 rounded-[10px] overflow-hidden mb-2.5 hover:shadow-md transition-shadow">
            <Image src="/images/Top_Law_Books.jpeg" alt="Ad" width={300} height={200} className="w-full h-auto" />
            <div className="p-4">
              <h4 className="text-sm text-[#222] font-semibold mb-1">Top Law Books 2024</h4>
              <p className="text-sm text-[#555] mb-2">Essential reading for legal professionals. Discounts available!</p>
              <a href="#" className="inline-block bg-[#333] text-white px-3 py-2 text-xs rounded hover:bg-black">Shop Now</a>
            </div>
          </div>
          <div className="bg-[#f7f7f7] border border-gray-300 rounded-[10px] overflow-hidden mb-2.5 hover:shadow-md transition-shadow">
            <Image src="/images/Case_Management.jpeg" alt="Ad" width={300} height={200} className="w-full h-auto" />
            <div className="p-4">
              <h4 className="text-sm text-[#222] font-semibold mb-1">Manage Cases On-the-Go</h4>
              <p className="text-sm text-[#555] mb-2">Try the #1 app for scheduling, case tracking, and client notes. Free trial available!</p>
              <a href="#" className="inline-block bg-[#333] text-white px-3 py-2 text-xs rounded hover:bg-black">Start Free Trial</a>
            </div>
          </div>
          
          
        </div>
      </aside>
    </div>
  </div>
  );
}