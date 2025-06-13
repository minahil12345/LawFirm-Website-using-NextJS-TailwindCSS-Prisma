import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FamilyLaw() {
  const router = useRouter();
  
  return (
    <div className="p-5 font-sans text-black leading-relaxed bg-[#f4f4f4]">
      {/* Hero */}
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-lg">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/family-law.jpg"
          alt="Family Law and Mediation"
          layout="responsive"
          width={1200}
          height={450}
          className="object-cover grayscale max-h-[450px] rounded-lg"
        />
        <h1 className="absolute bottom-1 left-5 p-3 text-2xl font-extrabold text-white shadow-lg bg-transparent rounded">
          Family Law & Mediation Services
        </h1>
      </div>

      {/* Description */}
      <div className="my-3">
        We provide sensitive, strategic legal counsel for individuals and families facing personal legal challenges. From contested divorces to amicable settlements, our mission is to deliver peace of mind through tailored legal guidance and compassionate advocacy.
      </div>

      {/* Services & Why Us */}
      <div className="flex flex-wrap gap-5">
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Our Family Law Services Include:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Divorce & Separation (Contested/Uncontested)</li>
            <li>Child Custody & Visitation Rights</li>
            <li>Child & Spousal Support (Alimony)</li>
            <li>Prenuptial & Postnuptial Agreements</li>
            <li>Property & Asset Division</li>
            <li>Domestic Violence & Protection Orders</li>
            <li>Family Mediation & Settlement Negotiation</li>
            <li>Adoption & Guardianship</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow-md">
          <h2 className="mb-2 text-xl font-semibold">Why Choose Us?</h2>
          <p>
            ✅ Over <strong>15+ years of experience</strong> in family law, ensuring empathetic and effective legal solutions.
            <br /> ✅ <strong>400+ successful custody cases</strong> resolved with child‑first strategies.
            <br /> ✅ Trained mediators delivering <strong>90%+ conflict‑free resolutions</strong>.
            <br /> ✅ Transparent, compassionate, and results‑driven approach.
            <br /> ✅ Flexible payment plans available for sensitive family cases.
          </p>
        </div>
      </div>

      {/* Success Stories */}
      <h2 className="my-4 text-xl font-semibold">Success Stories</h2>

      {/* Case Study 1 */}
      <div className="flex flex-wrap items-center justify-between gap-8 bg-white p-5 rounded-lg mb-6 shadow-md">
        <div className="flex-1 max-w-[40%]">
          <Image
            src="/images/custody-case.jpg"
            alt="Custody Resolution"
            width={600}
            height={250}
            className="flex-1 max-h-[250px] object-cover rounded-lg grayscale-[90%]"
          />
        </div>
        <div className="flex-1 min-w-[55%]">
          <h3 className="text-lg font-semibold">Case Study 1: Full Custody Secured for Working Mother</h3>
          <p className="mt-2">
            Our client, a single mother balancing two jobs, was denied custody due to perceived instability. Our team gathered character witnesses, financial records, and school performance documentation to overturn the initial ruling. The court awarded full custody and visitation scheduling, ensuring stability and growth for the child.
          </p>
        </div>
      </div>

      {/* Case Study 2 */}
      <div className="flex flex-wrap items-center justify-between gap-8 bg-white p-5 rounded-lg mb-6 shadow-md flex-row-reverse">
        <div className="flex-1 max-w-[40%]">
          <Image
            src="/images/divorce-mediation.jpg"
            alt="Mediation Success"
            width={600}
            height={250}
            className="flex-1 max-h-[250px] object-cover rounded-lg grayscale-[90%]"
          />
        </div>
        <div className="flex-1 min-w-[55%]">
          <h3 className="text-lg font-semibold">Case Study 2: Divorce Settled in 21 Days through Mediation</h3>
          <p className="mt-2">
            A high-conflict couple with significant assets sought our help to avoid a prolonged court battle. Our mediators facilitated productive conversations that led to an equitable division of property, custody agreements, and mutual respect. The case concluded within three weeks—saving time, costs, and emotional strain.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-5 text-center bg-transparent rounded-lg">
        <h2 className="text-xl font-bold mb-2">Need Help Navigating a Family Matter?</h2>
        <p>We’re here to guide you through legal difficulties with care and confidence.</p>
        <Link href="/#contact" className="text-blue-600 font-semibold underline">
          Book Your Confidential Consultation →
        </Link>
      </div>
    </div>
  );
}
