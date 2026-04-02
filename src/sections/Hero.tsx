// src/sections/Hero.tsx
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-transparent z-10" />
        <img
          src={siteConfig.heroImage}
          alt={siteConfig.name}
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-accent-bg border border-accent-border text-accent text-xs sm:text-sm mb-4"
          >
            Premium Beauty Studio
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-accent to-purple-600 bg-clip-text text-transparent">
            {siteConfig.name}
          </h1>

          {/* Tagline */}
          <p className="text-base sm:text-lg md:text-xl text-[var(--text)] mb-8 max-w-2xl mx-auto">
            {siteConfig.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <PremiumButton variant="default" size="lg" onClick={scrollToContact} icon={ArrowRight} fullWidth={false}>
              Book Appointment
            </PremiumButton>

            <PremiumButton variant="outline" size="lg" icon={Play} fullWidth={false}>
              View Portfolio
            </PremiumButton>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-12 sm:mt-16 pt-6 sm:pt-8 max-w-md mx-auto"
          >
            {[
              { value: "500+", label: "Happy Clients" },
              { value: "8+", label: "Years Exp" },
              { value: "24/7", label: "Support" }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[var(--social-bg)] backdrop-blur-sm rounded-2xl p-3 sm:p-4 border border-[var(--border)]"
              >
                <div className="text-xl sm:text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs sm:text-sm text-[var(--text)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToContact}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[var(--text)] rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 sm:h-3 bg-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}