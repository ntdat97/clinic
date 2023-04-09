import { useTransitionEffect } from "@/hooks/transition-effect";
import React from "react";

interface TransitionTextProps {
  children: React.ReactNode;
}

export default function TransitionText({ children }: TransitionTextProps) {
  const { ref, isVisible } = useTransitionEffect();
  return (
    <div
      ref={ref}
      className={`${
        isVisible ? " translate-x-0 opacity-100" : " translate-x-8 opacity-0 "
      } transition duration-[1200ms] text-center py-6 max-w-[623px] mx-auto`}
    >
      {children}
    </div>
  );
}
