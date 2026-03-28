'use client';
import { useEffect, useRef } from 'react';
import { achievements } from '@/data/profile';

export default function Achievements() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible'); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="achievements" className="py-24 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// Milestones Unlocked</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Achievements &<br />
              <span className="text-accent">Recognition</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <a
              key={i}
              href={a.proof || '#'}
              target={a.proof ? '_blank' : undefined}
              rel={a.proof ? 'noopener noreferrer' : undefined}
              className={`cursor-target card-hover border bg-card p-6 flex gap-5 items-start ${
                a.highlight ? 'border-accent/30' : 'border-border'
              } ${a.proof ? 'cursor-pointer' : 'cursor-default'}`}
              onClick={a.proof ? undefined : (e) => e.preventDefault()}
            >
              {a.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}
              <div
                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl border ${
                  a.highlight ? 'border-accent/30 bg-accent/5' : 'border-border bg-surface'
                }`}
              >
                {a.icon}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-base mb-0.5">{a.title}</h3>
                <p className="font-mono text-xs text-accent mb-3">{a.org}</p>
                <p className="font-body text-sm text-muted leading-relaxed">{a.desc}</p>
                {a.proof && (
                  <span className="inline-flex items-center gap-1 font-mono text-xs text-accent/70 group-hover:text-accent mt-3 transition-colors">
                    View Proof ↗
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
