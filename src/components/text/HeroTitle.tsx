export interface HeroTitleProps {
  children?: React.ReactNode;
  className?: string;
}

export function HeroTitle(props: HeroTitleProps) {
  return (
    <h1
      className={`text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight ${
        props.className ?? ""
      }`}
    >
      {/* Teal→white gradient text for VEYRA brand identity */}
      <span className="veyra-brand-gradient">{props.children}</span>
    </h1>
  );
}
