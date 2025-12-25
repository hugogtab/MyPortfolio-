"use client";

import { useEffect, useMemo, useState } from "react";

const focusAreas = [
  {
    title: "AI & Model Architecture",
    description:
      "Placeholder for your work on intelligent systems, model design, and interpretability."
  },
  {
    title: "FEM & PFD Simulation",
    description:
      "Placeholder for finite element workflows, solver design, and simulation validation."
  },
  {
    title: "Physics & Quantum Systems",
    description:
      "Interactive quantum mechanics experiments, Bell test simulations, and computational physics visualizations."
  }
];

const projectFilters = [
  "All",
  "AI",
  "Physics",
  "FEM",
  "PFD Simulation",
  "Quantum"
];

const projects = [
  {
    title: "Bell Test: Interactive Quantum Lab",
    tag: "Quantum",
    topics: ["Physics", "Quantum"],
    description:
      "3D visualization of quantum entanglement with Bell inequality tests, CHSH violations, and local hidden-variable models.",
    link: "/bell-test"
  },
  {
    title: "Project Placeholder: AI Architecture Study",
    tag: "AI",
    topics: ["AI"],
    description:
      "Swap in your project summary, model approach, and measurable impact."
  },
  {
    title: "Project Placeholder: FEM Solver Prototype",
    tag: "FEM",
    topics: ["FEM", "PFD Simulation"],
    description:
      "Add details about the mesh strategy, solver performance, or validation results."
  }
];

const visualizations = [
  {
    title: "Bell Test: Ultimate Lab",
    label: "Interactive Quantum Experiment",
    description:
      "Explore quantum entanglement, Bell inequalities, and the CHSH test in an immersive 3D environment.",
    link: "/bell-test"
  },
  {
    title: "AI Architecture Diagram",
    label: "Diagram Placeholder",
    description:
      "Replace with a high-level model diagram, attention map, or workflow sketch."
  },
  {
    title: "FEM + PFD Pipeline",
    label: "Simulation Placeholder",
    description:
      "Add a snapshot of your simulation pipeline or solver convergence plot."
  }
];

const researchTracks = [
  {
    title: "AI Systems Track",
    focus: "Model architecture, interpretability, and applied ML workflows.",
    highlights: [
      "Add a short research thesis or guiding question.",
      "Link to a key note or paper summary."
    ]
  },
  {
    title: "Simulation Track",
    focus: "FEM + PFD pipelines, solver optimization, and validation studies.",
    highlights: [
      "Summarize a solver experiment or mesh study.",
      "Add a validation result or performance metric."
    ]
  },
  {
    title: "Physics Track",
    focus: "Quantum, relativity, and computational physics explorations.",
    highlights: [
      "Capture a learning milestone or experiment.",
      "Reference a visualization or derivation."
    ]
  }
];

const metrics = [
  { label: "Models prototyped", value: "12+" },
  { label: "Simulation runs", value: "40+" },
  { label: "Research notes", value: "25+" }
];

const currentWork = [
  "Exploring retrieval-augmented architectures for hybrid reasoning.",
  "Validating mesh refinement strategies for coupled FEM + PFD systems.",
  "Drafting a short primer on relativistic geodesics."
];

