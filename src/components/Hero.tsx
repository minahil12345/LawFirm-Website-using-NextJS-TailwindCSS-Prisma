// ✅ src/components/Hero.tsx
export default function Hero() {
  return (
    <section
      role="banner"
      aria-label="Welcome banner"
      className="hero px-[12px] py-[10px] sm:px-[10px] sm:py-[12px] flex flex-col justify-center text-white rounded-md m-4 px-5"
      style={{
        height: '220px',
        padding: '15px',
        margin: '15px',
        backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80')",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        filter: 'grayscale(100%) contrast(1.05)',
        boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.65)',
      }}
    >
      <h2
        className="text-2xl font-extrabold mb-2 tracking-wide"
        style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.85)' }}
      >
        Trusted Legal Expertise Since 1985
      </h2>
      <p
        className="text-base max-w-lg m-0"
        style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.9)' }}
      >
        Your partner for Corporate, Family, and Criminal Law
      </p>
    </section>
  );
}
