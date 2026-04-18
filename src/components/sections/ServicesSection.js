"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { services } from "@/lib/content";

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium tracking-tight text-black"
          >
            Engineering Support Across Product Lifecycle.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 max-w-2xl font-light"
          >
            From validating your first release to modernizing mission-critical systems, we deliver software with clarity, speed, and maintainable architecture.
          </motion.p>
        </div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
