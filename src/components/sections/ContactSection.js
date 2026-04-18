"use client";

import { motion } from "framer-motion";
import { contactHighlights } from "@/lib/content";

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 item-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">Let&apos;s Build Together</p>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
                Tell Us What You&apos;re Building.
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-md mb-12">
                Share your product goal, timeline, and current constraints. We&apos;ll propose the fastest path to launch.
              </p>

              <ul className="space-y-4 text-gray-300 font-light">
                {contactHighlights.map((item, index) => (
                  <motion.li 
                    key={item} 
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <span className="h-px w-4 bg-gray-600" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mt-20">
              <p className="text-sm text-gray-500">Call us directly</p>
              <a href="tel:6360139965" className="text-2xl font-light hover:text-gray-300 transition-colors mt-2 inline-block border-b border-gray-700 pb-1">
                +91 63601 39965
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="bg-[#111111] p-8 md:p-12 rounded-3xl"
          >
            <div className="space-y-8">
              <div>
                <label className="block text-sm font-light text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-3 focus:border-white focus:outline-none transition-colors rounded-none placeholder-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-gray-400 mb-2">Work Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-3 focus:border-white focus:outline-none transition-colors rounded-none placeholder-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-light text-gray-400 mb-2">Project Brief</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your app, users, and launch goals."
                  className="w-full bg-transparent border-b border-gray-800 text-white pb-3 focus:border-white focus:outline-none transition-colors rounded-none resize-none placeholder-gray-700"
                />
              </div>

              <button
                type="button"
                className="w-full bg-white text-black py-4 rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
