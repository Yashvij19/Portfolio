"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  User, Rocket, Briefcase, BookOpen, Settings, LogOut, Bell, Save, 
  Upload, PlusCircle, Edit2, Trash2, Plus, Mail, Phone, MapPin, X 
} from "lucide-react";
import AdminLogin from "./login";

interface Project {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
}

interface Experience {
  id: number;
  company: string;
  duration: string;
  role: string;
  resp: string;
}

interface BlogPost {
  id: number;
  title: string;
  date: string;
  desc: string;
  readTime: string;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<"profile" | "projects" | "experience" | "blog" | "settings">("profile");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("https://lh3.googleusercontent.com/aida-public/AB6AXuC7S08g-z0SM7c5V7Z19_p_XZT7wvQ2DXdj55OU6MQhjGnQf5rJ_vu2JmuGgpzyTE4--334Mx2FQVcNN3mCCgDPv7xq2_Yh2UFFr2jsAq2mBCw6Tktrf5cZl25YK1G8rMh5FwBw9Zo0LBDSpsHKNy4ytwd5GW85-xxq5EyQrnv3M_Yo_byQYg8NkwNKr8vSSOUo3KcOcgZv8jqPsa5Q-Jf26oXJoC3Rn2-1EzzdVHKwccpqCeOl_buuOebFy9S9XHKDo50T72RgCSE");
  
  // Profile settings
  const [profileName, setProfileName] = useState("Yash Vijay");
  const [profileTitle, setProfileTitle] = useState("Software Engineer");
  const [profileHeadline, setProfileHeadline] = useState("Software Engineer | Specializing in Backend & System Architecture");
  const [profileBio, setProfileBio] = useState("I am a software engineer focused on building robust, scalable backend systems and efficient architectures. While I possess full-stack proficiency, my core expertise lies in designing high-performance APIs, complex database schemas, and secure data flows. I approach development with a system-design mindset, prioritizing stability, maintainability, and architectural efficiency. Rather than simply building features, I architect the reliable, scalable foundations that drive seamless and effective digital experiences.");

  // Contact & Social settings
  const [contactEmail, setContactEmail] = useState("yash@example.com");
  const [contactPhone, setContactPhone] = useState("+1 (555) 012-3456");
  const [contactLocation, setContactLocation] = useState("India");
  const [socialGithub, setSocialGithub] = useState("https://github.com/Yashvij19");
  const [socialLinkedin, setSocialLinkedin] = useState("http://www.linkedin.com/in/yashvijay19");
  const [socialTwitter, setSocialTwitter] = useState("");

  // Project List State
  const [projects, setProjects] = useState<Project[]>([]);

  // Experience List State
  const [experiences, setExperiences] = useState<Experience[]>([
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

  // Blog Posts List State
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  // Modal form states
  const [newProjTitle, setNewProjTitle] = useState("");
  const [newProjDesc, setNewProjDesc] = useState("");
  const [newProjTagInput, setNewProjTagInput] = useState("");
  const [newProjTags, setNewProjTags] = useState<string[]>(["React", "Tailwind"]);
  const [newProjImage, setNewProjImage] = useState("https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop");

  // Blog modal / form states (simple add inline)
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogDesc, setNewBlogDesc] = useState("");
  const [newBlogReadTime, setNewBlogReadTime] = useState("5min read");

  // Verify Session Token on Mount
  useEffect(() => {
    function verifySession() {
      if (typeof window === "undefined") return;
      const token = sessionStorage.getItem("admin_token");
      if (token) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }
    verifySession();
  }, []);

  const handleSignOut = async () => {
    sessionStorage.removeItem("admin_token");
    setIsAuthenticated(false);
  };

  const handleProfilePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setProfilePhoto(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    alert("Profile changes saved successfully!");
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProjTitle.trim()) return;

    const created = {
      id: Date.now(),
      title: newProjTitle,
      desc: newProjDesc,
      tags: newProjTags,
      image: newProjImage,
      isFeatured: true
    };

    setProjects([created, ...projects]);
    setIsModalOpen(false);

    setNewProjTitle("");
    setNewProjDesc("");
    setNewProjTags(["React", "Tailwind"]);
  };

