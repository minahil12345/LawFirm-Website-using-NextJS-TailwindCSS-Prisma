import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function PlanningWills() {
  const router = useRouter();
  
  return (
    <div className="p-5 bg-[#f4f4f4] text-black font-[Segoe UI,Tahoma,Geneva,Verdana,sans-serif] leading-[1.8]">
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-md" id="planning-wills">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/estate-planning.jpg"
          alt="Estate Planning"
          width={1920}
          height={450}
          className="w-full max-h-[450px] object-cover grayscale"
        />
        <h1 className="absolute bottom-[5px] left-[20px] p-[10px_15px] bg-transparent text-white text-[2rem] font-black tracking-[0.75px] shadow-[0_1px_2px_rgba(0,0,0,0.85)] rounded">Estate Planning & Will Drafting Services</h1>
      </div>

      <div className="mt-5 mb-5">
        Planning your estate is about more than just writing a will—it's about securing your family's future. Our attorneys guide you through every step of estate planning to ensure your wishes are legally protected and your loved ones are cared for, no matter what.
      </div>

      <div className="flex flex-wrap gap-5 mt-0">
        <div className="flex-1 bg-white p-5 rounded shadow min-w-[300px]">
          <h2 className="mb-2 mt-0">Our Estate Planning Services Include:</h2>
          <ul className="list-[square] pl-5">
            <li>Customized Will Drafting</li>
            <li>Living Trusts & Revocable Trusts</li>
            <li>Durable Power of Attorney</li>
            <li>Healthcare Directives & Living Wills</li>
            <li>Probate & Estate Administration</li>
            <li>Guardianship Designations</li>
            <li>Asset Protection Planning</li>
            <li>Charitable Giving Strategies</li>
          </ul>
        </div>

        <div className="flex-1 bg-white p-5 rounded shadow min-w-[300px]">
          <h2 className="mb-2 mt-0">Why Choose Us?</h2>
          <p>
            ✅ Compassionate and confidential legal advice.<br />
            ✅ <strong>20+ years of experience</strong> in estate and trust law.<br />
            ✅ Clear, jargon-free guidance every step of the way.<br />
            ✅ Legally enforceable documents tailored to your situation.<br />
            ✅ Peace of mind for you and your family.
          </p>
        </div>
      </div>

      <h2 className="mt-6 mb-2">Success Stories</h2>

      <div className="flex flex-wrap items-center justify-between gap-8 bg-white text-black p-5 rounded shadow mb-8">
        <Image
          src="/images/family-trust.jpg"
          alt="Family Trust Case"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-lg grayscale-[90%]"
        />
        <div className="flex-1">
          <h2 className="text-[20px] font-semibold mt-0">Case Study 1: Family Wealth Trust for the Johnsons</h2>
          <p className="mt-2">
            We helped the Johnson family establish a comprehensive trust plan, ensuring tax-efficient transfer of wealth across generations. With a living trust, power of attorney, and healthcare directives in place, their legacy is now protected and probate was entirely avoided.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap flex-row-reverse items-center justify-between gap-8 bg-white text-black p-5 rounded shadow mb-8">
        <Image
          src="/images/probate-help.jpg"
          alt="Probate Assistance"
          width={600}
          height={250}
          className="flex-1 max-w-[40%] max-h-[250px] object-cover rounded-lg grayscale-[90%]"
        />
        <div className="flex-1">
          <h2 className="text-[20px] font-semibold mt-0">Case Study 2: Guiding Probate for a Complex Estate</h2>
          <p className="mt-2">
            After the unexpected passing of a client, we assisted the family in managing a complex probate process involving multiple heirs and assets. The case was resolved in under 6 months with all disputes amicably settled.
          </p>
        </div>
      </div>

      <div className="text-center p-5 rounded">
        <h2 className="mb-2">Secure Your Legacy Today</h2>
        <p>Our estate planning lawyers are here to guide you with care and clarity.</p>
        <p>
          <a href="/#contact" className="text-blue-600 font-semibold underline">Book a Consultation →</a>
        </p>
      </div>
    </div>
  );
}
