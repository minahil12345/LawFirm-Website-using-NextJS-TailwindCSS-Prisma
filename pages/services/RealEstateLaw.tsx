import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function RealEstateLaw() {
  const router = useRouter();
  
  return (
    <div className="p-5 bg-[#f4f4f4] text-black leading-7 font-sans">
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-md" id="realestate-law">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/realestate-law.jpg"
          alt="Real Estate Law"
          width={1200}
          height={450}
          className="w-full max-h-[450px] object-cover grayscale rounded-md"
        />
        <h1 className="text-2xl font-extrabold tracking-wide text-white shadow-md absolute bottom-1 left-5 bg-transparent p-2 rounded">
          Real Estate Law & Property Transaction Support
        </h1>
      </div>

      <div className="my-5">
        Whether you&apos;re buying, selling, leasing, or developing property, legal expertise is critical. We provide reliable, detailed legal support across all types of real estate transactions and property-related disputes to ensure your investment is sound and protected.
      </div>

      <div className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Real Estate Law Services Include:</h2>
          <ul className="list-[square] pl-5">
            <li>Residential & Commercial Property Transactions</li>
            <li>Lease Agreement Drafting & Negotiation</li>
            <li>Real Estate Litigation & Dispute Resolution</li>
            <li>Title Search & Due Diligence</li>
            <li>Land Use, Zoning & Permits</li>
            <li>Construction & Development Contracts</li>
            <li>Property Tax Appeals</li>
            <li>Foreclosure Defense & Loan Modifications</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us?</h2>
          <p>
            ✅ Proven track record in resolving complex real estate disputes.<br />
            ✅ Deep understanding of local and federal property laws.<br />
            ✅ Expert negotiation for high-value commercial leases.<br />
            ✅ Timely and thorough legal document preparation.<br />
            ✅ <strong>Client-first approach</strong> with transparent communication.
          </p>
        </div>
      </div>

      <h2 className="text-xl font-semibold my-5">Success Stories</h2>

      <div className="flex flex-wrap gap-7 items-center bg-white text-black p-5 rounded-md shadow-md mb-8">
        <Image
          src="/images/land-dispute.jpg"
          alt="Land Dispute"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-md grayscale"
        />
        <div className="flex-1 max-w-[55%]">
          <h2 className="text-lg font-semibold mt-0">Case Study 1: Resolving a $3M Land Dispute</h2>
          <p className="mt-2">
            Represented a landowner in a high-stakes boundary dispute with a commercial developer. After extensive mediation and legal proceedings, our client retained full ownership and received additional compensation for damages.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-7 items-center bg-white text-black p-5 rounded-md shadow-md mb-8 flex-row-reverse">
        <Image
          src="/images/lease-deal.jpg"
          alt="Commercial Lease"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-md grayscale"
        />
        <div className="flex-1 max-w-[55%]">
          <h2 className="text-lg font-semibold mt-0">Case Study 2: Negotiating a 10-Year Commercial Lease</h2>
          <p className="mt-2">
            Our legal team drafted and negotiated a complex lease for a national retail chain, securing favorable terms that included tenant improvements and early termination flexibility, saving the client over $200,000.
          </p>
        </div>
      </div>

      <div className="text-center p-4 rounded-md">
        <h2 className="text-xl font-semibold">Make Confident Real Estate Decisions</h2>
        <p>Get trusted legal support for every property move.</p>
        <p>
          <Link href="/#contact" className="text-blue-600 font-semibold underline">
            Talk to a Real Estate Lawyer →
          </Link>
        </p>
      </div>
    </div>
  );
}
