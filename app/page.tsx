"use client";

import { useEffect, useState } from "react";

// Example ideas to explore for each discipline
const disciplineIdeas = {
  physics: [
    {
      title: "Stern-Gerlach Experiment",
      description: "Explore spin quantization and the measurement problem through sequential SG apparatus",
      tags: ["Quantum Mechanics", "Spin"]
    },
    {
      title: "Bell's Theorem & CHSH",
      description: "Interactive demonstration of quantum entanglement and local realism violations",
      tags: ["Entanglement", "Non-locality"]
    },
    {
      title: "Double-Slit Interference",
      description: "Wave-particle duality visualization with single photon detection patterns",
      tags: ["Wave Mechanics", "QM Foundations"]
    },
    {
      title: "Quantum Harmonic Oscillator",
      description: "Energy eigenstates, creation/annihilation operators, and Fock space",
      tags: ["QM States", "Operators"]
    }
  ],
  ai: [
    {
      title: "Attention is All You Need",
      description: "Transformer architecture breakdown: self-attention, multi-head attention, and positional encoding",
      tags: ["Transformers", "NLP"]
    },
    {
      title: "ResNet Architecture",
      description: "Skip connections, gradient flow, and deep residual learning for image recognition",
      tags: ["Computer Vision", "CNNs"]
    },
    {
      title: "Diffusion Models",
      description: "Score-based generative models and denoising diffusion probabilistic models (DDPM)",
      tags: ["Generative AI", "Sampling"]
    },
    {
      title: "RL Policy Gradients",
      description: "REINFORCE, A3C, and PPO for policy optimization in continuous action spaces",
      tags: ["Reinforcement Learning", "Optimization"]
    }
  ],
  fem: [
    {
      title: "Adaptive Mesh Refinement",
      description: "Error estimators and h-adaptive refinement strategies for optimal mesh density",
      tags: ["FEM", "Mesh Generation"]
    },
    {
      title: "Navier-Stokes CFD",
      description: "Incompressible flow solver with SIMPLE algorithm and turbulence modeling",
      tags: ["CFD", "Fluid Dynamics"]
    },
    {
      title: "Stress-Strain Analysis",
      description: "Linear elasticity, von Mises stress, and material failure prediction",
      tags: ["Structural Analysis", "Mechanics"]
    },
    {
      title: "Iterative Solver Methods",
      description: "Conjugate gradient, GMRES, and multigrid methods for large sparse systems",
      tags: ["Numerical Methods", "Linear Algebra"]
    }
  ]
};

