import Container from "@/components/ui/Container";
import TrustedMarquee from "./TrustedMarquee";

const Trusted = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1220] pt-24 pb-8">
      <Container>

        {/* Heading */}
        <div className="mb-10 text-center">

          {/* Top Badge */}
          <div className="flex items-center gap-6">

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[4px] text-cyan-300">
              Trusted Technologies
            </span>

            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

          </div>

          {/* Heading */}
          <h2 className="mt-8 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Powered by Modern Technologies
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            At{" "}
            <span className="font-semibold text-cyan-400">
              Velquora Technologies
            </span>
            , we build fast, scalable, secure, and modern web applications using
            industry-leading technologies trusted by developers worldwide.
          </p>

        </div>

        {/* Marquee */}
        <TrustedMarquee />

      </Container>
    </section>
  );
};

export default Trusted;