const notes = [
  "Note Placeholder — summarize a learning topic or paper.",
  "Note Placeholder — add a short description of an experiment.",
  "Note Placeholder — include a quick link or key takeaway.",
  "Note Placeholder — highlight a concept you are exploring."
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.topics.includes(activeFilter));
  }, [activeFilter]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((previous) => !previous);
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-20 pt-16">
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            Research + Engineering Portfolio
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold text-slate-600 transition hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:text-white/70"
          >
            {isDarkMode ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-6xl dark:text-white">
              Placeholder headline for your core mission, research, or portfolio
              focus.
            </h1>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Use this space to explain your focus areas, the problems you
              solve, and the types of projects you publish.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 dark:bg-white dark:text-midnight">
                Primary CTA Placeholder
              </button>
              <button className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:border-slate-400 dark:border-white/20 dark:text-white/80 dark:hover:border-white/50">
                Secondary CTA Placeholder
              </button>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h2 className="text-sm uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
              Current Focus
            </h2>
            <ul className="mt-6 space-y-5">
              {focusAreas.map((area) => (
                <li key={area.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {area.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
        <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
              Flagship Case Study
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
              Project Placeholder: Intelligent Simulation Stack
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Highlight your most defining project with the problem statement,
              core approach, and why it mattered.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">
              <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">
                AI + Physics
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">
                Simulation
              </span>
              <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">
                Research
              </span>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold uppercase text-white dark:bg-white dark:text-midnight">
                Impact Placeholder
              </span>
              <span className="text-slate-500 dark:text-white/60">
                e.g., 35% faster convergence or 2x experiment throughput
              </span>
            </div>
          </div>
          <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-100/80 p-8 text-center text-xs text-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-white/60">
            Diagram / visualization placeholder
          </div>
        </div>
      </section>

      <section className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-slate-200 bg-white/80 px-6 py-5 shadow-sm dark:border-white/10 dark:bg-white/5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
            Currently exploring
          </p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {currentWork.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-nebula" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-slate-200 bg-white/80 px-5 py-4 text-center text-sm shadow-sm dark:border-white/10 dark:bg-white/5"
            >
              <p className="text-xl font-semibold text-slate-900 dark:text-white">
                {metric.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-white/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
              Featured Work
            </h2>
          </div>
          <span className="text-sm text-slate-500 dark:text-white/50">
            Add your featured work
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                activeFilter === filter
                  ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-midnight"
                  : "border-slate-300 text-slate-500 hover:border-slate-400 dark:border-white/20 dark:text-white/60 dark:hover:border-white/50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredProjects.map((item) => (
            <article
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
            >
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-600 dark:text-aurora">
                {item.tag}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {item.description}
              </p>
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-6 inline-block text-sm font-semibold text-cyan-600 dark:text-aurora"
                >
                  Explore Lab →
                </a>
              ) : (
                <button className="mt-6 text-sm font-semibold text-cyan-600 dark:text-aurora">
                  Link placeholder →
                </button>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
            Visual Evidence
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
            Visualizations + Diagrams
          </h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Use these placeholders for physics simulations, AI architecture
            diagrams, and solver outputs.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
        {visualizations.map((viz) => (
          <article
            key={viz.title}
            className="group rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/30"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-indigo-500 dark:text-nebula">
              {viz.label}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
              {viz.title}
            </h3>
            <div className="mt-4 flex h-32 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100/80 text-xs text-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-white/60">
              {viz.link ? "Interactive Experiment →" : "Visualization placeholder"}
            </div>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {viz.description}
            </p>
            {viz.link && (
              <a
                href={viz.link}
                className="mt-6 inline-block rounded-full bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 dark:bg-nebula dark:hover:bg-indigo-500"
              >
                Launch Experiment
              </a>
            )}
          </article>
        ))}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-white/70 to-transparent p-8 shadow-sm dark:border-white/10 dark:from-white/10 dark:via-white/5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
              Tracks
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              Research Tracks
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Organize your work into focused tracks with key notes, questions,
              and experiments.
            </p>
          </div>
          <div className="grid gap-4">
            {researchTracks.map((track) => (
              <div
                key={track.title}
                className="rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {track.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {track.focus}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-500 dark:text-white/60">
                  {track.highlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-aurora" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-white/60">
              Output
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              Outcomes + Notes
            </h2>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Pair publishable work with learning artifacts and experiments.
            </p>
          </div>
          <ul className="mt-8 space-y-4 text-sm text-slate-700 dark:text-slate-200">
            {notes.map((note) => (
              <li
                key={note}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {note}
                <span className="text-xs text-slate-400 dark:text-white/50">
                  In progress
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Collaboration Placeholder
            </h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Add your preferred collaboration types and contact approach.
            </p>
          </div>
          <button className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-aurora dark:text-midnight">
            Contact CTA Placeholder
          </button>
        </div>
      </section>
    </main>
  );
}
