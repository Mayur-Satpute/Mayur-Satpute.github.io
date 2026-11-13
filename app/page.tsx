"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
  User,
  MessageSquare,
  Phone,
  MessageCircle,
  Code2,
  Award,
  Sparkles,
  ExternalLink,
  MapPin,
  Instagram,
  Terminal,
  Database,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Download,
  Link2
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const highlights = [
    { label: "Role", value: "Software Engineer" },
    { label: "Core Stack", value: "Python • Django • SQL" },
    { label: "Modernization", value: "ERP & Cloud Web Apps" },
    { label: "Creator", value: "@buildwithmayurr" }
  ];

  const experiences = [
    {
      role: "Software Engineer",
      company: "Texto Digital Softwares Pvt Ltd",
      location: "Navi Mumbai, IND",
      period: "May 2026 – Sep 2026",
      tag: "Full-time",
      achievements: [
        "Architected and executed modernization of legacy .NET/C# systems into high-performance web applications, handling API integration, database migrations, and core business logic.",
        "Engineered essential ERP modules including Authentication, User Management, Employee Master, and Salary Master with robust Role-Based Access Control (RBAC), validation, and optimized CRUD pipelines.",
        "Delivered web modernization initiatives utilizing NextJS, Node.js, PostgreSQL, and Drizzle ORM, implementing scalable Multi-Tenant workflows.",
        "Designed and implemented Subscription Management and Tenant Subscription Control engines spanning custom pricing tiers, feature packages, and quota enforcement.",
        "Integrated external WhatsApp Cloud APIs covering Template Catalog, Carousel Template, and interactive messaging flows with rigorous Postman automation suites."
      ],
      skills: ["Python", "Django", "REST APIs", "RBAC", "NextJS", "Node.js", "PostgreSQL", "Drizzle ORM", "Postman", "C# / .NET"]
    }
  ];

  const projects = [
    {
      title: "Online Bookstore API",
      category: "Backend Architecture & Security",
      description: "Engineered scalable RESTful API services for an online bookstore ecosystem using Django REST Framework and Django ORM. Features robust JWT authentication, complex relational models, and comprehensive Postman test coverage.",
      skills: ["Python", "Django REST Framework", "Django ORM", "JWT Auth", "Postman", "RBAC", "SQL"],
      github: "https://github.com/Mayur-Satpute"
    },
    {
      title: "MultiPDF AI Assistant",
      category: "Generative AI & RAG",
      description: "Production-ready document intelligence app utilizing Gemini API, LangChain, FAISS vector search, and Streamlit. Enables conversational querying across multi-page PDF documents with semantic chunking and retrieval-augmented context grounding.",
      skills: ["Python", "Gemini API", "LangChain", "FAISS", "Vector Search", "RAG", "Streamlit"],
      github: "https://github.com/Mayur-Satpute"
    }
  ];

  const skillGroups = [
    {
      title: "Backend & Systems",
      icon: <Terminal className="h-4 w-4 text-blue-400" />,
      items: ["Python", "Django", "Django REST Framework", "RESTful APIs", "JWT Auth", "RBAC", "C# / .NET (Migration)", "CRUD Workflows"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-4 w-4 text-emerald-400" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Drizzle ORM", "Django ORM", "Data Modeling"]
    },
    {
      title: "AI & Modern Stack",
      icon: <Cpu className="h-4 w-4 text-purple-400" />,
      items: ["Gemini API", "LangChain", "FAISS", "RAG Pipelines", "Claude Code", "Gemini Agent", "AI-Assisted Engineering"]
    },
    {
      title: "Web & Developer Tooling",
      icon: <Layers className="h-4 w-4 text-amber-400" />,
      items: ["NextJS", "Node.js", "Postman", "Git / GitHub", "Docker Basics", "Tailwind CSS", "Bootstrap", "Antigravity IDE"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "MGM College of Computer Science and Information Technology",
      location: "Navi Mumbai, IND",
      period: "2022 – 2025",
      badge: "CGPA 8.65"
    },
    {
      degree: "Higher Secondary Certificate (HSC – Science)",
      institution: "BNN College of Science",
      location: "Bhiwandi, IND",
      period: "2021 – 2022",
      badge: "Science"
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "P.R. High School",
      location: "Bhiwandi, IND",
      period: "2019 – 2020",
      badge: "82.80%"
    }
  ];

  const certifications = [
    { name: "Python Programming Certification", year: "2025" },
    { name: "SQL for Data Management Certification", year: "2026" },
    { name: "Django Web Development Certification", year: "2026" }
  ];

  const events = [
    {
      title: "Build with AI Bootcamp - AI Agents & Automation",
      org: "Google for Developers & Hack2Skill"
    },
    {
      title: "AWS Summit Mumbai",
      org: "Cloud Architecture, Scalable Services & AI/ML Innovations"
    },
    {
      title: "Cloud Community Days Mumbai",
      org: "Google Cloud, Gemini, and Modern Cloud Security"
    }
  ];

  return (
    <main className="min-h-screen bg-[#070b14] bg-grid-pattern relative overflow-x-hidden w-full selection:bg-blue-500/20 selection:text-blue-300">
      {/* Ambient Radial Glows - strictly bounded */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-[250px] bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-[80px] pointer-events-none" />
      <div className="absolute top-96 right-0 w-[200px] h-[200px] bg-purple-600/10 blur-[80px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-20 relative z-10 w-full overflow-hidden">

        {/* HERO SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-10 md:mb-14 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-8 pb-10 md:pb-12 border-b border-white/[0.08] w-full"
        >
          <div className="flex-1 w-full space-y-3.5">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 max-w-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">Available for Software & Backend Roles</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white break-words">
              Mayur <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Satpute</span>
            </h1>

            <p className="text-sm sm:text-base md:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed">
              Software Engineer specializing in <span className="text-white font-medium">Python, Django, scalable REST APIs</span>, and modernizing complex enterprise systems.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-blue-400" /> Mumbai, India
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a
                href="https://www.instagram.com/buildwithmayurr/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-pink-400 hover:text-pink-300 transition-colors"
              >
                <Instagram className="h-3.5 w-3.5" /> Tech Creator @buildwithmayurr
              </a>
            </div>

            {/* CTA Buttons - 2x2 grid on mobile, row on tablet/desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center md:justify-start gap-2 pt-2 w-full">
              <Button asChild className="col-span-2 sm:col-auto bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 transition-all rounded-lg h-10 text-xs sm:text-sm">
                <a href="mailto:mayursatpute246@gmail.com">
                  <Mail className="h-4 w-4 mr-2 shrink-0" /> Get in Touch
                </a>
              </Button>

              <Button variant="outline" asChild className="border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 rounded-lg h-10 text-xs sm:text-sm">
                <a href="https://linktr.ee/buildwithmayurr" target="_blank" rel="noopener noreferrer">
                  <Link2 className="h-4 w-4 mr-1.5 text-emerald-400 shrink-0" /> Linktree
                </a>
              </Button>

              <Button variant="outline" asChild className="border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-lg h-10 text-xs sm:text-sm">
                <a href="https://github.com/Mayur-Satpute" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1.5 shrink-0" /> GitHub
                </a>
              </Button>

              <Button variant="outline" asChild className="col-span-2 sm:col-auto border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-lg h-10 text-xs sm:text-sm">
                <a href="https://linkedin.com/in/mayur7pute" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-1.5 shrink-0" /> LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Metrics Bento Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-sm md:w-72 glass-panel p-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden mx-auto md:mx-0"
          >
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/[0.08]">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                          MS
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-white">Mayur Satpute</p>
                          <p className="text-xs text-slate-400">Backend & Web Apps</p>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {highlights.map((h, i) => (
                          <div key={i} className="flex justify-between items-center text-xs">
                            <span className="text-slate-400">{h.label}</span>
                            <span className="text-slate-200 font-medium">{h.value}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* TABS NAVIGATION */}
                  <Tabs defaultValue="about" onValueChange={setActiveTab} className="w-full">
                      <div className="flex justify-center mb-8 sticky top-4 z-30">
                        <div className="w-full max-w-full overflow-x-auto pb-1 scrollbar-none flex justify-center">
                          <TabsList className="bg-slate-900/90 p-1.5 border border-white/10 rounded-xl backdrop-blur-xl gap-1 h-auto flex shrink-0 shadow-2xl">
                            {[
                              { value: "about", icon: <User className="h-3.5 w-3.5 mr-1.5" />, label: "About" },
                              { value: "experience", icon: <Briefcase className="h-3.5 w-3.5 mr-1.5" />, label: "Experience" },
                              { value: "projects", icon: <Code2 className="h-3.5 w-3.5 mr-1.5" />, label: "Projects" },
                              { value: "education", icon: <GraduationCap className="h-3.5 w-3.5 mr-1.5" />, label: "Education" },
                              { value: "contact", icon: <MessageSquare className="h-3.5 w-3.5 mr-1.5" />, label: "Contact" }
                            ].map(tab => (
                              <TabsTrigger
                                key={tab.value}
                                value={tab.value}
                                className="px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 hover:text-slate-200"
                              >
                                {tab.icon}
                                {tab.label}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                        </div>
                      </div>

                      {/* TAB: ABOUT & SKILLS */}
                      <TabsContent value="about" className="focus-visible:outline-none">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

                          {/* Summary Card */}
                          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
                            <div className="flex items-center gap-2 mb-4">
                              <Sparkles className="h-5 w-5 text-blue-400" />
                              <h2 className="text-xl font-bold text-white tracking-tight">Executive Summary</h2>
                            </div>
                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
                              Software Engineer with hands-on experience in <strong>ERP and web application modernization</strong>,
                              <strong> REST APIs, authentication, RBAC</strong>, and database workflows. Proven proficiency across
                              <strong> Python, Django, Django REST Framework, SQL</strong>, and integrating cutting-edge AI models (Gemini API, LangChain) into real-world applications.
                              Passionate about engineering reliable, maintainable backend infrastructure and sharing technical knowledge as a content creator.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                              <span className="text-xs text-slate-400 self-center mr-2">Spoken Languages:</span>
                              {["English", "Hindi", "Marathi"].map(lang => (
                                <Badge key={lang} variant="outline" className="border-white/10 text-slate-300 text-xs py-0.5">
                                  {lang}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Categorized Skills Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {skillGroups.map((group, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="glass-panel p-6 rounded-2xl border border-white/[0.08] hover:border-blue-500/30 transition-all"
                              >
                                <div className="flex items-center gap-2.5 mb-4">
                                  <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                                    {group.icon}
                                  </div>
                                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5">
                                  {group.items.map(item => (
                                    <span
                                      key={item}
                                      className="px-2.5 py-1 text-xs rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.06] hover:border-blue-400/40 hover:bg-blue-500/10 transition-all"
                                    >
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </TabsContent>

                      {/* TAB: EXPERIENCE */}
                      <TabsContent value="experience" className="focus-visible:outline-none">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                          {experiences.map((exp, idx) => (
                            <div
                              key={idx}
                              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden"
                            >
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-5 border-b border-white/[0.08]">
                                <div>
                                  <div className="flex items-center gap-3 mb-1">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <Badge className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs">
                                      {exp.tag}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-slate-300 font-medium">
                                    {exp.company} <span className="text-slate-500">•</span> <span className="text-slate-400">{exp.location}</span>
                                  </p>
                                </div>
                                <div className="text-xs sm:text-sm font-medium text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] w-fit">
                                  {exp.period}
                                </div>
                              </div>

                              {/* Achievements */}
                              <div className="py-6 space-y-3.5">
                                {exp.achievements.map((ach, i) => (
                                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                                    <span>{ach}</span>
                                  </div>
                                ))}
                              </div>

                              {/* Tags */}
                              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                                {exp.skills.map(s => (
                                  <Badge key={s} variant="outline" className="border-white/10 text-slate-300 bg-white/[0.02] text-xs">
                                    {s}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </TabsContent>

                      {/* TAB: PROJECTS */}
                      <TabsContent value="projects" className="focus-visible:outline-none">
                        <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {projects.map((proj, idx) => (
                            <motion.div
                              key={idx}
                              variants={fadeIn}
                              whileHover={{ y: -4 }}
                              transition={{ duration: 0.2 }}
                              className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-blue-500/40 flex flex-col justify-between transition-all"
                            >
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                                    {proj.category}
                                  </span>
                                  <Button variant="ghost" size="sm" asChild className="h-8 px-2 text-xs text-slate-400 hover:text-white hover:bg-white/[0.06]">
                                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                                      <Github className="h-4 w-4 mr-1" /> Code <ArrowUpRight className="h-3 w-3 ml-0.5" />
                                    </a>
                                  </Button>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">
                                  {proj.title}
                                </h3>

                                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                                  {proj.description}
                                </p>
                              </div>

                              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                                {proj.skills.map(skill => (
                                  <span key={skill} className="px-2 py-0.5 text-xs rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]">
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </TabsContent>

                      {/* TAB: EDUCATION & CERTIFICATIONS */}
                      <TabsContent value="education" className="focus-visible:outline-none">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">

                          {/* Academics */}
                          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08]">
                            <div className="flex items-center gap-2 mb-6">
                              <GraduationCap className="h-5 w-5 text-blue-400" />
                              <h2 className="text-xl font-bold text-white tracking-tight">Academic Background</h2>
                            </div>

                            <div className="space-y-6">
                              {education.map((edu, idx) => (
                                <div key={idx} className="relative pl-6 border-l-2 border-blue-500/30 last:border-l-0 pb-2">
                                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#070b14] border-2 border-blue-400" />
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                                    <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                                    <Badge className="w-fit bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                                      {edu.badge}
                                    </Badge>
                                  </div>
                                  <p className="text-sm text-slate-300">{edu.institution} • <span className="text-slate-400">{edu.location}</span></p>
                                  <p className="text-xs text-slate-500 mt-1">{edu.period}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Certifications and Events in 2 cols */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* Certifications */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
                              <div className="flex items-center gap-2 mb-4">
                                <Award className="h-5 w-5 text-amber-400" />
                                <h3 className="text-lg font-bold text-white">Certifications</h3>
                              </div>
                              <div className="space-y-3">
                                {certifications.map((c, i) => (
                                  <div key={i} className="flex justify-between items-center text-sm p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                    <span className="text-slate-200 font-medium">{c.name}</span>
                                    <Badge variant="outline" className="border-amber-400/30 text-amber-300 text-xs">
                                      {c.year}
                                    </Badge>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Workshops */}
                            <div className="glass-panel p-6 rounded-2xl border border-white/[0.08]">
                              <div className="flex items-center gap-2 mb-4">
                                <Sparkles className="h-5 w-5 text-purple-400" />
                                <h3 className="text-lg font-bold text-white">Workshops & Events</h3>
                              </div>
                              <div className="space-y-3">
                                {events.map((e, i) => (
                                  <div key={i} className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                                    <p className="text-sm font-semibold text-white">{e.title}</p>
                                    <p className="text-xs text-slate-400 mt-0.5">{e.org}</p>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      </TabsContent>

                      {/* TAB: CONTACT */}
                      <TabsContent value="contact" className="focus-visible:outline-none">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl mx-auto">
                          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] text-center">
                            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">Let's Connect</h2>
                            <p className="text-sm text-slate-400 mb-8 max-w-md mx-auto">
                              I'm actively open to software engineering opportunities, backend initiatives, and collaborative projects.
                            </p>

                            <div className="space-y-3 text-left">
                              {[
                                {
                                  label: "Linktree (All Links)",
                                  value: "linktr.ee/buildwithmayurr",
                                  href: "https://linktr.ee/buildwithmayurr",
                                  icon: <Link2 className="h-5 w-5 text-emerald-400" />
                                },
                                {
                                  label: "Email",
                                  value: "mayursatpute246@gmail.com",
                                  href: "mailto:mayursatpute246@gmail.com",
                                  icon: <Mail className="h-5 w-5 text-blue-400" />
                                },
                                {
                                  label: "Phone / Call",
                                  value: "+91 9172072739",
                                  href: "tel:+919172072739",
                                  icon: <Phone className="h-5 w-5 text-emerald-400" />
                                },
                                {
                                  label: "WhatsApp",
                                  value: "Chat on WhatsApp (+91 9172072739)",
                                  href: "https://wa.me/919172072739",
                                  icon: <MessageCircle className="h-5 w-5 text-green-400" />
                                },
                                {
                                  label: "LinkedIn",
                                  value: "linkedin.com/in/mayur7pute",
                                  href: "https://linkedin.com/in/mayur7pute",
                                  icon: <Linkedin className="h-5 w-5 text-blue-400" />
                                },
                                {
                                  label: "GitHub",
                                  value: "github.com/Mayur-Satpute",
                                  href: "https://github.com/Mayur-Satpute",
                                  icon: <Github className="h-5 w-5 text-slate-300" />
                                },
                                {
                                  label: "Instagram (Creator)",
                                  value: "@buildwithmayurr",
                                  href: "https://www.instagram.com/buildwithmayurr/",
                                  icon: <Instagram className="h-5 w-5 text-pink-400" />
                                }
                              ].map((item, idx) => (
                                <a
                                  key={idx}
                                  href={item.href}
                                  target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                                  rel="noopener noreferrer"
                                  className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/40 hover:bg-white/[0.05] transition-all group"
                                >
                                  <div className="flex items-center gap-3.5">
                                    <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
                                      {item.icon}
                                    </div>
                                    <div>
                                      <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                                      <p className="text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors">{item.value}</p>
                                    </div>
                                  </div>
                                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                                </a>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </TabsContent>
                  </Tabs>

                  {/* Impressive & Professional Footer */}
                  <footer className="mt-24 pt-12 pb-8 border-t border-white/[0.08] relative">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">

                      {/* Brand / Tagline */}
                      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md">
                            MS
                          </div>
                          <span className="text-base font-bold text-white tracking-tight">Mayur Satpute</span>
                        </div>
                        <p className="text-xs text-slate-400 max-w-sm">
                          Software Engineer passionate about crafting scalable backend architectures, clean APIs, and modern cloud applications.
                        </p>
                      </div>

                      {/* Quick Social Icon Links */}
                      <div className="flex items-center gap-2">
                        {[
                          { icon: <Github className="h-4 w-4" />, href: "https://github.com/Mayur-Satpute", title: "GitHub" },
                          { icon: <Linkedin className="h-4 w-4" />, href: "https://linkedin.com/in/mayur7pute", title: "LinkedIn" },
                          { icon: <Instagram className="h-4 w-4" />, href: "https://www.instagram.com/buildwithmayurr/", title: "Instagram" },
                          { icon: <Link2 className="h-4 w-4" />, href: "https://linktr.ee/buildwithmayurr", title: "Linktree" },
                          { icon: <Mail className="h-4 w-4" />, href: "mailto:mayursatpute246@gmail.com", title: "Email" }
                        ].map((s, idx) => (
                          <a
                            key={idx}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={s.title}
                            className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all"
                          >
                            {s.icon}
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                      <p className="flex items-center gap-1.5">
                        <span>© {new Date().getFullYear()} Mayur Satpute.</span>
                        <span>All rights reserved.</span>
                      </p>

                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Open to Opportunities
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400">Mumbai, India</span>
                      </div>
                    </div>
                  </footer>

                </div>
              </main>
              );
}
