"use client";

import { useLayoutEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type AnimationProviderProps = {
  children: ReactNode;
};

export function AnimationProvider({ children }: AnimationProviderProps) {
  useLayoutEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 42, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((element, index) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, x: index % 2 === 0 ? -42 : 42 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              once: true,
            },
          },
        );
      });

      const parallaxTargets = gsap.utils.toArray<HTMLElement>(".parallax-slow");
      if (parallaxTargets.length > 0) {
        gsap.to(parallaxTargets, {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return <>{children}</>;
}
