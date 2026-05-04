import { motion } from "framer-motion";

const projects = [
  { title: "NEXUS Protocol", category: "WEB3 PLATFORM", height: "h-72" },
  { title: "SynthWave OS", category: "UI/UX DESIGN", height: "h-96" },
  { title: "DataForge AI", category: "AI DASHBOARD", height: "h-64" },
  { title: "CyberPulse CRM", category: "ENTERPRISE APP", height: "h-80" },
  { title: "NeuroLink API", category: "BACKEND SYSTEM", height: "h-72" },
  { title: "HoloVision AR", category: "MOBILE APP", height: "h-96" },
];

const bgColors = [
  "from-cyan-900/40 to-blue-900/40",
  "from-purple-900/40 to-pink-900/40",
  "from-emerald-900/40 to-teal-900/40",
  "from-indigo-900/40 to-violet-900/40",
  "from-sky-900/40 to-cyan-900/40",
  "from-fuchsia-900/40 to-rose-900/40",
];

const ProjectGallery = () => {
  return (
    <section id="projects" className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-right"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-neon-magenta mb-3">&gt; PROJECTS.RENDER()</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-foreground">PROJECT</span>{" "}
            <span className="neon-text-magenta">ARCHIVE</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative ${project.height} break-inside-avoid overflow-hidden rounded-sm glass-card cursor-pointer`}
            >
              {/* Colored gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[i]} blue-tint group-hover:filter-none transition-all duration-500`}>
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 circuit-bg opacity-30" />
              </div>

              {/* Geometric decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 border border-primary/20 rotate-45 group-hover:rotate-90 transition-transform duration-700" />
              <div className="absolute bottom-8 left-8 w-8 h-8 border border-secondary/20 group-hover:scale-150 transition-transform duration-500" />

              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-[10px] tracking-[0.3em] text-neon-cyan mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.category}
                </p>
                <h3 className="font-display text-xl font-bold text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.title}
                </h3>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-px bg-primary/40" />
              <div className="absolute top-0 left-0 w-px h-6 bg-primary/40" />
              <div className="absolute bottom-0 right-0 w-6 h-px bg-secondary/40" />
              <div className="absolute bottom-0 right-0 w-px h-6 bg-secondary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
