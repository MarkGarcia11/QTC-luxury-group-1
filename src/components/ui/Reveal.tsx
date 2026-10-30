"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const editorialEase = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  type?: "fadeUp" | "fadeIn" | "maskUp" | "clipReveal";
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  once = true,
  type = "fadeUp",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay,
        ease: editorialEase,
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, delay, ease: editorialEase },
    },
  };

  const maskUpVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.3,
        delay,
        ease: editorialEase,
      },
    },
  };

  const clipRevealVariants = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      transition: {
        duration: 1.4,
        delay,
        ease: editorialEase,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={
        type === "fadeIn"
          ? fadeInVariants
          : type === "maskUp"
            ? maskUpVariants
            : type === "clipReveal"
              ? clipRevealVariants
              : variants
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

// For text that reveals word by word
export function TextReveal({
  children,
  className,
  delay = 0,
  stagger = 0.08,
}: {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const words = children.split(" ");

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.22em]"
        >
          <motion.span
            initial={{ y: "110%" }}
            animate={isInView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.9,
              delay: delay + i * stagger,
              ease: editorialEase,
            }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

// For splitting lines for large serif headings
export function SplitLines({
  lines,
  className,
  italicLineIndexes = [],
  delay = 0.15,
}: {
  lines: string[];
  className?: string;
  italicLineIndexes?: number[];
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className={className}>
      {lines.map((line, lineIdx) => (
        <div key={lineIdx} className="overflow-hidden">
          <motion.div
            initial={{ y: "105%" }}
            animate={isInView ? { y: 0 } : { y: "105%" }}
            transition={{
              duration: 1.2,
              delay: delay + lineIdx * 0.18,
              ease: editorialEase,
            }}
            className={
              italicLineIndexes.includes(lineIdx)
                ? "italic font-light"
                : ""
            }
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
