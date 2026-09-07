export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-primary font-mono text-sm mb-4">Hello, my name is</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Emesh <span className="gradient-text">Lamichhane</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted mb-8">
          Cybersecurity Specialist &amp; Full-Stack Developer
        </p>
      </div>
    </section>
  );
}
