"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Briefcase,
  GraduationCap,
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
  Link2,
  Download,
  Send,
  ExternalLink,
  BookOpen,
  FileText,
  Filter,
  Check,
  ChevronRight,
  Menu,
  X,
  UserCheck,
  BriefcaseBusiness,
  Network,
  Youtube,
  PenTool
} from "lucide-react";

// Animation Variants (tasteful, fast, lightweight)
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Natural Role Cycler (Calm, understated)
function RoleCycler() {
  const roles = [
    "Python Backend Developer",
    "Software Engineer",
    "Django REST Specialist",
    "Tech Creator @buildwithmayurr",
    "Generative AI Builder"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div className="h-7 sm:h-8 flex items-center justify-center lg:justify-start overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 14, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -14, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-base sm:text-lg font-medium text-primary"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

// Accessible Contact Form
interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const mailSubject = encodeURIComponent(data.subject || `Inquiry from ${data.name}`);
    const mailBody = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
    );
    window.location.href = `mailto:mayursatpute246@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Your Name *
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            placeholder="e.g. Rahul Sharma"
            className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-colors"
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Your Email *
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Valid email address required"
              }
            })}
            type="email"
            placeholder="rahul@company.com"
            className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-colors"
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
          Subject
        </label>
        <input
          {...register("subject")}
          type="text"
          placeholder="Engineering Role / Project Collaboration"
          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-colors"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
          Message *
        </label>
        <textarea
          {...register("message", { required: "Message cannot be empty", minLength: { value: 10, message: "At least 10 characters required" } })}
          rows={4}
          placeholder="Hi Mayur, let's discuss an opportunity..."
          className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-colors resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl text-sm shadow-sm transition-all flex items-center justify-center gap-2"
      >
        <Send className="h-4 w-4" /> Send Message
      </Button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-emerald-600 dark:text-emerald-400 text-center font-medium"
        >
          Opening your email client... Looking forward to speaking!
        </motion.p>
      )}
    </form>
  );
}

export default function Home() {
  const [projectFilter, setProjectFilter] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // Allow dropdown exit animation to conclude, then accurately scroll to section
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL hash without abrupt jump
        window.history.pushState(null, "", href);
      }
    }, 120);
  };

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
      title: "BlogScript – Full-Stack Django Publishing Platform",
      category: "Full Stack & Web Application",
      tag: "Backend",
      description: "Production-grade blogging & content publishing platform engineered with Django and Bootstrap. Features end-to-end user authentication, personal author profiles, responsive dashboard, image uploads, search indexing, tag-based categorization, and full CRUD pipelines.",
      skills: ["Python", "Django", "Django ORM", "User Auth", "CRUD", "Bootstrap", "SQLite", "Responsive UI"],
      github: "https://github.com/Mayur-Satpute/BlogScript-Django",
      demo: "https://github.com/Mayur-Satpute/BlogScript-Django",
      icon: <PenTool className="h-6 w-6 text-primary" />,
      image: "https://raw.githubusercontent.com/Mayur-Satpute/BlogScript-Django/main/screenshots/home.png"
    },
    {
      title: "MultiPDF AI Assistant – RAG & Document Intelligence",
      category: "Generative AI & LLM Systems",
      tag: "AI",
      description: "Enterprise document intelligence application powered by Google Gemini API, LangChain, FAISS vector indexing, and Streamlit. Enables real-time conversational querying across complex multi-page PDF documents with semantic chunking and retrieval-augmented context grounding.",
      skills: ["Python", "Gemini API", "LangChain", "FAISS", "Vector Search", "RAG", "Streamlit", "Prompt Engineering"],
      github: "https://github.com/Mayur-Satpute/Chat-with-Multi-PDF-s-using-Gemini-AI",
      demo: "https://github.com/Mayur-Satpute/Chat-with-Multi-PDF-s-using-Gemini-AI",
      icon: <FileText className="h-6 w-6 text-primary" />,
      image: "https://github.com/user-attachments/assets/00dbba16-016f-4dca-84c7-cd52b0d2ff32"
    },
    {
      title: "YouTube Transcript AI Summarizer & Notes Generator",
      category: "NLP & Content Intelligence",
      tag: "AI",
      description: "Automated video intelligence and multilingual summarization tool leveraging Google Gemini Pro API. Parses YouTube video transcripts in English and Hindi, generating concise study notes, executive takeaways, and action items through a clean Streamlit interface.",
      skills: ["Python", "Gemini API", "Streamlit", "YouTube API", "NLP Summarization", "Multilingual (EN/HI)", "Python-dotenv"],
      github: "https://github.com/Mayur-Satpute/Youtube_Video_Transcript_summarizer",
      demo: "https://github.com/Mayur-Satpute/Youtube_Video_Transcript_summarizer",
      icon: <Youtube className="h-6 w-6 text-primary" />,
      image: "https://raw.githubusercontent.com/Mayur-Satpute/Youtube_Video_Transcript_summarizer/main/Screenshot%20(7).png"
    },
    {
      title: "Online Bookstore RESTful API",
      category: "Backend Architecture & API Security",
      tag: "Backend",
      description: "High-performance REST API services for an eCommerce bookstore architecture built with Django REST Framework. Architected with robust JWT authentication, fine-grained role-based permissions (RBAC), relational database models, filtering, and rigorous Postman test suites.",
      skills: ["Python", "Django", "Django REST Framework", "JWT Auth", "Postman", "RBAC", "PostgreSQL/SQL", "API Design"],
      github: "https://github.com/Mayur-Satpute/online-bookstore-drf",
      demo: "https://github.com/Mayur-Satpute/online-bookstore-drf",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      image: "./images/online-bookstore.jpg"
    }
  ];

  const filterOptions = ["All", "Backend", "AI", "Python"];

  const filteredProjects = projects.filter((p) => {
    if (projectFilter === "All") return true;
    if (projectFilter === "Backend") return p.tag === "Backend";
    if (projectFilter === "AI") return p.tag === "AI";
    if (projectFilter === "Python") return p.skills.includes("Python");
    return true;
  });

  const skillGroups = [
    {
      title: "Backend & Systems",
      icon: <Terminal className="h-5 w-5 text-primary shrink-0" />,
      items: ["Python", "Django", "Django REST Framework", "RESTful APIs", "JWT Auth", "RBAC", "C# / .NET (Migration)", "CRUD Workflows"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="h-5 w-5 text-primary shrink-0" />,
      items: ["PostgreSQL", "MySQL", "SQLite", "Drizzle ORM", "Django ORM", "Data Modeling"]
    },
    {
      title: "AI & Modern Stack",
      icon: <Cpu className="h-5 w-5 text-primary shrink-0" />,
      items: ["Gemini API", "LangChain", "FAISS", "RAG Pipelines", "Claude Code", "Gemini Agent", "AI-Assisted Engineering"]
    },
    {
      title: "Web & Developer Tooling",
      icon: <Layers className="h-5 w-5 text-primary shrink-0" />,
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

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary w-full flex flex-col justify-between">

      {/* Background Architectural Dot Grid */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-grid-subtle" />

      {/* TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/90 border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">

          {/* Logo / Personal Mark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-border shadow-sm group-hover:border-primary/50 transition-colors shrink-0 bg-muted ring-1 ring-border/50">
              <img
                src="./images/mayur.jpg"
                alt="Mayur Satpute"
                className="w-full h-full object-cover scale-150 transition-transform"
                style={{ objectPosition: '50% 18%' }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.endsWith('/images/mayur.jpg')) {
                    target.src = '/images/mayur.jpg';
                  }
                }}
              />
            </div>
            <span className="font-semibold text-sm sm:text-base tracking-tight text-foreground group-hover:text-primary transition-colors">
              Mayur Satpute
            </span>
          </a>

          {/* Nav Items & Theme Toggle */}
            <nav className="flex items-center gap-1.5 sm:gap-2">
              <div className="hidden md:flex items-center gap-1 mr-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <Button variant="outline" size="sm" asChild className="hidden sm:inline-flex text-xs h-9 rounded-lg border-border hover:bg-muted font-medium">
                <a href="./images/mayur_resume.pdf" download="Mayur_Satpute_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="h-3.5 w-3.5 mr-1.5 text-muted-foreground" /> Resume
                </a>
              </Button>

              <ThemeToggle />

              {/* Mobile Menu Hamburger Button */}
              <Button
                variant="outline"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden w-9 h-9 rounded-xl border-border bg-background"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4 text-foreground" />
                ) : (
                  <Menu className="h-4 w-4 text-foreground" />
                )}
              </Button>
            </nav>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-muted hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground/60" />
                  </a>
                ))}

                <div className="pt-2 mt-2 border-t border-border/60">
                  <Button asChild className="w-full min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl text-sm justify-center">
                    <a href="./images/mayur_resume.pdf" download="Mayur_Satpute_Resume.pdf" onClick={() => setMobileMenuOpen(false)}>
                      <Download className="h-4 w-4 mr-2" /> Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* MAIN CONTENT CANVAS */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-14 space-y-16 sm:space-y-24 flex-1">

        {/* 1. HERO SECTION */}
        <section id="hero" className="w-full pt-2 sm:pt-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12 pb-10 border-b border-border"
          >
            {/* Left Content Column */}
            <div className="w-full flex-1 space-y-4 text-center lg:text-left">

              {/* Status Pill (Calm Sage / Emerald) */}
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Available for Software & Backend Roles
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Mayur Satpute
              </motion.h1>

              {/* Role Cycler */}
              <motion.div variants={fadeIn}>
                <RoleCycler />
              </motion.div>

              {/* Subtext */}
              <motion.p variants={fadeIn} className="text-sm sm:text-base md:text-lg text-muted-foreground font-normal max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Software Engineer specializing in <span className="text-foreground font-medium">Python, Django, scalable REST APIs</span>, and modernizing complex enterprise systems. Focused on clean architecture, reliable database workflows, and developer tools.
              </motion.p>

              {/* Meta Location & Creator Tag */}
              <motion.div variants={fadeIn} className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm">
                <span className="inline-flex items-center gap-1.5 text-muted-foreground bg-muted/60 border border-border px-3 py-1 rounded-full">
                  <MapPin className="h-3.5 w-3.5 text-primary shrink-0" /> Mumbai, India
                </span>
                <a
                  href="https://www.instagram.com/buildwithmayurr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground transition-colors bg-muted/60 border border-border px-3 py-1 rounded-full"
                >
                  <Instagram className="h-3.5 w-3.5 text-rose-500 shrink-0" /> Creator @buildwithmayurr
                </a>
              </motion.div>

              {/* Primary Call-to-Actions */}
              <motion.div variants={fadeIn} className="w-full flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center lg:justify-start gap-2.5 pt-3">
                <Button asChild className="min-h-[44px] bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl text-xs sm:text-sm px-5 shadow-sm">
                  <a href="#projects">
                    <Code2 className="h-4 w-4 mr-1.5 shrink-0" /> View Projects
                  </a>
                </Button>

                <Button variant="outline" asChild className="min-h-[44px] border-border hover:bg-muted rounded-xl text-xs sm:text-sm px-4">
                  <a href="./images/mayur_resume.pdf" download="Mayur_Satpute_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="h-4 w-4 mr-1.5 text-muted-foreground shrink-0" /> Download Resume
                  </a>
                </Button>

                <Button variant="outline" asChild className="min-h-[44px] border-border hover:bg-muted rounded-xl text-xs sm:text-sm px-3.5">
                  <a href="https://linktr.ee/buildwithmayurr" target="_blank" rel="noopener noreferrer">
                    <Link2 className="h-4 w-4 mr-1.5 text-primary shrink-0" /> Linktree
                  </a>
                </Button>

                <Button variant="outline" asChild className="min-h-[44px] border-border hover:bg-muted rounded-xl text-xs sm:text-sm px-3.5">
                  <a href="https://github.com/Mayur-Satpute" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-1.5 shrink-0" /> GitHub
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right Column: Hero Portrait Showcase (Tech Influencer & Pro Engineer Layout) */}
            <motion.div
              variants={fadeIn}
              className="w-full max-w-md lg:w-[380px] xl:w-[430px] shrink-0"
            >
              <div className="craft-card rounded-3xl p-4 sm:p-5 overflow-hidden shadow-2xl relative">

                {/* Large Pro Portrait Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-muted border border-border shadow-inner group">
                  <img
                    src="./images/mayur.jpg"
                    alt="Mayur Satpute - Software Engineer & Tech Creator"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ objectPosition: '50% 12%' }}
                    loading="eager"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith('/images/mayur.jpg')) {
                        target.src = '/images/mayur.jpg';
                      }
                    }}
                  />
                  {/* Subtle lower gradient overlay for name & status card */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/95 via-background/60 to-transparent flex items-end p-4">
                    <div className="w-full flex items-center justify-between">
                      <div>
                        <p className="text-base sm:text-lg font-bold text-foreground">Mayur Satpute</p>
                        <p className="text-xs text-muted-foreground font-medium">Software Engineer • Creator</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/25 backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Available
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specs Bento Strip below the big photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
                  {highlights.map((h, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-muted/50 border border-border/60">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{h.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-foreground truncate mt-0.5">{h.value}</p>
                    </div>
                  ))}
                </div>

              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* 2. ABOUT & EXECUTIVE SUMMARY */}
        <section id="about" className="space-y-6 scroll-mt-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="craft-card p-6 sm:p-8 md:p-10 rounded-2xl"
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <Sparkles className="h-5 w-5 text-primary shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">Executive Summary</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base md:text-lg mb-6">
              Software Engineer with hands-on experience in <strong>ERP and web application modernization</strong>,
              <strong> REST APIs, authentication, RBAC</strong>, and database workflows. Proven proficiency across
              <strong> Python, Django, Django REST Framework, SQL</strong>, and integrating cutting-edge AI models (Gemini API, LangChain) into real-world applications.
              Experienced in converting legacy applications (.NET/C#) into modern cloud-ready platforms with clean API architectures and automated Postman test suites.
            </p>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-border items-center">
              <span className="text-xs sm:text-sm text-muted-foreground mr-2 font-medium">Spoken Languages:</span>
              {["English", "Hindi", "Marathi"].map(lang => (
                <Badge key={lang} variant="outline" className="border-border text-foreground text-xs py-0.5 px-2.5 font-normal">
                  {lang}
                </Badge>
              ))}
            </div>
          </motion.div>
        </section>

        {/* 3. TECHNICAL SKILLS */}
        <section id="skills" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Technical Skills</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Core proficiencies, backend systems, and frameworks</p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn}
                className="craft-card p-5 sm:p-6 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-muted border border-border">
                      {group.icon}
                    </div>
                    <h3 className="text-base font-semibold text-foreground">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {group.items.map(item => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-xs rounded-md bg-muted/60 text-foreground border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* 4. WORK EXPERIENCE */}
        <section id="experience" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Work Experience</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Engineering contributions in production environments</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.article
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="craft-card p-6 sm:p-8 md:p-10 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-border">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">{exp.role}</h3>
                      <Badge className="bg-primary/10 text-primary border border-primary/20 text-xs px-2.5 py-0.5 font-medium">
                        {exp.tag}
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base text-muted-foreground font-medium">
                      {exp.company} <span className="text-muted-foreground/50">•</span> <span>{exp.location}</span>
                    </p>
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-foreground bg-muted px-3.5 py-1.5 rounded-lg border border-border w-fit">
                    {exp.period}
                  </div>
                </div>

                <div className="py-6 space-y-3">
                  {exp.achievements.map((ach, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-border flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <Badge key={s} variant="outline" className="border-border text-foreground text-xs py-0.5 px-2.5 font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* 5. FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-6 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Featured Projects</h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Backend architectures and intelligent retrieval systems</p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 p-1 rounded-lg bg-muted border border-border w-fit">
              <Filter className="h-3.5 w-3.5 text-muted-foreground ml-2 mr-1 shrink-0" />
              {filterOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setProjectFilter(opt)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${projectFilter === opt
                      ? "bg-background text-foreground shadow-sm border border-border"
                      : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  key={proj.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="craft-card rounded-2xl overflow-hidden flex flex-col justify-between"
                >
                  {/* Project Visual Canvas / Screenshot Header */}
                  <div className="h-44 sm:h-52 w-full bg-muted/40 border-b border-border flex flex-col justify-between relative overflow-hidden group">
                    {/* Background Screenshot if available */}
                    {proj.image ? (
                      <>
                        <img
                          src={proj.image}
                          alt={`${proj.title} Preview`}
                          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-muted/30 to-background/50" />
                    )}

                    {/* Top Bar: Category Pill & Action Buttons */}
                    <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-foreground bg-background/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-border shadow-sm">
                        {proj.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg bg-background/90 backdrop-blur-md border-border shadow-sm hover:text-primary">
                          <a href={proj.github} target="_blank" rel="noopener noreferrer" title="View GitHub Repository">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" size="icon" asChild className="h-8 w-8 rounded-lg bg-background/90 backdrop-blur-md border-border shadow-sm hover:text-primary">
                          <a href={proj.demo} target="_blank" rel="noopener noreferrer" title="Live Link">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Bottom Floating Icon Badge */}
                    <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5 flex items-end justify-between">
                      <div className="p-2.5 rounded-xl bg-background/95 backdrop-blur-md border border-border shadow-md">
                        {proj.icon}
                      </div>
                      {proj.image && (
                        <span className="text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-background/80 backdrop-blur-md text-muted-foreground border border-border">
                          Live Preview
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {proj.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                      {proj.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 text-xs rounded-md bg-muted text-foreground border border-border">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        {/* 6. EDUCATION & CERTIFICATIONS */}
        <section id="education" className="space-y-6 scroll-mt-20">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Education & Certifications</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">Academic credentials and validated technical coursework</p>
          </div>

          <div className="space-y-6">
            {/* Academic Degrees */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="craft-card p-6 sm:p-8 md:p-10 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-5 w-5 text-primary shrink-0" />
                <h3 className="text-xl font-bold text-foreground tracking-tight">Academic Background</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 sm:pl-8 border-l-2 border-primary/30 last:border-l-0 pb-2">
                    <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-primary" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground">{edu.degree}</h4>
                      <Badge className="w-fit bg-primary/10 text-primary border border-primary/20 text-xs px-2.5 py-0.5 font-medium">
                        {edu.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.institution} • <span>{edu.location}</span></p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{edu.period}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications and Events in 2 cols */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="craft-card p-6 sm:p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Award className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Certifications</h3>
                </div>
                <div className="space-y-2.5">
                  {certifications.map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-sm p-3 rounded-lg bg-muted/50 border border-border">
                      <span className="text-foreground font-medium">{c.name}</span>
                      <Badge variant="outline" className="border-border text-foreground text-xs shrink-0 ml-3 py-0.5 px-2">
                        {c.year}
                      </Badge>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeIn}
                className="craft-card p-6 sm:p-8 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <Sparkles className="h-5 w-5 text-primary shrink-0" />
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">Workshops & Events</h3>
                </div>
                <div className="space-y-2.5">
                  {events.map((e, i) => (
                    <div key={i} className="p-3 rounded-lg bg-muted/50 border border-border">
                      <p className="text-sm font-semibold text-foreground">{e.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{e.org}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. CONTACT & INQUIRY SECTION */}
        <section id="contact" className="space-y-8 scroll-mt-20">
          <div className="text-center max-w-xl mx-auto space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">Get In Touch</h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Interested in discussing software opportunities, backend workflows, or collaborations?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-5xl mx-auto w-full">

            {/* Functional Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="lg:col-span-7 craft-card p-6 sm:p-8 rounded-2xl"
            >
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> Send a Message
              </h3>
              <ContactForm />
            </motion.div>

            {/* Direct Connect Directory */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeIn}
              className="lg:col-span-5 space-y-2.5"
            >
              {[
                {
                  label: "Linktree",
                  value: "linktr.ee/buildwithmayurr",
                  href: "https://linktr.ee/buildwithmayurr",
                  icon: <Link2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                },
                {
                  label: "Email",
                  value: "mayursatpute246@gmail.com",
                  href: "mailto:mayursatpute246@gmail.com",
                  icon: <Mail className="h-4 w-4 text-primary shrink-0" />
                },
                {
                  label: "Phone / Call",
                  value: "+91 9172072739",
                  href: "tel:+919172072739",
                  icon: <Phone className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                },
                {
                  label: "WhatsApp",
                  value: "Chat on WhatsApp (+91 9172072739)",
                  href: "https://wa.me/919172072739",
                  icon: <MessageCircle className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/mayur7pute",
                  href: "https://linkedin.com/in/mayur7pute",
                  icon: <Linkedin className="h-4 w-4 text-primary shrink-0" />
                },
                {
                  label: "GitHub",
                  value: "github.com/Mayur-Satpute",
                  href: "https://github.com/Mayur-Satpute",
                  icon: <Github className="h-4 w-4 text-foreground shrink-0" />
                },
                {
                  label: "Instagram (Creator)",
                  value: "@buildwithmayurr",
                  href: "https://www.instagram.com/buildwithmayurr/",
                  icon: <Instagram className="h-4 w-4 text-rose-500 shrink-0" />
                }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl craft-card hover:border-primary/50 transition-colors group"
                >
                  <div className="flex items-center gap-3 min-w-0 pr-2">
                    <div className="p-2 rounded-lg bg-muted border border-border shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">{item.label}</p>
                      <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">{item.value}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                </a>
              ))}
            </motion.div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-16 sm:mt-24 pt-8 pb-8 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border">

            {/* Brand Signature */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-border shrink-0 bg-muted ring-1 ring-border/50">
                  <img
                    src="./images/mayur.jpg"
                    alt="Mayur"
                    className="w-full h-full object-cover scale-150"
                    style={{ objectPosition: '50% 18%' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.endsWith('/images/mayur.jpg')) {
                        target.src = '/images/mayur.jpg';
                      }
                    }}
                  />
                </div>
                <span className="text-sm font-bold text-foreground">Mayur Satpute</span>
              </div>
              <p className="text-xs text-muted-foreground max-w-md">
                Software Engineer passionate about crafting scalable backend architectures and modern systems.
              </p>
            </div>

            {/* Quick Links */}
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
                  className="min-h-[38px] min-w-[38px] flex items-center justify-center rounded-lg bg-muted border border-border text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors shrink-0"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
            <p>© 2026 Mayur Satpute. All rights reserved.</p>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Open to Opportunities
              </span>
              <span>•</span>
              <span>Mumbai, India</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
