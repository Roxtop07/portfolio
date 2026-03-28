'use client';
import { useEffect, useRef } from 'react';
import { experiences } from '@/data/profile';

export default function Experience() {
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
    <section id="experience" className="py-24 relative">
      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// Where I've Worked</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Work<br />
              <span className="text-accent">Experience</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mb-3" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-20">
                {/* Dot */}
                <div className="absolute left-0 md:left-6 top-6 w-3 h-3 rounded-full bg-accent -translate-x-1/2 border-2 border-bg" />

                <div className="card-hover border border-border bg-card p-6 md:p-8">
                  {/* Top row */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs text-accent/70 bg-accent/8 border border-accent/20 px-2 py-0.5">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-white mt-2">
                        {exp.role}
                        {exp.focus && <span className="text-muted font-normal text-base ml-1">({exp.focus})</span>}
                      </h3>
                      <p className="font-mono text-sm text-accent mt-1">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted border border-border px-3 py-1 h-fit whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-[#999] font-body">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    {exp.tech.map((t) => (
                      <span key={t} className="font-mono text-xs text-accent/60 bg-accent/5 px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
