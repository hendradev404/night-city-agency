import { useState } from "react";
import { motion } from "framer-motion";

const TerminalContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [lines, setLines] = useState<string[]>([
    "HENDRA.DEV TERMINAL v4.2.1",
    "Secure channel established.",
    "Type your message below.",
    "---",
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLines(prev => [
      ...prev,
      `> user.name = "${name}"`,
      `> user.email = "${email}"`,
      `> user.message = "${message}"`,
      "",
      ">> Transmitting data...",
      ">> [OK] Message received. We'll jack in shortly.",
    ]);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 circuit-bg">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-neon-green mb-3">&gt; CONTACT.INIT()</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="neon-text-cyan">OPEN</span>{" "}
            <span className="text-foreground">TERMINAL</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-sm overflow-hidden neon-border"
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-neon-cyan/10 bg-background/50">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="font-mono text-[10px] text-muted-foreground ml-3">
              secure_channel@cyber.dev — bash
            </span>
          </div>

          {/* Terminal body */}
          <div className="p-6">
            {/* Output lines */}
            <div className="mb-6 font-mono text-xs text-neon-green/70 space-y-1">
              {lines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neon-cyan shrink-0">&gt; name:</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-b border-neon-cyan/20 font-mono text-xs text-foreground outline-none focus:border-neon-cyan py-1"
                    placeholder="enter_your_handle"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-neon-cyan shrink-0">&gt; email:</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 bg-transparent border-b border-neon-cyan/20 font-mono text-xs text-foreground outline-none focus:border-neon-cyan py-1"
                    placeholder="user@cyberspace.net"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-mono text-xs text-neon-cyan shrink-0 mt-1">&gt; msg:</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    className="flex-1 bg-transparent border-b border-neon-cyan/20 font-mono text-xs text-foreground outline-none focus:border-neon-cyan py-1 resize-none"
                    placeholder="transmit_your_message..."
                  />
                </div>

                <div className="pt-4">
                  <button type="submit" className="neon-btn text-xs">
                    &gt; TRANSMIT DATA_
                  </button>
                </div>
              </form>
            ) : (
              <div className="font-mono text-xs text-neon-green flex items-center gap-2">
                <span className="cursor-blink">█</span>
                <span>Awaiting response...</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TerminalContact;
