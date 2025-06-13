import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function CriminalLaw() {
  const router = useRouter();
  
  return (
    <main className="p-5 bg-[#f4f4f4] text-black font-[Segoe UI] leading-[1.8]">
      {/* Hero Section */}
      <div className="relative w-full max-h-[450px] overflow-hidden rounded-lg">
         {/* Go Back Button */}
         <button
          onClick={() => router.back()}
          className="absolute top-4 left-4 bg-black text-white py-2 px-4 rounded hover:bg-[#333] transition-colors duration-300 z-10"
        >
          ← Go Back
        </button>
        <Image
          src="/images/criminal-law.jpg"
          alt="Criminal Law Defense"
          width={1600}
          height={450}
          className="w-full max-h-[450px] object-cover grayscale"
        />
        <h1 className="absolute bottom-1 left-5 px-4 py-2 text-white text-[2rem] font-extrabold tracking-wide drop-shadow-md">
          Elite Criminal Defense Attorneys Fighting For Your Freedom
        </h1>
      </div>

      {/* Description */}
      <div className="my-2">
        When your freedom, reputation, and future are at stake, you need more than just a lawyer — you need a fierce advocate. Our <strong>criminal defense team</strong> has successfully defended hundreds of clients in serious felony cases, white-collar investigations, and high-stakes trials. We understand the pressure you&apos;re facing, and we&apos;re here to give you the aggressive, skilled representation you deserve — in and out of the courtroom.
      </div>

      {/* Services and Why Us */}
      <div className="flex flex-wrap gap-5 mt-0">
        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow-md">
          <h2 className="mb-2 text-black font-bold">Our Criminal Law Services Include:</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Felony & Misdemeanor Defense</li>
            <li>White-Collar Crime & Fraud Defense</li>
            <li>Drug Charges: Possession, Trafficking & Manufacturing</li>
            <li>Homicide, Assault, and Violent Crime Defense</li>
            <li>DUI / DWI & Traffic Violations</li>
            <li>Cybercrime & Internet Offenses</li>
            <li>Pre-Charge Investigations & Grand Jury Counsel</li>
            <li>Appeals, Post-Conviction Relief & Expungements</li>
          </ul>
        </div>

        <div className="flex-1 min-w-[300px] bg-white p-5 rounded-lg shadow-md">
          <h2 className="mb-2 text-black font-bold">Why Choose Us?</h2>
          <p>
            ✅ <strong>Over 15 years of courtroom success</strong> in criminal defense litigation.<br />
            ✅ <strong>Hundreds of charges reduced or dismissed</strong> before trial.<br />
            ✅ Former prosecutors on staff — we know how the system works, and how to win.<br />
            ✅ We handle <strong>high-profile & complex cases</strong> with discretion and skill.<br />
            ✅ 24/7 client access — we’re there when you need us most.
          </p>
        </div>
      </div>

      <h2 className="mt-5 text-black font-bold">Landmark Criminal Defense Victories</h2>

      {/* Case Studies */}
      <div className="bg-white text-black p-5 rounded-lg shadow-md flex flex-wrap gap-5 my-4 items-center justify-between">
        <Image
          src="/images/homicide-defense.jpg"
          alt="Homicide Trial Victory"
          width={400}
          height={250}
          className="rounded-lg grayscale max-w-[40%] object-cover"
        />
        <div className="flex-1">
          <h2 className="text-[20px] font-semibold mt-0">Case Study 1: Not Guilty Verdict in High-Profile Homicide Trial</h2>
          <p className="mt-2">
            Our client was charged with second-degree murder in a nationally publicized case. The prosecution had eyewitnesses and forensic evidence. After a detailed independent investigation and aggressive cross-examinations, our team exposed critical flaws in the timeline and reliability of the state&apos;s witnesses. The jury returned a <strong>Not Guilty</strong> verdict on all counts. Our client walked free, and their life was restored.
          </p>
        </div>
      </div>

      <div className="bg-white text-black p-5 rounded-lg shadow-md flex flex-wrap gap-5 my-4 items-center justify-between flex-row-reverse">
        <Image
          src="/images/cybercrime-case.jpg"
          alt="Cybercrime Defense Victory"
          width={400}
          height={250}
          className="rounded-lg grayscale max-w-[40%] object-cover"
        />
        <div className="flex-1">
          <h2 className="text-[20px] font-semibold mt-0">Case Study 2: Acquittal in Major Cybercrime Prosecution</h2>
          <p className="mt-2">
            Our client, a university IT specialist, was charged with multiple federal offenses related to unauthorized access, identity theft, and distribution of sensitive data — allegedly compromising over 10,000 personal records. The FBI seized all digital equipment and the media called it “one of the most offensive breaches in years.”<br /><br />
            We conducted a full digital forensic review and uncovered manipulation of server logs and improper chain of custody in evidence handling. Through expert testimony and meticulous cross-examination, we dismantled the prosecution&apos;s technical arguments. After a 10-day trial, our client was fully <strong>acquitted on all charges</strong> and returned to professional life with their reputation intact.
          </p>
        </div>
      </div>

      <div className="bg-white text-black p-5 rounded-lg shadow-md flex flex-wrap gap-5 my-4 items-center justify-between">
        <Image
          src="/images/drug-defense.jpg"
          alt="Drug Charges Dropped"
          width={400}
          height={250}
          className="rounded-lg grayscale max-w-[40%] object-cover"
        />
        <div className="flex-1">
          <h2 className="text-[20px] font-semibold mt-0">Case Study 3: Major Drug Charges Dropped After Motion</h2>
          <p className="mt-2">
            Facing a mandatory minimum sentence of 10 years for alleged drug trafficking, our client was stopped in what seemed like a routine traffic search. We challenged the legality of the stop and search, citing constitutional violations. The court agreed with our arguments and granted the motion to suppress. The charges were dropped completely, and our client avoided a lengthy prison term.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-transparent p-5 rounded-lg mt-6">
        <h2 className="text-black font-bold">Accused of a Crime? Time is Critical.</h2>
        <p className="text-black">Our seasoned defense attorneys are ready to protect your rights and fight for your freedom.</p>
        <p>
          <Link href="/#contact" className="text-blue-600 font-semibold underline">
            Request a Confidential Consultation →
          </Link>
        </p>
      </div>
    </main>
  );
}