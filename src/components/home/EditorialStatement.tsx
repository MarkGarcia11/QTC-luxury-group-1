"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";

export default function EditorialStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 md:py-48 bg-ivory relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
        <span className="font-serif text-[clamp(8rem,22vw,22rem)] text-espresso font-light select-none leading-none">
          QTC
        </span>
      </div>

      <Container size="narrow" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0.5 }}
          className="w-16 h-px bg-bronze mx-auto mb-14"
        />

        <h2 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] font-light text-espresso">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Luxury Is Not Just
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 1.2, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              Where <em className="italic font-light text-bronze">You</em> Go.
            </motion.div>
          </div>
          <div className="overflow-hidden mt-3 md:mt-5">
            <motion.div
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 1.2, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            >
              It&apos;s How You
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : { y: "105%" }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <em className="italic font-light">Feel</em> Along the Way.
            </motion.div>
          </div>
        </h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 1.4, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0.5 }}
          className="w-16 h-px bg-bronze mx-auto mt-14"
        />
      </Container>
    </section>
  );
}
