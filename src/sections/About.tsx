// src/sections/About.tsx
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { Award, Calendar, Users, CheckCircle } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 bg-(--social-bg) z-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <img 
              src={siteConfig.about.image} 
              alt={siteConfig.about.title}
              className="rounded-2xl shadow-2xl w-full object-cover aspect-square"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-(--text-h)">
              {siteConfig.about.title}
            </h2>
            <p className="text-sm sm:text-base text-(--text) leading-relaxed">
              {siteConfig.about.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4">
              <div className="text-center p-3 sm:p-4 bg-(--bg) rounded-xl border border-(--border)">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm sm:text-base text-(--text-h)">{siteConfig.about.experience}</div>
                <div className="text-xs sm:text-sm text-(--text)">Experience</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-(--bg) rounded-xl border border-(--border)">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm sm:text-base text-(--text-h)">{siteConfig.about.certification.length}+</div>
                <div className="text-xs sm:text-sm text-(--text)">Certifications</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-(--bg) rounded-xl border border-(--border)">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2" />
                <div className="font-bold text-sm sm:text-base text-(--text-h)">500+</div>
                <div className="text-xs sm:text-sm text-(--text)">Happy Clients</div>
              </div>
            </div>

            {/* Certifications List */}
            <div className="pt-4 space-y-2">
              {siteConfig.about.certification.map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-(--text)">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}