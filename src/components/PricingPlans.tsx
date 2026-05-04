import { motion } from "framer-motion";

const plans = [
  {
    name: "BASIC PROTOCOL",
    price: "$2,500",
    period: "/project",
    description: "Perfect for startups and MVPs",
    features: [
      "Landing Page Design",
      "Responsive Development",
      "Basic SEO Setup",
      "3 Revision Rounds",
      "1 Month Support",
    ],
    highlight: false,
    color: "neon-cyan",
    tag: null,
  },
  {
    name: "PRO MATRIX",
    price: "$7,500",
    period: "/project",
    description: "Full-scale digital transformation",
    features: [
      "Multi-Page Web App",
      "Custom UI/UX Design",
      "Advanced Animations",
      "API Integration",
      "Database Architecture",
      "Unlimited Revisions",
      "3 Months Support",
      "Performance Optimization",
    ],
    highlight: true,
    color: "neon-magenta",
    tag: "MOST POPULAR",
  },
  {
    name: "ENTERPRISE NEXUS",
    price: "CUSTOM",
    period: "",
    description: "For corporations that demand the best",
    features: [
      "Everything in Pro Matrix",
      "AI/ML Integration",
      "Cloud Infrastructure",
      "24/7 Priority Support",
      "Dedicated Team",
      "Security Audit",
      "SLA Guarantee",
    ],
    highlight: false,
    color: "neon-green",
    tag: null,
  },
];

const PricingPlans = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-neon-magenta mb-3">&gt; PRICING.DISPLAY()</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="text-foreground">SELECT YOUR</span>{" "}
            <span className="neon-text-cyan">PROTOCOL</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative glass-card rounded-sm p-8 transition-all duration-500 group ${
                plan.highlight
                  ? "border-neon-magenta shadow-[0_0_40px_rgba(255,0,255,0.15)] scale-[1.02]"
                  : "hover:border-neon-cyan"
              }`}
            >
              {/* Tag */}
              {plan.tag && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-magenta text-background font-mono text-[10px] tracking-wider rounded-sm">
                  {plan.tag}
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`font-display text-base font-semibold text-${plan.color} mb-2`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="font-mono text-xs text-muted-foreground">{plan.period}</span>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Divider */}
              <div className={`h-px w-full bg-${plan.color}/20 mb-6`} />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className={`text-${plan.color} text-xs`}>▹</span>
                    <span className="font-mono text-xs text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-sm font-mono text-xs tracking-wider transition-all duration-300 ${
                  plan.highlight
                    ? "bg-neon-magenta text-background hover:shadow-[0_0_20px_rgba(255,0,255,0.4)]"
                    : `border border-${plan.color}/30 text-${plan.color} hover:bg-${plan.color}/10 hover:border-${plan.color}`
                }`}
              >
                {plan.price === "CUSTOM" ? "> CONTACT US_" : "> INITIALIZE_"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
