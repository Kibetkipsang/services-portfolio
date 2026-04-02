// src/sections/Contact.tsx
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Camera, Clock, Send } from "lucide-react";
import { PremiumButton } from "@/components/ui/premium-button";
import { siteConfig } from "@/config/siteConfig";

export function Contact() {
  const contactItems = [
    { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}` },
    { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
    { icon: Camera, label: "Instagram", value: "@glowbygrace", href: siteConfig.contact.instagram },
    { icon: MapPin, label: "Location", value: siteConfig.contact.location, href: null },
    { icon: Clock, label: "Hours", value: siteConfig.contact.hours, href: null },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm interested in your services.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Message:* ${message}`;
    const whatsappUrl = `${siteConfig.contact.whatsapp}?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    form.reset();
  };

  return (
    <section id="contact" className="py-12 sm:py-20 px-4 bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[var(--text-h)]">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[var(--text)] max-w-2xl mx-auto">
            Ready to transform your look? Book an appointment or ask any questions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="grid gap-3 sm:gap-4">
              {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--social-bg)] rounded-xl border border-[var(--border)]">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-sm text-[var(--text)]">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm sm:text-base font-medium text-[var(--text-h)] hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm sm:text-base font-medium text-[var(--text-h)]">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Response Badge */}
            <div className="text-center p-4 bg-accent/5 rounded-xl border border-accent-border">
              <p className="text-xs sm:text-sm text-accent">
                 Typically responds within 30 minutes
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-medium text-[var(--text-h)] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 sm:py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-accent transition-colors text-[var(--text-h)]"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-h)] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 sm:py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-accent transition-colors text-[var(--text-h)]"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--text-h)] mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 bg-[var(--bg)] border border-[var(--border)] rounded-lg focus:outline-none focus:border-accent transition-colors text-[var(--text-h)] resize-none"
                  placeholder="Tell me about your requirements..."
                />
              </div>
              
              <PremiumButton type="submit" fullWidth icon={Send}>
                Send Message via WhatsApp
              </PremiumButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}