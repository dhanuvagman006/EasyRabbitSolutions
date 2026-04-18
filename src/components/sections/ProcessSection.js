"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/content";

function ProcessCard({ step, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
      className="group relative border-t border-gray-200 py-12"
    >
      <div className="grid md:grid-cols-12 gap-6 relative z-10">
        <div className="md:col-span-4">
          <span className="text-sm font-medium text-gray-400 tracking-widest">{step.number}</span>
          <h3 className="text-2xl font-medium tracking-tight text-black mt-2">{step.title}</h3>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg font-light leading-relaxed text-gray-500">{step.body}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 -mx-6 md:-mx-12 px-6 md:px-12 rounded-2xl" />
    </motion.article>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 md:w-2/3">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6"
          >
            A process designed for momentum.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-500 font-light"
          >
            Our engagement model combines strategy, product thinking, and engineering discipline so your roadmap stays measurable and shippable.
          </motion.p>
        </div>

        <div className="space-y-0">
          {processSteps.map((step, index) => (
            <ProcessCard key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
