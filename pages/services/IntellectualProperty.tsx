import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function IntellectualProperty() {
  const router = useRouter();
  
  return (
    <div className="p-5 bg-[#f4f4f4] text-black leading-7 font-sans">
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-md">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/ip-law.jpg"
          alt="Intellectual Property Law"
          width={1920}
          height={450}
          className="w-full max-h-[450px] object-cover grayscale rounded-md"
        />
        <h1 className="absolute bottom-1 left-[750px] p-3 text-[2rem] font-black tracking-wide text-black bg-transparent rounded-md shadow-md">
          Legal Intellectual Property Protection
        </h1>
      </div>

      <div className="mt-4">
        In today’s innovation-driven world, your ideas are your greatest assets. Whether you're an inventor, artist,
        startup, or established company, we provide <strong>comprehensive intellectual property law services</strong>
        to secure your creations, enforce your rights, and litigate aggressively when infringement occurs. Our team
        combines technical acumen with legal mastery to deliver results that protect your brand and future.
      </div>

      <div className="flex flex-wrap gap-5 mt-2">
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-md shadow-md">
          <h2 className="text-black mb-2">Our Intellectual Property Services Include:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Patent Filing, Strategy & Infringement Defense</li>
            <li>Trademark Registration, Monitoring & Opposition</li>
            <li>Copyright Protection & Enforcement</li>
            <li>Trade Secret Safeguarding & Misappropriation Claims</li>
            <li>IP Licensing, Transfers, and Due Diligence</li>
            <li>IP Litigation: Infringement, Defense & Damages</li>
            <li>Cease & Desist Enforcement and Negotiation</li>
            <li>Domain Name Disputes (UDRP/ICANN)</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-md shadow-md">
          <h2 className="text-black mb-2">Why Choose Us?</h2>
          <p>
            ✅ <strong>Decades of combined IP experience</strong> with tech, media & creative sectors.<br />
            ✅ <strong>USPTO Registered Patent Attorneys</strong> and skilled trial lawyers.<br />
            ✅ We've helped <strong>hundreds of clients secure & enforce IP rights globally</strong>.<br />
            ✅ Successfully handled <strong>cross-border infringement cases</strong> and IP disputes.<br />
            ✅ Transparent pricing and fast turnaround on filings & actions.
          </p>
        </div>
      </div>

      <h2 className="mt-4">Featured Intellectual Property Case Wins</h2>

      <div className="flex flex-wrap items-center gap-8 bg-white text-black p-5 rounded-md my-4 shadow-md">
        <Image
          src="/images/patent-victory.jpg"
          alt="Patent Infringement Defense"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-contain rounded-lg grayscale-[90%]"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Case Study 1: $5M Patent Infringement Claim Defeated</h2>
          <p className="mt-2">
            A competitor sued our client, a robotics startup, for alleged patent infringement over autonomous motion
            technology. We dissected the claim’s validity, demonstrated prior art, and challenged the scope of the
            patent. The court dismissed the case in summary judgment, and our client retained full product rights
            without paying a cent.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap flex-row-reverse items-center gap-8 bg-white text-black p-5 rounded-md my-4 shadow-md">
        <Image
          src="/images/trademark-battle.jpg"
          alt="Trademark Protection Win"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-lg grayscale-[90%]"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Case Study 2: Trademark Victory Against Global Corporation</h2>
          <p className="mt-2">
            Our client, a mid-size apparel brand, was threatened with legal action by a multinational conglomerate over
            alleged trademark similarities. We mounted a strong defense, emphasizing differences in markets, consumer
            confusion thresholds, and our client’s established use. The opposition was denied, and our client retained
            their mark — gaining media exposure and increased sales.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-8 bg-white text-black p-5 rounded-md my-4 shadow-md">
        <Image
          src="/images/copyright-case.jpg"
          alt="Copyright Protection Case"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-lg grayscale-[90%]"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">Case Study 3: Copyright Settlement with Streaming Giant</h2>
          <p className="mt-2">
            A content creator’s original series concept was used without credit by a major streaming platform. We filed
            a federal copyright lawsuit, triggering swift negotiations. Within 60 days, our client received a six-figure
            settlement, a formal acknowledgment, and future partnership opportunities.
          </p>
        </div>
      </div>

      <div className="bg-white text-black text-center p-5 rounded-md mt-6">
        <h2>Your Ideas Deserve Ironclad Protection</h2>
        <p>
          Contact our top-rated IP attorneys to secure and defend what’s uniquely yours.
        </p>
        <p>
          <a href="/#contact" className="text-blue-600 font-semibold underline">
            Schedule a Confidential IP Consultation →
          </a>
        </p>
      </div>
    </div>
  );
}
