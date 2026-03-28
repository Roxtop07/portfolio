'use client';
import { useEffect, useRef } from 'react';
import { skills as skillGroups } from '@/data/profile';

export default function Skills() {
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
    <section id="skills" className="py-24 bg-surface relative">
      {/* Top border line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// Tools I Wield</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Skills &<br />
              <span className="text-accent">Technologies</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mb-3" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`card-hover border bg-card p-6 ${
                group.accent ? 'border-accent/30' : 'border-border'
              }`}
            >
              {group.accent && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
              )}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-xl">{group.icon}</span>
                <div>
                  <p className="font-mono text-xs text-muted tracking-widest uppercase">{group.category}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs border border-subtle text-[#ccc] px-3 py-1.5 hover:border-accent/50 hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
