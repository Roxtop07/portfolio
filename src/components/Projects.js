'use client';
import { useEffect, useRef } from 'react';
import { projects } from '@/data/profile';

function ProjectCard({ project, index }) {
  const handleCardClick = () => {
    window.open(project.github, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`cursor-target card-hover relative border bg-card p-6 flex flex-col gap-5 cursor-pointer ${
        project.highlight ? 'border-accent/30' : 'border-border'
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={handleCardClick}
    >
      {/* Top accent line for highlighted */}
      {project.highlight && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      )}

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div>
          {project.badge && (
            <span className="inline-block font-mono text-xs text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 mb-3">
              {project.badge}
            </span>
          )}
          <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
        </div>
        <div
          className="flex-shrink-0 border border-border p-2 text-muted group-hover:border-accent group-hover:text-accent transition-all duration-200"
          aria-label="GitHub"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
        </div>
      </div>

      {/* Role tag */}
      <div className="flex items-center gap-2">
        <span className="font-mono text-xs text-muted">ROLE</span>
        <span className="font-mono text-xs text-white border border-subtle px-2 py-0.5">{project.role}</span>
      </div>

      {/* Description */}
      <p className="font-body text-[#999] text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
        {project.tech.map((t) => (
          <span key={t} className="font-mono text-xs text-accent/70 bg-accent/5 px-2 py-1">
            {t}
          </span>
        ))}
      </div>

      {/* View on GitHub link */}
      <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors duration-200 flex items-center gap-1 mt-1 w-fit">
        View on GitHub <span>↗</span>
      </span>
    </div>
  );
}

export default function Projects() {
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
    <section id="projects" className="py-24 relative">
      <div ref={ref} className="section-fade max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end gap-6 mb-14">
          <div>
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">// What I've Built</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
              Featured<br />
              <span className="text-accent">Projects</span>
            </h2>
          </div>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-border to-transparent mb-3" />
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
