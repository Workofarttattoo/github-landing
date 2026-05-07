export default function GitHubFounderLandingPage() {
  const projects = [
    {
      title: 'Roof Hunter',
      tagline: 'Predictive Hail & Storm Intelligence Platform',
      description:
        'AI-assisted storm forecasting, geospatial lead intelligence, NOAA-inspired weather modeling, and autonomous canvassing systems.',
      stack: ['Python', 'FastAPI', 'React', 'Azure', 'NOAA', 'Geospatial AI'],
      impact: 'Predictive weather intelligence + operational deployment tooling.',
      gradient: 'from-cyan-500 to-blue-700',
      icon: '⛈️',
    },
    {
      title: 'GAVL',
      tagline: 'AI Courtroom Simulation Platform',
      description:
        'Legal-tech environment for courtroom simulation, evidence orchestration, procedural modeling, and litigation strategy systems.',
      stack: ['AI Systems', 'Legal Tech', 'Simulation', 'Workflow Engines'],
      impact: 'Interactive litigation and legal training infrastructure.',
      gradient: 'from-amber-400 to-orange-700',
      icon: '⚖️',
    },
    {
      title: 'QuLab Infinite',
      tagline: 'Autonomous Digital Twin Research Environment',
      description:
        'Rapid R&D simulation engine for materials discovery, autonomous experimentation, and AI-assisted scientific workflows.',
      stack: ['Digital Twins', 'Monte Carlo', 'AI Research', 'Simulation'],
      impact: 'Accelerated invention and experimentation systems.',
      gradient: 'from-fuchsia-500 to-violet-700',
      icon: '🧪',
    },
    {
      title: 'Flowstate.work',
      tagline: 'AI-Native Project Execution Platform',
      description:
        'Operational orchestration system focused on automation-first workflows, AI task coordination, and scalable execution.',
      stack: ['Automation', 'Workflow AI', 'Full Stack', 'DevOps'],
      impact: 'Next-generation operational infrastructure.',
      gradient: 'from-emerald-400 to-teal-700',
      icon: '🚀',
    },
  ];

  const metrics = [
    {
      value: '20+',
      label: 'AI & SaaS Systems Built',
    },
    {
      value: 'Full Stack',
      label: 'Frontend → Backend → Cloud',
    },
    {
      value: 'Founder',
      label: 'Operator + Engineer',
    },
    {
      value: 'AI Native',
      label: 'Automation & Agent Systems',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,255,255,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.15),transparent_40%)]" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <section className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
              <span>●</span>
              AI Systems Engineer • Technical Founder • Full Stack Architect
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-6">
              Joshua
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                Hendricks Cole
              </span>
            </h1>

            <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mb-10">
              Building deployable AI systems, predictive analytics engines,
              autonomous workflows, legal-tech simulators, digital twin
              environments, and scalable operational infrastructure.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://github.com/Workofarttattoo"
                className="px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition text-black font-bold shadow-2xl shadow-cyan-500/30"
              >
                Explore GitHub
              </a>

              <a
                href="mailto:inventor@aios.is"
                className="px-6 py-4 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition"
              >
                inventor@aios.is
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur p-6"
                >
                  <div className="text-3xl font-black text-cyan-300 mb-2">
                    {metric.value}
                  </div>
                  <div className="text-zinc-400 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-violet-600/20 blur-3xl rounded-full" />

            <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-950/90 backdrop-blur p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="text-zinc-400 text-sm">ACTIVE SYSTEMS</div>
                  <div className="text-2xl font-bold mt-1">
                    Autonomous Infrastructure Stack
                  </div>
                </div>
                <div className="h-4 w-4 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-5">
                {[
                  'AI Voice Agents',
                  'Predictive Storm Intelligence',
                  'Digital Twin Simulation',
                  'Cloud Infrastructure',
                  'Automation Pipelines',
                  'Operational SaaS Systems',
                  'Legal-Tech Simulation',
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl bg-zinc-900 border border-zinc-800 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-cyan-400" />
                      <span className="font-medium">{item}</span>
                    </div>
                    <div className="text-xs text-emerald-300">
                      ACTIVE_{index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-3">
                Flagship Systems
              </div>
              <h2 className="text-5xl font-black">Featured Repositories</h2>
            </div>

            <div className="text-zinc-400 max-w-xl text-right">
              Full-stack AI systems spanning predictive analytics,
              autonomous orchestration, simulation environments, legal-tech,
              and cloud-native operational tooling.
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.gradient}`}
                />

                <div className="relative p-8">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-5xl">{project.icon}</div>
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                      Production System
                    </div>
                  </div>

                  <h3 className="text-3xl font-black mb-3">{project.title}</h3>

                  <p className="text-cyan-300 font-medium mb-5">
                    {project.tagline}
                  </p>

                  <p className="text-zinc-300 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-sm"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  <div className="rounded-2xl bg-black/40 border border-zinc-800 p-5">
                    <div className="text-xs uppercase tracking-[0.25em] text-zinc-500 mb-2">
                      Strategic Value
                    </div>
                    <div className="text-lg font-semibold">
                      {project.impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24">
          <div className="rounded-[3rem] border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 h-96 w-96 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-cyan-300 uppercase tracking-[0.3em] text-sm mb-4">
                  Positioning
                </div>

                <h2 className="text-5xl font-black mb-6 leading-tight">
                  Builder.
                  <br />
                  Operator.
                  <br />
                  Systems Architect.
                </h2>

                <p className="text-zinc-300 text-lg leading-relaxed">
                  Not just an engineer — a founder-grade technical operator with
                  experience building deployable AI infrastructure, scalable
                  automation systems, predictive analytics engines, and
                  production-ready SaaS platforms from concept to execution.
                </p>
              </div>

              <div className="grid gap-5">
                {[
                  'Cloud Infrastructure & CI/CD',
                  'AI Workflow Orchestration',
                  'Predictive Forecasting Systems',
                  'Automation-Driven SaaS Platforms',
                  'Operational Intelligence Systems',
                  'Voice AI & Agentic Pipelines',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-800 bg-black/40 p-6 flex items-center justify-between"
                  >
                    <span className="font-medium">{item}</span>
                    <span className="text-cyan-300">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-zinc-900 mt-12 flex flex-wrap items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-black mb-2">
              Joshua Hendricks Cole
            </div>
            <div className="text-zinc-400">
              AI Systems Engineer • Technical Founder • Full Stack Architect
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/Workofarttattoo"
              className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition"
            >
              GitHub
            </a>

            <a
              href="mailto:inventor@aios.is"
              className="px-5 py-3 rounded-2xl border border-zinc-700 hover:border-cyan-400 transition"
            >
              Contact
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
