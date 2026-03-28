'use client';
import { useEffect, useRef } from 'react';
import { profile } from '@/data/profile';

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(57,255,20,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.03) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(57,255,20,0.06) 0%, transparent 70%)' }}
      />

      <div
        ref={containerRef}
        className="section-fade max-w-6xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-16 items-center"
      >
        {/* Left: Text */}
        <div className="order-2 md:order-1">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-muted tracking-widest uppercase">{profile.status}</span>
          </div>

          {/* Name */}
          <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-none tracking-tight mb-4">
            {profile.name.first}
            <br />
            <span className="text-accent accent-glow">{profile.name.last}</span>
          </h1>

          {/* Title */}
          <p className="font-mono text-sm text-accent/70 tracking-widest uppercase mb-6">
            {profile.title}
          </p>

          {/* Subtitle pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {profile.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs border border-subtle text-muted px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="font-body text-[#aaaaaa] text-lg leading-relaxed mb-10 max-w-lg">
            {profile.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="cursor-target font-mono text-sm bg-accent text-bg px-6 py-3 font-medium hover:bg-accent-dim transition-colors duration-200 inline-flex items-center gap-2 group"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target font-mono text-sm border border-accent text-accent px-6 py-3 hover:bg-accent hover:text-bg transition-all duration-200 inline-flex items-center gap-2"
            >
              Download Resume ↓
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="cursor-target font-mono text-sm border border-border text-muted px-6 py-3 hover:border-accent hover:text-accent transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right: Profile image */}
        <div className="order-1 md:order-2 flex flex-col items-center gap-4">
          <div className="relative">
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-full border border-accent/20" />
            <div className="absolute -inset-6 rounded-full border border-accent/08" />

            {/* Profile circle */}
            <div
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-accent/30"
              style={{ boxShadow: '0 0 60px rgba(57,255,20,0.15), 0 0 120px rgba(57,255,20,0.06)' }}
            >
              <img 
                src={profile.image} 
                alt={`${profile.name.first} ${profile.name.last}`} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-accent" />
            <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-accent" />
          </div>

          {/* Achievement badge */}
          <div className="border border-accent/30 bg-card px-5 py-3 text-center">
            <p className="font-mono text-xs text-accent tracking-wide">
              {profile.featuredBadge}
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-xs mt-2">
            {profile.stats.map((s) => (
              <div key={s.label} className="text-center border border-border bg-card py-3">
                <div className="font-display font-bold text-xl text-accent">{s.val}</div>
                <div className="font-mono text-xs text-muted mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  );
}
