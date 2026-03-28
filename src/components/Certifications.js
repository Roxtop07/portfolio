'use client';
import { useEffect, useRef } from 'react';
import { certifications as certs } from '@/data/profile';

export default function Certifications() {
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
    <section id="certifications" className="py-24 relative">
      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// Credentials Earned</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Certifications
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <a
              key={i}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target card-hover border border-border bg-card p-5 flex items-center gap-4 group"
            >
              <div className="w-10 h-10 border border-subtle bg-surface flex items-center justify-center text-lg flex-shrink-0">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-display font-semibold text-white text-sm leading-snug">{cert.title}</h4>
                <p className="font-mono text-xs text-accent/70 mt-1">{cert.issuer}</p>
              </div>
              <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                View ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
