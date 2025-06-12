import '../../src/app/globals.css';
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';


export default function ContractsReview() {
  const router = useRouter();

  return (
    <div className="bg-[#f4f4f4] text-black p-5 leading-relaxed font-[Segoe UI]">
      {/* Hero Section */}
      <div className="relative w-full max-h-[450px] overflow-hidden rounded">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/contracts2.jpg"
          alt="Contracts"
          layout="responsive"
          width={1600}
          height={450}
          className="object-contain grayscale rounded"
        />
        <h1 className="text-[2rem] font-extrabold tracking-wide drop-shadow-md absolute bottom-[5px] left-[20px] p-[10px_15px] text-black">
          Contract Drafting & Legal Review
        </h1>
      </div>

      {/* Description */}
      <div className="my-5 text-black">
        Our expert contract lawyers help draft, review, and negotiate commercial agreements that safeguard your rights
        and reduce risk exposure. From NDAs and partnership agreements to vendor contracts and SaaS terms, we offer
        end-to-end legal clarity.
      </div>

      {/* Services and Why Us Section */}
      <div className="flex flex-wrap gap-5 mt-0">
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded shadow text-black">
          <h2 className="text-xl font-semibold mb-3">Our Services Include:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Drafting tailored business contracts</li>
            <li>Reviewing and revising third-party agreements</li>
            <li>Negotiating contract terms with vendors & clients</li>
            <li>Ensuring regulatory compliance in clauses</li>
            <li>Risk assessment and liability mitigation</li>
            <li>IP, Confidentiality & Licensing Agreements</li>
          </ul>
        </div>
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded shadow text-black">
          <h2 className="text-xl font-semibold mb-3">Why Choose Us?</h2>
          <p>
            ✅ 1,000+ contracts drafted and reviewed across 12+ industries. <br />
            ✅ Proven legal insight for local & global regulations. <br />
            ✅ Quick turnaround without compromising legal quality. <br />
            ✅ Transparent pricing and customized service. <br />
            ✅ Strong negotiation support and legal backup.
          </p>
        </div>
      </div>

      {/* Case Study */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-black">Case Highlights</h2>
      <div className="flex flex-wrap items-center justify-between gap-8 bg-white text-black p-5 rounded shadow mb-8">
        <div className="flex-1 min-w-[250px] max-w-[40%]">
          <Image
            src="/images/contract-case1.jpg"
            alt="Contract Deal"
            width={800}
            height={250}
            className="object-cover grayscale rounded w-full max-h-[250px]"
          />
        </div>
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-lg font-semibold">Case: Multinational SaaS Licensing Agreement</h3>
          <p className="mt-2">
            Our team drafted a robust licensing agreement for a European SaaS firm expanding into Asia. The contract
            ensured IP protection, data compliance (GDPR/PDPA), and dispute resolution coverage across jurisdictions.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-transparent text-black p-5 rounded">
        <h2 className="text-2xl font-semibold mb-2">Need a Legally Strong Contract?</h2>
        <p>Let our expert team ensure your next deal is watertight and enforceable.</p>
        <p className="mt-2">
          <Link href="/#contact" className="text-blue-600 font-semibold underline">
            Request a Contract Review →
          </Link>
        </p>
      </div>
    </div>
  );
}
