"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
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
  MapPin,
  Instagram,
  Terminal,
  Database,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Link2
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }
};

const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.06
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
      icon: <Terminal className="h-4 w-4 text-blue-400 shrink-0" />,
      items: ["Python", "Django", "Django REST Framework", "RESTful APIs", "JWT Auth", "RBAC", "C# / .NET (Migration)", "CRUD Workflows"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-4 w-4 text-emerald-400 shrink-0" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Drizzle ORM", "Django ORM", "Data Modeling"]
    },
    {
      title: "AI & Modern Stack",
      icon: <Cpu className="h-4 w-4 text-purple-400 shrink-0" />,
      items: ["Gemini API", "LangChain", "FAISS", "RAG Pipelines", "Claude Code", "Gemini Agent", "AI-Assisted Engineering"]
    },
    {
      title: "Web & Developer Tooling",
      icon: <Layers className="h-4 w-4 text-amber-400 shrink-0" />,
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

  const tabItems = [
    { value: "about", icon: <User className="h-4 w-4" />, label: "About & Skills" },
    { value: "experience", icon: <Briefcase className="h-4 w-4" />, label: "Experience" },
    { value: "projects", icon: <Code2 className="h-4 w-4" />, label: "Projects" },
    { value: "education", icon: <GraduationCap className="h-4 w-4" />, label: "Education" },
    { value: "contact", icon: <MessageSquare className="h-4 w-4" />, label: "Contact" }
  ];

  return (
    <main className="min-h-screen bg-[#070b14] bg-grid-pattern relative selection:bg-blue-500/25 selection:text-blue-200">
      {/* Background ambient lighting strictly contained within boundaries */}
      <div className="absolute inset-x-0 top-0 h-96 overflow-hidden pointer-events-none -z-10">
        <div className="mx-auto w-full max-w-2xl h-80 bg-gradient-to-b from-blue-600/15 via-indigo-600/5 to-transparent blur-3xl opacity-75" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* HERO SECTION */}
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-8 sm:mb-12 text-center md:text-left flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8 pb-8 sm:pb-12 border-b border-white/[0.08]"
        >
          <div className="w-full flex-1 space-y-3.5 sm:space-y-4">
            
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Software & Backend Roles
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Mayur <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Satpute</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 font-normal max-w-2xl leading-relaxed mx-auto md:mx-0">
              Software Engineer specializing in <span className="text-white font-medium">Python, Django, scalable REST APIs</span>, and modernizing complex enterprise systems.
            </p>

            {/* Badges / Location */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 sm:gap-3 pt-1 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" /> Mumbai, India
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <a 
                href="https://www.instagram.com/buildwithmayurr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-pink-400 hover:text-pink-300 transition-colors bg-pink-500/10 border border-pink-500/20 px-2.5 py-1 rounded-full text-xs"
              >
                <Instagram className="h-3.5 w-3.5 shrink-0" /> Tech Creator @buildwithmayurr
              </a>
            </div>

            {/* Action buttons with minimum 44px touch targets on mobile */}
            <div className="w-full flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center md:justify-start gap-2.5 pt-2">
              <Button asChild className="w-full sm:w-auto min-h-[44px] bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-500/20 transition-all rounded-lg text-xs sm:text-sm px-5">
                <a href="mailto:mayursatpute246@gmail.com">
                  <Mail className="h-4 w-4 mr-2 shrink-0" /> Get in Touch
                </a>
              </Button>

              <Button variant="outline" asChild className="w-full sm:w-auto min-h-[44px] border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 hover:text-emerald-300 rounded-lg text-xs sm:text-sm px-4">
                <a href="https://linktr.ee/buildwithmayurr" target="_blank" rel="noopener noreferrer">
                  <Link2 className="h-4 w-4 mr-2 text-emerald-400 shrink-0" /> Linktree
                </a>
              </Button>

              <div className="grid grid-cols-2 gap-2 sm:flex sm:gap-2.5 w-full sm:w-auto">
                <Button variant="outline" asChild className="w-full sm:w-auto min-h-[44px] border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-lg text-xs sm:text-sm px-3.5">
                  <a href="https://github.com/Mayur-Satpute" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1.5 shrink-0" /> GitHub
                  </a>
                </Button>

                <Button variant="outline" asChild className="w-full sm:w-auto min-h-[44px] border-white/10 bg-slate-900/60 hover:bg-slate-800 text-slate-200 rounded-lg text-xs sm:text-sm px-3.5">
                  <a href="https://linkedin.com/in/mayur7pute" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 mr-1.5 shrink-0" /> LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Bento Card */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="w-full max-w-sm md:w-72 glass-panel p-4 sm:p-5 rounded-2xl border border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-white/[0.08]">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-inner shrink-0">
                MS
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Mayur Satpute</p>
                <p className="text-xs text-slate-400">Backend & Web Apps</p>
              </div>
            </div>

            <div className="space-y-2">
              {highlights.map((h, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">{h.label}</span>
                  <span className="text-slate-200 font-medium text-right ml-2">{h.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.header>

        {/* NAVIGATION: Mobile Dropdown / Desktop Tabs */}
        <Tabs defaultValue="about" onValueChange={setActiveTab} value={activeTab} className="w-full">
          
          {/* Mobile Selector (< 640px) */}
          <div className="block sm:hidden mb-6">
            <label htmlFor="tab-select" className="sr-only">Select Tab</label>
            <div className="relative">
              <select
                id="tab-select"
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full min-h-[48px] px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {tabItems.map(tab => (
                  <option key={tab.value} value={tab.value} className="bg-slate-900 text-white">
                    {tab.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tablet & Desktop Horizontal Tab List (>= 640px) */}
          <div className="hidden sm:flex justify-center mb-8 overflow-x-auto no-scrollbar">
            <TabsList className="bg-slate-900/90 p-1.5 border border-white/10 rounded-xl backdrop-blur-md flex flex-wrap justify-center h-auto gap-1">
              {tabItems.map(tab => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-3.5 py-2 text-xs md:text-sm font-medium rounded-lg transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white text-slate-400 hover:text-slate-200 flex items-center gap-1.5"
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {/* TAB: ABOUT & SKILLS */}
          <TabsContent value="about" className="focus-visible:outline-none mt-0">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4 sm:space-y-6">
              
              {/* Summary Card */}
              <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-5 w-5 text-blue-400 shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">Executive Summary</h2>
                </div>
                <p className="text-slate-300 leading-relaxed text-xs sm:text-sm md:text-base mb-5">
                  Software Engineer with hands-on experience in <strong>ERP and web application modernization</strong>, 
                  <strong> REST APIs, authentication, RBAC</strong>, and database workflows. Proven proficiency across 
                  <strong> Python, Django, Django REST Framework, SQL</strong>, and integrating cutting-edge AI models (Gemini API, LangChain) into real-world applications. 
                  Passionate about engineering reliable, maintainable backend infrastructure and sharing technical knowledge as a content creator.
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06] items-center">
                  <span className="text-xs text-slate-400 mr-1">Spoken Languages:</span>
                  {["English", "Hindi", "Marathi"].map(lang => (
                    <Badge key={lang} variant="outline" className="border-white/10 text-slate-300 text-xs py-0.5">
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Categorized Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                {skillGroups.map((group, idx) => (
                  <div 
                    key={idx}
                    className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/[0.08] hover:border-blue-500/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                          {group.icon}
                        </div>
                        <h3 className="text-sm sm:text-base font-semibold text-white">{group.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map(item => (
                          <span 
                            key={item}
                            className="px-2.5 py-1 text-[11px] sm:text-xs rounded-md bg-white/[0.04] text-slate-200 border border-white/[0.06]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>

          {/* TAB: EXPERIENCE */}
          <TabsContent value="experience" className="focus-visible:outline-none mt-0">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4 sm:space-y-6">
              {experiences.map((exp, idx) => (
                <article 
                  key={idx} 
                  className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/[0.08]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 sm:pb-5 border-b border-white/[0.08]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                        <Badge className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs">
                          {exp.tag}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 font-medium">
                        {exp.company} <span className="text-slate-500">•</span> <span className="text-slate-400">{exp.location}</span>
                      </p>
                    </div>
                    <div className="text-xs font-medium text-slate-400 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] w-fit">
                      {exp.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="py-4 sm:py-6 space-y-2.5 sm:space-y-3">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {exp.skills.map(s => (
                      <Badge key={s} variant="outline" className="border-white/10 text-slate-300 bg-white/[0.02] text-[11px] sm:text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </motion.div>
          </TabsContent>

          {/* TAB: PROJECTS */}
          <TabsContent value="projects" className="focus-visible:outline-none mt-0">
            <motion.div initial="hidden" animate="visible" variants={staggerChildren} className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {projects.map((proj, idx) => (
                <motion.div 
                  key={idx} 
                  variants={fadeIn}
                  className="glass-panel p-5 sm:p-6 md:p-7 rounded-2xl border border-white/[0.08] hover:border-blue-500/40 flex flex-col justify-between transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-400">
                        {proj.category}
                      </span>
                      <Button variant="ghost" size="sm" asChild className="min-h-[36px] px-2.5 text-xs text-slate-400 hover:text-white hover:bg-white/[0.06]">
                        <a href={proj.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3.5 w-3.5 mr-1 shrink-0" /> Code <ArrowUpRight className="h-3 w-3 ml-0.5 shrink-0" />
                        </a>
                      </Button>
                    </div>

                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">
                      {proj.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3.5 border-t border-white/[0.06]">
                    {proj.skills.map(skill => (
                      <span key={skill} className="px-2 py-0.5 text-[10px] sm:text-xs rounded bg-white/[0.03] text-slate-300 border border-white/[0.06]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* TAB: EDUCATION & CERTIFICATIONS */}
          <TabsContent value="education" className="focus-visible:outline-none mt-0">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-4 sm:space-y-6">
              
              {/* Academics */}
              <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/[0.08]">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <GraduationCap className="h-5 w-5 text-blue-400 shrink-0" />
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">Academic Background</h2>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-5 sm:pl-6 border-l-2 border-blue-500/30 last:border-l-0 pb-1">
                      <div className="absolute -left-[7px] sm:-left-[9px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#070b14] border-2 border-blue-400" />
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-sm sm:text-base font-semibold text-white">{edu.degree}</h3>
                        <Badge className="w-fit bg-blue-500/10 text-blue-400 border-blue-500/20 text-xs">
                          {edu.badge}
                        </Badge>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300">{edu.institution} • <span className="text-slate-400">{edu.location}</span></p>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-1">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications and Events in 2 cols */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                
                {/* Certifications */}
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/[0.08]">
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-5 w-5 text-amber-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-white">Certifications</h3>
                  </div>
                  <div className="space-y-2">
                    {certifications.map((c, i) => (
                      <div key={i} className="flex justify-between items-center text-xs sm:text-sm p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <span className="text-slate-200 font-medium">{c.name}</span>
                        <Badge variant="outline" className="border-amber-400/30 text-amber-300 text-xs shrink-0 ml-2">
                          {c.year}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workshops */}
                <div className="glass-panel p-4 sm:p-6 rounded-2xl border border-white/[0.08]">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="h-5 w-5 text-purple-400 shrink-0" />
                    <h3 className="text-base sm:text-lg font-bold text-white">Workshops & Events</h3>
                  </div>
                  <div className="space-y-2">
                    {events.map((e, i) => (
                      <div key={i} className="p-2.5 sm:p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                        <p className="text-xs sm:text-sm font-semibold text-white">{e.title}</p>
                        <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">{e.org}</p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </TabsContent>

          {/* TAB: CONTACT */}
          <TabsContent value="contact" className="focus-visible:outline-none mt-0">
            <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-2xl mx-auto">
              <div className="glass-panel p-5 sm:p-7 md:p-8 rounded-2xl border border-white/[0.08] text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2">Let's Connect</h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-5 sm:mb-7 max-w-md mx-auto">
                  I'm actively open to software engineering opportunities, backend initiatives, and collaborative projects.
                </p>

                <div className="space-y-2.5 sm:space-y-3 text-left">
                  {[
                    {
                      label: "Linktree (All Links)",
                      value: "linktr.ee/buildwithmayurr",
                      href: "https://linktr.ee/buildwithmayurr",
                      icon: <Link2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    },
                    {
                      label: "Email",
                      value: "mayursatpute246@gmail.com",
                      href: "mailto:mayursatpute246@gmail.com",
                      icon: <Mail className="h-5 w-5 text-blue-400 shrink-0" />
                    },
                    {
                      label: "Phone / Call",
                      value: "+91 9172072739",
                      href: "tel:+919172072739",
                      icon: <Phone className="h-5 w-5 text-emerald-400 shrink-0" />
                    },
                    {
                      label: "WhatsApp",
                      value: "Chat on WhatsApp (+91 9172072739)",
                      href: "https://wa.me/919172072739",
                      icon: <MessageCircle className="h-5 w-5 text-green-400 shrink-0" />
                    },
                    {
                      label: "LinkedIn",
                      value: "linkedin.com/in/mayur7pute",
                      href: "https://linkedin.com/in/mayur7pute",
                      icon: <Linkedin className="h-5 w-5 text-blue-400 shrink-0" />
                    },
                    {
                      label: "GitHub",
                      value: "github.com/Mayur-Satpute",
                      href: "https://github.com/Mayur-Satpute",
                      icon: <Github className="h-5 w-5 text-slate-300 shrink-0" />
                    },
                    {
                      label: "Instagram (Creator)",
                      value: "@buildwithmayurr",
                      href: "https://www.instagram.com/buildwithmayurr/",
                      icon: <Instagram className="h-5 w-5 text-pink-400 shrink-0" />
                    }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 sm:p-4 min-h-[52px] rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/40 hover:bg-white/[0.05] transition-all group"
                    >
                      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0 pr-2">
                        <div className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.06] shrink-0">
                          {item.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                          <p className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-blue-300 transition-colors truncate">{item.value}</p>
                        </div>
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>

        {/* Impressive & Professional Footer */}
        <footer className="mt-14 sm:mt-20 md:mt-24 pt-8 sm:pt-12 pb-8 border-t border-white/[0.08]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/[0.06]">
            
            {/* Brand / Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm shadow-md shrink-0">
                  MS
                </div>
                <span className="text-base font-bold text-white tracking-tight">Mayur Satpute</span>
              </div>
              <p className="text-xs text-slate-400 max-w-sm">
                Software Engineer passionate about crafting scalable backend architectures, clean APIs, and modern cloud applications.
              </p>
            </div>

            {/* Quick Social Icon Links */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
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
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 transition-all shrink-0"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
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
