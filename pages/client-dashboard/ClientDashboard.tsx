import '../../src/app/globals.css';
import React from 'react';
import Link from 'next/link';

export default function ClientDashboard() {
  return (
    <div className="font-sans px-5 py-10 bg-[#f9f9f9] text-[#333]">
      <div className="bg-white rounded-xl p-[30px] max-w-[1000px] mx-auto shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
        <div className="mt-10 mb-6">
          <Link href="/" legacyBehavior>
            <a className="inline-block bg-black text-white px-[18px] py-[10px] no-underline rounded hover:bg-[#444]">
              ← Back to Main Page
            </a>
          </Link>
        </div>

        <h2 className="text-black text-2xl font-bold mb-6">Welcome to Your Case Dashboard</h2>

        <div className="mb-[30px]">
          <h3 className="text-black text-xl font-semibold mb-2">Case Overview</h3>
          <p className="my-[6px]"><strong>Case ID:</strong> #A-2025-194</p>
          <p className="my-[6px]"><strong>Status:</strong> In Progress</p>
          <p className="my-[6px]"><strong>Responsible Attorney:</strong> Sarah Martinez</p>
          <p className="my-[6px]"><strong>Next Hearing:</strong> July 15, 2025 at 10:30 AM</p>
          <p className="my-[6px]"><strong>Location:</strong> District Court #2, Capital City</p>
        </div>

        <div className="mb-[30px]">
          <h3 className="text-black text-xl font-semibold mb-2">Case Tracking Progress</h3>
          <div className="border-l-[3px] border-black pl-5 mt-2">
            {[
              'Jan 12, 2025: Case Filed',
              'Feb 03, 2025: First Hearing Completed',
              'Mar 20, 2025: Evidence Submitted',
              'Apr 18, 2025: Witness Statements Reviewed',
              'Next: Court Hearing – July 15, 2025',
            ].map((item, index) => (
              <div key={index} className="relative pl-3 mb-5">
                <div className="absolute -left-[14px] top-1.5 h-[12px] w-[12px] bg-black rounded-full" />
                <strong>{item.split(':')[0]}:</strong>{' '}
                {item.split(':')[1]?.trim() || ''}
              </div>
            ))}
          </div>
        </div>

        <div className="mb-[30px] border border-[#ccc] rounded-lg p-4 bg-[#f9f9f9]">
        <h3 className="text-black text-xl font-semibold mb-2">Case Documents</h3>
        <ul className="list-none p-0">
            {[
            { text: 'Complaint Document', file: 'complaint.pdf' },
            { text: 'Evidence Report', file: 'evidence-report.pdf' },
            { text: 'Court Summons', file: 'court-summons.pdf' },
            { text: 'Witness Statements', file: 'witness-statements.pdf' },
            ].map(({ text, file }, index) => (
            <li key={index} className="py-2 border-b border-[#ddd] last:border-b-0">
                <a
                href={`/documents/${file}`}
                download
                className="text-blue-600 underline"
                >
                {text}
                </a>
            </li>
            ))}
        </ul>
        </div>


        <div className="mb-[30px] border border-[#ccc] rounded-lg p-4 bg-[#f9f9f9]">
          <h3 className="text-black text-xl font-semibold mb-2">Messages from Your Attorney</h3>
          <ul className="list-none p-0">
            <li className="py-2 border-b border-[#ddd] last:border-b-0">
              <strong>May 20:</strong> Please review the attached witness documents before our next meeting.
            </li>
            <li className="py-2 border-b border-[#ddd] last:border-b-0">
              <strong>Apr 10:</strong> We’re expecting the judge’s feedback within a week.
            </li>
          </ul>
        </div>

        <div className="mb-[30px]">
          <h3 className="text-black text-xl font-semibold mb-2">Contact Your Legal Team</h3>
          <p className="my-[6px]">
            <strong>Phone:</strong>{' '}
            <a href="tel:+12175551234" className="text-blue-600 underline">
              (217) 555-1234 (Ext: 101)
            </a>
          </p>
          <p className="my-[6px]">
            <strong>Email:</strong>{' '}
            <a
            href="https://mail.google.com/mail/?view=cm&to=contact.sarahmartinez@stonebridgelegallawfirm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
            >
            contact.sarahmartinez@stonebridgelegallawfirm.com
            </a>
          </p>
          <p className="my-[6px]">
            <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 5:30 PM
          </p>
        </div>

        <a href="/#contact">
            <button className="mt-5 py-3 px-5 bg-black text-white font-bold rounded-md hover:bg-[#005fa3] transition-colors duration-300">
                Request a Meeting
            </button>
        </a>
      </div>
    </div>
  );
}
