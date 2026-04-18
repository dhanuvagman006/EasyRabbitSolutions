"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/content";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="md:w-2/3">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-medium tracking-tight text-black mb-6"
            >
              Selected Work.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-500 font-light"
            >
              A snapshot of outcomes delivered across mobile, SaaS, and platform engineering engagements.
            </motion.p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="group bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 border border-gray-100"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">{item.client}</p>
              <h3 className="text-2xl font-medium tracking-tight text-black mb-4">{item.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed font-light mb-8">{item.impact}</p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-500 border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
