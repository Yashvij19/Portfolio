"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { initialProjects } from "../lib/projectsData";
import {
  Flame, Play, Layers,
  LayoutDashboard, ArrowRight, ArrowUpRight,
  CircleDollarSign, Brain, ClipboardList, Code,
  Database, Server, Cpu, Terminal, Zap, GitBranch,
  Boxes, FileCode, Network, Braces, Sparkles, X
} from "lucide-react";

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

const ReactIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
  </svg>
);

const NextjsTechIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M16 16L9 8v8M16 8v5" />
  </svg>
);

const AngularIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 6l1.5 12L12 22l8.5-4L22 6L12 2z" />
    <path d="M12 4.5L6.5 17h2.2l1.1-2.8h4.4l1.1 2.8h2.2L12 4.5zm-1.1 7.8l1.1-2.9 1.1 2.9h-2.2z" />
  </svg>
);

const TailwindIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 6c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.6 1 2.4 1.8C13.8 12 15.6 14 19 14c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.6-1-2.4-1.8C17.2 8 15.4 6 12 6z" />
  </svg>
);

const NodeTechIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const FastifyTechIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const PrismaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L3 18l15 4L12 2z" />
    <path d="M12 2l6 20" />
  </svg>
);

const RedisIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
  </svg>
);

const PostgresIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
  </svg>
);

const MongoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2s-6 6-6 12 6 8 6 8 6-2 6-8-6-12-6-12z" />
    <path d="M12 2v18" />
  </svg>
);

const DockerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 14h16M2 17c1.5 2 4.5 3 10 3s8.5-1 10-3c0-3-2-6-7-6H4c-1.5 0-2 3-2 6z" />
    <rect x="6" y="9" width="3" height="3" rx="0.5" />
    <rect x="10" y="9" width="3" height="3" rx="0.5" />
    <rect x="14" y="9" width="3" height="3" rx="0.5" />
  </svg>
);

const K8sIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 21 7 21 17 12 22 3 17 3 7 12 2" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const PythonTechIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2c-4 0-5 2-5 4v2h6v1H6c-2 0-4 1.5-4 4.5S4 18 6 18h2v-2c0-2 1.5-3.5 3.5-3.5h4.5c1.5 0 2-1 2-2V6c0-2-1.5-4-6-4z" />
  </svg>
);

const OpenaiIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const DsaTreeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="5" r="2.5" />
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="19" r="2.5" />
    <path d="M12 7.5v4.5M12 12L6 16.5M12 12l6 4.5" />
  </svg>
);

const FigmaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 5.5a2.5 2.5 0 1 1-5 0c0-1.38 1.12-2.5 2.5-2.5S12 4.12 12 5.5z" />
    <path d="M12 5.5a2.5 2.5 0 1 1 5 0c0 1.38-1.12 2.5-2.5 2.5H12V3z" />
    <path d="M12 12a2.5 2.5 0 1 1-5 0c0-1.38 1.12-2.5 2.5-2.5S12 10.62 12 12z" />
    <path d="M12 12a2.5 2.5 0 1 1 5 0c0 1.38-1.12 2.5-2.5 2.5H12V9.5z" />
    <path d="M12 18.5a2.5 2.5 0 1 1-5 0c0-1.38 1.12-2.5 2.5-2.5h2.5v5a2.5 2.5 0 0 1-5 0z" />
  </svg>
);

const FramerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 2h14v7H5l7 7H5v7l14-14v-7z" />
  </svg>
);

const toolIcons = {
  web: FramerIcon,
  draw: FigmaIcon,
  payments: CircleDollarSign,
  psychology: Brain,
  sticky_note_2: ClipboardList,
  code: Code
};