  const handleDeleteProject = async (id: number) => {
    if (confirm("Are you sure you want to delete this project?")) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleAddTechTag = () => {
    if (newProjTagInput.trim() && !newProjTags.includes(newProjTagInput.trim())) {
      setNewProjTags([...newProjTags, newProjTagInput.trim()]);
      setNewProjTagInput("");
    }
  };

  const handleRemoveTechTag = (tag: string) => {
    setNewProjTags(newProjTags.filter(t => t !== tag));
  };

  const handleAddExperience = async () => {
    const created = {
      id: Date.now(),
      company: "New Company",
      duration: "Jan 2026 - Present",
      role: "Software Developer",
      resp: "Describe your key contributions and achievements..."
    };
    setExperiences([...experiences, created]);
  };

  const handleExperienceChange = (id: number, field: keyof Experience, value: string) => {
    setExperiences(experiences.map(exp => {
      if (exp.id === id) {
        return { ...exp, [field]: value };
      }
      return exp;
    }));
  };

  const handleSaveExperience = async (id: number) => {
    alert("Experience entry saved successfully!");
  };

  const handleRemoveExperience = async (id: number) => {
    if (confirm("Are you sure you want to remove this experience entry?")) {
      setExperiences(experiences.filter(exp => exp.id !== id));
    }
  };

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle.trim()) return;

    const created = {
      id: Date.now(),
      title: newBlogTitle,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
      desc: newBlogDesc,
      readTime: newBlogReadTime
    };

