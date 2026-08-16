interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = "" }: GlassCardProps) => {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;