export default function PortfolioPage() {
  const [showMoreProjects, setShowMoreProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [hoveredTechCategory, setHoveredTechCategory] = useState<number>(0);
  const [selectedLandingProjectModal, setSelectedLandingProjectModal] = useState<any | null>(null);
  const [activeModalTab, setActiveModalTab] = useState<"overview" | "specs" | "stack">("overview");

  const techCategories = [
    {
      id: "frontend",
      title: "Frontend",
      subtitle: "Web & UI Frameworks",
      icon: LayoutDashboard,
      items: [
        { name: "Next.js", icon: NextjsTechIcon },
        { name: "React", icon: ReactIcon },
        { name: "Angular 19", icon: AngularIcon },
        { name: "Tailwind CSS", icon: TailwindIcon },
        { name: "TypeScript", icon: FileCode }
      ]
    },
    {
      id: "backend",
      title: "Backend",
      subtitle: "Backend & Architecture",
      icon: Layers,
      items: [
        { name: "Node.js", icon: NodeTechIcon },
        { name: "Fastify", icon: FastifyTechIcon },
        { name: "Prisma", icon: PrismaIcon },
        { name: "Redis", icon: RedisIcon },
        { name: ".NET Web API", icon: Cpu }
      ]
    },
    {
      id: "devops",
      title: "DevOps",
      subtitle: "Cloud & Infrastructure",
      icon: Server,
      items: [
        { name: "Docker", icon: DockerIcon },
        { name: "Kubernetes", icon: K8sIcon },
        { name: "CI/CD", icon: GitBranch }
      ]
    },
    {
      id: "database",
      title: "DataBase",
      subtitle: "Data & Systems",
      icon: Database,
      items: [
        { name: "PostgreSQL", icon: PostgresIcon },
        { name: "MongoDB", icon: MongoIcon },
        { name: "SQL", icon: Database },
        { name: "System Design", icon: Boxes }
      ]
    },
    {
      id: "genai",
      title: "Gen AI",
      subtitle: "Agentic AI & LLMs",
      icon: Brain,
      items: [
        { name: "n8n", icon: Zap },
        { name: "Langflow", icon: Network },
        { name: "OpenAI", icon: OpenaiIcon }
      
      ]
    },
    {
      id: "dsa",
      title: "DSA",
      subtitle: "Algorithms & Problem Solving",
      icon: Code,
      items: [
        { name: "Data Structures", icon: DsaTreeIcon },
        { name: "Algorithms", icon: Braces },
        { name: "Problem Solving", icon: Sparkles },
        { name: "Complexity", icon: Code }
      ]
    }
  ];

  const [profile, setProfile] = useState<any>({
    name: "Yash Vijay",
    title: "Software Engineer",
    headline: "Software Engineer | Specializing in Backend & System Architecture",
    bio: "I am a software engineer focused on building robust, scalable backend systems and efficient architectures. While I possess full-stack proficiency, my core expertise lies in designing high-performance APIs, complex database schemas, and secure data flows. I approach development with a system-design mindset, prioritizing stability, maintainability, and architectural efficiency. Rather than simply building features, I architect the reliable, scalable foundations that drive seamless and effective digital experiences.",
    photoUrl: "/yash.png",
    github: "github.com/Yashvij19",
    linkedin: "linkedin.com/in/yashvijay19"
  });

  const [projects, setProjects] = useState<any[]>(initialProjects);

  const [experiences, setExperiences] = useState<any[]>([
    {
      id: 1,
      company: "Evalueserve India",
      duration: "Aug 2025 - Present",
      role: "Junior Engineer (Full-time)",
      resp: "Contribute to the development and optimization of enterprise-scale applications using Angular 19, .NET Web API, SQL, and the MERN stack. Focus on building scalable applications, improving performance & reliability, optimizing APIs/queries, and implementing security & testing best practices."
    },
    {
      id: 2,
      company: "Evalueserve India",
      duration: "Feb 2025 - Aug 2025",
      role: "Software Engineering Intern",
      resp: "Built a secure full-stack Learning Management System (LMS) using Angular 19, .NET Web API, and SQL. Implemented JWT authentication, Google reCAPTCHA v3, and Microsoft 2FA."
    }
  ]);

  const [blogs, setBlogs] = useState<any[]>([
    {
      id: 1,
      title: "Starting and Growing a Career in Web Design",
      date: "Apr 8, 2022",
      desc: "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
      readTime: "6min read"
    },
    {
      id: 2,
      title: "Create a Landing Page That Performs Great",
      date: "Mar 15, 2022",
      desc: "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads.",
      readTime: "8min read"
    },
    {
      id: 3,
      title: "How Can Designers Prepare for the Future?",
      date: "Feb 20, 2022",
      desc: "AI and automated tools are changing how we approach design. Discover how to stay relevant and evolve alongside these new technologies.",
      readTime: "5min read"
    }
  ]);

  const sectionRefs = {
    home: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
    Tech: useRef<HTMLElement>(null),
    blog: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  };

  // Reset session on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("admin_token");
    }
  }, []);

  // Handle active navigation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const [section, ref] of Object.entries(sectionRefs)) {
        if (ref.current) {
          const top = ref.current.offsetTop;
          const height = ref.current.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: keyof typeof sectionRefs) => {
    e.preventDefault();
    const ref = sectionRefs[targetId];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("https://formsubmit.co/ajax/yashvijay049@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `New Portfolio Inquiry from ${name}`,
          _replyto: email,
          _template: "table"
        })
      });

      if (res.ok) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send message via email API");
      }
    } catch (err) {
      console.error("Failed to deliver message via formsubmit API:", err);
      // Fallback: trigger mailto directly with prefilled details
      window.location.href = `mailto:yashvijay049@gmail.com?subject=${encodeURIComponent(`Portfolio Inquiry from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      setSubmitStatus("success");
      form.reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const featuredProjects = projects.filter((p) => p.isFeatured);
  const extraProjects = projects.filter((p) => !p.isFeatured);

  return (
    <div className="font-body-md text-body-md selection:bg-vibrant-orange selection:text-pure-white bg-surface text-on-surface">
      {/* TopNavBar */}
      <nav className="fixed top-4 right-margin-desktop rounded-full px-6 py-2 z-50 bg-surface/80 backdrop-blur-md border border-muted-gray/10 shadow-md flex items-center gap-stack-md hidden lg:flex">
        <div className="flex gap-6">
          {(["home", "projects", "experience", "Tech"] as const).map((sec) => (
            <a
              key={sec}
              onClick={(e) => handleSmoothScroll(e, sec)}
              className={`font-label-md text-label-md transition-colors duration-200 cursor-pointer capitalize ${activeSection === sec
                  ? "text-vibrant-orange"
                  : "text-on-surface-variant hover:text-vibrant-orange"
                }`}
              href={`#${sec}`}
            >
              {sec}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            sectionRefs.contact.current?.scrollIntoView({ behavior: "smooth" });
          }}
          className="ml-4 px-4 py-1.5 bg-vibrant-orange text-pure-white rounded-full font-label-md text-label-md transition-transform active:scale-90 hover:brightness-115 inline-block cursor-pointer"
        >
          Hire Me
        </a>
      </nav>

      {/* Sidebar & Content Grid */}
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen items-start">
        {/* Left Sidebar */}
        <aside className="w-full lg:w-[350px] lg:flex-shrink-0 px-margin-mobile lg:px-6 py-6 lg:py-8 lg:sticky lg:top-10 z-10">
          <div className="bg-pure-white rounded-3xl p-4 flex flex-col items-center text-center shadow-xl relative group">
            <div className="relative w-full aspect-[0.85] lg:h-60 rounded-2xl overflow-hidden mb-4">
              <img
                alt={`${profile?.name || "Yash Vijay"} Profile`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                src={"/yash.png"}
              />

            </div>
            <h1 className="font-display-lg text-[28px] lg:text-[32px] text-surface-charcoal mb-1 font-bold leading-tight">
              {profile?.name || "Yash Vijay"}
            </h1>
            <p className="text-muted-gray mb-4 px-2 font-body-md text-body-md leading-relaxed">
              {profile?.headline || "Software Engineer | Specializing in Backend & System Architecture"}
            </p>
            <div className="flex gap-4 pb-2 mt-auto">
              <a className="text-vibrant-orange hover:scale-120 transition-transform" href={profile?.github ? `https://${profile.github}` : "https://github.com/Yashvij19"} target="_blank" rel="noopener noreferrer" title="GitHub">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a className="text-vibrant-orange hover:scale-120 transition-transform" href={profile?.linkedin ? `http://${profile.linkedin}` : "http://www.linkedin.com/in/yashvijay19"} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
            {/* Background Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-dashed border-vibrant-orange rounded-full -z-10 opacity-40"></div>
          </div>
        </aside>

        {/* Right Main Content */}
        <main className="flex-grow px-margin-mobile md:px-margin-desktop py-stack-lg space-y-32">
          {/* Hero Content */}
          <section ref={sectionRefs.home} className="pt-8 lg:pt-20" id="home">
            <div className="relative mb-8">
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white block leading-tight">
                SOFTWARE
              </span>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block leading-tight uppercase">
                Engineer
              </span>
            </div>
            <p className="font-body-lg text-body-lg text-muted-gray max-w-2xl mb-12">
              {profile?.bio || "I am a software engineer focused on building robust, scalable backend systems and efficient architectures. While I possess full-stack proficiency, my core expertise lies in designing high-performance APIs, complex database schemas, and secure data flows. I approach development with a system-design mindset, prioritizing stability, maintainability, and architectural efficiency. Rather than simply building features, I architect the reliable, scalable foundations that drive seamless and effective digital experiences."}
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-md">
              <div className="space-y-1">
                <span className="font-display-lg-mobile text-display-lg-mobile text-pure-white">+1.5</span>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gray">Years Of Experience</p>
              </div>
              <div className="space-y-1">
                <span className="font-display-lg-mobile text-display-lg-mobile text-pure-white">+4</span>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-muted-gray">Projects Completed</p>
              </div>
            </div>
          </section>

          {/* Service Blocks */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            <div className="bg-vibrant-orange rounded-3xl p-stack-lg relative overflow-hidden group cursor-pointer h-64 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(244,108,56,0.2)] transition-all duration-300">
              <Layers className="w-10 h-10 text-pure-white" />
              <div>
                <h3 className="font-headline-lg text-[28px] lg:text-headline-lg text-pure-white leading-tight uppercase mb-4">
                  System Architecture
                  <br />
                 Backend Systems
                </h3>
                <div className="w-12 h-12 rounded-full border border-pure-white/30 flex items-center justify-center group-hover:bg-pure-white group-hover:text-vibrant-orange transition-all self-end">
                  <ArrowRight className="w-5 h-5 text-pure-white group-hover:text-vibrant-orange transition-colors" />
                </div>
              </div>
              <svg className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity" height="200" viewBox="0 0 200 200" width="200">
                <path d="M0,100 Q50,0 100,100 T200,100" fill="none" stroke="white" strokeWidth="2"></path>
              </svg>
            </div>
            <div className="bg-electric-lime rounded-3xl p-stack-lg relative overflow-hidden group cursor-pointer h-64 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(197,255,65,0.2)] transition-all duration-300">
              <LayoutDashboard className="w-10 h-10 text-surface-charcoal" />
              <div>
                <h3 className="font-headline-lg text-[28px] lg:text-headline-lg text-surface-charcoal leading-tight uppercase mb-4">
                  Full Stack, Frontend ,
                  <br />
                  Backend, Database
                </h3>
                <div className="w-12 h-12 rounded-full border border-surface-charcoal/30 flex items-center justify-center group-hover:bg-surface-charcoal group-hover:text-electric-lime transition-all">
                  <ArrowRight className="w-5 h-5 text-surface-charcoal group-hover:text-electric-lime transition-colors" />
                </div>
              </div>
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
            </div>
          </section>

          {/* Recent Projects */}
          <section ref={sectionRefs.projects} className="space-y-stack-lg" id="projects">
            <div className="relative">
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">RECENT</h2>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase">Projects</span>
            </div>
            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="relative glass-card rounded-3xl p-5 md:p-6 flex flex-col md:flex-row items-center gap-6 group hover:bg-surface-container-high transition-all duration-300 md:h-44 w-full"
                >
                  <div className="w-full md:w-48 h-32 md:h-full rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 relative">
                    <img
                      alt={`${project.title} Project`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={project.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500&q=80"}
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-center overflow-hidden">
                    <h3 className="font-headline-md text-headline-md text-pure-white mb-1.5 font-bold line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-muted-gray text-xs md:text-sm leading-relaxed line-clamp-2">
                      {project.desc}
                    </p>
                    <button
                      onClick={() => setSelectedLandingProjectModal(selectedLandingProjectModal?.id === project.id ? null : project)}
                      className="text-vibrant-orange hover:underline font-semibold text-xs mt-2 self-start cursor-pointer inline-flex items-center gap-1"
                    >
                      Read More & Tags
                    </button>
                  </div>
                  <a
                    className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-vibrant-orange transition-colors flex-shrink-0"
                    href={project.link || "#"}
                    target={project.link && project.link !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight className="w-6 h-6 text-pure-white" />
                  </a>
                </div>
              ))}
            </div>

            {/* Glassmorphism Dialogue Modal */}
            {selectedLandingProjectModal && (
              <div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-surface/80 backdrop-blur-md animate-fadeIn"
                onClick={() => setSelectedLandingProjectModal(null)}
              >
                <div
                  className="relative w-full max-w-3xl bg-surface-container-high border border-vibrant-orange/40 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden max-h-[90vh] flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedLandingProjectModal(null)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-muted-gray hover:text-pure-white hover:bg-vibrant-orange transition-all z-20 cursor-pointer"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* 35:65 Responsive Layout */}
                  <div className="grid grid-cols-1 md:grid-cols-[35%_65%] gap-6 items-start overflow-y-auto overflow-x-hidden max-h-[80vh] pr-1">
                    {/* Left Column: Image (35% on Desktop, compact height on Mobile) */}
                    {selectedLandingProjectModal.image ? (
                      <div className="relative w-full h-44 md:h-full md:min-h-[240px] max-h-[280px] rounded-2xl overflow-hidden bg-surface-container flex-shrink-0 border border-muted-gray/10">
                        <img
                          src={selectedLandingProjectModal.image}
                          alt={selectedLandingProjectModal.title}
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
                            {selectedLandingProjectModal.title}
                          </h3>
                          {selectedLandingProjectModal.isFeatured && (
                            <span className="bg-electric-lime text-surface-charcoal px-3 py-1 rounded-full text-xs font-bold shrink-0">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Full Description with Vertical Scrollbar */}
                        <div className="max-h-[220px] overflow-y-auto overflow-x-hidden pr-2 mb-4">
                          <p className="text-muted-gray text-sm leading-relaxed whitespace-pre-line break-words">
                            {selectedLandingProjectModal.desc}
                          </p>
                        </div>
                      </div>

                      {/* Tags & Action Link */}
                      <div className="space-y-4 pt-3 border-t border-muted-gray/10 min-w-0">
                        <div className="flex flex-wrap gap-1.5">
                          {selectedLandingProjectModal.tags &&
                            selectedLandingProjectModal.tags.map((tag: string, idx: number) => (
                              <span
                                key={idx}
                                className="bg-surface-container px-2.5 py-1 rounded-lg text-xs font-label-sm text-pure-white border border-muted-gray/20 break-words"
                              >
                                {tag}
                              </span>
                            ))}
                        </div>

                        {selectedLandingProjectModal.link && (
                          <div className="pt-2 flex items-center">
                            <a
                              href={selectedLandingProjectModal.link}
                              target={selectedLandingProjectModal.link !== "#" ? "_blank" : undefined}
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

            <div className="flex justify-center mt-6">
              <Link
                href="/projects"
                className="group flex items-center gap-2 text-muted-gray hover:text-vibrant-orange transition-colors font-label-md text-label-md"
              >
                <span>View All Projects in Details</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </section>

          {/* Experience Timeline */}
          <section ref={sectionRefs.experience} className="space-y-stack-lg" id="experience">
            <div className="relative">
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">1.5 YEARS OF</h2>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase">Experience</span>
            </div>
            <div className="relative pl-8 space-y-12 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[1px] before:bg-muted-gray/20">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="relative">
                  <div className={`absolute -left-[37px] top-2 w-4 h-4 rounded-full ${idx === 0 ? "bg-vibrant-orange" : "bg-muted-gray/40"} border-4 border-surface`}></div>
                  <div className="glass-card p-stack-md rounded-2xl hover:border-vibrant-orange transition-colors duration-300">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                      <div>
                        <h3 className="font-headline-md text-headline-md text-pure-white">{exp.company}</h3>
                        {exp.role && <p className="text-electric-lime text-label-md font-semibold mt-1">{exp.role}</p>}
                      </div>
                      <span className={`${idx === 0 ? "text-vibrant-orange" : "text-muted-gray"} font-label-md text-label-md`}>{exp.duration}</span>
                    </div>
                    <p className="text-muted-gray">{exp.resp}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section ref={sectionRefs.Tech} className="space-y-stack-lg" id="tech">
            <div className="relative">
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">TECH</h2>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase">Stack</span>
            </div>

            

            {/* 6 Category Glass Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {techCategories.map((cat, idx) => {
                const CategoryIcon = cat.icon;
                const isHovered = (hoveredTechCategory === idx);
                return (
                  <div
                    key={cat.id}
                    onMouseEnter={() => setHoveredTechCategory(idx)}
                    className={`glass-card rounded-3xl p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 group ${
                      isHovered
                        ? "border-vibrant-orange bg-surface-container-high/90 shadow-[0_10px_30px_rgba(244,108,56,0.25)] scale-[1.03] backdrop-blur-xl"
                        : "hover:border-vibrant-orange/50 hover:bg-surface-container/80"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isHovered ? "bg-vibrant-orange text-pure-white shadow-lg" : "bg-surface-container text-muted-gray group-hover:text-pure-white group-hover:bg-vibrant-orange/80"
                      }`}>
                        <CategoryIcon className="w-6 h-6" />
                      </div>
                      {/* <ArrowUpRight className={`w-5 h-5 transition-transform ${isHovered ? "text-vibrant-orange translate-x-1 -translate-y-1" : "text-muted-gray group-hover:text-vibrant-orange"}`} /> */}
                    </div>

                    <div className="mb-4">
                      <h3 className="font-headline-md text-xl text-pure-white font-bold mb-1 group-hover:text-vibrant-orange transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-label-sm text-muted-gray">{cat.subtitle}</p>
                    </div>

                    {/* Tech Badges / Pills */}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-muted-gray/10">
                      {cat.items.map((tech, tIdx) => {
                        const TechIconComp = tech.icon;
                        return (
                          <span key={tIdx} className="inline-flex items-center gap-1.5 bg-surface-container-low px-2.5 py-1 rounded-lg text-xs font-label-sm text-muted-gray border border-muted-gray/10 group-hover:border-vibrant-orange/30 group-hover:text-pure-white transition-all">
                            <TechIconComp className="w-3.5 h-3.5 text-vibrant-orange" />
                            {tech.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Design Thoughts
          <section ref={sectionRefs.blog} className="space-y-stack-lg" id="blog">
            <div className="relative">
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">DESIGN</h2>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase">Thoughts</span>
            </div>
            <div className="space-y-4">
              {blogs.map((blog, idx) => (
                <div key={blog.id} className="glass-card p-stack-md rounded-3xl hover:bg-surface-container transition-colors group cursor-pointer border-l-4 border-l-transparent hover:border-l-vibrant-orange">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-headline-md text-headline-md text-pure-white group-hover:text-vibrant-orange transition-colors font-semibold">
                      {blog.title}
                    </h3>
                    <span className="text-muted-gray text-label-sm whitespace-nowrap ml-4">{blog.date}</span>
                  </div>
                  <p className="text-muted-gray max-w-3xl mb-4">{blog.desc}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-label-sm text-muted-gray">{blog.readTime}</span>
                    <ArrowRight className="w-5 h-5 text-vibrant-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* Contact Form */}
          <section ref={sectionRefs.contact} className="space-y-stack-lg pb-20" id="contact">
            <div className="relative">
              <h2 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-pure-white leading-none">LET&apos;S WORK</h2>
              <span className="font-display-lg text-display-lg-mobile lg:text-display-lg text-outline-stroke block uppercase">Together</span>
            </div>
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <form className="space-y-4" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider pl-1">Name</label>
                    <input
                      required
                      name="name"
                      className="w-full bg-surface-container border border-muted-gray/20 rounded-xl px-4 py-2.5 text-pure-white focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange outline-none transition-all"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider pl-1">Email</label>
                    <input
                      required
                      name="email"
                      className="w-full bg-surface-container border border-muted-gray/20 rounded-xl px-4 py-2.5 text-pure-white focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange outline-none transition-all"
                      placeholder="Your@email.com"
                      type="email"
                    />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="font-label-md text-label-md text-on-surface uppercase tracking-wider pl-1">Message</label>
                  <textarea
                    required
                    name="message"
                    className="w-full bg-surface-container border border-muted-gray/20 rounded-xl px-4 py-2.5 text-pure-white focus:border-vibrant-orange focus:ring-1 focus:ring-vibrant-orange outline-none transition-all"
                    placeholder="Tell me about your project..."
                    rows={4}
                  ></textarea>
                </div>
                <button
                  disabled={submitStatus === "loading"}
                  className="w-full md:w-auto bg-vibrant-orange hover:bg-vibrant-orange/90 text-pure-white font-label-md text-label-md px-8 py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(244,108,56,0.3)] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                  type="submit"
                >
                  {submitStatus === "loading" ? "Submitting..." : "Submit Inquiry"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-electric-lime text-label-md mt-2 animate-pulse">
                    Thank you! Your message was submitted successfully.
                  </p>
                )}
              </form>
            </div>
          </section>
        </main>
      </div>



      {/* Footer */}
      <footer className="bg-surface-container w-full py-stack-lg px-margin-mobile md:px-margin-desktop border-t border-muted-gray/5">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-[1440px] mx-auto gap-8">
          <div className="text-center md:text-left">
            <span className="font-headline-lg text-headline-lg font-black text-on-surface block mb-2">Yash Vijay</span>
            <p className="font-body-md text-body-md text-muted-gray">© 2024 Yash Vijay.</p>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <a className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="http://www.linkedin.com/in/yashvijay19" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="font-body-md text-body-md text-muted-gray hover:text-electric-lime transition-all duration-300" href="https://github.com/Yashvij19" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
