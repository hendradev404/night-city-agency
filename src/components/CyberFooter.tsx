const CyberFooter = () => {
  return (
    <footer className="border-t border-neon-cyan/10 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-major text-sm tracking-widest neon-text-cyan">
            HENDR<span className="neon-text-magenta">Λ</span>.DEV
          </div>
          <div className="font-mono text-[10px] text-muted-foreground tracking-wider">
            © 2026 HENDRA.DEV — ALL RIGHTS RESERVED — BUILT IN NIGHT CITY
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-neon-green/60">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;
