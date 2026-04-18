"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="max-w-3xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue-700">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-7 text-slate-600 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
}
