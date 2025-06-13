import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CorporateLaw () {
  const router = useRouter();
  
  return (
    <div className="bg-gray-100 text-black p-5 leading-7 font-[Segoe UI]">
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-md">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/corporate-law.png"
          alt="Corporate Law"
          width={1920}
          height={450}
          className="w-full max-h-[450px] object-cover grayscale rounded-md"
        />
        <h1 className="absolute bottom-1 left-5 text-white text-[2rem] font-extrabold tracking-wide shadow-md bg-transparent px-4 py-2 rounded-md">
          Corporate Law Consulting & Business Transactions
        </h1>
      </div>

      <div className="mt-5">
        As one of the leading <strong>corporate legal advisors</strong>, we specialize in providing end-to-end legal
        solutions tailored to the evolving needs of modern businesses. Whether you&apos;re a startup structuring your first
        investment or a multinational planning a cross-border merger, our team of seasoned business lawyers delivers
        practical and proactive counsel. We simplify complexity and protect your interests at every stage of business
        growth.
      </div>

      <div className="flex flex-wrap gap-5 mt-2">
        <div className="flex-1 bg-white mt-1 p-5 rounded-md shadow-md min-w-[300px]">
          <h2 className="text-black font-bold text-xl mb-2">Our Corporate Legal Services Include:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Company Formation & Legal Structuring</li>
            <li>Mergers, Acquisitions & Joint Ventures</li>
            <li>Private Equity & Venture Capital Transactions</li>
            <li>Regulatory Compliance & Risk Management</li>
            <li>Corporate Governance and Secretarial Services</li>
            <li>Contract Drafting, Review & Negotiation</li>
            <li>Intellectual Property Protection (IPRs)</li>
            <li>Litigation & Dispute Resolution</li>
          </ul>
        </div>

        <div className="flex-1 bg-white mt-1 p-5 rounded-md shadow-md min-w-[300px]">
          <h2 className="text-black font-bold text-xl mb-2">Why Choose Us?</h2>
          <p className="text-black">
            ✅ Over <strong>10+ years of experience</strong> advising companies from Silicon Valley startups to Fortune
            500s.
            <br /> ✅ Handled <strong>$2.5B+ in corporate deals</strong> globally.
            <br /> ✅ Industry-specific legal insights across tech, finance, manufacturing, and healthcare.
            <br /> ✅ <strong>100% compliance track record</strong> in local and international regulatory frameworks.
            <br /> ✅ Transparent pricing and timely delivery. No hidden surprises.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-6 mb-2">Success Stories</h2>

      {[
        {
          title: 'Case Study 1: $500M Merger of Nayatel Corp. & GlobalTech',
          img: '/images/merger-case.jpg',
          text:
            'In one of the most transformative deals of the decade, our legal team led a $500M cross-border merger between industry leaders Nayatel Corp. and GlobalTech Ltd. Our responsibilities included orchestrating comprehensive due diligence, drafting intricate merger documents, navigating multi-jurisdictional compliance regulations, and managing shareholder agreements. As a result, the newly combined entity saw a 27% increase in annual revenue and expanded into three new global markets.',
        },
        {
          title: 'Case Study 2: NovaLex Inc. Regulatory Turnaround',
          img: '/images/compliance-case.jpg',
          text:
            'ABC Inc., a fast-scaling fintech startup, came to us facing immediate regulatory sanctions. Our legal experts swiftly conducted a full compliance audit and policy restructuring. Within 90 days, ABC regained its license, achieved full regulatory compliance, and avoided over $3M in fines.',
        },
        {
          title: 'Case Study 3: Strategic Restructuring of a Multi-National Subsidiary',
          img: '/images/restructing_taxes.jpg',
          text:
            'A technology corporation sought our legal expertise to restructure one of its underperforming South Asian subsidiaries in order to maintain operational continuity while minimizing regulatory and tax liabilities. After detailed analysis of the corporate structure, advised on a phased dissolution and merger plan, ensured compliance with cross-border M&A laws, and coordinated with local and international counsel to draft all necessary restructuring documentation. The restructuring was executed within 90 days, saving the client an estimated $2.3M in annual overhead.',
        },
      ].map((caseItem, index) => (
        <div
          key={index}
          className={`flex items-center justify-between gap-8 bg-white text-black p-5 rounded-md mb-7 shadow-lg flex-wrap ${
            index % 2 === 1 ? 'flex-row-reverse' : ''
          }`}
        >
          <Image
            src={caseItem.img}
            alt={caseItem.title}
            width={600}
            height={250}
            className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-lg grayscale-[90%]"
          />
          <div className="flex-1 max-w-[55%]">
            <h2 className="text-lg font-semibold mt-0">{caseItem.title}</h2>
            <p className="mt-2 leading-relaxed">{caseItem.text}</p>
          </div>
        </div>
      ))}

      <div className="text-center bg-transparent text-black p-5 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-1">Ready to Protect and Grow Your Business?</h2>
        <p className="mb-2">Let our experienced corporate attorneys guide your next big move.</p>
        <p>
          <Link href="/#contact" className="text-blue-600 font-semibold underline">
            Schedule a Free Consultation →
          </Link>
        </p>
      </div>
    </div>
  );
};