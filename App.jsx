import React from "react";
import "./index.css";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-cyan-400 font-bold uppercase tracking-widest">
              Full Stack Developer • AI Systems Architect
            </p>

            <h1 className="text-5xl md:text-7xl font-black mt-4 leading-tight">
              Joshua Cole
            </h1>

            <p className="text-xl text-gray-300 mt-6">
              I build production-grade AI tools, SaaS platforms, automation
              systems, legal-tech simulators, weather intelligence engines, and
              full-stack applications.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://github.com/Workofarttattoo"
                target="_blank"
                className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl"
              >
                View GitHub
              </a>

              <a
                href="mailto:inventor@aios.is"
                className="border border-cyan-400 text-cyan-300 px-6 py-3 rounded-xl"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-6 shadow-2xl border border-zinc-800">
            <img
              src="/hero.png"
              alt="Portfolio hero"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-6">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <ProjectCard
            title="Roof Hunter"
            text="Predictive hail and storm intelligence platform using probabilistic weather modeling, geospatial targeting, lead generation, and automation."
          />

          <ProjectCard
            title="GAVL"
            text="Courtroom simulator and legal-tech platform designed to help users test arguments, organize evidence, and prepare litigation strategy."
          />

          <ProjectCard
            title="QuLab Infinite"
            text="AI-powered research and development platform for materials discovery, digital twin experiments, autonomous lab workflows, and invention simulation."
          />

          <ProjectCard
            title="Echo Prime"
            text="Cognitive synthetic architecture project built with Python, AI memory systems, agent frameworks, and alternative reasoning structures."
          />

          <ProjectCard
            title="Flowstate.work"
            text="A project management and execution platform designed as a faster, cleaner alternative to traditional Jira-style workflows."
          />

          <ProjectCard
            title="AIOS"
            text="Agentic operating system concept connecting automation tools, AI agents, workflows, and intelligent business infrastructure."
          />
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-black mb-6">Core Skills</h2>

        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Python",
            "FastAPI",
            "JavaScript",
            "Node.js",
            "AI Agents",
            "Automation",
            "SaaS",
            "APIs",
            "GitHub",
            "Cloud Deployment",
            "Geospatial Intelligence",
            "Machine Learning",
            "Legal Tech",
            "Prompt Engineering",
            "Product Strategy",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-zinc-900 border border-zinc-700 px-4 py-2 rounded-full text-gray-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-black">Let’s build something powerful.</h2>
        <p className="text-gray-400 mt-4">
          Available for full-stack apps, AI systems, automation builds, SaaS
          prototypes, and strategic technical consulting.
        </p>

        <a
          href="mailto:inventor@aios.is"
          className="inline-block mt-8 bg-white text-black font-bold px-8 py-4 rounded-xl"
        >
          inventor@aios.is
        </a>
      </section>
    </main>
  );
}

function ProjectCard({ title, text }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400 transition">
      <h3 className="text-xl font-bold text-cyan-300">{title}</h3>
      <p className="text-gray-400 mt-3">{text}</p>
    </div>
  );
}
