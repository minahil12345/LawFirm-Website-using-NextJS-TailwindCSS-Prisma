// app/services/ComplianceAdvice/page.tsx
import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ComplianceAdvice() {
  const router = useRouter();

  return (
    <main className="p-6 bg-[#f4f4f4] text-black font-sans">
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-md mb-6">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/compliance.jpg"
          alt="Regulatory Compliance"
          layout="responsive"
          width={1600}
          height={450}
          className="object-cover grayscale"
        />
        <h1 className="absolute bottom-4 left-4 bg-transparent text-white px-4 py-2 rounded text-3xl font-bold shadow-md">
          Compliance & Regulatory Advice
        </h1>
      </div>

      <section className="mb-4">
        <p>
          Regulatory compliance is the foundation of sustainable growth. We help your business meet legal obligations,
          minimize regulatory risks, and adapt to complex international standards across industries.
        </p>
      </section>

      <div className="flex flex-wrap gap-6 mb-6">
        <div className="bg-white p-5 rounded shadow flex-1 min-w-[300px]">
          <h2 className="font-bold text-lg mb-2">We Provide Expert Advice On:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Local and cross-border regulatory frameworks</li>
            <li>AML/KYC, GDPR, HIPAA & financial compliance</li>
            <li>Policy drafting and governance structures</li>
            <li>Internal compliance audits & legal due diligence</li>
            <li>Training for compliance teams and staff</li>
            <li>Risk mitigation planning and reporting protocols</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded shadow flex-1 min-w-[300px]">
          <h2 className="font-bold text-lg mb-2">Why Choose Us?</h2>
          <p>
            ✅ Served 300+ clients with zero regulatory failures.<br />
            ✅ Global coverage: US, EU, Asia-Pacific frameworks.<br />
            ✅ Scalable compliance strategies for SMEs to Enterprises.<br />
            ✅ Legal audit tools customized for your business model.<br />
            ✅ Ongoing advisory and updates for regulation changes.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-4">Case Success</h2>
      <div className="flex flex-wrap bg-white rounded shadow p-5 mb-6 gap-6 items-center">
        <div className="w-full sm:w-[40%] rounded-2xl relative h-[250px] overflow-hidden">
          <Image
            src="/images/compliance-success.jpg"
            alt="Compliance Transformation"
            fill
            className="object-cover grayscale rounded-2xl"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-bold">Case: Financial Services Compliance Overhaul</h3>
          <p className="mt-2">
            A fintech client operating in multiple jurisdictions needed urgent compliance restructuring. Our legal
            consultants led a three-month engagement aligning the client's systems with AML/KYC, GDPR, and PCI-DSS,
            enabling them to regain investor confidence and regulatory approval.
          </p>
        </div>
      </div>

      <div className="text-center py-6">
        <h2 className="text-xl font-semibold mb-2">Stay Compliant. Stay Confident.</h2>
        <p>Let us help you navigate legal complexity and build trust with regulators.</p>
        <p className="mt-2">
          <a href="/#contact" className="text-blue-600 font-semibold underline">
            Book a Compliance Consultation →
          </a>
        </p>
      </div>
    </main>
  );
}
