// src/sections/Gallery.tsx
import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

export function Gallery() {
  return (
    <section id="gallery" className="py-12 sm:py-20 px-4 bg-(--bg)">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-(--text-h)">
            Our Work
          </h2>
          <p className="text-sm sm:text-base text-(--text) max-w-2xl mx-auto">
            Browse through our latest transformations
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {siteConfig.gallery.map((image, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-br from-accent/20 to-purple-500/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={image.src} 
                alt={image.alt}
                className="rounded-xl sm:rounded-2xl aspect-square object-cover shadow-lg group-hover:shadow-xl transition-all w-full h-full"
              />
              {image.title && (
                <div className="absolute bottom-1 left-1 right-1 sm:bottom-2 sm:left-2 sm:right-2 bg-black/60 text-white text-[10px] sm:text-xs p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity z-20 text-center">
                  {image.title}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}