    setBlogPosts([created, ...blogPosts]);
    setNewBlogTitle("");
    setNewBlogDesc("");
  };

  const handleDeleteBlog = async (id: number) => {
    if (confirm("Are you sure you want to delete this design thought article?")) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#151312] flex items-center justify-center text-pure-white">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 border-2 border-[#F46C38] border-t-transparent rounded-full animate-spin"></div>
          <span className="font-label-md text-[#998F8F]">Authenticating Session...</span>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AdminLogin onLoginSuccess={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="bg-surface text-on-surface selection:bg-vibrant-orange selection:text-pure-white min-h-screen">
      <div className="flex min-h-screen">
        {/* Sidebar Navigation */}
        <aside className="w-64 fixed inset-y-0 left-0 bg-surface-container-low border-r border-muted-gray border-opacity-10 z-50 flex flex-col hidden md:flex">
          <div className="px-margin-mobile py-stack-lg">
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface">
              Yash Vijay
            </h1>
            <p className="text-label-sm font-label-sm text-muted-gray uppercase tracking-widest mt-2">
              Super Admin
            </p>
          </div>
          <nav className="flex-1 px-4 space-y-2">
            {(["profile", "projects", "experience", "blog", "settings"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full flex items-center px-4 py-3 text-label-md font-label-md transition-all group rounded-lg text-left cursor-pointer ${
                  activeTab === tab
                    ? "sidebar-active font-semibold text-vibrant-orange"
                    : "text-muted-gray hover:text-on-surface hover:bg-surface-container-high"
                }`}
              >
                {tab === "profile" && <User className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />}
                {tab === "projects" && <Rocket className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />}
                {tab === "experience" && <Briefcase className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />}
                {tab === "blog" && <BookOpen className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />}
                {tab === "settings" && <Settings className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />}
                <span className="capitalize">{tab === "settings" ? "Global Settings" : tab}</span>
              </button>
            ))}
          </nav>
          <div className="p-4 border-t border-muted-gray border-opacity-10">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center px-4 py-3 bg-surface-container-high text-muted-gray hover:text-vibrant-orange rounded-lg transition-colors cursor-pointer"
            >
              <LogOut className="w-5 h-5 mr-2" />
              <span className="font-label-md text-label-md">Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 md:ml-64 bg-surface min-h-screen flex flex-col">
          {/* Header Bar */}
          <header className="sticky top-0 z-40 bg-surface/80 backdrop-blur-md px-margin-mobile md:px-margin-desktop py-4 border-b border-muted-gray border-opacity-5 flex justify-between items-center">
            <div className="md:hidden">
              <h1 className="font-headline-md text-headline-md font-bold text-on-surface">AA</h1>
            </div>
            <div className="flex items-center space-x-4 ml-auto">
              <div className="flex items-center space-x-2 bg-surface-container-high px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 rounded-full bg-electric-lime animate-pulse"></div>
                <span className="text-label-sm font-label-sm text-on-surface">System Live</span>
              </div>
              <button className="p-2 text-muted-gray hover:text-vibrant-orange transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 rounded-full overflow-hidden border border-vibrant-orange">
                <img
                  className="w-full h-full object-cover"
                  alt="Admin headshot"
                  src={profilePhoto}
                />
              </div>
            </div>
          </header>

          <div className="p-margin-mobile md:p-margin-desktop space-y-stack-lg max-w-6xl mx-auto flex-grow w-full">
            
            {/* Active Tab Panel: Profile */}
            {activeTab === "profile" && (
              <section className="space-y-stack-md animate-in fade-in duration-200" id="profile">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      Profile Identity
                    </h2>
                    <p className="text-body-md text-muted-gray">Manage your primary brand presence and hero content.</p>
                  </div>
                  <button
                    onClick={handleSave}
                    className="bg-vibrant-orange text-pure-white px-6 py-2.5 rounded-lg font-label-md hover:brightness-110 transition-all flex items-center shadow-lg shadow-vibrant-orange/20 active:scale-95 cursor-pointer"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                  <div className="lg:col-span-1 space-y-stack-md">
                    <div className="bg-surface-container-low p-stack-md rounded-xl border border-muted-gray border-opacity-10 text-center space-y-4">
                      <div className="relative w-40 h-40 mx-auto group">
                        <img
                          className="w-full h-full rounded-full object-cover border-2 border-vibrant-orange"
                          alt="Profile Preview"
                          src={profilePhoto}
                        />
                        <label
                          className="absolute inset-0 bg-surface-charcoal/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                          htmlFor="profile-upload"
                        >
                          <Upload className="text-pure-white w-10 h-10" />
                        </label>
                        <input
                          className="hidden"
                          id="profile-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePhotoChange}
                        />
                      </div>
                      <div>
                        <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                          {profileName}
                        </h3>
                        <p className="text-label-md text-vibrant-orange">{profileTitle}</p>
                      </div>
                      <button
                        onClick={() => setProfilePhoto("https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400")}
                        className="w-full py-2 border border-muted-gray border-opacity-20 rounded-lg text-label-md hover:border-vibrant-orange transition-colors cursor-pointer"
                      >
                        Reset Photo
                      </button>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-surface-container-low p-stack-md rounded-xl border border-muted-gray border-opacity-10 space-y-4">
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-muted-gray uppercase tracking-widest">
                        Full Name
                      </label>
                      <input
                        className="w-full bg-surface border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-vibrant-orange"
                        type="text"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-muted-gray uppercase tracking-widest">
                        Job Title
                      </label>
                      <input
                        className="w-full bg-surface border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-vibrant-orange"
                        type="text"
                        value={profileTitle}
                        onChange={(e) => setProfileTitle(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-muted-gray uppercase tracking-widest">
                        Headline
                      </label>
                      <input
                        className="w-full bg-surface border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-vibrant-orange"
                        type="text"
                        value={profileHeadline}
                        onChange={(e) => setProfileHeadline(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-label-sm font-label-sm text-muted-gray uppercase tracking-widest">
                        Bio / Introduction
                      </label>
                      <textarea
                        className="w-full bg-surface border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 font-body-md text-on-surface resize-none focus:border-vibrant-orange"
                        rows={6}
                        value={profileBio}
                        onChange={(e) => setProfileBio(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Active Tab Panel: Projects */}
            {activeTab === "projects" && (
              <section className="space-y-stack-md animate-in fade-in duration-200" id="projects">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      Project Portfolio
                    </h2>
                    <p className="text-body-md text-muted-gray">Curate your best work for the world to see.</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-electric-lime text-surface px-6 py-2.5 rounded-lg font-label-md font-bold hover:brightness-110 transition-all flex items-center shadow-lg shadow-electric-lime/10 active:scale-95 cursor-pointer"
                  >
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Add Project
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {projects.map((proj) => (
                    <div key={proj.id} className="bg-surface-container-low rounded-xl border-l-4 border-vibrant-orange overflow-hidden group">
                      <div className="h-48 overflow-hidden relative">
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={proj.title}
                          src={proj.image}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                      </div>
                      <div className="p-stack-md space-y-stack-sm">
                        <div className="flex justify-between items-start">
                          <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                            {proj.title}
                          </h3>
                          <div className="flex space-x-2">
                            <button className="text-muted-gray hover:text-vibrant-orange cursor-pointer">
                              <Edit2 className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteProject(proj.id)}
                              className="text-muted-gray hover:text-error cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <p className="text-body-md text-muted-gray line-clamp-2">{proj.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {proj.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-surface-container-high rounded-full text-label-sm text-electric-lime border border-electric-lime/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Active Tab Panel: Experience */}
            {activeTab === "experience" && (
              <section className="space-y-stack-md animate-in fade-in duration-200" id="experience">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      Work Experience
                    </h2>
                    <p className="text-body-md text-muted-gray">Highlight your professional journey and key milestones.</p>
                  </div>
                  <button
                    onClick={handleAddExperience}
                    className="bg-surface-container-high border border-muted-gray border-opacity-20 text-on-surface px-6 py-2.5 rounded-lg font-label-md hover:bg-surface-container-highest transition-all flex items-center active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-5 h-5 mr-2" />
                    Add Entry
                  </button>
                </div>
                <div className="space-y-stack-sm">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="bg-surface-container-low p-stack-md rounded-xl border border-muted-gray border-opacity-10">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
                        <div className="md:col-span-1 space-y-4">
                          <div className="space-y-1">
                            <label className="text-label-sm text-muted-gray uppercase">Company</label>
                            <input
                              className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                              type="text"
                              value={exp.company}
                              onChange={(e) => handleExperienceChange(exp.id, "company", e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-label-sm text-muted-gray uppercase">Duration</label>
                            <input
                              className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                              type="text"
                              value={exp.duration}
                              onChange={(e) => handleExperienceChange(exp.id, "duration", e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="md:col-span-3 space-y-4">
                          <div className="space-y-1">
                            <label className="text-label-sm text-muted-gray uppercase">Role Title</label>
                            <input
                              className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                              type="text"
                              value={exp.role}
                              onChange={(e) => handleExperienceChange(exp.id, "role", e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="text-label-sm text-muted-gray uppercase">Responsibilities</label>
                            <textarea
                              className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                              rows={3}
                              value={exp.resp}
                              onChange={(e) => handleExperienceChange(exp.id, "resp", e.target.value)}
                            ></textarea>
                          </div>
                          <div className="flex justify-between items-center pt-2">
                            <button
                              onClick={() => handleSaveExperience(exp.id)}
                              className="text-electric-lime font-label-md flex items-center px-3 py-1 hover:bg-electric-lime/10 rounded-lg transition-colors cursor-pointer"
                            >
                              <Save className="w-4 h-4 mr-1" /> Save Entry
                            </button>
                            <button
                              onClick={() => handleRemoveExperience(exp.id)}
                              className="text-error font-label-md flex items-center px-3 py-1 hover:bg-error/10 rounded-lg transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4 mr-1" /> Remove Entry
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Active Tab Panel: Blog */}
            {activeTab === "blog" && (
              <section className="space-y-stack-md animate-in fade-in duration-200" id="blog">
                <div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                    Blog / Design Thoughts
                  </h2>
                  <p className="text-body-md text-muted-gray">Write articles and share insights with your audience.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
                  <div className="lg:col-span-1">
                    <form onSubmit={handleAddBlog} className="bg-surface-container-low p-stack-md rounded-xl border border-muted-gray border-opacity-10 space-y-4">
                      <h3 className="text-label-md font-label-md text-vibrant-orange uppercase font-bold">New Article</h3>
                      <div className="space-y-1">
                        <label className="text-label-sm text-muted-gray uppercase">Title</label>
                        <input
                          required
                          className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                          placeholder="Article title..."
                          type="text"
                          value={newBlogTitle}
                          onChange={(e) => setNewBlogTitle(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-label-sm text-muted-gray uppercase">Read Time</label>
                        <input
                          className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface"
                          placeholder="e.g. 5min read"
                          type="text"
                          value={newBlogReadTime}
                          onChange={(e) => setNewBlogReadTime(e.target.value)}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-label-sm text-muted-gray uppercase">Excerpt</label>
                        <textarea
                          required
                          className="w-full bg-surface border border-muted-gray border-opacity-10 rounded-lg px-3 py-2 text-on-surface resize-none"
                          placeholder="Short summary..."
                          rows={3}
                          value={newBlogDesc}
                          onChange={(e) => setNewBlogDesc(e.target.value)}
                        ></textarea>
                      </div>
                      <button
                        className="w-full bg-vibrant-orange text-pure-white py-2 rounded-lg font-bold hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                        type="submit"
                      >
                        Publish Post
                      </button>
                    </form>
                  </div>
                  <div className="lg:col-span-2 space-y-3">
                    <h3 className="text-label-md font-label-md text-electric-lime uppercase font-bold">Published Articles</h3>
                    {blogPosts.map((post) => (
                      <div key={post.id} className="bg-surface-container-low p-4 rounded-xl border border-muted-gray border-opacity-10 flex justify-between gap-4">
                        <div>
                          <h4 className="font-headline-md text-base text-pure-white font-semibold">{post.title}</h4>
                          <p className="text-muted-gray text-xs mt-1">{post.date} • {post.readTime}</p>
                          <p className="text-muted-gray text-sm mt-2 line-clamp-2">{post.desc}</p>
                        </div>
                        <button
                          onClick={() => handleDeleteBlog(post.id)}
                          className="text-muted-gray hover:text-error self-start cursor-pointer"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Active Tab Panel: Settings */}
            {activeTab === "settings" && (
              <section className="space-y-stack-md animate-in fade-in duration-200" id="settings">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
                      Global Settings
                    </h2>
                    <p className="text-body-md text-muted-gray">Update your public contact info and external profiles.</p>
                  </div>
                  <button
                    onClick={handleSave}
                    className="bg-vibrant-orange text-pure-white px-6 py-2.5 rounded-lg font-label-md hover:brightness-110 transition-all flex items-center shadow-lg shadow-vibrant-orange/20 active:scale-95 cursor-pointer"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </button>
                </div>
                <div className="bg-surface-container-low p-stack-md rounded-xl border border-muted-gray border-opacity-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                    <div className="space-y-stack-sm">
                      <h3 className="text-label-md font-label-md text-vibrant-orange uppercase mb-4 font-bold">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <Mail className="w-5 h-5 text-muted-gray ml-2" />
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <Phone className="w-5 h-5 text-muted-gray ml-2" />
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="text"
                            value={contactPhone}
                            onChange={(e) => setContactPhone(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <MapPin className="w-5 h-5 text-muted-gray ml-2" />
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="text"
                            value={contactLocation}
                            onChange={(e) => setContactLocation(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-stack-sm">
                      <h3 className="text-label-md font-label-md text-electric-lime uppercase mb-4 font-bold">
                        Social Presence
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <span className="p-2 font-bold text-muted-gray text-xs w-10 text-center">GH</span>
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="text"
                            value={socialGithub}
                            onChange={(e) => setSocialGithub(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <span className="p-2 font-bold text-muted-gray text-xs w-10 text-center">LI</span>
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="text"
                            value={socialLinkedin}
                            onChange={(e) => setSocialLinkedin(e.target.value)}
                          />
                        </div>
                        <div className="flex items-center space-x-3 bg-surface p-1 rounded-lg border border-muted-gray border-opacity-10">
                          <span className="p-2 font-bold text-muted-gray text-xs w-10 text-center">TW</span>
                          <input
                            className="bg-transparent border-none w-full focus:ring-0 text-on-surface px-2 py-1 outline-none"
                            type="text"
                            value={socialTwitter}
                            onChange={(e) => setSocialTwitter(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}

            <footer className="py-stack-lg text-center text-label-sm text-muted-gray opacity-50 border-t border-muted-gray/5 mt-auto">
              © 2024 Yash Vijay. Built with Lumina Noir aesthetic.
            </footer>
          </div>
        </main>
      </div>

      {/* Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-surface/90 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative w-full max-w-2xl bg-surface-container rounded-2xl border border-muted-gray border-opacity-20 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300 z-10">
            <div className="p-6 border-b border-muted-gray border-opacity-10 flex justify-between items-center">
              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold">
                Add New Project
              </h3>
              <button
                className="text-muted-gray hover:text-on-surface cursor-pointer flex items-center justify-center"
                onClick={() => setIsModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar" onSubmit={handleAddProject}>
              <div className="space-y-2">
                <label className="text-label-sm text-muted-gray uppercase tracking-widest">
                  Project Title
                </label>
                <input
                  required
                  className="w-full bg-surface-container-low border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 text-on-surface"
                  placeholder="e.g. Lumina Noir Dashboard"
                  type="text"
                  value={newProjTitle}
                  onChange={(e) => setNewProjTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm text-muted-gray uppercase tracking-widest">
                  Description
                </label>
                <textarea
                  required
                  className="w-full bg-surface-container-low border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 text-on-surface resize-none"
                  placeholder="Briefly describe the project goals and your role..."
                  rows={4}
                  value={newProjDesc}
                  onChange={(e) => setNewProjDesc(e.target.value)}
                ></textarea>
              </div>
              <div className="space-y-2">
                <label className="text-label-sm text-muted-gray uppercase tracking-widest">
                  Image URL
                </label>
                <input
                  className="w-full bg-surface-container-low border border-muted-gray border-opacity-20 rounded-lg px-4 py-3 text-on-surface"
                  type="text"
                  value={newProjImage}
                  onChange={(e) => setNewProjImage(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-label-sm text-muted-gray uppercase tracking-widest">
                  Technology Tags
                </label>
                <div className="flex flex-wrap gap-2 mb-2" id="tech-tags-list">
                  {newProjTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-vibrant-orange/10 text-vibrant-orange rounded-full text-xs font-bold flex items-center"
                    >
                      {tag}
                      <X
                        onClick={() => handleRemoveTechTag(tag)}
                        className="w-3 h-3 ml-1 cursor-pointer hover:text-pure-white"
                      />
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <input
                    className="flex-1 bg-surface-container-low border border-muted-gray border-opacity-20 rounded-lg px-4 py-2 text-on-surface text-sm"
                    placeholder="Add tag (e.g. Next.js)"
                    type="text"
                    value={newProjTagInput}
                    onChange={(e) => setNewProjTagInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleAddTechTag();
                      }
                    }}
                  />
                  <button
                    onClick={handleAddTechTag}
                    className="px-4 py-2 bg-surface-container-highest text-on-surface rounded-lg cursor-pointer"
                    type="button"
                  >
                    Add
                  </button>
                </div>
              </div>
              <div className="p-6 border-t border-muted-gray border-opacity-10 flex justify-end space-x-4">
                <button
                  className="px-6 py-2.5 text-muted-gray hover:text-on-surface cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="px-8 py-2.5 bg-vibrant-orange text-pure-white rounded-lg font-bold shadow-lg shadow-vibrant-orange/20 active:scale-95 transition-transform cursor-pointer"
                  type="submit"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
