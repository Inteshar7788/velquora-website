interface SectionHeadingProps {
  title: string;
  subtitle: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-4xl font-bold text-white">{title}</h2>
      <p className="mt-4 text-slate-400">{subtitle}</p>
    </div>
  );
};

export default SectionHeading;