// src/sections/Services.tsx
import { motion } from "framer-motion";
import { ResponsiveServiceCard } from "@/components/ResponsiveServiceCard";
import { siteConfig } from "@/config/siteConfig";

// Define the Service type locally - MATCHING the actual structure
type Service = {
  id: string | number;  // ← Change this to string | number to match
  name: string;
  price: string;
  duration: string;
  popular: boolean;
  description: string;
  features: string[];
};

export function Services() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-12 sm:py-20 px-4 bg-(--social-bg)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-(--text-h)">
            Our Services
          </h2>
          <p className="text-sm sm:text-base text-(--text) max-w-2xl mx-auto">
            Premium beauty services tailored to make you look and feel your best
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.services.map((service: Service) => (
            <ResponsiveServiceCard 
              key={service.id} 
              {...service} 
              onBookNow={scrollToContact}
            />
          ))}
        </div>
      </div>
    </section>
  );
}