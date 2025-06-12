// src/components/Testimonials.tsx
'use client';

import { useEffect, useRef, useState } from 'react';

function TypingText({ text, speed = 50 }) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (index < text.length) {
      interval = setInterval(() => {
        setDisplayed((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Wait 2 seconds and restart
      const timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    return () => clearInterval(interval);
  }, [index, text, speed]);

  return <span>{displayed}</span>;
}

const testimonials = [
  "After my car accident last year, I was left dealing with medical bills, insurance claims, and severe emotional stress. I had no idea how to move forward. This firm not only took my personal injury case seriously, but they also treated me with genuine care. They walked me through every document, every call, and fought hard to get the compensation I deserved. It honestly felt like they cared more about my recovery than the payout. I'm incredibly grateful for their help and compassion during that traumatic time.",
  "Every call, every email, every meeting—handled with kindness and clarity. I felt like a priority, not just a client.",
  "I was falsely accused in a workplace harassment dispute, and it nearly cost me my job and reputation. The legal team didn't just defend me—they listened, believed in me, and fought tirelessly to clear my name. Their legal strategy was sharp, their communication was always clear, and I never felt left in the dark. Thanks to them, not only was my case resolved in my favor, but I regained my confidence and peace of mind. This was more than legal work—it was life-changing support.",
  "Going through a messy divorce after 14 years of marriage was one of the hardest things I've ever faced. I was scared, confused, and emotionally drained. From the very first meeting, the team showed empathy and understanding. They helped me navigate the legal side of things—from custody to asset division—with a calm and professional approach. They never rushed me and always made sure I understood every option. I never thought I'd say this about a legal process, but they made it bearable.",
  "When my small business was threatened with an unjust breach of contract lawsuit, I thought everything I had built was going to crumble. The attorneys at this firm took my case seriously from day one. They gathered every detail, built a solid defense, and kept me informed the whole way. What impressed me most was how personal they made the process feel—I was never just 'a file'. In the end, the case was dropped, and I could focus on running my business again. Truly thankful.",
  "I’m not sure where I’d be without their help. Their guidance not only won my case but gave me peace of mind during a dark time.",
  "My immigration case had been pending for years, and I had almost given up hope. I reached out to this firm on a recommendation, and within months they had things moving again. They identified mistakes in previous filings, corrected them, and kept constant communication with the authorities. When my green card finally arrived, it was one of the happiest days of my life. Without their meticulous work and dedication, I might still be stuck in limbo. I can’t thank them enough.",
  "This firm treated me like more than just a case. They listened, they cared, and they fought for me like family.",
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const faders = containerRef.current?.querySelectorAll('.fade-in-section');

    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -20px 0px',
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, options);

    faders?.forEach((el) => {
      appearOnScroll.observe(el);
    });

    return () => {
      faders?.forEach((el) => appearOnScroll.unobserve(el));
    };
  }, []);

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="max-w-[1080px] mx-auto px-[15px]">
      <h2 id="testimonials-title" className="text-xl font-bold border-l-4 border-black pl-2 mb-4">
        What Our Clients Say
      </h2>
      <div
        ref={containerRef}
        className="bg-white max-h-[300px] overflow-y-auto space-y-4"
      >
        {testimonials.map((text, i) => (
          <div
            key={i}
            className="bg-[#FAFAFA] fade-in-section opacity-0 translate-y-5 transition-opacity transition-transform duration-[800ms] ease-out p-3 rounded-[6px] shadow-[0_3px_10px_rgba(0,0,0,0.1)] text-[#333] italic"
          >
            <TypingText text={text} speed={25} />
          </div>
        ))}
      </div>

      <style jsx>{`
        .is-visible {
          opacity: 1 !important;
          transform: none !important;
        }
      `}</style>
    </section>
  );
}
