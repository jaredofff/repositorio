"use client";

import { useEffect } from "react";

export function SoundEffects() {
  useEffect(() => {
    let context: AudioContext | null = null;
    let lastPlayed = 0;

    const play = () => {
      const now = performance.now();
      if (now - lastPlayed < 85) {
        return;
      }
      lastPlayed = now;

      context ??= new AudioContext();
      const oscillator = context.createOscillator();
      const gain = context.createGain();

      oscillator.type = "sine";
      oscillator.frequency.value = 680;
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.018, context.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.08);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 0.08);
    };

    const handleEnter = (event: PointerEvent) => {
      const target = event.target as EventTarget | null;

      // Some environments (or event targets) may not be Elements.
      // Guard by checking that `closest` exists and is a function.
      if (!target || typeof (target as Element).closest !== "function") return;

      const el = target as Element;
      if (el.closest("[data-sound]")) {
        play();
      }
    };

    document.addEventListener("pointerenter", handleEnter, true);

    return () => {
      document.removeEventListener("pointerenter", handleEnter, true);
      void context?.close();
    };
  }, []);

  return null;
}
