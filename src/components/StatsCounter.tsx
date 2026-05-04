import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "PROJECTS DEPLOYED", color: "neon-cyan" },
  { value: 98, suffix: "%", label: "CLIENT SATISFACTION", color: "neon-green" },
  { value: 12, suffix: "+", label: "YEARS EXPERIENCE", color: "neon-magenta" },
  { value: 45, suffix: "+", label: "ACTIVE CLIENTS", color: "neon-cyan" },
];

const AnimatedNumber = ({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = value / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const StatsCounter = () => {
  return (
    <section className="relative py-24 border-y border-neon-cyan/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className={`font-display text-4xl md:text-6xl font-bold text-${stat.color} mb-2`}>
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </div>
              <div className={`h-px w-12 mx-auto mt-4 bg-${stat.color}/30 group-hover:w-24 transition-all duration-500`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
