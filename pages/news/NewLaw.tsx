'use client';
import '../../src/app/globals.css';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function NewLaw() {
  const router = useRouter();

  return (
    <div className="bg-[#f7f7f7] text-[#222] font-sans p-5 sm:p-10">
    <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-2.5">
      {/* Main Content */}
      <div className="flex-[3] bg-white p-8 rounded-xl shadow-lg">
        <div className="mb-6">
         <button
            onClick={() => router.back()}
            className="inline-block bg-black text-white py-2 px-4 rounded hover:bg-[#444]"
            >
            ← Go Back
          </button>
        </div>

        <h1 className="text-2xl font-semibold mb-2">
          New Environmental Law Passed in State Legislature
        </h1>

        <div className="flex justify-between text-sm text-gray-500 mb-4">
          <span>June 12, 2024</span>
          <span>Reported by: Ms. Elaine Drew</span>
        </div>

        <div className="my-6 rounded-xl overflow-hidden">
          <Image
            src="/images/environmental_law.jpg"
            alt="Lawmakers passing environmental bill"
            width={800}
            height={400}
            layout="responsive"
            objectFit="cover"
          />
        </div>

        <div className="space-y-4 text-base leading-relaxed">
          <p>
            A new law has been officially passed by the state legislature,
            introducing <strong>stricter compliance norms</strong> for commercial waste
            disposal, set to take effect in <strong>July 2024</strong>.
          </p>
          <p>
            The law requires all medium and large-scale industries to file monthly
            waste disposal reports and install real-time monitoring systems approved
            by the Environmental Protection Authority.
          </p>
          <p>
            According to officials, failure to comply will result in heavy penalties,
            license revocation, or temporary shutdowns, depending on the severity of
            violations.
          </p>
          <p>
            The legislation aims to reduce illegal dumping, promote responsible waste
            management, and hold businesses accountable for their environmental
            impact.
          </p>
          <p>
            “We are stepping into a new era of sustainability,” said{' '}
            <strong>Governor Linda Brooks</strong>. “This law ensures that corporations
            play their role in preserving our state’s natural resources.”
          </p>
          <p>
            Several environmental advocacy groups have welcomed the move, calling it
            a much-needed step to protect communities located near industrial zones
            who face disproportionate pollution risks.
          </p>
          <p>
            The law will be reviewed annually, with potential updates based on
            compliance data and environmental performance metrics collected
            statewide.
          </p>
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
      <aside className="flex-1 flex flex-col gap-4 w-full lg:w-[200px]">
        {/* Related News */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Related Legal News</h3>
          {[
            {
              img: '/images/Tenant rights seminar.png',
              title: 'Smith & Co Hosts Free Tenant Rights Seminar',
              date: 'May 25, 2024',
            },
            {
              img: '/images/sme_webinar.jpg',
              title: 'SME Webinar: Keeping Up With Regulatory Demands',
              date: 'April 22, 2024',
            },
            {
              img: '/images/class_action.jpeg',
              title: 'Non-Profit Coalition Files Class Action Lawsuit',
              date: 'June 1, 2024',
            },
            {
              img: '/images/immigration_win.jpg',
              title: 'Immigrant Rights Case Ends in Favorable Ruling',
              date: 'April 22, 2024',
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3 mb-3 items-start">
              <div className="flex-shrink-0">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="rounded-md object-cover"
                />
              </div>
              <div className="flex flex-col text-sm">
                <a href="#" className="text-blue-700 font-semibold hover:underline">
                  {item.title}
                </a>
                <small className="text-gray-500">{item.date}</small>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored Ads */}
        <div className="bg-white p-5 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-4 border-b pb-2">Sponsored Ads</h3>
          {[
            {
              img: '/images/ad_hrconsulting.jpg',
              title: 'HR & Legal Consulting',
              desc: 'Update your employee handbook and workplace policies with expert guidance.',
              btn: 'Request Consultation',
            },
            {
              img: '/images/Sustainability_course.jpeg',
              title: 'Sustainability & Compliance',
              desc: 'Join our certified course on industrial environmental compliance.',
              btn: 'Enroll Today',
            },
          ].map((ad, i) => (
            <div key={i} className="bg-gray-100 border border-gray-300 rounded-xl overflow-hidden mb-4 hover:shadow-md transition-shadow">
              <Image
                src={ad.img}
                alt={ad.title}
                width={400}
                height={200}
                layout="responsive"
                objectFit="cover"
              />
              <div className="p-4">
                <h4 className="text-sm font-semibold mb-1 text-gray-800">{ad.title}</h4>
                <p className="text-sm text-gray-600 mb-2">{ad.desc}</p>
                <a
                  href="#"
                  className="inline-block bg-black text-white text-xs px-3 py-2 rounded hover:bg-gray-900"
                >
                  {ad.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
    </div>
  );
}