const visualizations = [
  // Physics & Quantum
  {
    title: "Bell Test: Ultimate Lab",
    label: "Interactive Quantum Experiment",
    description: "Explore quantum entanglement, Bell inequalities, and the CHSH test in an immersive 3D environment.",
    link: "/bell-test.html",
    category: "Physics"
  },
  {
    title: "Quantum Simulation",
    label: "Quantum Mechanics",
    description: "Interactive quantum mechanics simulation exploring wave functions, superposition, and state evolution.",
    link: "/quantum-simulation.html",
    category: "Physics"
  },
  {
    title: "Physics Visualization",
    label: "Classical & Modern Physics",
    description: "Visualize mechanics, electromagnetism, relativity, and other fundamental physics phenomena.",
    link: "/physics-visualization.html",
    category: "Physics"
  },
  // AI & Model Architecture
  {
    title: "AI Architecture Viz",
    label: "Model Architecture",
    description: "Interactive visualization of AI model architecture, attention mechanisms, and neural network structures.",
    link: "/ai-architecture-viz.html",
    category: "AI"
  },
  {
    title: "AI Model Explorer",
    label: "Model Inspection",
    description: "Explore model parameters, layer structures, and training dynamics in real-time.",
    link: "/ai-model-explorer.html",
    category: "AI"
  },
  {
    title: "Training Dynamics",
    label: "Optimization Visualization",
    description: "Real-time visualization of training metrics, loss curves, and optimization landscapes.",
    link: "/ai-training-dynamics.html",
    category: "AI"
  },
  // FEM & Simulation
  {
    title: "FEM Mesh Viewer",
    label: "Finite Element Analysis",
    description: "Interactive mesh visualization with element inspection, refinement zones, and quality metrics.",
    link: "/fem-mesh-viewer.html",
    category: "FEM"
  },
  {
    title: "PFD Simulation",
    label: "Fluid Dynamics",
    description: "Computational fluid dynamics with flow fields, pressure distributions, and velocity vectors.",
    link: "/pfd-simulation.html",
    category: "FEM"
  },
  {
    title: "Solver Convergence",
    label: "Iterative Solvers",
    description: "Real-time visualization of solver convergence, residual plots, and solution progress.",
    link: "/solver-convergence.html",
    category: "FEM"
  }
];

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((previous) => !previous);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false); // Close mobile menu when navigating
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "physics", label: "Physics" },
    { id: "ai", label: "AI" },
    { id: "fem", label: "FEM" },
    { id: "visualizations", label: "Visualizations" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <>
      {/* Sticky Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-teal-500/20 bg-slate-900/95 backdrop-blur-md dark:bg-slate-950/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl font-bold text-teal-400">Research Portfolio</h1>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-6 md:flex">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition ${
                    activeSection === item.id
                      ? "text-teal-400"
                      : "text-slate-300 hover:text-teal-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs font-semibold text-teal-300 transition hover:border-teal-500/50 hover:bg-teal-500/20"
            >
              {isDarkMode ? "☀ Light" : "🌙 Dark"}
            </button>

            {/* Hamburger Menu Button (Mobile) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col gap-1.5 rounded-lg border border-teal-500/30 bg-teal-500/10 p-2 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-teal-300 transition-all ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-teal-300 transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-teal-300 transition-all ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-[73px] bg-slate-950/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed right-0 top-[73px] h-[calc(100vh-73px)] w-64 border-l border-teal-500/20 bg-slate-900 md:hidden">
              <div className="flex flex-col gap-2 p-6">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`rounded-lg px-4 py-3 text-left text-base font-medium transition ${
                      activeSection === item.id
                        ? "bg-teal-500/20 text-teal-400"
                        : "text-slate-300 hover:bg-teal-500/10 hover:text-teal-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </nav>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-20 pt-24">
        {/* Hero Section */}
        <section id="about" className="flex flex-col gap-8 pt-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-teal-300">
                Research + Engineering Portfolio
              </div>
              <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-6xl dark:text-white">
                Exploring Quantum Mechanics, AI Architecture & Simulation
              </h1>
              <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                Deep dives into quantum phenomena, modern AI systems, and computational simulation.
                Building interactive visualizations and experiments to understand complex systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection("visualizations")}
                  className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-teal-500/50"
                >
                  Explore Visualizations
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border border-teal-500/30 bg-teal-500/10 px-6 py-3 text-sm font-semibold text-teal-300 transition hover:border-teal-500/50 hover:bg-teal-500/20"
                >
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-6 backdrop-blur">
              <h2 className="text-sm uppercase tracking-[0.3em] text-teal-300">
                Current Focus
              </h2>
              <ul className="mt-6 space-y-5">
                <li className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    Physics & Quantum Systems
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Quantum mechanics experiments, Bell tests, and computational physics visualizations
                  </p>
                </li>
                <li className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    AI & Model Architecture
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Transformer models, attention mechanisms, and modern AI system design
                  </p>
                </li>
                <li className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    FEM & Simulation
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    Finite element analysis, CFD pipelines, and numerical solver optimization
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Physics Section */}
        <section id="physics" className="grid gap-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-teal-400">
                Quantum & Classical
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Physics & Quantum Mechanics
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Interactive experiments exploring quantum phenomena, from basic principles to advanced topics
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {disciplineIdeas.physics.map((idea) => (
              <article
                key={idea.title}
                className="group rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/5 to-cyan-500/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <div className="mb-3 inline-block rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300">
                  Idea to Explore
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {idea.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {idea.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-teal-500/30 px-2 py-0.5 text-xs text-teal-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* AI Section */}
        <section id="ai" className="grid gap-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                Machine Learning & Deep Learning
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                AI & Model Architecture
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Exploring modern AI architectures, from transformers to diffusion models
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {disciplineIdeas.ai.map((idea) => (
              <article
                key={idea.title}
                className="group rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="mb-3 inline-block rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                  Idea to Explore
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {idea.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {idea.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-cyan-500/30 px-2 py-0.5 text-xs text-cyan-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* FEM Section */}
        <section id="fem" className="grid gap-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
                Computational Engineering
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                FEM & Simulation
              </h2>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Finite element methods, CFD, and numerical solver techniques
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {disciplineIdeas.fem.map((idea) => (
              <article
                key={idea.title}
                className="group rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-3 inline-block rounded-full bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-300">
                  Idea to Explore
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {idea.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {idea.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {idea.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-500/30 px-2 py-0.5 text-xs text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Visualizations Section */}
        <section id="visualizations" className="grid gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-teal-400">
              Interactive Experiments
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              Visualizations + Interactive Labs
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Launch interactive experiments to explore complex phenomena in 3D environments
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {visualizations.map((viz) => (
              <article
                key={viz.title}
                className="group rounded-3xl border border-teal-500/20 bg-gradient-to-br from-slate-900/50 to-teal-900/20 p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-500/40 hover:shadow-lg hover:shadow-teal-500/20"
              >
                <div className="text-xs uppercase tracking-[0.3em] text-cyan-400">
                  {viz.label}
                </div>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">
                  {viz.title}
                </h3>
                <div className="mt-4 flex h-32 items-center justify-center rounded-2xl border border-dashed border-teal-500/30 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 text-xs text-teal-300">
                  {viz.link ? "🚀 Interactive Experiment →" : "Coming Soon"}
                </div>
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                  {viz.description}
                </p>
                {viz.link && (
                  <a
                    href={viz.link}
                    className="mt-6 inline-block w-full rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:shadow-teal-500/50"
                  >
                    Launch Experiment
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="rounded-3xl border border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 p-8 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Let's Collaborate
              </h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Interested in quantum mechanics, AI research, or simulation projects? Get in touch.
              </p>
            </div>
            <button className="rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-teal-500/50">
              Contact Me
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
