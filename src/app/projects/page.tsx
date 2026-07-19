"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Terminal, Palette, X } from "lucide-react";
import { initialProjects } from "../../lib/projectsData";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ProjectsPage() {
  const [selectedProjectModal, setSelectedProjectModal] = useState<any | null>(null);
  const [projects] = useState<any[]>(initialProjects);

  return (
    <div className="font-body-md text-body-md selection:bg-vibrant-orange selection:text-pure-white bg-surface text-on-surface min-h-screen">
      {/* TopNavBar (Identical design as landing page) */}
      <nav className="fixed top-4 right-margin-desktop rounded-full px-6 py-2 z-50 bg-surface/80 backdrop-blur-md border border-muted-gray/10 shadow-md flex items-center gap-stack-md hidden lg:flex">
        <div className="flex gap-6">
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-vibrant-orange transition-colors duration-200"
            href="/#home"
          >
            Home
          </Link>
          <Link
            className="font-label-md text-label-md text-vibrant-orange font-bold transition-colors duration-200"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-vibrant-orange transition-colors duration-200"
            href="/#experience"
          >
            Experience
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-vibrant-orange transition-colors duration-200"
            href="/#tools"
          >
            Tools
          </Link>
          <Link
            className="font-label-md text-label-md text-on-surface-variant hover:text-vibrant-orange transition-colors duration-200"
            href="/#blog"
          >
            Blog
          </Link>
        </div>
        <Link
          href="/#contact"
          className="ml-4 px-4 py-1.5 bg-vibrant-orange text-pure-white rounded-full font-label-md text-label-md transition-transform active:scale-90 hover:brightness-115 inline-block"
        >
          Hire Me
        </Link>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-stack-lg min-h-[calc(100vh-180px)]">
        {/* Back Navigation */}
        <div className="mb-6">
          <Link
            className="group inline-flex items-center gap-2 text-muted-gray hover:text-vibrant-orange transition-all duration-300"
            href="/"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-label-md text-label-md">Back to Home</span>
          </Link>
        </div>

        {/* Header Section */}
        <header className="relative mb-12">
          <div className="space-y-1">
            <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">
              ALL WORK
            </h2>
            <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase leading-none">
              PROJECTS
            </span>
          </div>
          <div className="w-20 h-1.5 bg-vibrant-orange mt-4 rounded-full"></div>
        </header>

        {/* Project Cards Grid (Compact & Responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const renderImage = () => {
              if (project.image) {
                return (
                  <img
                    alt={`${project.title} Project`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                  />
                );
              }
              return (
                <div className="w-full h-full flex items-center justify-center bg-surface-container-highest text-muted-gray">
                  <Terminal className="w-10 h-10" />
                </div>
              );
            };

            const isTruncated = project.desc && project.desc.length > 150;
            const visibleTags = project.tags ? project.tags.slice(0, 8) : [];
            const remainingTagsCount = project.tags && project.tags.length > 8 ? project.tags.length - 8 : 0;

            return (
              <div
                key={project.id || idx}
                className="glass-card rounded-3xl overflow-hidden border border-muted-gray/15 hover:border-vibrant-orange/60 hover:shadow-[0_10px_30px_rgba(244,108,56,0.2)] transition-all duration-300 flex flex-col justify-between group h-[440px] bg-surface-container/60 backdrop-blur-md"
              >
                {/* Reduced Image Section */}
                <div className="relative h-44 w-full overflow-hidden bg-surface-container-low flex-shrink-0">
                  {renderImage()}
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-highest/90 via-transparent to-transparent opacity-70"></div>
                  {project.isFeatured && (
                    <span className="absolute top-3 right-3 bg-electric-lime text-surface-charcoal px-3 py-1 rounded-full font-label-sm text-xs font-bold shadow-md">
                      Featured
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-headline-md text-lg font-bold text-pure-white group-hover:text-vibrant-orange transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <a
                        href={project.link && project.link !== "#" ? project.link : "#"}
                        target={project.link && project.link !== "#" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-vibrant-orange transition-colors text-pure-white flex-shrink-0"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Description with 150-char limit & Read More tooltip trigger */}
                    <p className="text-muted-gray text-xs leading-relaxed mb-3">
                      {isTruncated ? `${project.desc.slice(0, 150)}...` : project.desc}
                      {isTruncated && (
                        <button
                          onClick={() => setSelectedProjectModal(project)}
                          className="text-vibrant-orange hover:underline font-semibold text-xs ml-1.5 inline-flex items-center cursor-pointer"
                        >
                          Read More
                        </button>
                      )}
                    </p>
                  </div>

                  {/* Tags (Limit 8 max visible per card) */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-muted-gray/10 mt-auto">
                    {visibleTags.map((tag: string, tagIdx: number) => (
                      <span
                        key={tagIdx}
                        className="bg-surface-container-low px-2.5 py-0.5 rounded-md text-[11px] font-label-sm text-muted-gray border border-muted-gray/10 group-hover:border-vibrant-orange/20 group-hover:text-pure-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {remainingTagsCount > 0 && (
                      <button
                        onClick={() => setSelectedProjectModal(project)}
                        className="bg-vibrant-orange/20 text-vibrant-orange px-2 py-0.5 rounded-md text-[11px] font-label-sm font-semibold cursor-pointer hover:bg-vibrant-orange hover:text-pure-white transition-colors"
                      >
                        +{remainingTagsCount} more
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section (Start a Conversation redirects to landing page contact section) */}
        <section className="mt-16 p-8 md:p-12 bg-surface-container-low rounded-3xl border-l-4 border-vibrant-orange flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
          <div>
            <h2 className="font-headline-lg text-2xl md:text-3xl text-pure-white mb-2 font-bold leading-tight">
              Have a project in mind?
            </h2>
            <p className="text-muted-gray font-body-md text-body-md">
              Let&apos;s build something extraordinary together.
            </p>
          </div>
          <Link
            href="/#contact"
            className="bg-vibrant-orange text-pure-white px-8 py-3.5 rounded-xl font-label-md text-label-md hover:brightness-110 active:scale-95 transition-all text-center whitespace-nowrap shadow-[0_0_20px_rgba(244,108,56,0.3)]"
          >
            Start a Conversation
          </Link>
        </section>
      </main>

      {/* Glassmorphism Dialogue Modal */}
      {selectedProjectModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-surface-container-high border border-vibrant-orange/40 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProjectModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-muted-gray hover:text-pure-white hover:bg-vibrant-orange transition-all z-20 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 35:65 Responsive Layout */}
            <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6 items-start overflow-y-auto overflow-x-hidden max-h-[80vh] pr-1">
              {/* Left Column: Image (35% on Desktop, compact height on Mobile) */}
              {selectedProjectModal.image ? (
                <div className="relative w-full h-44 md:h-full md:min-h-[240px] max-h-[280px] rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 border border-muted-gray/10">
                  <img
                    src={selectedProjectModal.image}
                    alt={selectedProjectModal.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              ) : (
                <div className="w-full h-44 md:h-full min-h-[200px] rounded-2xl bg-surface-container-highest flex items-center justify-center text-muted-gray">
                  <Terminal className="w-12 h-12" />
                </div>
              )}

              {/* Right Column: Details (65% on Desktop) */}
              <div className="flex flex-col justify-between h-full space-y-4 min-w-0">
                <div className="min-w-0">
                  {/* Title & Featured Badge */}
                  <div className="flex justify-between items-start mb-3 pr-8 flex-wrap gap-2">
                    <h3 className="font-headline-lg text-2xl font-bold text-pure-white break-words">
                      {selectedProjectModal.title}
                    </h3>
                    {selectedProjectModal.isFeatured && (
                      <span className="bg-electric-lime text-surface-charcoal px-3 py-1 rounded-full text-xs font-bold shrink-0">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Full Description with Vertical Scrollbar */}
                  <div className="max-h-[220px] overflow-y-auto overflow-x-hidden pr-2 mb-4">
                    <p className="text-muted-gray text-sm leading-relaxed whitespace-pre-line break-words">
                      {selectedProjectModal.desc}
                    </p>
                  </div>
                </div>

                {/* Tags & Action Link */}
                <div className="space-y-4 pt-3 border-t border-muted-gray/10 min-w-0">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProjectModal.tags &&
                      selectedProjectModal.tags.map((tag: string, idx: number) => (
                        <span
                          key={idx}
                          className="bg-surface-container px-2.5 py-1 rounded-lg text-xs font-label-sm text-pure-white border border-muted-gray/20 break-words"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>

                  {selectedProjectModal.link && (
                    <div className="pt-2 flex items-center">
                      <a
                        href={selectedProjectModal.link}
                        target={selectedProjectModal.link !== "#" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center gap-2.5 w-fit px-7 py-2.5 rounded-full bg-white/[0.07] hover:bg-white/[0.15] text-pure-white font-label-md transition-all duration-300 border border-white/30 hover:border-white/60 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_10px_25px_-5px_rgba(0,0,0,0.6)] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.7),0_0_20px_rgba(255,255,255,0.25)] active:scale-[0.98] cursor-pointer"
                      >
                        <span className="font-semibold tracking-wide text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.5)]">Project</span>
                        <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-muted-gray border-opacity-10">
        <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto gap-stack-md">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="font-headline-md text-headline-md font-bold text-on-surface">
              Yash Vijay
            </div>
            <p className="text-muted-gray font-body-md text-body-md">
              © 2024 Yash Vijay.
            </p>
          </div>
          <div className="flex gap-stack-md flex-wrap justify-center">
            <Link className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="/">Home</Link>
            <Link className="font-body-md text-body-md text-vibrant-orange font-bold transition-all duration-300" href="/projects">Projects</Link>
            <Link className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="/#experience">Experience</Link>
            <Link className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="/#tools">Tools</Link>
            <Link className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="/#blog">Blog</Link>
          </div>
          <div className="flex gap-4">
            <a className="text-muted-gray hover:text-vibrant-orange transition-colors" href="https://github.com/Yashvij19" target="_blank" rel="noopener noreferrer" title="GitHub">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a className="text-muted-gray hover:text-vibrant-orange transition-colors" href="http://www.linkedin.com/in/yashvijay19" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
