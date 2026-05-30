import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { WideContainer } from "@/components/layout/WideContainer";
import { Heading2 } from "@/components/utils/Text";

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: "Cinematic 4K Experience",
    description:
      "Watch your favorite films and series in stunning ultra-high definition, with crystal clear audio.",
    bgClass: "from-purple-900/40 to-black/80",
    borderClass: "border-purple-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
  },
  {
    title: "Ad-Free Streaming",
    description:
      "Immerse yourself without interruptions. Pure storytelling from start to finish.",
    bgClass: "from-blue-900/40 to-black/80",
    borderClass: "border-blue-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
  },
  {
    title: "Cross-Platform Sync",
    description:
      "Start on your TV, finish on your phone. Your progress is saved perfectly everywhere.",
    bgClass: "from-teal-900/40 to-black/80",
    borderClass: "border-teal-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)]",
  },
  {
    title: "Watch Anywhere",
    description:
      "Download your favorites and watch offline, no matter where your journey takes you.",
    bgClass: "from-rose-900/40 to-black/80",
    borderClass: "border-rose-500/20",
    glowClass: "group-hover:shadow-[0_0_30px_rgba(244,63,114,0.3)]",
  },
];

export function FeaturesPart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animate the cards with a stagger effect when the section scrolls into view
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // trigger when the top of the section hits 80% of the viewport height
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    },
    { scope: containerRef },
  );

  return (
    <WideContainer classNames="mb-24 mt-12">
      <div ref={containerRef} className="features-section w-full">
        <Heading2 className="text-center mb-12 !text-3xl font-medium tracking-wide">
          The Premium Experience
        </Heading2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className={classNames(
                "feature-card group relative aspect-[2/3] rounded-xl overflow-hidden cursor-default transition-all duration-500",
                "border border-solid bg-gradient-to-b flex flex-col justify-end p-6",
                feature.bgClass,
                feature.borderClass,
                feature.glowClass,
                "hover:-translate-y-2",
              )}
            >
              {/* Subtle overlay gradient to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-type-dimmed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WideContainer>
  );
}
